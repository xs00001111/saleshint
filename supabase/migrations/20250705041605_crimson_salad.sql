/*
  # Create free plan on user signup

  1. New Functions
    - `create_user_plan_on_signup()` - Creates a free plan when a user signs up
    - `handle_new_user()` - Trigger function to automatically create user plan

  2. Triggers
    - Trigger on auth.users insert to create free plan automatically

  3. Security
    - Function runs with security definer to access auth schema
    - Ensures every new user gets a free plan by default
*/

-- Function to create a user plan when a user signs up
CREATE OR REPLACE FUNCTION public.create_user_plan_on_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Insert a free plan for the new user
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
  );
  
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log the error but don't fail the user creation
    RAISE WARNING 'Failed to create user plan for user %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$;

-- Create trigger to automatically create user plan on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.create_user_plan_on_signup();

-- Backfill existing users who don't have plans
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
)
SELECT 
  au.id,
  'free',
  'active',
  NULL,
  NULL,
  NULL,
  au.created_at,
  au.created_at,
  NOW(),
  NOW()
FROM auth.users au
LEFT JOIN public.user_plans up ON au.id = up.user_id
WHERE up.user_id IS NULL;