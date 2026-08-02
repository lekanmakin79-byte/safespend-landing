export interface DashboardStats {
  totalUsers: number;
  todayUsers: number;
  totalReferrals: number;
}

export interface TopReferrer {
  email: string;
  referral_count: number;
}