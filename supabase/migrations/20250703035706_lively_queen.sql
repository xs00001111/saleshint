/*
  # Drop RLS and Security Policies for user_plans

  1. Security Changes
    - Drop all RLS policies on user_plans table
    - Disable Row Level Security on user_plans table
    - Remove security restrictions to allow direct access

  2. Notes
    - This removes all access control on the user_plans table
    - All authenticated users will have full access to all user plan data
    - Service operations will work without policy restrictions
*/

-- Drop all existing policies on user_plans table
DO $$
BEGIN
  -- Drop "Users can view their own plan data" policy if it exists
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'user_plans' 
    AND policyname = 'Users can view their own plan data'
  ) THEN
    DROP POLICY "Users can view their own plan data" ON user_plans;
  END IF;

  -- Drop "Users can update their own plan data" policy if it exists
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'user_plans' 
    AND policyname = 'Users can update their own plan data'
  ) THEN
    DROP POLICY "Users can update their own plan data" ON user_plans;
  END IF;

  -- Drop "Service role can manage all plans" policy if it exists
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'user_plans' 
    AND policyname = 'Service role can manage all plans'
  ) THEN
    DROP POLICY "Service role can manage all plans" ON user_plans;
  END IF;
END $$;

-- Disable Row Level Security on user_plans table
ALTER TABLE user_plans DISABLE ROW LEVEL SECURITY;

-- Update the user_plan_details view to remove the WHERE clause restriction
DROP VIEW IF EXISTS user_plan_details;

CREATE VIEW user_plan_details WITH (security_invoker = true) AS
SELECT
  up.user_id,
  up.plan_type,
  up.status,
  up.stripe_subscription_id,
  up.stripe_customer_id,
  up.plan_started_at,
  up.plan_updated_at,
  -- Helper columns for easy checking
  CASE 
    WHEN up.plan_type = 'free' AND up.status = 'active' THEN true
    ELSE false
  END as is_free_plan,
  CASE 
    WHEN up.plan_type = 'monthly' AND up.status = 'active' THEN true
    ELSE false
  END as has_active_subscription,
  -- Get subscription details if available
  ss.status as stripe_status,
  ss.current_period_end,
  ss.cancel_at_period_end
FROM user_plans up
LEFT JOIN stripe_subscriptions ss ON up.stripe_subscription_id = ss.subscription_id;

-- Grant permissions on the updated view
GRANT SELECT ON user_plan_details TO authenticated;
GRANT SELECT ON user_plan_details TO anon;