import React, { useState, useEffect } from 'react';
import { Crown, Home, AlertTriangle, Download } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useSubscription } from '../hooks/useSubscription';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import PricingSection from '../components/PricingSection';
import EmailVerificationBanner from '../components/EmailVerificationBanner';
import DownloadButtons from '../components/DownloadButtons';
import { supabase } from '../lib/supabase';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { subscription, loading, hasActiveSubscription, error } = useSubscription();
  const [showVerificationBanner, setShowVerificationBanner] = useState(true);
  const [userPlan, setUserPlan] = useState<any>(null);
  const [planLoading, setPlanLoading] = useState(true);

  // More strict checking - only show paid plan if we have confirmed payment
  const hasConfirmedPayment = hasActiveSubscription() && subscription?.subscription_status === 'active';
  const isFreePlan = !hasConfirmedPayment && (!userPlan || userPlan.plan_type === 'free' || !userPlan.stripe_subscription_id);
  const isEmailVerified = user?.email_confirmed_at;

  // Fetch user plan information
  useEffect(() => {
    // Don't fetch user plan if no user is signed in
    if (!user) {
      setUserPlan(null);
      setPlanLoading(false);
      return;
    }

    const fetchUserPlan = async () => {
      try {
        // First ensure user has a plan
        await ensureUserHasPlan(user.id);
        
        // Then fetch the plan
        let data = null;
        let error = null;
        
        try {
          const result = await supabase
            .from('user_plans')
            .select('*')
            .eq('user_id', user.id)
            .maybeSingle();
          
          data = result.data;
          error = result.error;
        } catch (networkError) {
          console.warn('Network error fetching user plan, using fallback:', networkError);
          // Create a fallback free plan object
          data = {
            user_id: user.id,
            plan_type: 'free',
            status: 'active',
            plan_started_at: new Date().toISOString()
          };
          error = null;
        }

        if (error) {
          console.warn('Error fetching user plan (using fallback):', error);
          // Use fallback free plan
          data = {
            user_id: user.id,
            plan_type: 'free',
            status: 'active',
            plan_started_at: new Date().toISOString()
          };
        } else {
          setUserPlan(data);
        }
      } catch (err) {
        console.warn('Unexpected error fetching user plan (using fallback):', err);
        // Use fallback free plan
        setUserPlan({
          user_id: user.id,
          plan_type: 'free',
          status: 'active',
          plan_started_at: new Date().toISOString()
        });
      } finally {
        setPlanLoading(false);
      }
    };

    fetchUserPlan();
  }, [user]);

  // Helper function to ensure user has a plan
  const ensureUserHasPlan = async (userId: string) => {
    // Validate user ID
    if (!userId) {
      console.warn('No user ID provided to ensureUserHasPlan');
      return;
    }

    try {
      const { data: existingPlan, error: checkError } = await supabase
        .from('user_plans')
        .select('id')
        .eq('user_id', userId)
        .maybeSingle();

      if (checkError && checkError.code !== 'PGRST116') {
        console.warn('Error checking user plan:', checkError);
      }

      if (!existingPlan) {
        console.log('🆓 Creating free plan for user in dashboard:', userId);
        
        const { error: createError } = await supabase
          .from('user_plans')
          .upsert({
            user_id: userId,
            plan_type: 'free',
            status: 'active',
            plan_started_at: new Date().toISOString(),
            plan_updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }, { 
            onConflict: 'user_id',
            ignoreDuplicates: false 
          });

        if (createError) {
          console.warn('Failed to create free plan in dashboard:', createError);
        } else {
          console.log('✅ Ensured free plan exists in dashboard for user:', userId);
        }
      }
    } catch (err) {
      console.warn('Exception ensuring user plan in dashboard:', err);
    }
  };

  // Show loading state while fetching data
  if (planLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900">Loading your dashboard...</h2>
        </div>
      </div>
    );
  }

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
                    {hasConfirmedPayment ? 'Unlimited Sales Copilot' : 'Free Trial'}
                  </h2>
                  {loading ? (
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-48 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-32"></div>
                    </div>
                  ) : isFreePlan ? (
                    <div>
                      <p className="text-gray-600">
                        5 calls, 5 minutes each
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-lg font-medium text-emerald-600 mb-1">
                        Monthly Plan • Unlimited Usage
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
                  hasConfirmedPayment
                    ? 'bg-emerald-200 text-emerald-800'
                    : isFreePlan 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'bg-emerald-200 text-emerald-800'
                }`}>
                  {hasConfirmedPayment ? 'Pro Plan' : 'Free Trial'}
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
          {hasConfirmedPayment && (
            <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-200 text-center">
              <Crown className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-emerald-900 mb-2">
                You're All Set!
              </h3>
              <p className="text-emerald-700 mb-4 max-w-2xl mx-auto">
                Your <strong>Unlimited Sales Copilot</strong> plan is active and ready to help you close more deals.
              </p>
              <p className="text-emerald-600 mb-6 text-sm">
                ✨ Unlimited calls • Advanced AI insights • Priority support • CRM integrations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DownloadButtons variant="page" className="mb-4" />
                <div className="bg-white rounded-lg p-6 border border-emerald-200 max-w-2xl mx-auto">
                  <h4 className="text-lg font-semibold text-emerald-900 mb-3">Subscription Management</h4>
                  <div className="space-y-3 text-left">
                    {subscription && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Status:</span>
                          <span className="ml-2 text-emerald-600 capitalize">{subscription.subscription_status}</span>
                        </div>
                        {subscription.current_period_end && (
                          <div>
                            <span className="font-medium text-gray-700">
                              {subscription.cancel_at_period_end ? 'Expires:' : 'Renews:'}
                            </span>
                            <span className="ml-2 text-gray-600">
                              {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                        {subscription.payment_method_last4 && (
                          <div>
                            <span className="font-medium text-gray-700">Payment:</span>
                            <span className="ml-2 text-gray-600 capitalize">
                              {subscription.payment_method_brand} •••• {subscription.payment_method_last4}
                            </span>
                          </div>
                        )}
                        <div>
                          <span className="font-medium text-gray-700">Plan:</span>
                          <span className="ml-2 text-gray-600">Monthly ($20/month)</span>
                        </div>
                      </div>
                    )}
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">
                        Questions about your subscription?
                      </p>
                      <a 
                        href="mailto:founders@interm.ai"
                        className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                      >
                        Contact founders@interm.ai
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Free Plan Users - Show Download Button */}
          {isFreePlan && (
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center mb-8">
              <Download className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Download SalesHint
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the desktop app to start using SalesHint during your sales calls.
              </p>
              <DownloadButtons variant="page" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;