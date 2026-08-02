import { getLatestUsers } from "./waitlist.service";
import { getTopReferrers } from "./referral.service";

export async function getDashboardData() {
  const [users, topReferrers] = await Promise.all([
    getLatestUsers(),
    getTopReferrers(),
  ]);

  return {
    users,
    topReferrers,
  };
}