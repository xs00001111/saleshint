# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SalesHint is a React-based AI sales assistant platform that provides real-time conversation guidance, objection handling, and automated follow-ups for sales teams. The application uses Supabase for backend services, Stripe for payments, and is deployed on Netlify.

## Development Commands

### Core Development
- `npm run dev` - Start Vite development server
- `npm run start` - Start Netlify dev server (includes serverless functions)
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint
- `npm test` - Run Vitest tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

## Environment Setup

### Required Environment Variables
```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Optional (for Stripe functionality)
```bash
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

**Important**: The application has built-in environment variable validation with mock clients for development when Supabase is not configured. Check `src/lib/supabase.ts` for implementation details.

## Architecture Overview

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6 with extensive SEO-focused landing pages
- **Styling**: Tailwind CSS with custom components
- **State Management**: React Context for authentication
- **Testing**: Vitest with Testing Library

### Backend Services
- **Database & Auth**: Supabase
- **Payments**: Stripe with Edge Functions
- **Analytics**: PostHog integration
- **Deployment**: Netlify with serverless functions

### Key Directories
```
src/
├── components/          # Reusable UI components
├── contexts/           # React Context providers (AuthContext)
├── hooks/              # Custom React hooks (useSubscription)
├── lib/                # Utility libraries (supabase, analytics)
├── pages/              # Route components (60+ SEO landing pages)
└── test/               # Test utilities and mocks
```

### Database Schema (Supabase)
- User authentication handled by Supabase Auth
- Custom tables for user plans and subscriptions
- Database triggers automatically create free plans for new users
- Stripe webhook integration via Edge Functions

## Testing Strategy

### Test Configuration
- **Framework**: Vitest with jsdom environment
- **Setup**: `src/test/setup.ts` configures test environment
- **Mocks**: Subscription mocks in `src/test/mocks/`

### Running Specific Tests
```bash
# Run single test file
npm test src/components/__tests__/PricingCard.test.tsx

# Run tests in watch mode
npm test -- --watch

# Run integration tests
npm test src/test/integration/
```

## Key Components

### Authentication System
- **AuthContext** (`src/contexts/AuthContext.tsx`): Manages user state and auth methods
- **Supabase Integration** (`src/lib/supabase.ts`): Client setup with fallback mock for development
- **Analytics Tracking**: PostHog events for sign-up, sign-in, and user identification

### Payment Integration
- **Stripe Configuration** (`src/stripe-config.ts`): Product definitions and pricing
- **Edge Functions**: Located in `supabase/functions/` for webhook processing
- **Subscription Management**: Custom hook `useSubscription` with comprehensive testing

### SEO Landing Pages
The application includes 60+ SEO-optimized landing pages focused on:
- AI sales tools and assistance
- Real-time conversation guidance
- Objection handling scripts
- Sales productivity tools
- Industry-specific solutions

## Development Guidelines

### Component Patterns
- Use TypeScript interfaces for all props
- Follow existing component structure in `src/components/`
- Implement proper error boundaries and loading states
- Use React Context for global state management

### Supabase Integration
- Always check for environment variables before making Supabase calls
- Use the mock client patterns for development without backend
- Handle authentication state changes properly via AuthContext
- Follow the established pattern for database queries with error handling

### Stripe Integration
- Product configurations are centralized in `src/stripe-config.ts`
- Webhook processing happens via Supabase Edge Functions
- Subscription state is managed through the `useSubscription` hook

### Testing Requirements
- Write unit tests for new components using Testing Library
- Mock external dependencies (Supabase, Stripe, analytics)
- Use the established test patterns in existing test files
- Integration tests should cover critical user flows

## Deployment Notes

- Application deploys automatically to Netlify from main branch
- Environment variables must be configured in Netlify dashboard
- Supabase Edge Functions handle serverless backend logic
- Build process includes automatic Tailwind CSS optimization