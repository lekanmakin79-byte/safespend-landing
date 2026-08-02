"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";


const features = [
  "Instant tax split calculations",
  "Safe-to-spend balance",
  "Freelance income tracking",
  "Quarterly tax awareness",
  "Early adopter pricing forever",
];


export default function Pricing() {

  return (

    <section
      id="pricing"
      className="relative py-32 md:py-40"
    >

      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />


      <div className="mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-3xl text-center">


          <p className="flex justify-center items-center gap-2 text-sm font-semibold uppercase tracking-widest text-teal-400">

            <Sparkles size={16}/>

            Simple Pricing

          </p>


          <h2 className="mt-6 text-4xl font-black md:text-5xl">

            Start small. Grow with SafeSpend.

          </h2>


          <p className="mt-6 text-lg text-slate-400">

            Early users get lifetime access to beta pricing.

          </p>


        </div>



        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="mx-auto mt-16 max-w-md rounded-[32px] border border-teal-400/30 bg-gradient-to-b from-slate-900 to-slate-950 p-8 shadow-2xl"

        >

          <div className="mb-6 inline-flex rounded-full bg-teal-400/10 px-4 py-2 text-sm font-bold text-teal-400">

            Early Access Member

          </div>



          <div className="flex items-end gap-2">

            <span className="text-5xl font-black">

              $2.49

            </span>

            <span className="mb-2 text-slate-400">

              /month

            </span>

          </div>


          <p className="mt-2 text-sm text-slate-500 line-through">

            Lock in this price forever before public launch.

          </p>



          <div className="my-8 h-px bg-white/10"/>



          <ul className="space-y-4">


            {features.map((item)=>(
              
              <li
                key={item}
                className="flex items-center gap-3 text-slate-300"
              >

                <Check className="h-5 w-5 text-teal-400"/>

                {item}

              </li>

            ))}


          </ul>



          <button

            className="mt-8 w-full rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 py-4 font-bold text-slate-950 transition hover:scale-105"

          >

            Join Beta Now

          </button>


        </motion.div>


      </div>


    </section>

  );

}