import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function GET() {

  const { data, error } = await supabase
    .from("waitlist")
    .select("created_at");


  if (error) {

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status:500,
      }
    );

  }


  const days: Record<string, number> = {};


  data.forEach((user)=>{

    const day = new Date(
      user.created_at
    )
    .toLocaleDateString(
      "en-US",
      {
        weekday:"short",
      }
    );


    days[day] = (days[day] || 0) + 1;

  });


  return NextResponse.json(
    Object.entries(days).map(
      ([name,value])=>({
        name,
        users:value,
      })
    )
  );

}