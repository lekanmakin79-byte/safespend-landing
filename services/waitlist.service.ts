import { supabase } from "@/lib/supabase";

export async function getTotalUsers() {
  const { count } = await supabase
    .from("waitlist")
    .select("*", {
      count: "exact",
      head: true,
    });

  return count ?? 0;
}

export async function getLatestUsers() {
  const { data } = await supabase
    .from("waitlist")
    .select("*")
    .order("created_at", {
      ascending: false,
    })
    .limit(20);

  return data ?? [];
}