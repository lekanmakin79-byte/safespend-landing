export interface WaitlistUser {
  id: string;
  email: string;
  referral_code: string;
  referred_by: string | null;
  referral_count: number;
  source: string;
  created_at: string;
}