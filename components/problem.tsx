"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Wallet,
  CalendarClock,
} from "lucide-react";

const problems = [
  {
    icon: Wallet,
    title: "A big payment feels bigger than it is",
    description:
      "A $5,000 client payment arrives, but part of that money already belongs to the IRS."
  },
  {
    icon: AlertTriangle,
    title: "Tax surprises hurt",
    description:
      "Without tracking, quarterly payments can become stressful and difficult to prepare for."
  },
  {
    icon: CalendarClock,
    title: "Freelance income changes constantly",
    description:
      "Traditional budgeting tools are not designed for irregular client payments."
  }
];


export default function Problem() {

  return (

    <section className="py-32 md:py-40">

      <div className="mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-3xl text-center">


          <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
            The Problem
          </p>


          <h2 className="mt-4 text-4xl font-black md:text-5xl">

            Your bank balance is lying to you.

          </h2>


          <p className="mt-6 text-lg text-slate-400">

            Not every dollar you earn is available to spend.
            SafeSpend helps freelancers separate business income,
            tax obligations, and personal spending.

          </p>


        </div>



        <div className="mt-14 grid gap-6 md:grid-cols-3">


          {problems.map((item,index)=>{

            const Icon=item.icon;


            return (

              <motion.div

                key={item.title}

                initial={{
                  opacity:0,
                  y:30
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  delay:index*0.15
                }}


                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

              >

                <div className="mb-6 inline-flex rounded-xl bg-red-500/10 p-3">

                  <Icon className="h-7 w-7 text-red-400"/>

                </div>


                <h3 className="text-xl font-bold">

                  {item.title}

                </h3>


                <p className="mt-3 text-slate-400">

                  {item.description}

                </p>


              </motion.div>

            );

          })}


        </div>


      </div>


    </section>

  );

}