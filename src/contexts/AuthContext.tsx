import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { analytics } from '../lib/analytics'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Error getting session:', error)
        // Clear any invalid session data
        setSession(null)
        setUser(null)
      } else {
        setSession(session)
        setUser(session?.user ?? null)
        
        // Identify user in PostHog if logged in
        if (session?.user) {
          analytics.identify(session.user.id, {
            email: session.user.email,
            email_verified: !!session.user.email_confirmed_at,
            created_at: session.user.created_at
          });
        }
      }
      
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state change:', event, session)
      
      // Handle token refresh errors
      if (event === 'TOKEN_REFRESHED' && !session) {
        console.warn('Token refresh failed, clearing session')
        setSession(null)
        setUser(null)
        analytics.reset()
        setLoading(false)
        return
      }
      
      setSession(session)
      setUser(session?.user ?? null)
      
      // Handle PostHog identification on auth state changes
      if (session?.user) {
        analytics.identify(session.user.id, {
          email: session.user.email,
          email_verified: !!session.user.email_confirmed_at,
          created_at: session.user.created_at
        });
      } else {
        // Reset PostHog on logout
        analytics.reset();
      }
      
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    
    // Track sign up attempt
    if (!error) {
      analytics.trackSignUp('email');
      
      // Note: Free plan creation is handled automatically by database trigger
      // No need to manually create user plan here
    }
    
    return { error }
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    // Track sign in attempt
    if (!error) {
      analytics.trackSignIn('email');
    }
    
    return { error }
  }

  const signOut = async () => {
    // Track sign out
    analytics.track('user_signed_out');
    
    await supabase.auth.signOut()
    
    // Reset PostHog after sign out
    analytics.reset();
  }

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}