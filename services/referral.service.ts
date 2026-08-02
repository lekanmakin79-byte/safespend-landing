import { supabase } from "@/lib/supabase";

export async function getTopReferrers() {
  const { data } = await supabase
    .from("waitlist")
    .select("*")
    .order("referral_count", {
      ascending: false,
    })
    .limit(10);

  return data ?? [];
}