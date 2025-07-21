import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PricingCard from '../PricingCard'
import { useAuth } from '../../contexts/AuthContext'
import { useSubscription } from '../../hooks/useSubscription'
import { stripeProducts } from '../../stripe-config'
import { mockFreeUser, mockPaidUser, mockActiveSubscription } from '../../test/mocks/subscriptionMocks'

// Mock the hooks
vi.mock('../../contexts/AuthContext')
vi.mock('../../hooks/useSubscription')

// Mock fetch for checkout API
global.fetch = vi.fn()

const renderPricingCard = (popular = false) => {
  return render(
    <BrowserRouter>
      <PricingCard product={stripeProducts[0]} popular={popular} />
    </BrowserRouter>
  )
}

describe('PricingCard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(fetch).mockClear()
  })

  describe('when user is not signed in', () => {
    it('should show sign in required button', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      vi.mocked(useSubscription).mockReturnValue({
        subscription: null,
        loading: false,
        error: null,
        hasActiveSubscription: () => false,
        isSubscriptionCanceled: () => false,
        willCancelAtPeriodEnd: () => false,
        refetch: vi.fn()
      })

      renderPricingCard()
      expect(screen.getByText('Sign In Required')).toBeInTheDocument()
    })
  })

  describe('when user has free plan', () => {
    it('should show start subscription button', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: mockFreeUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      vi.mocked(useSubscription).mockReturnValue({
        subscription: null,
        loading: false,
        error: null,
        hasActiveSubscription: () => false,
        isSubscriptionCanceled: () => false,
        willCancelAtPeriodEnd: () => false,
        refetch: vi.fn()
      })

      renderPricingCard()
      expect(screen.getByText('Start Subscription')).toBeInTheDocument()
    })

    it('should initiate checkout when clicked', async () => {
      vi.mocked(useAuth).mockReturnValue({
        user: mockFreeUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      vi.mocked(useSubscription).mockReturnValue({
        subscription: null,
        loading: false,
        error: null,
        hasActiveSubscription: () => false,
        isSubscriptionCanceled: () => false,
        willCancelAtPeriodEnd: () => false,
        refetch: vi.fn()
      })

      // Mock successful checkout response
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ url: 'https://checkout.stripe.com/test' })
      } as Response)

      // Mock window.location.href
      delete (window as any).location
      window.location = { href: '' } as any

      renderPricingCard()
      
      const button = screen.getByText('Start Subscription')
      fireEvent.click(button)

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          expect.stringContaining('/functions/v1/stripe-checkout'),
          expect.objectContaining({
            method: 'POST',
            headers: expect.objectContaining({
              'Authorization': 'Bearer token'
            })
          })
        )
      })
    })
  })

  describe('when user has active subscription', () => {
    it('should show current plan button', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: mockPaidUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      vi.mocked(useSubscription).mockReturnValue({
        subscription: { ...mockActiveSubscription, price_id: stripeProducts[0].priceId },
        loading: false,
        error: null,
        hasActiveSubscription: () => true,
        isSubscriptionCanceled: () => false,
        willCancelAtPeriodEnd: () => false,
        refetch: vi.fn()
      })

      renderPricingCard()
      expect(screen.getByRole('button', { name: 'Current Plan' })).toBeInTheDocument()
    })

    it('should disable button for current plan', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: mockPaidUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      vi.mocked(useSubscription).mockReturnValue({
        subscription: { ...mockActiveSubscription, price_id: stripeProducts[0].priceId },
        loading: false,
        error: null,
        hasActiveSubscription: () => true,
        isSubscriptionCanceled: () => false,
        willCancelAtPeriodEnd: () => false,
        refetch: vi.fn()
      })

      renderPricingCard()
      const button = screen.getByRole('button', { name: 'Current Plan' })
      expect(button).toBeDisabled()
    })
  })

  describe('when user email is not verified', () => {
    it('should show verify email first button', () => {
      const unverifiedUser = {
        ...mockFreeUser,
        email_confirmed_at: null
      }

      vi.mocked(useAuth).mockReturnValue({
        user: unverifiedUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      vi.mocked(useSubscription).mockReturnValue({
        subscription: null,
        loading: false,
        error: null,
        hasActiveSubscription: () => false,
        isSubscriptionCanceled: () => false,
        willCancelAtPeriodEnd: () => false,
        refetch: vi.fn()
      })

      renderPricingCard()
      expect(screen.getByText('Verify Email First')).toBeInTheDocument()
    })

    it('should show email verification warning', () => {
      const unverifiedUser = {
        ...mockFreeUser,
        email_confirmed_at: null
      }

      vi.mocked(useAuth).mockReturnValue({
        user: unverifiedUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      vi.mocked(useSubscription).mockReturnValue({
        subscription: null,
        loading: false,
        error: null,
        hasActiveSubscription: () => false,
        isSubscriptionCanceled: () => false,
        willCancelAtPeriodEnd: () => false,
        refetch: vi.fn()
      })

      renderPricingCard()
      expect(screen.getByText('Verify your email to subscribe')).toBeInTheDocument()
    })
  })
})