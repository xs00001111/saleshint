// PostHog Analytics Integration
declare global {
  interface Window {
    posthog?: any;
  }
}

export const analytics = {
  // Track page views
  page: (pageName?: string) => {
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.capture('$pageview', {
        page_name: pageName
      });
    }
  },

  // Track custom events
  track: (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.capture(eventName, properties);
    }
  },

  // Identify users
  identify: (userId: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.identify(userId, properties);
    }
  },

  // Set user properties
  setUserProperties: (properties: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.setPersonProperties(properties);
    }
  },

  // Reset user (on logout)
  reset: () => {
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.reset();
    }
  },

  // Track sign up
  trackSignUp: (method: string = 'email') => {
    analytics.track('user_signed_up', {
      method,
      timestamp: new Date().toISOString()
    });
  },

  // Track sign in
  trackSignIn: (method: string = 'email') => {
    analytics.track('user_signed_in', {
      method,
      timestamp: new Date().toISOString()
    });
  },

  // Track subscription events
  trackSubscription: (action: 'started' | 'completed' | 'cancelled', planType?: string) => {
    analytics.track('subscription_' + action, {
      plan_type: planType,
      timestamp: new Date().toISOString()
    });
  },

  // Track pricing page interactions
  trackPricingInteraction: (action: string, planName?: string) => {
    analytics.track('pricing_interaction', {
      action,
      plan_name: planName,
      timestamp: new Date().toISOString()
    });
  },

  // Track download attempts
  trackDownload: (platform: string, architecture?: string) => {
    analytics.track('app_download_started', {
      platform,
      architecture,
      timestamp: new Date().toISOString()
    });
  },

  // Track demo interactions
  trackDemoInteraction: (action: string) => {
    analytics.track('demo_interaction', {
      action,
      timestamp: new Date().toISOString()
    });
  }
};

export default analytics;