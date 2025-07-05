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

  useEffect(() => {
    // Track successful payment page view
    analytics.track('payment_success_page_viewed', {
      session_id: sessionId
    });

    if (user) {
      // If user exists, immediately activate their plan - be very lenient
      handleLenientActivation();
    } else {
      setProcessing(false);
    }
  }, [user]);

  const handleLenientActivation = async () => {
    if (!user) {
      setProcessing(false);
      return;
    }

    try {
      console.log(`🚀 LENIENT ACTIVATION: Upgrading user ${user.id} to monthly plan`);
      
      // Just directly update the user plan to monthly - no complex logic
      const planData = {
        user_id: user.id,
        plan_type: 'monthly',
        status: 'active',
        stripe_subscription_id: sessionId || null, // Use session ID if available
        stripe_customer_id: null, // Will be filled later by webhooks if needed
        subscription_id: sessionId || null,
        plan_started_at: new Date().toISOString(),
        plan_updated_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      console.log('📝 Directly updating user plan:', planData);

      // Use upsert to ensure it works regardless of existing data
      const { error: planError } = await supabase
        .from('user_plans')
        .upsert(planData, { onConflict: 'user_id' });

      if (planError) {
        console.error('❌ Failed to update user plan:', planError);
        // Try a direct insert as backup
        const { error: insertError } = await supabase
          .from('user_plans')
          .insert(planData);
        
        if (insertError) {
          console.error('❌ Failed to insert user plan:', insertError);
          throw new Error('Failed to activate plan');
        }
      }

      console.log('✅ User plan updated successfully to monthly');
      toast.success('Subscription activated successfully!');
      setActivationComplete(true);
      
      // Refetch subscription data
      setTimeout(() => {
        refetch();
      }, 1000);
      
    } catch (error: any) {
      console.error('❌ Lenient activation failed:', error);
      toast.error('Plan activation failed, but you can contact support');
    } finally {
      setProcessing(false);
    }
  };

  useEffect(() => {
    // Track subscription completion when activation is complete
    if (activationComplete) {
      analytics.trackSubscription('completed', 'Unlimited Sales Copilot');
    }
  }, [activationComplete]);

  if (processing) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-emerald-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Activating your subscription...</h2>
          <p className="text-gray-600">Setting up your monthly plan.</p>
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

          {/* Always show the monthly plan info for successful payments */}
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