import '@testing-library/jest-dom'

// Mock environment variables
Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_SUPABASE_URL: 'https://test.supabase.co',
    VITE_SUPABASE_ANON_KEY: 'test-anon-key',
    MODE: 'test'
  },
  writable: true
})

// Mock Supabase
vi.mock('../lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(() => ({
        data: { subscription: { unsubscribe: vi.fn() } }
      })),
      signUp: vi.fn(),
      signInWithPassword: vi.fn(),
      signOut: vi.fn(),
      getUser: vi.fn(),
      resend: vi.fn()
    },
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          maybeSingle: vi.fn(),
          single: vi.fn(),
          limit: vi.fn(() => ({
            maybeSingle: vi.fn()
          }))
        })),
        is: vi.fn(() => ({
          maybeSingle: vi.fn()
        }))
      })),
      insert: vi.fn(),
      upsert: vi.fn(),
      update: vi.fn(),
      delete: vi.fn()
    }))
  }
}))

// Mock analytics
vi.mock('../lib/analytics', () => ({
  analytics: {
    page: vi.fn(),
    track: vi.fn(),
    identify: vi.fn(),
    setUserProperties: vi.fn(),
    reset: vi.fn(),
    trackSignUp: vi.fn(),
    trackSignIn: vi.fn(),
    trackSubscription: vi.fn(),
    trackPricingInteraction: vi.fn(),
    trackDownload: vi.fn(),
    trackDemoInteraction: vi.fn()
  }
}))