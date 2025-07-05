import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { getProductByPriceId } from '../stripe-config';

export interface Subscription {
  customer_id: string;
  subscription_id: string | null;
  subscription_status: string;
  price_id: string | null;
  current_period_start: number | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
  payment_method_brand: string | null;
  payment_method_last4: string | null;
  product_name?: string;
}

export const useSubscription = () => {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    const fetchSubscription = async () => {
      try {
        setLoading(true);
        setError(null);

        // First check if user has any plan at all
        const { data: userPlan, error: planError } = await supabase
          .from('user_plans')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();

        if (planError) {
          console.error('Error fetching user plan:', planError);
        }

        // If no plan exists, create a free plan (fallback safety)
        if (!userPlan) {
          console.log('🆓 No user plan found, creating free plan for user:', user.id);
          const { error: createPlanError } = await supabase
            .from('user_plans')
            .insert({
              user_id: user.id,
              plan_type: 'free',
              status: 'active',
              plan_started_at: new Date().toISOString(),
              plan_updated_at: new Date().toISOString()
            });

          if (createPlanError) {
            console.error('Failed to create fallback free plan:', createPlanError);
          } else {
            console.log('✅ Created fallback free plan for user:', user.id);
          }
        }

        // Now fetch subscription data
        const { data, error: fetchError } = await supabase
          .from('stripe_user_subscriptions')
          .select('*')
          .limit(1)
          .maybeSingle();

        if (fetchError) {
          console.error('Error fetching subscription:', fetchError);
          setError('Failed to fetch subscription data');
          return;
        }

        if (data) {
          // Enhance subscription data with product information
          const product = data.price_id ? getProductByPriceId(data.price_id) : null;
          const enhancedSubscription = {
            ...data,
            product_name: product?.name || 'Unknown Product'
          };
          setSubscription(enhancedSubscription);
        } else {
          setSubscription(null);
        }
      } catch (err) {
        console.error('Unexpected error fetching subscription:', err);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [user]);

  const hasActiveSubscription = () => {
    return subscription?.subscription_status === 'active' || subscription?.subscription_status === 'trialing';
  };

  const isSubscriptionCanceled = () => {
    return subscription?.subscription_status === 'canceled';
  };

  const willCancelAtPeriodEnd = () => {
    return subscription?.cancel_at_period_end === true;
  };

  return {
    subscription,
    loading,
    error,
    hasActiveSubscription,
    isSubscriptionCanceled,
    willCancelAtPeriodEnd,
    refetch: () => {
      if (user) {
        setLoading(true);
        // Re-trigger the effect by updating a dependency
        setError(null);
      }
    }
  };
};