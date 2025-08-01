import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Debug logging to help troubleshoot environment variables
console.log('🔍 Supabase Environment Check:', {
  VITE_SUPABASE_URL: supabaseUrl ? `${supabaseUrl.slice(0, 20)}...` : 'MISSING',
  VITE_SUPABASE_ANON_KEY: supabaseAnonKey ? `${supabaseAnonKey.slice(0, 8)}...` : 'MISSING',
  NODE_ENV: import.meta.env.MODE
});

let supabase: ReturnType<typeof createClient>;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables:', {
    VITE_SUPABASE_URL: supabaseUrl ? 'Set' : 'Missing',
    VITE_SUPABASE_ANON_KEY: supabaseAnonKey ? 'Set' : 'Missing'
  })
  
  // Create a mock client for development/demo purposes
  const mockClient = {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signUp: () => Promise.resolve({ error: { message: 'Supabase not configured - please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables' } }),
      signInWithPassword: () => Promise.resolve({ error: { message: 'Supabase not configured - please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables' } }),
      signOut: () => Promise.resolve({ error: null }),
      getUser: () => Promise.resolve({ data: { user: null }, error: { message: 'Supabase not configured' } }),
      resend: () => Promise.resolve({ error: { message: 'Supabase not configured' } })
    },
    from: () => ({
      select: () => ({
        eq: () => ({
          maybeSingle: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured', code: 'SUPABASE_NOT_CONFIGURED' } }),
          single: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured', code: 'SUPABASE_NOT_CONFIGURED' } }),
          limit: () => ({
            maybeSingle: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured', code: 'SUPABASE_NOT_CONFIGURED' } })
          })
        }),
        is: () => ({
          maybeSingle: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured', code: 'SUPABASE_NOT_CONFIGURED' } })
        }),
        limit: () => ({
          maybeSingle: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured', code: 'SUPABASE_NOT_CONFIGURED' } }),
          single: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured', code: 'SUPABASE_NOT_CONFIGURED' } }),
          eq: () => ({
            maybeSingle: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured', code: 'SUPABASE_NOT_CONFIGURED' } })
          })
        })
      }),
      insert: () => Promise.resolve({ error: { message: 'Supabase not configured', code: 'SUPABASE_NOT_CONFIGURED' } }),
      upsert: () => Promise.resolve({ error: { message: 'Supabase not configured', code: 'SUPABASE_NOT_CONFIGURED' } }),
      update: () => Promise.resolve({ error: { message: 'Supabase not configured', code: 'SUPABASE_NOT_CONFIGURED' } }),
      delete: () => Promise.resolve({ error: { message: 'Supabase not configured', code: 'SUPABASE_NOT_CONFIGURED' } })
    })
  }
  
  // @ts-expect-error - Mock client for demo purposes
  supabase = mockClient
} else {
  console.log('✅ Supabase client initialized successfully');
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: 'pkce'
    }
  })
}

export { supabase }