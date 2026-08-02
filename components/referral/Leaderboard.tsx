"use client";

import { useEffect, useState } from "react";


export default function Leaderboard(){

  const [users,setUsers] = useState<any[]>([]);



  useEffect(()=>{

    fetch("/api/leaderboard")
    .then(res=>res.json())
    .then(data=>setUsers(data));

  },[]);



  return (

    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">


      <h2 className="mb-6 text-2xl font-black text-white">
        🏆 Top Referrers
      </h2>



      <div className="space-y-4">


      {users.map((user,index)=>(


        <div

        key={`${user.referral_code}-${index}`}

        className="flex items-center justify-between rounded-xl bg-slate-950 p-4"

        >


          <div className="flex items-center gap-4">


            <span className="text-2xl">

              {index === 0
              ? "🥇"
              : index === 1
              ? "🥈"
              : index === 2
              ? "🥉"
              : "🏅"}

            </span>



            <div>

              <p className="font-bold text-white">

                {user.referral_code}

              </p>


              <p className="text-sm text-slate-400">

                SafeSpend Member

              </p>

            </div>


          </div>



          <div className="text-right">


            <p className="text-2xl font-black text-teal-400">

              {user.referral_count}
{user.referral_count === 1 ? " referral" : " referrals"}

            </p>


            <p className="text-xs text-slate-400">

              invites

            </p>


          </div>


        </div>


      ))}


      </div>


    </div>

  );

}