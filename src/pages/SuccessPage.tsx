import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Loader2, AlertTriangle } from 'lucide-react';
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
  const [initialLoad, setInitialLoad] = useState(true);
  const [manuallyCreated, setManuallyCreated] = useState(false);
  const [processingManual, setProcessingManual] = useState(false);

  useEffect(() => {
    // Track successful payment page view
    analytics.track('payment_success_page_viewed', {
      session_id: sessionId
    });

    // Refetch subscription data when component mounts
    if (sessionId) {
      // Wait a moment for webhook to process, then refetch
      const timer = setTimeout(() => {
        refetch();
        setInitialLoad(false);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setInitialLoad(false);
    }
  }, [sessionId, refetch]);

  useEffect(() => {
    // Track subscription completion when subscription data is loaded
    if (subscription && !loading && !initialLoad) {
      analytics.trackSubscription('completed', subscription.product_name);
    }
  }, [subscription, loading, initialLoad]);

  const handleManualSubscriptionCreation = async () => {
    if (!user || !sessionId) {
      toast.error('Missing user or session information');
      return;
    }

    setProcessingManual(true);
    
    try {
      console.log(`🔧 Manually creating subscription for user ${user.id} with session ${sessionId}`);
      
      // First, try to get the checkout session details from Stripe via our edge function
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/manual-subscription-fix`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.access_token || ''}`,
        },
        body: JSON.stringify({
          session_id: sessionId,
          user_id: user.id
        }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to create manual subscription');
      }

      console.log('✅ Manual subscription creation result:', result);
      toast.success('Subscription activated successfully!');
      setManuallyCreated(true);
      
      // Refetch subscription data
      setTimeout(() => {
        refetch();
      }, 1000);
      
    } catch (error: any) {
      console.error('❌ Manual subscription creation failed:', error);
      toast.error(error.message || 'Failed to activate subscription');
    } finally {
      setProcessingManual(false);
    }
  };

  if (initialLoad || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-emerald-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Processing your purchase...</h2>
          <p className="text-gray-600">Please wait while we set up your account.</p>
        </div>
      </div>
    );
  }

  // Check if we need manual intervention
  const needsManualFix = sessionId && !subscription && !manuallyCreated;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {needsManualFix ? (
            <div className="mb-6">
              <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Activation Needed</h1>
              <p className="text-gray-600 mb-4">
                Your payment was successful, but we need to activate your subscription.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-amber-700">
                  Session ID: <code className="font-mono text-xs">{sessionId}</code>
                </p>
              </div>
              <button
                onClick={handleManualSubscriptionCreation}
                disabled={processingManual}
                className="w-full btn bg-emerald-600 text-white hover:bg-emerald-700 mb-4"
              >
                {processingManual ? (
                  <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                ) : (
                  'Activate My Subscription'
                )}
              </button>
            </div>
          ) : (
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
              <p className="text-gray-600">
                Thank you for your purchase. Your account has been activated.
              </p>
            </div>
          )}

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

          {!needsManualFix && (
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
          )}

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