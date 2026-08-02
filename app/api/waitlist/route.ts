import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function generateReferralCode() {
  return (
    "SAFE" +
    Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = body.email;
    const referredBy = body.referredBy || null;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const referralCode = generateReferralCode();

    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          email,
          source: "landing-page",
          referral_code: referralCode,
          referred_by: referredBy,
          referral_count: 0,
        },
      ])
      .select();

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "Email already registered" },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    // Increment the referrer's count
    if (referredBy) {
    const { data: referrer } = await supabase
  .from("waitlist")
  .select("id, referral_count, reward")
  .eq("referral_code", referredBy)
  .single();

     if (referrer) {


  const newCount =
    (referrer.referral_count || 0) + 1;
	
	let newReward =
"⭐ Early Supporter";


if(newCount >= 25){

  newReward =
  "🚀 SafeSpend Ambassador";

}

else if(newCount >= 10){

  newReward =
  "🏆 Founding Member";

}

else if(newCount >= 5){

  newReward =
  "🎖 Beta Champion";

}



  await supabase
.from("waitlist")
.update({

  referral_count:newCount,

  reward:newReward

})
.eq(
"id",
referrer.id
);



  await supabase
  .from("referrals")
  .insert([

    {
      referrer_code: referredBy,
      referred_email: email,
    }

  ]);



  await supabase
  .from("notifications")
  .insert([

    {

      user_code: referredBy,

      title:"🎉 New Referral!",

      message:
      `Someone joined SafeSpend using your invite link. You now have ${newCount} referrals.`

    }

  ]);
  
  const oldReward =
referrer.reward ||
"⭐ Early Supporter";


if(oldReward !== newReward){

await supabase
.from("notifications")
.insert([

{

user_code:referredBy,

title:"🏆 Reward Unlocked!",

message:
`Congratulations! You unlocked ${newReward}`

}

]);


}



}
    }

    return NextResponse.json(
      {
        message: "Welcome to SafeSpend beta!",
        referralCode,
        data,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}