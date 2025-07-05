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

    if (!user_id) {
      return new Response(
        JSON.stringify({ error: 'Missing user_id' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Verify the user exists in our auth system
    const { data: authUser, error: authError } = await supabase.auth.admin.getUserById(user_id);
    
    if (authError || !authUser.user) {
      console.error('Invalid user_id provided:', user_id, authError);
      return new Response(
        JSON.stringify({ error: 'Invalid user_id' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`🚀 SUPER LENIENT: Just upgrading user ${user_id} to monthly plan`);

    // SUPER LENIENT: Just upgrade the user to monthly plan regardless of session data
    const planData = {
      user_id: user_id,
      plan_type: 'monthly',
      status: 'active',
      stripe_subscription_id: session_id || null,
      stripe_customer_id: null, // Will be filled by webhooks later if needed
      subscription_id: session_id || null,
      plan_started_at: new Date().toISOString(),
      plan_updated_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    console.log('📝 Directly setting monthly plan:', planData);

    const { error: planError } = await supabase
      .from('user_plans')
      .upsert(planData, {
        onConflict: 'user_id'
      });

    if (planError) {
      console.error('Failed to create user plan:', planError);
      
      // Try direct insert as backup
      const { error: insertError } = await supabase
        .from('user_plans')
        .insert(planData);
      
      if (insertError) {
        console.error('Failed to insert user plan:', insertError);
        return new Response(
          JSON.stringify({ error: 'Failed to create user plan' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    console.log(`✅ User ${user_id} upgraded to monthly plan successfully`);

    // Verify the plan was actually created/updated
    const { data: verifyPlan, error: verifyError } = await supabase
      .from('user_plans')
      .select('plan_type, status')
      .eq('user_id', user_id)
      .single();

    if (verifyError || !verifyPlan) {
      console.error('❌ Failed to verify plan creation:', verifyError);
      return new Response(
        JSON.stringify({ error: 'Failed to verify plan activation' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`✅ Plan verification successful: ${verifyPlan.plan_type} (${verifyPlan.status})`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'User upgraded to monthly plan successfully',
        plan_type: verifyPlan.plan_type,
        status: verifyPlan.status,
        user_id: user_id
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Manual subscription fix error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});