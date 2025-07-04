import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSubscription } from '../hooks/useSubscription';
import { analytics } from '../lib/analytics';

const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { subscription, loading, refetch } = useSubscription();
  const [initialLoad, setInitialLoad] = useState(true);

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