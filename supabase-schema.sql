-- Supabase Database Schema for mAIscam Admin Dashboard
-- Run this in your Supabase SQL Editor

-- Create admin_users table to control who has access
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS (Row Level Security) policies
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Policy to allow users to read their own admin status
CREATE POLICY "Users can read their own admin status" ON admin_users
  FOR SELECT USING (auth.email() = email);

-- Policy to allow service role to manage admin users
CREATE POLICY "Service role can manage admin users" ON admin_users
  FOR ALL USING (auth.role() = 'service_role');

-- Create a function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_admin_users_updated_at 
  BEFORE UPDATE ON admin_users 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample admin users (replace with your actual admin emails)
-- INSERT INTO admin_users (email, name, is_active) VALUES 
-- ('your-admin-email@gmail.com', 'Your Name', true),
-- ('another-admin@example.com', 'Another Admin', true);

-- Create a view for easier admin access checking
CREATE OR REPLACE VIEW admin_access AS
SELECT 
  au.id,
  au.email,
  au.name,
  au.avatar_url,
  au.is_active,
  au.created_at,
  au.updated_at
FROM admin_users au
WHERE au.is_active = true;

-- Grant access to the view
GRANT SELECT ON admin_access TO authenticated;
