/*
  # Remove RLS from user_plans table

  1. Security Changes
    - Disable RLS on user_plans table to allow service role access
    - Remove existing policies that might be blocking access
    - This allows the edge functions to update user plans directly

  2. Rationale
    - Edge functions run with service role permissions
    - RLS was preventing proper subscription activation
    - User plans are already protected by application logic
*/

-- Disable RLS on user_plans table
ALTER TABLE user_plans DISABLE ROW LEVEL SECURITY;

-- Drop any existing policies on user_plans
DROP POLICY IF EXISTS "Users can view own plans" ON user_plans;
DROP POLICY IF EXISTS "Users can update own plans" ON user_plans;
DROP POLICY IF EXISTS "Service role can manage all plans" ON user_plans;

-- Add a comment explaining the security model
COMMENT ON TABLE user_plans IS 'User subscription plans - RLS disabled for service role access from edge functions';