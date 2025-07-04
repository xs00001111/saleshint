import React, { useState } from 'react';
import { Crown, Home, AlertTriangle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useSubscription } from '../hooks/useSubscription';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import PricingSection from '../components/PricingSection';
import EmailVerificationBanner from '../components/EmailVerificationBanner';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { subscription, loading, hasActiveSubscription } = useSubscription();
  const [showVerificationBanner, setShowVerificationBanner] = useState(true);

  const isFreePlan = !hasActiveSubscription();
  const isEmailVerified = user?.email_confirmed_at;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Dashboard Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center">
              <Logo className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-emerald-800">SalesHint</span>
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link 
                to="/"
                className="inline-flex items-center text-gray-600 hover:text-emerald-800 font-medium transition-colors"
              >
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              
              {isFreePlan && (
                <button 
                  className="btn bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl"
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                >
                  <Crown className="h-4 w-4 mr-2" />
                  Upgrade Now
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Dashboard
            </h1>
            <p className="text-gray-600">
              {isFreePlan 
                ? "Manage your SalesHint account and track your sales performance." 
                : "Manage your SalesHint account and track your sales performance."
              }
            </p>
          </div>

          {/* Email Verification Banner */}
          {!isEmailVerified && showVerificationBanner && (
            <EmailVerificationBanner 
              onDismiss={() => setShowVerificationBanner(false)}
              showDismiss={true}
            />
          )}

          {/* Account Limitation Warning for Unverified Users */}
          {!isEmailVerified && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-red-800 mb-1">
                    Account Access Limited
                  </h3>
                  <p className="text-sm text-red-700">
                    Some features are restricted until you verify your email address. 
                    Please check your inbox and click the verification link to unlock full access.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Subscription Status Card */}
          <div className={`rounded-xl shadow-lg p-6 mb-8 ${
            isFreePlan 
              ? 'bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200' 
              : 'bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${
                  isFreePlan ? 'bg-gray-200' : 'bg-emerald-200'
                }`}>
                  <Crown className={`h-8 w-8 ${isFreePlan ? 'text-gray-600' : 'text-emerald-600'}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {isFreePlan ? 'Free Trial' : subscription?.product_name || 'Unlimited Sales Copilot'}
                  </h2>
                  {loading ? (
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-48 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-32"></div>
                    </div>
                  ) : isFreePlan ? (
                    <div>
                      <p className="text-gray-600">5 calls each for 5 minutes</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-lg font-medium text-emerald-600 mb-1 capitalize">
                        Status: {subscription?.subscription_status?.replace('_', ' ')}
                      </p>
                      {subscription?.current_period_end && (
                        <p className="text-sm text-gray-600">
                          {subscription.cancel_at_period_end ? 'Expires' : 'Renews'} on:{' '}
                          {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${
                  isFreePlan 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'bg-emerald-200 text-emerald-800'
                }`}>
                  {isFreePlan ? 'Free Trial' : 'Pro Plan'}
                </div>
                {!isFreePlan && subscription?.payment_method_last4 && (
                  <p className="text-sm text-gray-500 mt-2">
                    •••• {subscription.payment_method_last4}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Pricing Section for Free Users - Exact same as landing page */}
          {isFreePlan && (
            <div className="mb-8">
              <PricingSection />
            </div>
          )}

          {/* Pro Plan Success Message */}
          {!isFreePlan && (
            <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-200 text-center">
              <Crown className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-emerald-900 mb-2">
                You're All Set!
              </h3>
              <p className="text-emerald-700 mb-6 max-w-2xl mx-auto">
                Your Pro plan is active and ready to help you close more deals. Start your next sales call 
                and experience the power of AI-driven sales assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className={`btn ${
                    isEmailVerified 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!isEmailVerified}
                >
                  {isEmailVerified ? 'Start New Call' : 'Verify Email to Start'}
                </button>
                <button 
                  className="btn bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-50"
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                >
                  Manage Subscription
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;