"use client";

export default function ExportUsers() {

  async function exportUsers() {

    const response = await fetch(
      "/api/admin/users"
    );

    const users = await response.json();


    const headers = [
      "Email",
      "Referral Code",
      "Referred By",
      "Referral Count",
      "Joined"
    ];


    const rows = users.map(
      (user:any)=>[
        user.email,
        user.referral_code,
        user.referred_by || "",
        user.referral_count,
        new Date(
          user.created_at
        ).toLocaleDateString()
      ]
    );


    const csv = [
      headers,
      ...rows
    ]
    .map(row=>row.join(","))
    .join("\n");


    const blob = new Blob(
      [csv],
      {
        type:"text/csv"
      }
    );


    const url = URL.createObjectURL(blob);


    const link=document.createElement("a");

    link.href=url;

    link.download="safespend-users.csv";

    link.click();

  }


  return (

    <button
      onClick={exportUsers}
      className="rounded-xl bg-teal-400 px-5 py-3 font-bold text-slate-950"
    >
      📥 Export Users
    </button>

  );

}