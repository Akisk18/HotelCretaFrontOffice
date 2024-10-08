import { createClient } from "@supabase/supabase-js";

export const supabaseURL = "https://qjgfntxmvikcaqcsymst.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZ2ZudHhtdmlrY2FxY3N5bXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2MTA2MjIsImV4cCI6MjA0MjE4NjYyMn0.D6em09gf8Wu1XCpmOV3EesByixCQ7P8-ntnJf_1WBxc";
const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
