// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zirqkemcbwobqdwgkzlv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppcnFrZW1jYndvYnFkd2dremx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MjAzNjgsImV4cCI6MjA2NzA5NjM2OH0.9XMqs2H-shUsqGjH6tkalOudHMBnQrQfyAlbWfD3u1Q'
export const supabase = createClient(supabaseUrl, supabaseKey)
