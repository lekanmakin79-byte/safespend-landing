"use client";

import { useState } from "react";


export default function ReferralDashboard() {

  const [email, setEmail] = useState("");
  const [user, setUser] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const [rank, setRank] = useState(0);

  const [reward, setReward] = useState("");

  const [badge, setBadge] = useState("");

  const [progress, setProgress] = useState(0);

  const [needed, setNeeded] = useState(0);
  const [history, setHistory] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
 



  function calculateReward(count:number){

    if(count >= 25){

      return {
        reward:"🚀 SafeSpend Ambassador",
        next:25,
        badge:"🚀"
      };

    }


    if(count >= 10){

      return {
        reward:"🏆 Founding Member",
        next:10,
        badge:"🏆"
      };

    }


    if(count >= 5){

      return {
        reward:"🎖 Beta Champion",
        next:5,
        badge:"🎖"
      };

    }


    return {
      reward:"⭐ Early Supporter",
      next:5,
      badge:"⭐"
    };

  }




  async function findUser(){

    setLoading(true);


    const response = await fetch(
      `/api/referral?email=${email}`
    );


    const data = await response.json();


    if(!data.user){

      setLoading(false);
      return;

    }


    setUser(data.user);
	
	const historyResponse =
await fetch(
`/api/referral-history?code=${data.user.referral_code}`
);


const historyData =
await historyResponse.json();


setHistory(historyData);


const notificationResponse =
await fetch(
`/api/notifications?code=${data.user.referral_code}`
);


const notificationData =
await notificationResponse.json();


setNotifications(notificationData);



    const leaderboardResponse =
      await fetch("/api/leaderboard");


    const leaderboard =
      await leaderboardResponse.json();



    const position =
      leaderboard.findIndex(
        (item:any)=>
          item.referral_code === data.user.referral_code
      );


    setRank(position + 1);



    const rewardData =
      calculateReward(
        data.user.referral_count
      );



    setReward(
      rewardData.reward
    );


    setBadge(
      rewardData.badge
    );


    setProgress(
      Math.min(
        (data.user.referral_count /
        rewardData.next) * 100,
        100
      )
    );


    setNeeded(
      Math.max(
        rewardData.next -
        data.user.referral_count,
        0
      )
    );


    setLoading(false);

  }




  function getReferralLink(){

    if(!user) return "";

    return `${window.location.origin}?ref=${user.referral_code}`;

  }




  function copyLink(){

    navigator.clipboard.writeText(
      getReferralLink()
    );

    alert("Referral link copied!");

  }




  function shareWhatsApp(){

    const message =
`🚀 I joined SafeSpend beta.

Know what you can safely spend before spending.

Join here:
${getReferralLink()}`;


    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  }




  function shareTwitter(){

    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      "🚀 I joined SafeSpend beta!"
      )}&url=${encodeURIComponent(getReferralLink())}`,
      "_blank"
    );

  }




  function shareEmail(){

    window.location.href =
    `mailto:?subject=${encodeURIComponent(
      "Join me on SafeSpend beta"
    )}&body=${encodeURIComponent(
      getReferralLink()
    )}`;

  }





  return (

    <div className="mx-auto max-w-xl">


      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">


        <h1 className="text-3xl font-black text-white">
          SafeSpend Beta
        </h1>


        <p className="mt-2 text-slate-400">
          Track your referrals and grow with us.
        </p>



        {!user && (

          <div className="mt-8 space-y-4">


            <input

              type="email"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              placeholder="Enter your beta email"

              className="w-full rounded-xl bg-slate-950 px-4 py-3 text-white"

            />



            <button

              onClick={findUser}

              className="w-full rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 py-3 font-bold text-slate-950"

            >

              {loading
              ? "Checking..."
              : "View My Referral Dashboard"}

            </button>


          </div>

        )}





        {user && (

          <div className="mt-8 space-y-6">



            <div className="rounded-2xl bg-slate-950 p-5">


              <p className="text-slate-400">
                Your Growth
              </p>


              <p className="mt-2 text-4xl font-black text-white">
                🏆 #{rank}
              </p>


              <p className="mt-2 font-bold text-teal-400">

                {user.referral_count}

                {user.referral_count === 1
                ? " referral"
                : " referrals"}

              </p>



              <div className="mt-5">


                <div className="flex justify-between text-sm text-slate-400">

                  <span>
                    {badge} {reward}
                  </span>

                  <span>
                    {Math.round(progress)}%
                  </span>

                </div>



                <div className="mt-2 h-3 rounded-full bg-slate-800 overflow-hidden">


                  <div

                    className="h-full rounded-full bg-teal-400 transition-all duration-700"

                    style={{
                      width:`${progress}%`
                    }}

                  />


                </div>



                <p className="mt-2 text-sm text-slate-400">

                  {needed > 0
                  ? `${needed} more referrals needed`
                  : "Reward unlocked 🎉"}

                </p>


              </div>


            </div>





            <div className="rounded-2xl bg-slate-950 p-5">


              <p className="text-slate-400">
                Your referral code
              </p>


              <p className="mt-2 text-2xl font-bold text-teal-400">
                {user.referral_code}
              </p>


            </div>





            <div className="rounded-2xl bg-slate-950 p-5">


              <p className="text-slate-400">
                Friends invited
              </p>


              <p className="text-4xl font-black text-white">
                {user.referral_count}
              </p>


            </div>





            <button

              onClick={copyLink}

              className="w-full rounded-xl bg-teal-400 py-3 font-bold text-slate-950"

            >

              📋 Copy Invite Link

            </button>
			
			
			
			<div className="rounded-2xl bg-slate-950 p-5">
			
			
			<div className="rounded-2xl bg-slate-950 p-5">


<div className="flex items-center justify-between">


<p className="text-slate-400">
🔔 Notifications
</p>


<span className="rounded-full bg-teal-400 px-3 py-1 text-sm font-bold text-slate-950">

{notifications.length}

</span>


</div>



<div className="mt-4 space-y-3">


{notifications.length === 0 && (

<p className="text-slate-500">
No notifications yet
</p>

)}



{notifications.map((item)=>(


<div

key={item.id}

className="rounded-xl bg-slate-900 p-4"

>


<p className="font-bold text-white">

{item.title}

</p>



<p className="mt-1 text-sm text-slate-400">

{item.message}

</p>


</div>


))}



</div>


</div>


<p className="text-slate-400">
Referral Activity
</p>


<div className="mt-4 space-y-3">


{history.length === 0 && (

<p className="text-slate-500">
No referrals yet
</p>

)}



{history.map((item)=>(
  
<div
key={item.id}
className="rounded-xl bg-slate-900 p-3"
>

<p className="text-white">

✅ {item.referred_email}

</p>


<p className="text-sm text-slate-400">

Joined:

{new Date(
item.created_at
).toLocaleDateString()}

</p>


</div>

))}


</div>


</div>


<div className="rounded-2xl bg-slate-950 p-5">


<p className="text-slate-400">
Referral Activity
</p>



<div className="mt-4 space-y-3">


{history.length === 0 && (

<p className="text-slate-500">
No referrals yet
</p>

)}



{history.map((item)=> (

<div

key={item.id}

className="rounded-xl bg-slate-900 p-4"

>


<p className="font-bold text-white">

✅ {item.referred_email}

</p>



<p className="text-sm text-slate-400">

Joined:

{" "}

{new Date(
item.created_at
).toLocaleDateString()}

</p>


</div>


))}


</div>


</div>


            <div className="grid grid-cols-3 gap-3">


              <button
                onClick={shareWhatsApp}
                className="rounded-xl bg-green-500 py-3 font-bold text-white"
              >
                WhatsApp
              </button>



              <button
                onClick={shareTwitter}
                className="rounded-xl bg-black py-3 font-bold text-white"
              >
                X
              </button>



              <button
                onClick={shareEmail}
                className="rounded-xl bg-blue-500 py-3 font-bold text-white"
              >
                Email
              </button>


            </div>


          </div>

        )}


      </div>


    </div>

  );

}