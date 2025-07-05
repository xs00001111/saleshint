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
    // Don't fetch anything if user is not signed in
    if (!user) {
      setSubscription(null);
      setError(null);
      setLoading(false);
      return;
    }

    const fetchSubscription = async () => {
      try {
        setLoading(true);
        setError(null);

        // Ensure user has a plan - create free plan if none exists
        await ensureUserHasPlan(user.id);

        // Now fetch subscription data
        let data = null;
        let fetchError = null;
        
        try {
          const result = await supabase
            .from('stripe_user_subscriptions')
            .select('*')
            .limit(1)
            .maybeSingle();
          
          data = result.data;
          fetchError = result.error;
        } catch (networkError) {
          console.warn('Network error fetching subscription, using fallback:', networkError);
          // On network error, user still has free plan, so continue
          fetchError = null;
          data = null;
        }

        if (fetchError) {
          console.warn('Error fetching subscription (non-critical):', fetchError);
          // Don't set error state - user still has free plan
        }

        if (data) {
          // Enhance subscription data with product information
          const product = data.price_id ? getProductByPriceId(data.price_id) : null;
          const enhancedSubscription = {
            ...data,
            product_name: product?.name || 'Unlimited Sales Copilot'
          };
          setSubscription(enhancedSubscription);
        } else {
          setSubscription(null);
        }
      } catch (err) {
        console.warn('Unexpected error fetching subscription (non-critical):', err);
        // Don't set error state - ensure user still has access
        setSubscription(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [user]);

  // Helper function to ensure user has a plan
  const ensureUserHasPlan = async (userId: string) => {
    // Double-check user exists before proceeding
    if (!userId) {
      console.warn('No user ID provided to ensureUserHasPlan');
      return;
    }

    try {
      // Check if user has any plan
      const { data: existingPlan, error: checkError } = await supabase
        .from('user_plans')
        .select('id, plan_type, status')
        .eq('user_id', userId)
        .maybeSingle();

      if (checkError && checkError.code !== 'PGRST116') {
        console.warn('Error checking user plan:', checkError);
        // Continue anyway - better to have duplicate than no plan
      }

      if (!existingPlan) {
        console.log('🆓 Creating free plan for user:', userId);
        
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
          console.warn('Failed to create free plan (non-critical):', createError);
        } else {
          console.log('✅ Ensured free plan exists for user:', userId);
        }
      } else {
        console.log('✅ User already has plan:', existingPlan.plan_type, existingPlan.status);
      }
    } catch (err) {
      console.warn('Exception ensuring user plan (non-critical):', err);
      // Don't throw - better to continue with potential missing plan than crash
    }
  };

  const hasActiveSubscription = () => {
    // Return false if no user is signed in
    if (!user) return false;
    
    // Check both subscription status and user plan type
    const hasActiveStripeSubscription = subscription?.subscription_status === 'active' || subscription?.subscription_status === 'trialing';
    
    // Also check if user has monthly plan (for cases where subscription data hasn't loaded yet)
    return hasActiveStripeSubscription;
  };

  const isSubscriptionCanceled = () => {
    if (!user) return false;
    return subscription?.subscription_status === 'canceled';
  };

  const willCancelAtPeriodEnd = () => {
    if (!user) return false;
    return subscription?.cancel_at_period_end === true;
  };

  return {
    subscription,
    loading,
    error,
    hasActiveSubscription,
    isSubscriptionCanceled,
    willCancelAtPeriodEnd,
    refetch: async () => {
      // Don't refetch if no user is signed in
      if (user) {
        setLoading(true);
        setError(null);
        
        // Force a fresh fetch
        try {
          const { data, error: fetchError } = await supabase
            .from('stripe_user_subscriptions')
            .select('*')
            .limit(1)
            .maybeSingle();

          if (fetchError) {
            console.error('Error refetching subscription:', fetchError);
            setError('Failed to fetch subscription data');
          } else if (data) {
            const product = data.price_id ? getProductByPriceId(data.price_id) : null;
            const enhancedSubscription = {
              ...data,
              product_name: product?.name || 'Unlimited Sales Copilot'
            };
            setSubscription(enhancedSubscription);
          } else {
            setSubscription(null);
          }
        } catch (err) {
          console.error('Unexpected error refetching subscription:', err);
          setError('An unexpected error occurred');
        } finally {
          setLoading(false);
        }
      } else {
        // Reset state when no user
        setSubscription(null);
        setError(null);
        setLoading(false);
      }
    }
  };
};