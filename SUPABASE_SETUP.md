# Supabase Setup Guide for mAIscam Admin Dashboard

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Choose your organization and give it a name (e.g., "mai-scam-admin")
3. Set a strong database password
4. Choose a region close to your users

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (starts with `https://`)
   - **anon public** key (starts with `eyJ`)

## 3. Set Up Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

## 4. Set Up Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy and paste the contents of `supabase-schema.sql`
3. Click **Run** to execute the SQL

## 5. Configure Google OAuth

1. In your Supabase dashboard, go to **Authentication** → **Providers**
2. Enable **Google** provider
3. You'll need to set up Google OAuth credentials:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs:
     - `https://your-project-ref.supabase.co/auth/v1/callback`
   - Copy Client ID and Client Secret to Supabase

## 6. Add Admin Users

1. In your Supabase dashboard, go to **Table Editor**
2. Select the `admin_users` table
3. Click **Insert** → **Insert row**
4. Add your admin users:
   - `email`: The Google email address
   - `name`: Display name (optional)
   - `is_active`: `true`

## 7. Test the Setup

1. Start your development server: `npm run dev`
2. Go to `/login`
3. Try logging in with Google using an email that's in your `admin_users` table
4. You should be redirected to the admin dashboard

## 8. Security Notes

- Only users in the `admin_users` table with `is_active = true` can access the admin dashboard
- The system automatically checks admin access on every authentication
- Sessions expire after 1 hour for security
- All authentication is handled by Supabase with proper security measures

## 9. Fallback Authentication

The system still supports the hardcoded credentials for development:

- Username: `test`
- Password: `1234`

This allows you to test the admin dashboard even without Google OAuth setup.

## 10. Production Deployment

When deploying to production:

1. Update your environment variables with production Supabase credentials
2. Update Google OAuth redirect URIs to include your production domain
3. Ensure your production domain is added to Supabase allowed origins
4. Consider setting up additional security measures like IP restrictions
