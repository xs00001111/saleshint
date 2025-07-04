// Script to check current user data in database
// This would need to be run with proper Supabase credentials

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseServiceKey = 'YOUR_SUPABASE_SERVICE_ROLE_KEY';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkUserData(email) {
  try {
    console.log(`\n🔍 Checking data for user: ${email}\n`);

    // 1. Check if user exists in auth.users
    const { data: authUser, error: authError } = await supabase.auth.admin.listUsers();
    const user = authUser?.users?.find(u => u.email === email);
    
    if (!user) {
      console.log('❌ User not found in auth.users');
      return;
    }
    
    console.log('✅ User found in auth.users:', user.id);

    // 2. Check stripe_customers
    const { data: customer, error: customerError } = await supabase
      .from('stripe_customers')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

    if (customerError) {
      console.log('❌ Error checking stripe_customers:', customerError);
    } else if (customer) {
      console.log('✅ Stripe customer found:', customer.customer_id);
    } else {
      console.log('❌ No stripe customer found');
    }

    // 3. Check user_plans
    const { data: plan, error: planError } = await supabase
      .from('user_plans')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

    if (planError) {
      console.log('❌ Error checking user_plans:', planError);
    } else if (plan) {
      console.log('✅ User plan found:', {
        plan_type: plan.plan_type,
        status: plan.status,
        stripe_subscription_id: plan.stripe_subscription_id
      });
    } else {
      console.log('❌ No user plan found');
    }

    // 4. Check stripe_subscriptions
    if (customer) {
      const { data: subscriptions, error: subError } = await supabase
        .from('stripe_subscriptions')
        .select('*')
        .eq('customer_id', customer.customer_id);

      if (subError) {
        console.log('❌ Error checking stripe_subscriptions:', subError);
      } else {
        console.log(`✅ Found ${subscriptions?.length || 0} subscriptions`);
        subscriptions?.forEach(sub => {
          console.log(`  - ${sub.subscription_id}: ${sub.status}`);
        });
      }
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the check
checkUserData('shenx3@uci.edu');