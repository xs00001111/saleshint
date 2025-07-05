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
  const { user, session } = useAuth();
  const [processing, setProcessing] = useState(true);
  const [activationComplete, setActivationComplete] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Track successful payment page view
    analytics.track('payment_success_page_viewed', {
      session_id: sessionId
    });

    if (sessionId && user && session) {
      handleSubscriptionActivation();
    } else {
      setProcessing(false);
    }
  }, [sessionId, user, session]);

  const handleSubscriptionActivation = async () => {
    if (!user || !sessionId || !session?.access_token) {
      setProcessing(false);
      return;
    }

    try {
      console.log(`🔧 Activating subscription for user ${user.id} with session ${sessionId}`);
      
      // First, try to activate using the manual fix endpoint
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/manual-subscription-fix`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
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
      
      // Force update the user plan directly
      const planData = {
        user_id: user.id,
        plan_type: 'monthly',
        status: 'active',
        stripe_subscription_id: result.subscription_id || null,
        stripe_customer_id: result.customer_id || null,
        subscription_id: result.subscription_id || null,
        plan_started_at: new Date().toISOString(),
        plan_updated_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      // Use service role to ensure the update works
      const { error: planError } = await supabase
        .from('user_plans')
        .upsert(planData, { onConflict: 'user_id' });

      if (planError) {
        console.error('Failed to update user plan directly:', planError);
        throw new Error('Failed to activate subscription plan');
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
      
      // Retry logic for transient failures
      if (retryCount < 2) {
        console.log(`🔄 Retrying activation (attempt ${retryCount + 1}/3)...`);
        setRetryCount(prev => prev + 1);
        setTimeout(() => {
          handleSubscriptionActivation();
        }, 2000);
        return;
      }
      
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
          {retryCount > 0 && (
            <p className="text-sm text-gray-500 mt-2">Retry attempt {retryCount}/3</p>
          )}
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

          {/* Always show the plan info for successful payments */}
          <div className="bg-emerald-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-emerald-800 mb-2">Your Plan</h3>
            <p className="text-emerald-700 font-medium">
              Unlimited Sales Copilot
            </p>
            <p className="text-sm text-emerald-600 mt-1">
              Monthly Plan • Unlimited Usage
            </p>
            <p className="text-xs text-emerald-500 mt-2">
              ✨ Real-time AI insights • Advanced objection handling • Priority support
            </p>
          </div>

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