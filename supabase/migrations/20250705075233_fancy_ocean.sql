/*
  # Fix user_plans table constraints for upsert operations

  1. Constraint Fixes
    - Add unique constraint on user_id for user_plans table
    - This enables proper upsert operations with ON CONFLICT
    - Ensures each user can only have one plan record

  2. Index Optimization
    - Ensure proper indexes exist for performance
    - Add unique index on user_id if not exists

  3. Data Integrity
    - Clean up any duplicate records before adding constraint
    - Ensure data consistency
*/

-- First, clean up any potential duplicate records
-- Keep the most recent record for each user_id
DELETE FROM user_plans 
WHERE id NOT IN (
  SELECT DISTINCT ON (user_id) id
  FROM user_plans
  ORDER BY user_id, updated_at DESC NULLS LAST, created_at DESC NULLS LAST, id DESC
);

-- Add unique constraint on user_id if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'user_plans_user_id_unique'
    AND table_name = 'user_plans'
  ) THEN
    ALTER TABLE user_plans 
    ADD CONSTRAINT user_plans_user_id_unique 
    UNIQUE (user_id);
  END IF;
END $$;

-- Ensure the unique index exists for performance
CREATE UNIQUE INDEX IF NOT EXISTS idx_user_plans_user_id_unique ON user_plans(user_id);

-- Grant proper permissions to service role
GRANT ALL ON user_plans TO service_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- Update the trigger function to handle conflicts gracefully
CREATE OR REPLACE FUNCTION public.create_user_plan_on_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Use INSERT ... ON CONFLICT DO NOTHING to avoid duplicates
  INSERT INTO public.user_plans (
    user_id,
    plan_type,
    status,
    stripe_subscription_id,
    stripe_customer_id,
    subscription_id,
    plan_started_at,
    plan_updated_at,
    created_at,
    updated_at
  ) VALUES (
    NEW.id,
    'free',
    'active',
    NULL,
    NULL,
    NULL,
    NOW(),
    NOW(),
    NOW(),
    NOW()
  )
  ON CONFLICT (user_id) DO NOTHING;
  
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log the error but don't fail the user creation
    RAISE WARNING 'Failed to create user plan for user %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$;