import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import DashboardPage from '../DashboardPage'
import { useAuth } from '../../contexts/AuthContext'
import { useSubscription } from '../../hooks/useSubscription'
import { 
  mockFreeUser, 
  mockPaidUser, 
  mockActiveSubscription 
} from '../../test/mocks/subscriptionMocks'

// Mock the hooks
vi.mock('../../contexts/AuthContext')
vi.mock('../../hooks/useSubscription')

const renderDashboard = () => {
  return render(
    <BrowserRouter>
      <DashboardPage />
    </BrowserRouter>
  )
}

describe('DashboardPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('when user is not signed in', () => {
    it('should show loading state', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: true,
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

      renderDashboard()
      expect(screen.getByText('Loading your dashboard...')).toBeInTheDocument()
    })
  })

  describe('when user has free plan', () => {
    it('should display free trial information', async () => {
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

      renderDashboard()

      await waitFor(() => {
        expect(screen.getByText('Free Trial')).toBeInTheDocument()
        expect(screen.getByText('5 calls, 5 minutes each')).toBeInTheDocument()
        expect(screen.getByText('Download SalesHint')).toBeInTheDocument()
      })

      // Should show pricing section for free users
      expect(screen.getByText('Choose Your')).toBeInTheDocument()
    })

    it('should show upgrade button for free users', async () => {
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

      renderDashboard()

      await waitFor(() => {
        expect(screen.getByText('Upgrade Now')).toBeInTheDocument()
      })
    })
  })

  describe('when user has active subscription', () => {
    it('should display unlimited plan information', async () => {
      vi.mocked(useAuth).mockReturnValue({
        user: mockPaidUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      vi.mocked(useSubscription).mockReturnValue({
        subscription: mockActiveSubscription,
        loading: false,
        error: null,
        hasActiveSubscription: () => true,
        isSubscriptionCanceled: () => false,
        willCancelAtPeriodEnd: () => false,
        refetch: vi.fn()
      })

      renderDashboard()

      await waitFor(() => {
        expect(screen.getByText('Unlimited Sales Copilot')).toBeInTheDocument()
        expect(screen.getByText('Monthly Plan • Unlimited Usage')).toBeInTheDocument()
        expect(screen.getByText('Pro Plan')).toBeInTheDocument()
        expect(screen.getByText("You're All Set!")).toBeInTheDocument()
      })

      // Should NOT show pricing section for paid users
      expect(screen.queryByText('Choose Your')).not.toBeInTheDocument()
    })

    it('should show subscription management details', async () => {
      vi.mocked(useAuth).mockReturnValue({
        user: mockPaidUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      vi.mocked(useSubscription).mockReturnValue({
        subscription: mockActiveSubscription,
        loading: false,
        error: null,
        hasActiveSubscription: () => true,
        isSubscriptionCanceled: () => false,
        willCancelAtPeriodEnd: () => false,
        refetch: vi.fn()
      })

      renderDashboard()

      await waitFor(() => {
        expect(screen.getByText('Subscription Management')).toBeInTheDocument()
        expect(screen.getByText('•••• 4242')).toBeInTheDocument()
        expect(screen.getByText('Monthly ($20/month)')).toBeInTheDocument()
      })
    })

    it('should NOT show upgrade button for paid users', async () => {
      vi.mocked(useAuth).mockReturnValue({
        user: mockPaidUser,
        session: { access_token: 'token' } as any,
        loading: false,
        signUp: vi.fn(),
        signIn: vi.fn(),
        signOut: vi.fn()
      })

      vi.mocked(useSubscription).mockReturnValue({
        subscription: mockActiveSubscription,
        loading: false,
        error: null,
        hasActiveSubscription: () => true,
        isSubscriptionCanceled: () => false,
        willCancelAtPeriodEnd: () => false,
        refetch: vi.fn()
      })

      renderDashboard()

      await waitFor(() => {
        expect(screen.queryByText('Upgrade Now')).not.toBeInTheDocument()
      })
    })
  })

  describe('when user email is not verified', () => {
    it('should show email verification banner', async () => {
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

      renderDashboard()

      await waitFor(() => {
        expect(screen.getByText('Please verify your email address')).toBeInTheDocument()
        expect(screen.getByText('Account Access Limited')).toBeInTheDocument()
      })
    })
  })
})