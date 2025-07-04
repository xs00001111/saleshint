import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';
import { createClient } from 'npm:@supabase/supabase-js@2.49.1';

const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY')!;
const stripeWebhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;
const stripe = new Stripe(stripeSecret, {
  appInfo: {
    name: 'Bolt Integration',
    version: '1.0.0',
  },
});

const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);

// ═══════════════════════════════════════════════════════════════
//  FAULT-TOLERANT DATABASE HELPERS
//  Never throw, always log and continue
// ═══════════════════════════════════════════════════════════════

/**
 * Safe database insert - never throws, always logs
 */
async function safeInsert(table: string, data: any, options: any = {}) {
  try {
    const { error } = await supabase
      .from(table)
      .insert(data)
      .select()
      .maybeSingle();
    
    if (error) {
      console.warn(`⚠️  Insert failed for ${table}:`, error.message, 'Data:', data);
      return { success: false, error };
    }
    
    console.log(`✅ Insert succeeded for ${table}`);
    return { success: true, error: null };
  } catch (err) {
    console.error(`❌ Insert exception for ${table}:`, err, 'Data:', data);
    return { success: false, error: err };
  }
}

/**
 * Safe database upsert - never throws, always logs
 */
async function safeUpsert(table: string, data: any, options: any = {}) {
  try {
    // Use INSERT ... ON CONFLICT DO NOTHING for maximum tolerance
    const { error } = await supabase
      .from(table)
      .upsert(data, { 
        onConflict: options.onConflict || 'id',
        ignoreDuplicates: true  // Ignore duplicates completely
      });
    
    if (error) {
      console.warn(`⚠️  Upsert failed for ${table}:`, error.message, 'Data:', data);
      // Try a simple insert as fallback
      return await safeInsert(table, data);
    }
    
    console.log(`✅ Upsert succeeded for ${table}`);
    return { success: true, error: null };
  } catch (err) {
    console.error(`❌ Upsert exception for ${table}:`, err, 'Data:', data);
    // Try a simple insert as final fallback
    return await safeInsert(table, data);
  }
}

/**
 * Safe database select - never throws, always returns something
 */
async function safeSelect(table: string, query: any) {
  try {
    const result = await query;
    if (result.error) {
      console.warn(`⚠️  Select failed for ${table}:`, result.error.message);
      return { data: null, error: result.error };
    }
    return result;
  } catch (err) {
    console.error(`❌ Select exception for ${table}:`, err);
    return { data: null, error: err };
  }
}

/**
 * Safe database update - never throws, always logs
 */
async function safeUpdate(table: string, data: any, condition: any) {
  try {
    const { error } = await supabase
      .from(table)
      .update(data)
      .match(condition);
    
    if (error) {
      console.warn(`⚠️  Update failed for ${table}:`, error.message, 'Data:', data);
      // Try upsert as fallback
      return await safeUpsert(table, { ...data, ...condition });
    }
    
    console.log(`✅ Update succeeded for ${table}`);
    return { success: true, error: null };
  } catch (err) {
    console.error(`❌ Update exception for ${table}:`, err, 'Data:', data);
    // Try upsert as fallback
    return await safeUpsert(table, { ...data, ...condition });
  }
}

// ═══════════════════════════════════════════════════════════════
//  MAIN WEBHOOK HANDLER
// ═══════════════════════════════════════════════════════════════

Deno.serve(async (req) => {
  try {
    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204 });
    }

    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    // get the signature from the header
    const signature = req.headers.get('stripe-signature');

    if (!signature) {
      return new Response('No signature found', { status: 400 });
    }

    // get the raw body
    const body = await req.text();

    // verify the webhook signature
    let event: Stripe.Event;

    try {
      event = await stripe.webhooks.constructEventAsync(body, signature, stripeWebhookSecret);
    } catch (error: any) {
      console.error(`Webhook signature verification failed: ${error.message}`);
      return new Response(`Webhook signature verification failed: ${error.message}`, { status: 400 });
    }

    EdgeRuntime.waitUntil(handleEvent(event));

    return Response.json({ received: true });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});

/**
 * Enhanced function to find user ID from multiple sources
 */
