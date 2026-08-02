"use client";

import { useEffect, useState } from "react";
import StatsCard from "./StatsCard";

export default function StatsGrid() {

  const [stats, setStats] = useState({
    totalUsers: 0,
    todayUsers: 0,
    totalReferrals: 0,
    emails: 0,
  });


  useEffect(() => {

    async function loadStats() {

      const response = await fetch(
        "/api/admin/stats"
      );

      const data = await response.json();

      setStats(data);

    }


    loadStats();

  }, []);


  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">


      <StatsCard
        title="Total Users"
        value={stats.totalUsers}
        icon="👥"
      />


      <StatsCard
        title="Today's Signups"
        value={stats.todayUsers}
        icon="📈"
      />


      <StatsCard
        title="Referrals"
        value={stats.totalReferrals}
        icon="🏆"
      />


      <StatsCard
        title="Emails"
        value={stats.emails}
        icon="📧"
      />


    </div>

  );

}