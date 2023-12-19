import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ppwoiuhkvwbztfzccuhw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwd29pdWhrdndienRmemNjdWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2Nzk4ODcsImV4cCI6MjAxNTI1NTg4N30.5grjug-ryIMIfoiVxTF4Y5Lh8tuWpvsk8wiRS7dSscQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
