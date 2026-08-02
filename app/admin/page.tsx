import DashboardHeader from "@/components/admin/DashboardHeader";
import StatsGrid from "@/components/admin/StatsGrid";
import RecentUsers from "@/components/admin/RecentUsers";
import TopReferrers from "@/components/admin/TopReferrers";
import SignupChart from "@/components/admin/SignupChart";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";

export default async function AdminPage() {

  const supabase = await createClient();


  const {
    data: {
      session,
    },
  } = await supabase.auth.getSession();


  if (!session) {
    redirect("/login");
  }

  return (
    <main className="mx-auto max-w-7xl p-8 space-y-8">
      <DashboardHeader />
      <StatsGrid />
      <RecentUsers />
      <TopReferrers />
	  <SignupChart />
    </main>
  );
}