import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';
import { createClient } from 'npm:@supabase/supabase-js@2.49.1';

const supabase = createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '');
const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY')!;
const stripe = new Stripe(stripeSecret, {
  appInfo: {
    name: 'Manual Subscription Fix',
    version: '1.0.0',
  },
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  try {
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders });
    }

    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { session_id, user_id } = await req.json();

    if (!session_id || !user_id) {
      return new Response(
        JSON.stringify({ error: 'Missing session_id or user_id' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`🔧 Manual subscription fix for session: ${session_id}, user: ${user_id}`);

    // 1. Get the checkout session from Stripe
    let session;
    try {
      session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['subscription', 'customer']
      });
    } catch (stripeError) {
      console.error('Failed to retrieve session from Stripe:', stripeError);
      return new Response(
        JSON.stringify({ error: 'Failed to retrieve session from Stripe' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`📋 Session details: customer=${session.customer}, subscription=${session.subscription}, mode=${session.mode}`);

    if (!session.customer || typeof session.customer !== 'string') {
      return new Response(
        JSON.stringify({ error: 'No customer found in session' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const customerId = session.customer;

    // 2. Ensure stripe_customers mapping exists
    console.log(`🔄 Ensuring customer mapping exists for ${customerId} -> ${user_id}`);
    
    const { error: customerError } = await supabase
      .from('stripe_customers')
      .upsert({
        customer_id: customerId,
        user_id: user_id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'customer_id'
      });

    if (customerError) {
      console.error('Failed to create customer mapping:', customerError);
      return new Response(
        JSON.stringify({ error: 'Failed to create customer mapping' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`✅ Customer mapping ensured: ${customerId} -> ${user_id}`);

    // 3. Handle subscription vs one-time payment
    if (session.mode === 'subscription' && session.subscription) {
      console.log(`🔄 Processing subscription: ${session.subscription}`);
      
      // Get subscription details from Stripe
      let subscription;
      try {
        subscription = await stripe.subscriptions.retrieve(
          typeof session.subscription === 'string' ? session.subscription : session.subscription.id,
          { expand: ['default_payment_method'] }
        );
      } catch (subError) {
        console.error('Failed to retrieve subscription:', subError);
        return new Response(
          JSON.stringify({ error: 'Failed to retrieve subscription from Stripe' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log(`📋 Subscription details: id=${subscription.id}, status=${subscription.status}`);

      // 4. Create/update stripe_subscriptions record
      const subscriptionData = {
        subscription_id: subscription.id,
        customer_id: customerId,
        price_id: subscription.items.data[0]?.price?.id || null,
        current_period_start: subscription.current_period_start || null,
        current_period_end: subscription.current_period_end || null,
        cancel_at_period_end: subscription.cancel_at_period_end || false,
        payment_method_brand: subscription.default_payment_method && typeof subscription.default_payment_method !== 'string' 
          ? subscription.default_payment_method.card?.brand || null 
          : null,
        payment_method_last4: subscription.default_payment_method && typeof subscription.default_payment_method !== 'string' 
          ? subscription.default_payment_method.card?.last4 || null 
          : null,
        status: subscription.status || 'not_started',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const { error: subError } = await supabase
        .from('stripe_subscriptions')
        .upsert(subscriptionData, {
          onConflict: 'subscription_id'
        });

      if (subError) {
        console.error('Failed to create subscription record:', subError);
        return new Response(
          JSON.stringify({ error: 'Failed to create subscription record' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log(`✅ Subscription record created: ${subscription.id}`);

      // 5. Create/update user_plans record
      const planData = {
        user_id: user_id,
        plan_type: 'monthly',
        status: ['active', 'trialing'].includes(subscription.status) ? 'active' : 'inactive',
        stripe_subscription_id: subscription.id,
        stripe_customer_id: customerId,
        subscription_id: subscription.id,
        plan_started_at: new Date().toISOString(),
        plan_updated_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const { error: planError } = await supabase
        .from('user_plans')
        .upsert(planData, {
          onConflict: 'user_id'
        });

      if (planError) {
        console.error('Failed to create user plan:', planError);
        return new Response(
          JSON.stringify({ error: 'Failed to create user plan' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log(`✅ User plan created: ${user_id} -> ${planData.plan_type} (${planData.status})`);

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Subscription activated successfully',
          subscription_id: subscription.id,
          plan_type: planData.plan_type,
          status: planData.status
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else {
      // Handle one-time payment
      console.log(`💳 Processing one-time payment for session: ${session_id}`);
      
      const orderData = {
        checkout_session_id: session_id,
        payment_intent_id: session.payment_intent || `missing_${Date.now()}`,
        customer_id: customerId,
        amount_subtotal: session.amount_subtotal || 0,
        amount_total: session.amount_total || 0,
        currency: session.currency || 'usd',
        payment_status: session.payment_status || 'unknown',
        status: 'completed',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const { error: orderError } = await supabase
        .from('stripe_orders')
        .upsert(orderData, {
          onConflict: 'checkout_session_id'
        });

      if (orderError) {
        console.error('Failed to create order record:', orderError);
        return new Response(
          JSON.stringify({ error: 'Failed to create order record' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log(`✅ Order record created for session: ${session_id}`);

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'One-time payment processed successfully',
          order_id: orderData.checkout_session_id
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error: any) {
    console.error('Manual subscription fix error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});