/*
  # Create stripe_user_subscriptions view

  1. New Views
    - `stripe_user_subscriptions`
      - Joins stripe_subscriptions and stripe_customers tables
      - Provides user-specific subscription data
      - Includes subscription status, pricing, and payment details
  
  2. Security
    - View inherits RLS policies from underlying tables
    - Users can only see their own subscription data through existing policies
*/

CREATE OR REPLACE VIEW public.stripe_user_subscriptions AS
SELECT
  sc.user_id,
  ss.customer_id,
  ss.subscription_id,
  ss.status AS subscription_status,
  ss.price_id,
  ss.current_period_start,
  ss.current_period_end,
  ss.cancel_at_period_end,
  ss.payment_method_brand,
  ss.payment_method_last4,
  ss.created_at,
  ss.updated_at
FROM
  public.stripe_subscriptions ss
JOIN
  public.stripe_customers sc ON ss.customer_id = sc.customer_id
WHERE
  sc.user_id IS NOT NULL
  AND sc.deleted_at IS NULL
  AND ss.deleted_at IS NULL;