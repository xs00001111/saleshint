/*
  # Cleanup Function for Failed Subscriptions

  1. Function
    - `cleanup_failed_optimistic_subscriptions()` - Reverts optimistic activations that failed
  
  2. Purpose
    - Automatically revert users to free plan if their optimistic subscription activation failed
    - Runs periodically to clean up stale optimistic activations
*/

CREATE OR REPLACE FUNCTION cleanup_failed_optimistic_subscriptions()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  -- Revert optimistic activations older than 10 minutes that don't have active subscriptions
  UPDATE user_plans 
  SET 
    plan_type = 'free',
    status = 'inactive',
    stripe_subscription_id = NULL,
    subscription_id = NULL,
    plan_updated_at = NOW(),
    updated_at = NOW()
  WHERE 
    plan_type = 'monthly' 
    AND status = 'active'
    AND stripe_subscription_id IS NULL
    AND plan_started_at < NOW() - INTERVAL '10 minutes'
    AND user_id NOT IN (
      SELECT DISTINCT sc.user_id 
      FROM stripe_customers sc
      JOIN stripe_subscriptions ss ON sc.customer_id = ss.customer_id
      WHERE ss.status IN ('active', 'trialing')
        AND sc.user_id IS NOT NULL
        AND sc.deleted_at IS NULL
        AND ss.deleted_at IS NULL
    );
    
  -- Log the cleanup
  RAISE NOTICE 'Cleaned up failed optimistic subscription activations';
END;
$$;