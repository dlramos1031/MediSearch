import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://your-supabase-instance-url';
const supabaseAnonKey = process.env.SUPABASE_KEY || 'your-anon-key';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Key is missing. Check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export const getSupabaseClient = () => supabase;
