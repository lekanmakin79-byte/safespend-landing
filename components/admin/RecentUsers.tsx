"use client";

import { useEffect, useState } from "react";


export default function RecentUsers() {

  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");


  useEffect(() => {

    async function loadUsers(){

      const response = await fetch(
        "/api/admin/users"
      );

      const data = await response.json();

      setUsers(data);

    }


    loadUsers();

  }, []);



  const filteredUsers = users.filter(
    (user)=>{

      const matchesSearch =
        user.email
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );


      if(filter==="referrals"){
        return (
          matchesSearch &&
          user.referral_count > 0
        );
      }


      if(filter==="none"){
        return (
          matchesSearch &&
          user.referral_count === 0
        );
      }


      return matchesSearch;

    }
  );



  return (

<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">


<h2 className="mb-6 text-xl font-bold text-white">
Recent Signups
</h2>


<div className="mb-6 flex flex-col gap-3 md:flex-row">


<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search email..."

className="rounded-xl bg-slate-950 px-4 py-3 text-white"

/>


<select

value={filter}

onChange={(e)=>setFilter(e.target.value)}

className="rounded-xl bg-slate-950 px-4 py-3 text-white"

>

<option value="all">
All Users
</option>

<option value="referrals">
Has Referrals
</option>

<option value="none">
No Referrals
</option>

</select>


</div>



<table className="w-full text-left">


<thead className="text-slate-400">

<tr>

<th>Email</th>

<th>Referral Code</th>

<th>Referrals</th>

<th>Joined</th>

</tr>

</thead>



<tbody>

{filteredUsers.map((user)=>(

<tr
key={user.email}
className="border-t border-slate-800 text-slate-200"
>


<td className="py-4">
{user.email}
</td>


<td>
{user.referral_code}
</td>


<td>
{user.referral_count}
</td>


<td>
{new Date(
user.created_at
).toLocaleDateString()}
</td>


</tr>

))}


</tbody>


</table>


</div>

  );

}