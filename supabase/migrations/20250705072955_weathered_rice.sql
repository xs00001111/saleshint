/*
  # Fix Stripe Customers RLS and Permissions

  1. Security Changes
    - Ensure service role has full access to stripe_customers
    - Add policy for authenticated users to view their own data
    - Make sure RLS is properly configured

  2. Indexes
    - Add performance indexes for common queries
*/

-- Ensure RLS is enabled on stripe_customers
ALTER TABLE stripe_customers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Service role can manage stripe customers" ON stripe_customers;
DROP POLICY IF EXISTS "Users can view their own customer data" ON stripe_customers;

-- Create comprehensive service role policy
CREATE POLICY "Service role can manage stripe customers"
  ON stripe_customers
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create policy for authenticated users to view their own data
CREATE POLICY "Users can view their own customer data"
  ON stripe_customers
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() AND deleted_at IS NULL);

-- Ensure proper indexes exist for performance
CREATE INDEX IF NOT EXISTS idx_stripe_customers_user_id ON stripe_customers(user_id);
CREATE INDEX IF NOT EXISTS idx_stripe_customers_customer_id ON stripe_customers(customer_id);

-- Grant explicit permissions to service role
GRANT ALL ON stripe_customers TO service_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO service_role;