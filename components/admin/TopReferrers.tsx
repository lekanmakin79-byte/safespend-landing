"use client";

import { useEffect, useState } from "react";


export default function TopReferrers() {

  const [users, setUsers] = useState<any[]>([]);


  useEffect(() => {

    async function loadReferrals() {

      const response = await fetch(
        "/api/admin/referrals"
      );

      const data = await response.json();

      setUsers(data);

    }


    loadReferrals();

  }, []);



  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">


      <h2 className="mb-6 text-xl font-bold text-white">
        🏆 Top Referrers
      </h2>


      <div className="space-y-4">


        {users.map((user, index) => (

          <div
            key={user.email}
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

                <p className="font-semibold text-white">
                  {user.referral_code}
                </p>

                <p className="text-sm text-slate-400">
                  {user.email}
                </p>

              </div>

            </div>


            <div className="text-right">

              <p className="text-2xl font-bold text-teal-400">
                {user.referral_count}
              </p>

              <p className="text-xs text-slate-400">
                referrals
              </p>

            </div>


          </div>

        ))}


      </div>


    </div>

  );

}