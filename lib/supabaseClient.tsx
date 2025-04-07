// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vywrzgrqckgugqusbpts.supabase.co";
// const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5d3J6Z3JxY2tndWdxdXNicHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MDM4OTQsImV4cCI6MjA1NzI3OTg5NH0.0i4MvFNBdzPLsxs1W2uamMTe643T5P2A2Zhq85NtUy0";
// const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
