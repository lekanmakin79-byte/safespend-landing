"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";


export default function FinalCTA() {

  return (

    <section className="relative py-32 md:py-40">


      <div className="absolute inset-0 -z-10">

        <div className="mx-auto h-[400px] max-w-3xl rounded-full bg-teal-500/20 blur-[120px]" />

      </div>



      <div className="mx-auto max-w-5xl px-6">


        <motion.div

          initial={{
            opacity:0,
            scale:.95
          }}

          whileInView={{
            opacity:1,
            scale:1
          }}

          viewport={{
            once:true
          }}

          className="rounded-[40px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl md:p-16"

        >


          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10">

            <ShieldCheck className="h-7 w-7 text-teal-400"/>

          </div>



          <h2 className="text-4xl font-black leading-tight md:text-6xl">

            Stop guessing what you can afford.

          </h2>



          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">

            Join the SafeSpend early access list and be among the first freelancers to take control of their tax money.

          </p>



          <button

            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 px-8 py-4 font-bold text-slate-950 transition hover:scale-105"

          >

            Join SafeSpend Beta

            <ArrowRight size={20}/>

          </button>



          <p className="mt-6 text-sm text-slate-500">

            No spam • No bank connection required • Cancel anytime

          </p>


        </motion.div>


      </div>


    </section>

  );

}