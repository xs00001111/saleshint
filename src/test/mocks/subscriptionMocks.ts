export const mockFreeUser = {
  id: 'user-123',
  email: 'test@example.com',
  email_confirmed_at: '2024-01-01T00:00:00Z',
  created_at: '2024-01-01T00:00:00Z'
}

export const mockPaidUser = {
  id: 'user-456',
  email: 'paid@example.com',
  email_confirmed_at: '2024-01-01T00:00:00Z',
  created_at: '2024-01-01T00:00:00Z'
}

export const mockFreePlan = {
  user_id: 'user-123',
  plan_type: 'free',
  status: 'active',
  stripe_subscription_id: null,
  stripe_customer_id: null,
  plan_started_at: '2024-01-01T00:00:00Z'
}

export const mockPaidPlan = {
  user_id: 'user-456',
  plan_type: 'monthly',
  status: 'active',
  stripe_subscription_id: 'sub_123',
  stripe_customer_id: 'cus_123',
  plan_started_at: '2024-01-01T00:00:00Z'
}

export const mockActiveSubscription = {
  customer_id: 'cus_123',
  subscription_id: 'sub_123',
  subscription_status: 'active',
  price_id: 'price_123',
  current_period_start: Math.floor(Date.now() / 1000),
  current_period_end: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60), // 30 days from now
  cancel_at_period_end: false,
  payment_method_brand: 'visa',
  payment_method_last4: '4242'
}

export const mockInactiveSubscription = {
  customer_id: 'cus_123',
  subscription_id: null,
  subscription_status: 'canceled',
  price_id: null,
  current_period_start: null,
  current_period_end: null,
  cancel_at_period_end: false,
  payment_method_brand: null,
  payment_method_last4: null
}