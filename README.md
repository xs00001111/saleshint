# SalesHint - AI Sales Assistant

## Overview
SalesHint is an AI-powered sales assistant that provides real-time guidance during sales calls to help close more deals. The application features conversation insights, objection handling, and automated follow-up emails.

## Environment Variables Setup

### Required Environment Variables

For the application to work properly, you need to configure these environment variables:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Getting Your Supabase Credentials

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project (or create a new one)
3. Go to **Settings** → **API**
4. Copy the following values:
   - **Project URL** (use this for `VITE_SUPABASE_URL`)
   - **anon/public key** (use this for `VITE_SUPABASE_ANON_KEY`)

### Setting Up Environment Variables on Netlify

**IMPORTANT**: You must configure these environment variables on Netlify for the production site to work:

1. Go to your [Netlify Dashboard](https://app.netlify.com)
2. Select your SalesHint site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable** and add:
   - **Key**: `VITE_SUPABASE_URL`
   - **Value**: Your Supabase project URL (e.g., `https://your-project-id.supabase.co`)
5. Click **Add a variable** again and add:
   - **Key**: `VITE_SUPABASE_ANON_KEY`
   - **Value**: Your Supabase anon/public key
6. Click **Save**
7. **Redeploy your site** by going to **Deploys** → **Trigger deploy** → **Deploy site**

### For Local Development

Create a `.env` file in the root directory:

```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Optional Environment Variables (for Stripe)

```bash
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

## Troubleshooting

### 401 Unauthorized Error During Signup

This error occurs when Supabase environment variables are missing or incorrect:

1. **Check Netlify Environment Variables**:
   - Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
   - Ensure there are no extra spaces or quotes in the values
   - Make sure the Supabase URL starts with `https://`

2. **Verify Supabase Project Status**:
   - Ensure your Supabase project is active
   - Check that the project URL and anon key are correct
   - Verify the project hasn't been paused or deleted

3. **Redeploy After Setting Variables**:
   - Environment variables only take effect after redeployment
   - Go to Netlify → Deploys → Trigger deploy → Deploy site

### Demo Mode Banner

If you see a "Demo Mode - Supabase Not Configured" banner, it means the environment variables are not properly set.

## Features

- **Real-time Sales Assistance**: AI-powered conversation insights during calls
- **Objection Handling**: Smart suggestions for handling customer objections
- **Automated Follow-ups**: AI-generated follow-up emails
- **Subscription Management**: Stripe integration for premium features
- **User Authentication**: Secure email/password authentication

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Supabase (Database, Authentication, Edge Functions)
- **Payments**: Stripe
- **Deployment**: Netlify

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see above)
4. Run the development server: `npm run dev`

## Deployment

The application is configured for deployment on Netlify with automatic builds from the main branch.

**Remember**: Always configure environment variables on Netlify before deploying to production.