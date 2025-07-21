import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor, act } from '@testing-library/react'
import { useSubscription } from '../useSubscription'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'
import { 
  mockFreeUser, 
  mockPaidUser, 
  mockActiveSubscription, 
  mockInactiveSubscription 
} from '../../test/mocks/subscriptionMocks'

// Mock the useAuth hook
vi.mock('../../contexts/AuthContext')

describe('useSubscription', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('when user is not signed in', () => {
    it('should return null subscription and not loading', async () => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      const { result } = renderHook(() => useSubscription())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.subscription).toBe(null)
      expect(result.current.hasActiveSubscription()).toBe(false)
      expect(result.current.error).toBe(null)
    })
  })

  describe('when user has free plan', () => {
    it('should return no subscription for free user', async () => {
      vi.mocked(useAuth).mockReturnValue({
        user: mockFreeUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      // Mock Supabase responses
      const mockSupabaseFrom = vi.fn(() => ({
        select: vi.fn(() => ({
          eq: vi.fn(() => ({
            maybeSingle: vi.fn().mockResolvedValue({ data: null, error: null })
          })),
          limit: vi.fn(() => ({
            maybeSingle: vi.fn().mockResolvedValue({ data: null, error: null })
          }))
        })),
        upsert: vi.fn().mockResolvedValue({ error: null })
      }))

      vi.mocked(supabase.from).mockImplementation(mockSupabaseFrom)

      const { result } = renderHook(() => useSubscription())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.subscription).toBe(null)
      expect(result.current.hasActiveSubscription()).toBe(false)
    })
  })

  describe('when user has active subscription', () => {
    it('should return active subscription for paid user', async () => {
      vi.mocked(useAuth).mockReturnValue({
        user: mockPaidUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      // Mock Supabase responses
      const mockSupabaseFrom = vi.fn((table: string) => {
        if (table === 'stripe_user_subscriptions') {
          return {
            select: vi.fn(() => ({
              limit: vi.fn(() => ({
                maybeSingle: vi.fn().mockResolvedValue({ 
                  data: mockActiveSubscription, 
                  error: null 
                })
              }))
            }))
          }
        }
        if (table === 'user_plans') {
          return {
            select: vi.fn(() => ({
              eq: vi.fn(() => ({
                maybeSingle: vi.fn().mockResolvedValue({ 
                  data: { id: 1, plan_type: 'monthly', status: 'active' }, 
                  error: null 
                })
              }))
            })),
            upsert: vi.fn().mockResolvedValue({ error: null })
          }
        }
        return {
          select: vi.fn(() => ({
            eq: vi.fn(() => ({
              maybeSingle: vi.fn().mockResolvedValue({ data: null, error: null })
            }))
          })),
          upsert: vi.fn().mockResolvedValue({ error: null })
        }
      })

      vi.mocked(supabase.from).mockImplementation(mockSupabaseFrom)

      const { result } = renderHook(() => useSubscription())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.subscription).toEqual(expect.objectContaining({
        subscription_status: 'active',
        subscription_id: 'sub_123'
      }))
      expect(result.current.hasActiveSubscription()).toBe(true)
    })
  })

  describe('when user has canceled subscription', () => {
    it('should return canceled subscription status', async () => {
      vi.mocked(useAuth).mockReturnValue({
        user: mockPaidUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      const canceledSubscription = {
        ...mockActiveSubscription,
        subscription_status: 'canceled'
      }

      const mockSupabaseFrom = vi.fn((table: string) => {
        if (table === 'stripe_user_subscriptions') {
          return {
            select: vi.fn(() => ({
              limit: vi.fn(() => ({
                maybeSingle: vi.fn().mockResolvedValue({ 
                  data: canceledSubscription, 
                  error: null 
                })
              }))
            }))
          }
        }
        return {
          select: vi.fn(() => ({
            eq: vi.fn(() => ({
              maybeSingle: vi.fn().mockResolvedValue({ data: null, error: null })
            }))
          })),
          upsert: vi.fn().mockResolvedValue({ error: null })
        }
      })

      vi.mocked(supabase.from).mockImplementation(mockSupabaseFrom)

      const { result } = renderHook(() => useSubscription())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.subscription?.subscription_status).toBe('canceled')
      expect(result.current.hasActiveSubscription()).toBe(false)
      expect(result.current.isSubscriptionCanceled()).toBe(true)
    })
  })

  describe('refetch functionality', () => {
    it('should refetch subscription data when called', async () => {
      vi.mocked(useAuth).mockReturnValue({
        user: mockPaidUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      const mockMaybeSingle = vi.fn()
        .mockResolvedValueOnce({ data: null, error: null }) // First call
        .mockResolvedValueOnce({ data: mockActiveSubscription, error: null }) // Refetch call

      const mockSupabaseFrom = vi.fn((table: string) => {
        if (table === 'stripe_user_subscriptions') {
          return {
            select: vi.fn(() => ({
              limit: vi.fn(() => ({
                maybeSingle: mockMaybeSingle
              }))
            }))
          }
        }
        return {
          select: vi.fn(() => ({
            eq: vi.fn(() => ({
              maybeSingle: vi.fn().mockResolvedValue({ data: null, error: null })
            }))
          })),
          upsert: vi.fn().mockResolvedValue({ error: null })
        }
      })

      vi.mocked(supabase.from).mockImplementation(mockSupabaseFrom)

      const { result } = renderHook(() => useSubscription())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.subscription).toBe(null)

      // Trigger refetch
      await act(async () => {
        await result.current.refetch()
      })

      await waitFor(() => {
        expect(result.current.subscription).toEqual(expect.objectContaining({
          subscription_status: 'active'
        }))
      })
    })
  })
})