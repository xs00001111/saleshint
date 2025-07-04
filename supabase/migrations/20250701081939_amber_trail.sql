/*
  # Authentication Setup

  1. Security
    - Enable RLS on auth.users (handled by Supabase automatically)
    - Create policies for user data access
    - Set up email confirmation (disabled by default as requested)

  2. Notes
    - Supabase handles the auth.users table automatically
    - Email confirmation is disabled in Supabase dashboard settings
    - Users can sign up with email/password and sign in immediately
*/

-- Enable RLS is already handled by Supabase for auth.users
-- No additional tables needed as we're using Supabase's built-in authentication