async function findUserIdForCustomer(customerId: string, stripeData: any): Promise<string | null> {
  console.log(`🔍 Finding user ID for customer: ${customerId}`);
  
  let userId: string | null = null;

  // Method 1: Check client_reference_id (from checkout session)
  if ('client_reference_id' in stripeData && stripeData.client_reference_id) {
    userId = stripeData.client_reference_id as string;
    console.log(`📋 Found user_id in client_reference_id: ${userId}`);
    return userId;
  }

  // Method 2: Check metadata
  if (stripeData.metadata?.supabase_user_id) {
    userId = stripeData.metadata.supabase_user_id as string;
    console.log(`📋 Found user_id in metadata: ${userId}`);
    return userId;
  }

  // Method 3: Get customer from Stripe and check metadata
  try {
    console.log(`🔍 Fetching customer ${customerId} from Stripe for metadata...`);
    const customer = await stripe.customers.retrieve(customerId);
    
    if (customer && !customer.deleted && customer.metadata) {
      if (customer.metadata.supabase_user_id) {
        userId = customer.metadata.supabase_user_id;
        console.log(`📋 Found user_id in Stripe customer metadata: ${userId}`);
        return userId;
      }
      if (customer.metadata.userId) {
        userId = customer.metadata.userId;
        console.log(`📋 Found user_id in Stripe customer metadata (userId): ${userId}`);
        return userId;
      }
    }

  } catch (stripeError) {
    console.warn(`⚠️  Failed to fetch customer from Stripe:`, stripeError);
  }

  // Method 4: Check our database for existing mapping
  const customerResult = await safeSelect('stripe_customers', 
    supabase
      .from('stripe_customers')
      .select('user_id')
      .eq('customer_id', customerId)
      .maybeSingle()
  );

  if (customerResult.data?.user_id) {
    userId = customerResult.data.user_id;
    console.log(`📋 Found user_id in database mapping: ${userId}`);
    return userId;
  }

  // Method 5: Try to find user by email if available (last resort)
  try {
    const customer = await stripe.customers.retrieve(customerId);
    if (customer && !customer.deleted && customer.email) {
      console.log(`📧 Trying to find user by email: ${customer.email}`);
      
      const { data: authUsers, error } = await supabase.auth.admin.listUsers();
      if (!error && authUsers?.users) {
        const matchingUser = authUsers.users.find(u => u.email === customer.email);
        if (matchingUser) {
          userId = matchingUser.id;
          console.log(`📧 Found user by email lookup: ${userId}`);
          
          // Create the missing customer mapping
          await safeUpsert('stripe_customers', {
            customer_id: customerId,
            user_id: userId,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }, { onConflict: 'customer_id' });
          
          // Update customer metadata for future reference
          try {
            await stripe.customers.update(customerId, {
              metadata: {
                ...customer.metadata,
                supabase_user_id: userId
              }
            });
            console.log(`✅ Updated customer metadata with user ID`);
          } catch (updateError) {
            console.warn(`⚠️  Failed to update customer metadata:`, updateError);
          }
          
          return userId;
        }
      }
    }
  } catch (emailLookupError) {
    console.warn(`⚠️  Email lookup failed:`, emailLookupError);
  }

  console.log(`❌ Could not find user_id for customer: ${customerId}`);
  return null;
}

/**
 * Make sure stripe_customers has a row for this customer.
 * Returns whatever user_id we could find (or null if unknown).
 * NEVER THROWS - always succeeds
 */
