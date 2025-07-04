import React, { useState } from 'react';
import { Check, Loader2, AlertTriangle } from 'lucide-react';
import { StripeProduct } from '../stripe-config';
import { useAuth } from '../contexts/AuthContext';
import { useSubscription } from '../hooks/useSubscription';
import { analytics } from '../lib/analytics';
import toast from 'react-hot-toast';

interface PricingCardProps {
  product: StripeProduct;
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ product, popular = false }) => {
  const [loading, setLoading] = useState(false);
  const { user, session } = useAuth();
  const { subscription, hasActiveSubscription } = useSubscription();

  const isCurrentPlan = subscription?.price_id === product.priceId;
  const hasActiveSub = hasActiveSubscription();
  const isEmailVerified = user?.email_confirmed_at;

  const handleCheckout = async () => {
    // Track pricing interaction
    analytics.trackPricingInteraction('checkout_clicked', product.name);

    if (!user) {
      analytics.track('checkout_error', { error: 'not_authenticated', plan: product.name });
      toast.error('Please sign in to continue');
      return;
    }

    if (!session?.access_token) {
      analytics.track('checkout_error', { error: 'no_session_token', plan: product.name });
      toast.error('Authentication required. Please sign in again.');
      return;
    }

    if (!isEmailVerified) {
      analytics.track('checkout_error', { error: 'email_not_verified', plan: product.name });
      toast.error('Please verify your email address before subscribing');
      return;
    }

    if (isCurrentPlan && hasActiveSub) {
      analytics.track('checkout_error', { error: 'already_subscribed', plan: product.name });
      toast.error('You already have this subscription');
      return;
    }

    setLoading(true);
    analytics.trackSubscription('started', product.name);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          price_id: product.priceId,
          mode: product.mode,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/pricing`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        analytics.track('checkout_redirect', { plan: product.name, checkout_url: data.url });
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      analytics.track('checkout_error', { 
        error: error.message, 
        plan: product.name,
        user_id: user.id 
      });
      toast.error(error.message || 'Failed to start checkout process');
    } finally {
      setLoading(false);
    }
  };

  const getButtonText = () => {
    if (loading) return 'Loading...';
    if (!user) return 'Sign In Required';
    if (!isEmailVerified) return 'Verify Email First';
    if (isCurrentPlan && hasActiveSub) return 'Current Plan';
    if (product.mode === 'subscription') return 'Start Subscription';
    return 'Buy Now';
  };

  const isButtonDisabled = loading || (isCurrentPlan && hasActiveSub) || (!user) || (!isEmailVerified);

  return (
    <div className={`
      relative rounded-2xl shadow-lg overflow-hidden transition-all 
      ${popular ? 'border-2 border-emerald-500 transform scale-105 md:-translate-y-2' : 'border border-gray-200'}
      ${isCurrentPlan && hasActiveSub ? 'bg-emerald-50' : 'bg-white'}
    `}>
      {popular && (
        <div className="absolute top-0 inset-x-0 bg-emerald-500 text-white text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}
      
      {isCurrentPlan && hasActiveSub && (
        <div className="absolute top-0 inset-x-0 bg-emerald-600 text-white text-center py-2 text-sm font-medium">
          Current Plan
        </div>
      )}
      
      <div className={`px-6 pt-8 ${popular || (isCurrentPlan && hasActiveSub) ? 'pt-12' : 'pt-8'}`}>
        <h3 className={`text-2xl font-bold mb-2 ${popular ? 'mt-5' : ''}`}>{product.name}</h3>
        <p className="text-gray-600 mb-6 h-20">{product.description}</p>
        
        <div className="mb-6">
          <span className="text-5xl font-bold">${product.price}</span>
          <span className="text-gray-600 ml-2">
            {product.mode === 'subscription' ? `/ ${product.interval}` : ''}
          </span>
        </div>

        {/* Email Verification Warning */}
        {user && !isEmailVerified && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
            <div className="flex items-start">
              <AlertTriangle className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-amber-700">
                Verify your email to subscribe
              </p>
            </div>
          </div>
        )}
        
        <button 
          onClick={handleCheckout}
          disabled={isButtonDisabled}
          className={`
            w-full py-3 px-4 rounded-lg font-medium mb-6 transition-all duration-200
            ${isButtonDisabled
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : popular 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800'
            }
          `}
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin mx-auto" />
          ) : (
            getButtonText()
          )}
        </button>
      </div>
      
      <div className="bg-gray-50 px-6 py-8 h-full">
        <h4 className="font-medium mb-4 text-gray-800">Features include:</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Real-time conversation insights</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Advanced objection handling</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Automated follow-up emails</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Unlimited call analysis</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Priority support</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;