// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://oqrnthslxgushgubrdag.supabase.co";
// const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xcm50aHNseGd1c2hndWJyZGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwODk1OTgsImV4cCI6MjA3NTY2NTU5OH0._v38Nchpr8mM59IWTDMpTCV0IH1Wu85E9coNtC-qFTE";
// const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
