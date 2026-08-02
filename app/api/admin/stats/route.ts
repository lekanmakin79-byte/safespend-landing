import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data: users, error } = await supabase
    .from("waitlist")
    .select("*");


  if (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }


  const totalUsers = users.length;


  const totalReferrals = users.reduce(
    (sum, user) =>
      sum + (user.referral_count || 0),
    0
  );


  const today = new Date()
    .toISOString()
    .split("T")[0];


  const todayUsers = users.filter(
    (user) =>
      user.created_at?.startsWith(today)
  ).length;


  return NextResponse.json({
    totalUsers,
    todayUsers,
    totalReferrals,
    emails: totalUsers,
  });

}