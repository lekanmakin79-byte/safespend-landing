"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth";


export default function AdminAccount() {

  const router = useRouter();

  const [email, setEmail] = useState("");


  useEffect(() => {

    async function loadUser(){

      const { data } = await fetch(
        "/api/admin/me"
      )
      .then(res=>res.json());


      setEmail(data?.email || "");

    }


    loadUser();

  }, []);



  async function handleLogout(){

    await signOut();

    router.push("/login");

    router.refresh();

  }



  return (

    <div className="flex items-center gap-4">


      <div className="text-right">

        <p className="text-sm text-slate-400">
          Logged in as
        </p>

        <p className="text-white font-medium">
          {email}
        </p>

      </div>


      <button

        onClick={handleLogout}

        className="rounded-xl bg-red-500/10 px-4 py-2 text-red-400 hover:bg-red-500/20"

      >

        Logout

      </button>


    </div>

  );

}