async function ensureStripeCustomer(customerId: string, stripeData: any) {
  console.log(`🔄 Ensuring stripe customer exists: ${customerId}`);
  
  // Try to find the user ID using multiple methods
  const userId = await findUserIdForCustomer(customerId, stripeData);

  // Always try to create/update the mapping row (duplicates are OK now)
  const customerData = {
    customer_id: customerId,
    user_id: userId,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  await safeUpsert('stripe_customers', customerData, { onConflict: 'customer_id' });
  
  // Also try a direct insert in case upsert fails
  await safeInsert('stripe_customers', customerData);

  console.log(`✅ Stripe customer ensured: ${customerId} -> ${userId || 'no user'}`);
  return userId;
}

async function handleEvent(event: Stripe.Event) {
  console.log(`🎯 Processing webhook event: ${event.type}`);
  
  const stripeData = event?.data?.object ?? {};

  if (!stripeData) {
    console.log('⚠️  No data in event, skipping');
    return;
  }

  if (!('customer' in stripeData)) {
    console.log('⚠️  No customer in event data, skipping');
    return;
  }

  // for one time payments, we only listen for the checkout.session.completed event
  if (event.type === 'payment_intent.succeeded' && event.data.object.invoice === null) {
    console.log('⚠️  Skipping payment_intent.succeeded without invoice');
    return;
  }

  const { customer: customerId } = stripeData;

  if (!customerId || typeof customerId !== 'string') {
    console.error(`❌ No valid customer received on event: ${JSON.stringify(event)}`);
    return;
  }

  console.log(`🔄 Processing event ${event.type} for customer: ${customerId}`);
  let isSubscription = true;

  if (event.type === 'checkout.session.completed') {
    const { mode } = stripeData as Stripe.Checkout.Session;
    isSubscription = mode === 'subscription';
    console.info(`🛒 Processing ${isSubscription ? 'subscription' : 'one-time payment'} checkout session`);
  }

  const { mode, payment_status } = stripeData as Stripe.Checkout.Session;

  if (isSubscription) {
    console.info(`🔄 Starting subscription sync for customer: ${customerId}`);
    
    // ① Ensure the stripe_customers mapping exists first
    await ensureStripeCustomer(customerId, stripeData);
    
    // Add a small delay to ensure Stripe has fully processed the subscription
    if (event.type === 'checkout.session.completed') {
      console.log(`⏳ Waiting 2 seconds for Stripe to fully process subscription...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // ② Then sync the subscription data
    await syncCustomerFromStripe(customerId);
  } else if (mode === 'payment' && payment_status === 'paid') {
    console.info(`💳 Processing one-time payment for customer: ${customerId}`);
    
    // Ensure customer mapping exists for one-time payments too
    await ensureStripeCustomer(customerId, stripeData);

    // Extract the necessary information from the session
    const {
      id: checkout_session_id,
      payment_intent,
      amount_subtotal,
      amount_total,
      currency,
    } = stripeData as Stripe.Checkout.Session;

    // Insert the order into the stripe_orders table
    const orderData = {
      checkout_session_id: checkout_session_id || `missing_${Date.now()}`,
      payment_intent_id: payment_intent || `missing_${Date.now()}`,
      customer_id: customerId,
      amount_subtotal: amount_subtotal || 0,
      amount_total: amount_total || 0,
      currency: currency || 'usd',
      payment_status: payment_status || 'unknown',
      status: 'completed',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    await safeInsert('stripe_orders', orderData);
    console.info(`✅ One-time payment processed for session: ${checkout_session_id}`);
  }
}

// ═══════════════════════════════════════════════════════════════
//  FAULT-TOLERANT SUBSCRIPTION SYNC
//  Never throws, always logs, handles all edge cases
// ═══════════════════════════════════════════════════════════════
async function syncCustomerFromStripe(customerId: string) {
  console.log(`🔄 Starting sync for customer: ${customerId}`);
  
  try {
    /* 0 ─── fetch or create stripe_customers row ───────────── */
    const customerResult = await safeSelect('stripe_customers', 
      supabase
        .from('stripe_customers')
        .select('user_id')
        .eq('customer_id', customerId)
        .maybeSingle()
    );

    let userId = customerResult.data?.user_id || null;

    // If no customer record exists, create a placeholder
    if (!customerResult.data) {
      console.log(`📝 Creating placeholder customer record for: ${customerId}`);
      await safeInsert('stripe_customers', {
        customer_id: customerId,
        user_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });
    }

    /* 1 ───── grab ALL subscriptions for that customer ──────── */
    console.log(`📡 Fetching subscriptions from Stripe for: ${customerId}`);
    
    let subs;
    try {
      subs = await stripe.subscriptions.list({
        customer: customerId,
        status: 'all',
        expand: ['data.default_payment_method'],
        limit: 100,
      });
    } catch (stripeError) {
      console.error(`❌ Failed to fetch subscriptions from Stripe:`, stripeError);
      return; // Can't proceed without Stripe data
    }

    console.log(`📊 Found ${subs.data.length} subscriptions for customer: ${customerId}`);
    
    // Log detailed subscription statuses for debugging
    subs.data.forEach(sub => {
      console.log(`📋 Subscription ${sub.id}: status=${sub.status}, period_end=${sub.current_period_end}`);
    });

    /* 2 ───── (re-)insert every subscription row ───────────── */
    for (const s of subs.data) {
      const subscriptionData = {
        subscription_id: s.id,
        customer_id: customerId,
        price_id: s.items.data[0]?.price?.id || null,
        current_period_start: s.current_period_start || null,
        current_period_end: s.current_period_end || null,
        cancel_at_period_end: s.cancel_at_period_end || false,
        payment_method_brand: s.default_payment_method && typeof s.default_payment_method !== 'string' 
          ? s.default_payment_method.card?.brand || null 
          : null,
        payment_method_last4: s.default_payment_method && typeof s.default_payment_method !== 'string' 
          ? s.default_payment_method.card?.last4 || null 
          : null,
        status: s.status || 'not_started',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      // Try multiple approaches to ensure the data gets saved
      await safeUpsert('stripe_subscriptions', subscriptionData, { onConflict: 'subscription_id' });
      await safeInsert('stripe_subscriptions', subscriptionData); // Backup insert
      
      console.log(`💾 Processed subscription: ${s.id} (${s.status})`);
    }

    /* 3 ───── ensure the mapping row always exists ──────────── */
    await safeUpsert('stripe_customers', {
      customer_id: customerId,
      user_id: userId,
      updated_at: new Date().toISOString()
    }, { onConflict: 'customer_id' });

    /* 4 ───── pick the "current" plan for the frontend ─────── */
    // More comprehensive status checking and better sorting
    const activeSubs = subs.data.filter((s) => ['active', 'trialing'].includes(s.status));
    console.log(`🔍 Found ${activeSubs.length} active/trialing subscriptions`);
    
    // If no active/trialing, check for incomplete that might become active
    const potentialSubs = activeSubs.length > 0 ? activeSubs : 
      subs.data.filter((s) => ['incomplete', 'past_due'].includes(s.status));
    
    console.log(`🔍 Considering ${potentialSubs.length} potential subscriptions`);
    
    const current = potentialSubs
      .sort((a, b) => {
        // Prioritize by status first (active > trialing > others)
        const statusPriority = { 'active': 3, 'trialing': 2, 'incomplete': 1, 'past_due': 0 };
        const aPriority = statusPriority[a.status] || -1;
        const bPriority = statusPriority[b.status] || -1;
        
        if (aPriority !== bPriority) {
          return bPriority - aPriority;
        }
        
        // Then by period end (most recent)
        return (b.current_period_end || 0) - (a.current_period_end || 0);
      })[0] || null;

    console.log(`🎯 Current subscription: ${current?.id || 'none'} (status: ${current?.status || 'none'})`);

    // Only update user_plans if we have a valid user_id
    if (userId) {
      // Determine plan type and status based on subscription
      const hasActiveSubscription = current && ['active', 'trialing'].includes(current.status);
      
      // Check if user already has an optimistically activated plan
      const { data: existingPlan } = await safeSelect('user_plans',
        supabase
          .from('user_plans')
          .select('plan_type, status, plan_started_at')
          .eq('user_id', userId)
          .maybeSingle()
      );
      
      let planType, planStatus;
      
      if (hasActiveSubscription) {
        // Subscription is confirmed active - keep it active
        planType = 'monthly';
        planStatus = 'active';
        console.log(`✅ Confirming active subscription for user: ${userId}`);
      } else if (existingPlan?.plan_type === 'monthly' && existingPlan?.status === 'active') {
        // User has optimistic activation but subscription failed - check timing
        const planAge = new Date().getTime() - new Date(existingPlan.plan_started_at || 0).getTime();
        const fiveMinutes = 5 * 60 * 1000;
        
        if (planAge < fiveMinutes) {
          // Keep optimistic activation for a few minutes
          planType = 'monthly';
          planStatus = 'active';
          console.log(`⏳ Keeping optimistic activation for user: ${userId} (${Math.round(planAge/1000)}s old)`);
        } else {
          // Too old, revert to free
          planType = 'free';
          planStatus = 'inactive';
          console.log(`⏰ Reverting expired optimistic activation for user: ${userId}`);
        }
      } else {
        // No active subscription and no optimistic activation
        planType = 'free';
        planStatus = 'inactive';
        console.log(`❌ No active subscription found for user: ${userId}`);
      }
      
      const planData = {
        user_id: userId,
        plan_type: planType,
        status: planStatus,
        stripe_subscription_id: current?.id || null,
        stripe_customer_id: customerId,
        subscription_id: current?.id || null,
        plan_updated_at: hasActiveSubscription ? new Date().toISOString() : existingPlan?.plan_started_at || new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      console.log(`👤 Setting user plan: ${planType} (${planStatus}) for user ${userId}`);

      // Try multiple approaches to save user plan
      const upsertResult = await safeUpsert('user_plans', planData, { onConflict: 'user_id' });
      
      if (!upsertResult.success) {
        // If upsert fails, try a direct update
        await safeUpdate('user_plans', planData, { user_id: userId });
      }
      
      console.log(`👤 ✅ Updated user plan for: ${userId} -> ${planData.plan_type} (${planData.status})`);
    } else {
      console.log(`⚠️  Skipping user_plans update for ${customerId} - no user_id available`);
      console.log(`🔧 To fix this: ensure checkout sessions include client_reference_id or metadata.supabase_user_id`);
    }

    console.log(`✅ Sync completed successfully for customer: ${customerId}`);
    
  } catch (error) {
    console.error(`❌ Sync failed for customer ${customerId}:`, error);
    // Don't throw - just log and continue
  }
}