"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();


  async function handleLogin(e: React.FormEvent) {

    e.preventDefault();

    setLoading(true);
    setError("");


    const { error } = await signIn(
      email,
      password
    );


    if (error) {

      setError(error.message);
      setLoading(false);
      return;

    }


    // Refresh session then go to dashboard
    router.refresh();

    router.push("/admin");


    setLoading(false);

  }



  return (

    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">


        <div className="mb-8 text-center">

          <h1 className="text-4xl font-black text-white">
            SafeSpend
          </h1>

          <p className="mt-2 text-slate-400">
            Admin Login
          </p>

        </div>



        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >


          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>


            <input

              type="email"

              required

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-teal-400"

              placeholder="admin@safespend.app"

            />

          </div>



          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>


            <input

              type="password"

              required

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-teal-400"

              placeholder="••••••••"

            />

          </div>



          <button

            type="submit"

            disabled={loading}

            className="w-full rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 py-3 font-bold text-slate-950 disabled:opacity-50"

          >

            {loading ? "Signing In..." : "Sign In"}

          </button>



          {error && (

            <p className="text-center text-red-400">

              {error}

            </p>

          )}


        </form>


      </div>


    </main>

  );

}