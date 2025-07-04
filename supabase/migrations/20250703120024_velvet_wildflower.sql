/*
  # Remove Foreign Key Constraint and Fix User Signup

  1. Changes
    - Remove foreign key constraint from user_plans.user_id
    - Drop the trigger that creates user plans on signup
    - User plans will be created manually after user confirmation

  2. Security
    - Keep RLS disabled on user_plans as currently configured
    - Maintain existing policies and structure

  3. Notes
    - This prevents database errors during user signup
    - User plans will need to be created through application logic after user exists
*/

-- Remove the foreign key constraint from user_plans.user_id
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'user_plans_user_id_fkey'
    AND table_name = 'user_plans'
  ) THEN
    ALTER TABLE user_plans DROP CONSTRAINT user_plans_user_id_fkey;
  END IF;
END $$;

-- Drop the trigger that automatically creates user plans on signup
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'on_auth_user_created'
  ) THEN
    DROP TRIGGER on_auth_user_created ON auth.users;
  END IF;
END $$;

-- Drop the function that creates user plans (no longer needed)
DROP FUNCTION IF EXISTS create_user_plan();

-- Add a unique constraint on subscription_id in stripe_subscriptions if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'stripe_subscriptions_subscription_id_unique'
    AND table_name = 'stripe_subscriptions'
  ) THEN
    ALTER TABLE stripe_subscriptions 
    ADD CONSTRAINT stripe_subscriptions_subscription_id_unique 
    UNIQUE (subscription_id);
  END IF;
END $$;

-- Now we can safely add the foreign key constraint for stripe_subscription_id
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'fk_user_plans_stripe_subscription'
    AND table_name = 'user_plans'
  ) THEN
    ALTER TABLE user_plans 
    ADD CONSTRAINT fk_user_plans_stripe_subscription 
    FOREIGN KEY (subscription_id) REFERENCES stripe_subscriptions(subscription_id) ON DELETE SET NULL;
  END IF;
END $$;

-- Add subscription_id column to user_plans if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_plans' AND column_name = 'subscription_id'
  ) THEN
    ALTER TABLE user_plans ADD COLUMN subscription_id text;
  END IF;
END $$;

-- Create index for the new subscription_id column
CREATE INDEX IF NOT EXISTS idx_user_plans_subscription_id ON user_plans(subscription_id);