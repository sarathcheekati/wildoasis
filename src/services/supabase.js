import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ppwoiuhkvwbztfzccuhw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwd29pdWhrdndienRmemNjdWh3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTY3OTg4NywiZXhwIjoyMDE1MjU1ODg3fQ.pPR8garxQzbVmcpH3AAzztsi1jPfGkHojnP0uG5_Coo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
