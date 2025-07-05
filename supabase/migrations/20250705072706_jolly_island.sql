/*
  # Add service role policy for stripe_customers table

  1. Security
    - Add policy to allow service role access to stripe_customers table
    - This is needed for the stripe-checkout edge function to work properly
*/

-- Add policy to allow service role to access stripe_customers table
CREATE POLICY "Service role can manage stripe customers"
  ON stripe_customers
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);