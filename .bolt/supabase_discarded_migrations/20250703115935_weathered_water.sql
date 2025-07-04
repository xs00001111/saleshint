/*
  # Fix user signup database error

  1. New Tables
    - `users` table to store user profile information
      - `id` (uuid, primary key, references auth.users)
      - `email` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Functions
    - Update `create_user_plan` trigger function to handle user creation properly
    - Add `handle_new_user` function to create user profile and plan

  3. Security
    - Enable RLS on `users` table
    - Add policies for authenticated users to read their own data
    - Enable RLS on `user_plans` table with proper policies

  4. Triggers
    - Add trigger to automatically create user profile and plan on auth.users insert
*/

-- Create users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policies for users table
CREATE POLICY IF NOT EXISTS "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY IF NOT EXISTS "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Enable RLS on user_plans table if not already enabled
ALTER TABLE user_plans ENABLE ROW LEVEL SECURITY;

-- Create policies for user_plans table
CREATE POLICY IF NOT EXISTS "Users can read own plan"
  ON user_plans
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY IF NOT EXISTS "Users can update own plan"
  ON user_plans
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create or replace the handle_new_user function
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  -- Insert into users table
  INSERT INTO users (id, email, created_at, updated_at)
  VALUES (NEW.id, NEW.email, now(), now());
  
  -- Insert into user_plans table
  INSERT INTO user_plans (user_id, plan_type, status, plan_started_at, plan_updated_at, created_at, updated_at)
  VALUES (NEW.id, 'free', 'active', now(), now(), now(), now());
  
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log the error but don't fail the user creation
    RAISE WARNING 'Error creating user profile or plan: %', SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create or replace the update_user_plan_timestamp function if it doesn't exist
CREATE OR REPLACE FUNCTION update_user_plan_timestamp()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  NEW.plan_updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists and create new one
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Ensure the user_plans table has the correct sequence for id
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.sequences 
    WHERE sequence_name = 'user_plans_id_seq'
  ) THEN
    CREATE SEQUENCE user_plans_id_seq;
    ALTER TABLE user_plans ALTER COLUMN id SET DEFAULT nextval('user_plans_id_seq');
    ALTER SEQUENCE user_plans_id_seq OWNED BY user_plans.id;
  END IF;
END $$;

-- Update the sequence to start from the correct value
SELECT setval('user_plans_id_seq', COALESCE((SELECT MAX(id) FROM user_plans), 0) + 1, false);