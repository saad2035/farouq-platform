import { createClient } from "@supabase/supabase-js"

const supabaseUrl =
  "https://qihfuwqunyftheyckbbs.supabase.co"

const supabaseAnonKey =
  "sb_publishable_kV56dKB8ka8cegShirpjQg_eRLGEalq"

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)