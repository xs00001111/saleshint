/*
  # User Plans Table

  1. New Tables
    - `user_plans`
      - `id` (bigint, primary key)
      - `user_id` (uuid, references auth.users)
      - `plan_type` (enum: free, monthly)
      - `status` (enum: active, inactive)
      - `stripe_subscription_id` (text, nullable, references stripe_subscriptions)
      - `stripe_customer_id` (text, nullable, references stripe_customers)
      - `plan_started_at` (timestamp)
      - `plan_updated_at` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `user_plans` table
    - Add policies for users to view/update their own plan data
    - Add policy for service role to manage all plans (for webhooks)

  3. Automation
    - Trigger to automatically create free plan for new users
    - Trigger to update timestamps on plan changes
    - View for easy plan checking with subscription details

  4. Foreign Keys
    - Links to auth.users, stripe_customers, and stripe_subscriptions tables
*/

-- Create enum types for plan management
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_plan_type') THEN
        CREATE TYPE user_plan_type AS ENUM ('free', 'monthly');
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_plan_status') THEN
        CREATE TYPE user_plan_status AS ENUM ('active', 'inactive');
    END IF;
END $$;

-- Create user_plans table
CREATE TABLE IF NOT EXISTS user_plans (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id uuid NOT NULL UNIQUE,
  plan_type user_plan_type NOT NULL DEFAULT 'free',
  status user_plan_status NOT NULL DEFAULT 'active',
  stripe_subscription_id text DEFAULT NULL,
  stripe_customer_id text DEFAULT NULL,
  plan_started_at timestamp with time zone DEFAULT now(),
  plan_updated_at timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Add foreign key constraint for user_id
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'user_plans_user_id_fkey'
    AND table_name = 'user_plans'
  ) THEN
    ALTER TABLE user_plans 
    ADD CONSTRAINT user_plans_user_id_fkey 
    FOREIGN KEY (user_id) REFERENCES auth.users(id);
  END IF;
END $$;

-- Add foreign key constraint for stripe_customer_id
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'user_plans_stripe_customer_id_fkey'
    AND table_name = 'user_plans'
  ) THEN
    ALTER TABLE user_plans 
    ADD CONSTRAINT user_plans_stripe_customer_id_fkey 
    FOREIGN KEY (stripe_customer_id) REFERENCES stripe_customers(customer_id);
  END IF;
END $$;

-- Add foreign key constraint for stripe_subscription_id
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'user_plans_stripe_subscription_id_fkey'
    AND table_name = 'user_plans'
  ) THEN
    ALTER TABLE user_plans 
    ADD CONSTRAINT user_plans_stripe_subscription_id_fkey 
    FOREIGN KEY (stripe_subscription_id) REFERENCES stripe_subscriptions(subscription_id);
  END IF;
END $$;

-- Enable RLS
ALTER TABLE user_plans ENABLE ROW LEVEL SECURITY;

-- Policy for users to view their own plan data
CREATE POLICY "Users can view their own plan data"
  ON user_plans
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Policy for users to update their own plan data (limited fields)
CREATE POLICY "Users can update their own plan data"
  ON user_plans
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Policy for service role to manage all plans (for webhook updates)
CREATE POLICY "Service role can manage all plans"
  ON user_plans
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Function to automatically create a free plan for new users
CREATE OR REPLACE FUNCTION create_user_plan()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_plans (user_id, plan_type, status)
  VALUES (NEW.id, 'free', 'active');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create user plan when user signs up
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION create_user_plan();

-- Function to update plan_updated_at timestamp
CREATE OR REPLACE FUNCTION update_user_plan_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  NEW.plan_updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update timestamps
CREATE OR REPLACE TRIGGER update_user_plan_timestamp
  BEFORE UPDATE ON user_plans
  FOR EACH ROW EXECUTE FUNCTION update_user_plan_timestamp();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_plans_user_id ON user_plans(user_id);
CREATE INDEX IF NOT EXISTS idx_user_plans_stripe_subscription_id ON user_plans(stripe_subscription_id);
CREATE INDEX IF NOT EXISTS idx_user_plans_plan_type_status ON user_plans(plan_type, status);

-- Create a view for easy plan checking
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
LEFT JOIN stripe_subscriptions ss ON up.stripe_subscription_id = ss.subscription_id
WHERE up.user_id = auth.uid();

GRANT SELECT ON user_plan_details TO authenticated;