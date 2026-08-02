"use client";

import { saveReferralCode, getReferralCode } from "@/lib/referral";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
	
	const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [referralLink, setReferralLink] = useState("");
const [copied, setCopied] = useState(false);

useEffect(() => {

  saveReferralCode();

  console.log("Referral saved:", localStorage.getItem("safeSpendReferral"));

}, []);

async function handleSubmit(e: React.FormEvent) {

  e.preventDefault();

  setLoading(true);
  setMessage("");

  try {

    const response = await fetch("/api/waitlist", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
  email,
  referredBy: getReferralCode(),
}),

    });


    const data = await response.json();


    if (!response.ok) {
      throw new Error(data.error);
    }


    setMessage("🎉 You're on the SafeSpend beta list!");

if (data.referralCode) {

  setReferralLink(
    `${window.location.origin}?ref=${data.referralCode}`
  );

}

setEmail("");


  } catch (error) {

    setMessage(
      error instanceof Error 
      ? error.message 
      : "Something went wrong"
    );

  } finally {

    setLoading(false);

  }

}

function copyReferralLink() {
  navigator.clipboard.writeText(referralLink);
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
}

  return (
    <section className="relative overflow-hidden pt-32 pb-24">

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[140px]" />

        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>


      <div className="mx-auto max-w-4xl px-6 text-center">


        {/* LEFT SIDE */}

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:.6}}
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm text-teal-300">

            <Sparkles size={16}/>

            Early Access • Launching Soon

          </div>



          <h1 className="text-5xl font-black leading-tight tracking-tight lg:text-7xl">

            Know

            <span className="block bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">

              What You Can Spend

            </span>

            Before You Spend It.

          </h1>



          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
		  
            
           SafeSpend automatically separates your estimated tax money from every client payment,  giving freelancers a clear safe-to-spend balance.

          </p>



          {/* WAITLIST */}

          
            <form
  id="signup"
  onSubmit={handleSubmit}
  className="mt-8 max-w-md rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl"
>

<div className="flex flex-col gap-3 sm:flex-row">

<input

type="email"

required

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="Enter your email"

className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500"

/>


<button

type="submit"

disabled={loading}

className="rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 px-6 py-3 font-bold text-slate-950"

>

{loading ? "Joining..." : "Join Beta"}

</button>


</div>


{message && (

<div className="mt-4 rounded-xl border border-teal-400/20 bg-teal-400/10 p-4 text-left">

<p className="font-bold text-teal-300">
{message}
</p>


<p className="mt-2 text-sm text-slate-300">
Thanks for joining SafeSpend early access.
</p>


{referralLink && (

<>

<p className="mt-3 text-sm text-slate-400">
Your personal invite link:
</p>


<div className="mt-2 rounded-lg bg-slate-900 p-3 text-xs text-teal-300 break-all">
{referralLink}
</div>


<button
type="button"
onClick={copyReferralLink}
className="mt-3 rounded-lg bg-teal-400 px-4 py-2 text-sm font-bold text-slate-950"
>
{copied ? "✓ Copied!" : "Copy Invite Link"}
</button>

</>

)}

</div>

)}

</form>

          



          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">


            <div className="flex items-center gap-2">

            <span className="text-yellow-400">
  ⭐⭐⭐⭐⭐
</span>

<span>
  300+ waiting
</span>

            </div>


            <div className="flex items-center gap-2">

              <ShieldCheck size={18} className="text-teal-400"/>

              No bank connection required

            </div>


          </div>


        </motion.div>


      </div>


    </section>
  );
}