import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSubscription } from '../hooks/useSubscription';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { analytics } from '../lib/analytics';
import toast from 'react-hot-toast';

const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { subscription, loading, refetch } = useSubscription();
  const { user } = useAuth();
  const [processing, setProcessing] = useState(true);
  const [activationComplete, setActivationComplete] = useState(false);

  useEffect(() => {
    // Track successful payment page view
    analytics.track('payment_success_page_viewed', {
      session_id: sessionId
    });

    if (sessionId && user) {
      handleSubscriptionActivation();
    } else {
      setProcessing(false);
    }
  }, [sessionId, user]);

  const handleSubscriptionActivation = async () => {
    if (!user || !sessionId) {
      setProcessing(false);
      return;
    }

    try {
      console.log(`🔧 Checking subscription activation for user ${user.id} with session ${sessionId}`);
      
      // Wait a moment for webhook to potentially process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check current user plan
      const { data: currentPlan, error: planError } = await supabase
        .from('user_plans')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (planError) {
        console.error('Error fetching user plan:', planError);
      }

      console.log('Current user plan:', currentPlan);

      // Check if user already has monthly subscription
      if (currentPlan?.plan_type === 'monthly' && currentPlan?.status === 'active') {
        console.log('✅ User already has active monthly subscription');
        setActivationComplete(true);
        setProcessing(false);
        refetch();
        return;
      }

      // Get the checkout session details from Stripe
      console.log('🔍 Fetching session details from Stripe...');
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/manual-subscription-fix`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          session_id: sessionId,
          user_id: user.id
        }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to activate subscription');
      }

      console.log('✅ Subscription activation result:', result);
      
      // Update user plan to monthly if it was free or create if missing
      const planData = {
        user_id: user.id,
        plan_type: 'monthly',
        status: 'active',
        stripe_subscription_id: result.subscription_id || null,
        stripe_customer_id: null, // Will be filled by webhook
        subscription_id: result.subscription_id || null,
        plan_started_at: new Date().toISOString(),
        plan_updated_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      let planUpdateError;
      if (currentPlan) {
        // Update existing plan
        const { error } = await supabase
          .from('user_plans')
          .update(planData)
          .eq('user_id', user.id);
        planUpdateError = error;
      } else {
        // Create new plan
        const { error } = await supabase
          .from('user_plans')
          .insert(planData);
        planUpdateError = error;
      }

      if (planUpdateError) {
        console.error('Failed to update user plan:', planUpdateError);
        // Try upsert as fallback
        const { error: upsertError } = await supabase
          .from('user_plans')
          .upsert(planData, { onConflict: 'user_id' });
        
        if (upsertError) {
          console.error('Failed to upsert user plan:', upsertError);
          throw new Error('Failed to activate subscription plan');
        }
      }

      console.log('✅ User plan updated to monthly subscription');
      toast.success('Subscription activated successfully!');
      setActivationComplete(true);
      
      // Refetch subscription data
      setTimeout(() => {
        refetch();
      }, 1000);
      
    } catch (error: any) {
      console.error('❌ Subscription activation failed:', error);
      toast.error(error.message || 'Failed to activate subscription');
    } finally {
      setProcessing(false);
    }
  };

  useEffect(() => {
    // Track subscription completion when subscription data is loaded
    if (subscription && !loading && activationComplete) {
      analytics.trackSubscription('completed', subscription.product_name);
    }
  }, [subscription, loading, activationComplete]);

  if (processing) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-emerald-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Activating your subscription...</h2>
          <p className="text-gray-600">Please wait while we set up your account.</p>
          {sessionId && (
            <p className="text-xs text-gray-500 mt-2 font-mono">Session: {sessionId.slice(-8)}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your account has been activated.
            </p>
          </div>

          {subscription && (
            <div className="bg-emerald-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-emerald-800 mb-2">Your Plan</h3>
              <p className="text-emerald-700">
                {subscription.product_name || 'Unlimited Sales Copilot'}
              </p>
              <p className="text-sm text-emerald-600 mt-1">
                Status: {subscription.subscription_status}
              </p>
            </div>
          )}

          <div className="space-y-4">
            <Link
              to="/dashboard"
              onClick={() => analytics.track('success_page_dashboard_clicked')}
              className="w-full btn bg-emerald-800 text-white hover:bg-emerald-900 shadow-lg hover:shadow-xl"
            >
              Go to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/"
              onClick={() => analytics.track('success_page_home_clicked')}
              className="w-full btn bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Back to Home
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Contact our support team at{' '}
              <a 
                href="mailto:support@saleshint.ai" 
                onClick={() => analytics.track('support_email_clicked', { source: 'success_page' })}
                className="text-emerald-600 hover:text-emerald-700"
              >
                support@saleshint.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;