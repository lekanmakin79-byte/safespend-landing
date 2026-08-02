export function saveReferralCode() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(
    window.location.search
  );

  const referral = params.get("ref");

  if (referral) {
    localStorage.setItem(
      "safeSpendReferral",
      referral
    );
  }
}


export function getReferralCode() {
  if (typeof window === "undefined") return null;

  return localStorage.getItem(
    "safeSpendReferral"
  );
}


export function clearReferralCode() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(
    "safeSpendReferral"
  );
}