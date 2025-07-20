import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';
import { createClient } from 'npm:@supabase/supabase-js@2.49.1';

const supabase = createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '');
const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY')!;
const stripe = new Stripe(stripeSecret, {
  appInfo: {
    name: 'Bolt Integration',
    version: '1.0.0',
  },
});

// Helper function to create responses with CORS headers
function corsResponse(body: string | object | null, status = 200) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': '*',
  };

  // For 204 No Content, don't include Content-Type or body
  if (status === 204) {
    return new Response(null, { status, headers });
  }

  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  });
}

Deno.serve(async (req) => {
  try {
    if (req.method === 'OPTIONS') {
      return corsResponse({}, 204);
    }

    if (req.method !== 'POST') {
      return corsResponse({ error: 'Method not allowed' }, 405);
    }

    const { price_id, success_url, cancel_url, mode } = await req.json();

    const error = validateParameters(
      { price_id, success_url, cancel_url, mode },
      {
        cancel_url: 'string',
        price_id: 'string',
        success_url: 'string',
        mode: { values: ['payment', 'subscription'] },
      },
    );

    if (error) {
      return corsResponse({ error }, 400);
    }

    const authHeader = req.headers.get('Authorization')!;
    const token = authHeader.replace('Bearer ', '');
    const {
      data: { user },
      error: getUserError,
    } = await supabase.auth.getUser(token);

    if (getUserError) {
      return corsResponse({ error: 'Failed to authenticate user' }, 401);
    }

    if (!user) {
      return corsResponse({ error: 'User not found' }, 404);
    }

    console.log(`🔍 Creating checkout for user: ${user.id} (${user.email})`);

    // Check for existing customer mapping using service role to bypass RLS
    let customer = null;
    let getCustomerError = null;
    
    try {
      const result = await supabase
        .from('stripe_customers')
        .select('customer_id')
        .eq('user_id', user.id)
        .is('deleted_at', null)
        .maybeSingle();
      
      customer = result.data;
      getCustomerError = result.error;
      
      console.log(`🔍 Customer lookup result:`, { 
        found: !!customer, 
        customer_id: customer?.customer_id,
        error: getCustomerError?.message 
      });
    } catch (queryError) {
      console.error('Exception during customer lookup:', queryError);
      getCustomerError = queryError;
    }

    if (getCustomerError && getCustomerError.code !== 'PGRST116') {
      // PGRST116 is "no rows returned" which is fine - means no existing customer
      console.error('Failed to fetch customer information from the database:', getCustomerError);
      console.log('🔄 Proceeding without existing customer mapping due to error');
      customer = null; // Treat as no existing customer
    }

    let customerId;

    /**
     * In case we don't have a mapping yet, the customer does not exist and we need to create one.
     */
    if (!customer || !customer.customer_id) {
      console.log(`📝 Creating new Stripe customer for user: ${user.id}`);
      
      const newCustomer = await stripe.customers.create({
        email: user.email,
        metadata: {
          userId: user.id,
          supabase_user_id: user.id, // Add this for webhook identification
        },
      });

      console.log(`✅ Created new Stripe customer ${newCustomer.id} for user ${user.id}`);

      // Create customer mapping with proper error handling
      const customerMappingData = {
        user_id: user.id,
        customer_id: newCustomer.id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const { error: createCustomerError } = await supabase
        .from('stripe_customers')
        .insert(customerMappingData);

      if (createCustomerError) {
        console.error('Failed to save customer information in the database', createCustomerError);

        // Try to clean up both the Stripe customer and subscription record
        try {
          await stripe.customers.del(newCustomer.id);
          await supabase.from('stripe_subscriptions').delete().eq('customer_id', newCustomer.id);
        } catch (deleteError) {
          console.error('Failed to clean up after customer mapping error:', deleteError);
        }

        return corsResponse({ error: 'Failed to create customer mapping' }, 500);
      }

      if (mode === 'subscription') {
        const { error: createSubscriptionError } = await supabase.from('stripe_subscriptions').insert({
          customer_id: newCustomer.id,
          status: 'not_started',
        });

        if (createSubscriptionError) {
          console.error('Failed to save subscription in the database', createSubscriptionError);

          // Try to clean up the Stripe customer since we couldn't create the subscription
          try {
            await stripe.customers.del(newCustomer.id);
          } catch (deleteError) {
            console.error('Failed to delete Stripe customer after subscription creation error:', deleteError);
          }

          return corsResponse({ error: 'Unable to save the subscription in the database' }, 500);
        }
      }

      customerId = newCustomer.id;

      console.log(`✅ Successfully set up new customer ${customerId} with subscription record`);
    } else {
      customerId = customer.customer_id;
      console.log(`🔄 Using existing Stripe customer: ${customerId}`);

      // Ensure the existing customer has proper metadata
      try {
        await stripe.customers.update(customerId, {
          email: user.email, // Ensure email is up to date
          metadata: {
            userId: user.id,
            supabase_user_id: user.id,
            user_email: user.email
          },
        });
        console.log(`✅ Updated customer metadata for ${customerId}`);
      } catch (updateError) {
        console.warn('Failed to update customer metadata:', updateError);
        // Don't fail the checkout for this
      }

      if (mode === 'subscription') {
        // Verify subscription exists for existing customer
        const { data: subscription, error: getSubscriptionError } = await supabase
          .from('stripe_subscriptions')
          .select('status')
          .eq('customer_id', customerId)
          .maybeSingle();

        if (getSubscriptionError) {
          console.error('Failed to fetch subscription information from the database', getSubscriptionError);
          return corsResponse({ error: 'Failed to fetch subscription information' }, 500);
        }

        if (!subscription) {
          // Create subscription record for existing customer if missing
          const { error: createSubscriptionError } = await supabase.from('stripe_subscriptions').insert({
            customer_id: customerId,
            status: 'not_started',
          });

          if (createSubscriptionError) {
            console.error('Failed to create subscription record for existing customer', createSubscriptionError);
            return corsResponse({ error: 'Failed to create subscription record for existing customer' }, 500);
          }
        }
      }
    }

    // 🚀 OPTIMISTIC ACTIVATION: Set user plan to active immediately for subscriptions
    if (mode === 'subscription') {
      console.log(`🚀 Optimistically activating subscription for user: ${user.id}`);
      
      // Check if user already has a plan to avoid conflicts
      const { data: existingPlan } = await supabase
        .from('user_plans')
        .select('id, plan_type, status')
        .eq('user_id', user.id)
        .maybeSingle();
      
      const optimisticPlanData = {
        user_id: user.id,
        plan_type: 'free', // Keep as free until payment is confirmed
        status: 'active',
        stripe_subscription_id: null,
        stripe_customer_id: customerId,
        subscription_id: null,
        plan_started_at: existingPlan?.plan_started_at || new Date().toISOString(),
        plan_updated_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      let optimisticError;
      
      if (existingPlan) {
        // Don't update existing plan to monthly until payment is confirmed
        const { error } = await supabase
          .from('user_plans')
          .update({
            stripe_customer_id: customerId,
            updated_at: new Date().toISOString()
          })
          .eq('user_id', user.id);
        optimisticError = error;
      } else {
        // Insert new plan
        const { error } = await supabase
          .from('user_plans')
          .insert(optimisticPlanData);
        optimisticError = error;
      }

      if (optimisticError) {
        console.warn('⚠️  Failed to update user plan:', optimisticError);
        // Try upsert as fallback
        const { error: upsertError } = await supabase
          .from('user_plans')
          .upsert({
            user_id: user.id,
            plan_type: 'free',
            status: 'active',
            stripe_customer_id: customerId,
            updated_at: new Date().toISOString()
          }, { 
            onConflict: 'user_id',
            ignoreDuplicates: false 
          });
        
        if (upsertError) {
          console.error('❌ All attempts to update user plan failed:', upsertError);
        } else {
          console.log(`✅ Updated user plan via upsert for user: ${user.id}`);
        }
      } else {
        console.log(`✅ Updated user plan for user: ${user.id}`);
      }
    }

    // create Checkout Session with user identification
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      client_reference_id: user.id, // This will be sent to webhook
      payment_method_types: ['card'],
      line_items: [
        {
          price: price_id,
          quantity: 1,
        },
      ],
      mode,
      success_url,
      cancel_url,
      metadata: {
        supabase_user_id: user.id,
        user_email: user.email,
        customer_id: customerId
      },
    });

    console.log(`✅ Created checkout session ${session.id} for customer ${customerId} (user: ${user.id})`);

    return corsResponse({ 
      sessionId: session.id, 
      url: session.url,
      customerId: customerId,
      userId: user.id
    });
  } catch (error: any) {
    console.error(`Checkout error: ${error.message}`);
    return corsResponse({ error: error.message }, 500);
  }
});

type ExpectedType = 'string' | { values: string[] };
type Expectations<T> = { [K in keyof T]: ExpectedType };

function validateParameters<T extends Record<string, any>>(values: T, expected: Expectations<T>): string | undefined {
  for (const parameter in values) {
    const expectation = expected[parameter];
    const value = values[parameter];

    if (expectation === 'string') {
      if (value == null) {
        return `Missing required parameter ${parameter}`;
      }
      if (typeof value !== 'string') {
        return `Expected parameter ${parameter} to be a string got ${JSON.stringify(value)}`;
      }
    } else {
      if (!expectation.values.includes(value)) {
        return `Expected parameter ${parameter} to be one of ${expectation.values.join(', ')}`;
      }
    }
  }

  return undefined;
}