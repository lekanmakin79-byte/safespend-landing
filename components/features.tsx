"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Wallet,
  History,
  Bell,
  ShieldCheck,
  Zap,
} from "lucide-react";


const features = [
  {
    icon: Calculator,
    title: "Automatic Tax Split",
    description:
      "Every client payment is instantly divided into estimated tax money and available spending money.",
  },

  {
    icon: Wallet,
    title: "Know Your Safe-to-Spend Balance",
    description:
      "Stop guessing. See the amount you can confidently use without worrying about future taxes.",
  },

  {
    icon: History,
    title: "Income Tracking",
    description:
      "Keep a simple history of your freelance payments and understand your cash flow.",
  },

  {
    icon: Bell,
    title: "Quarterly Tax Awareness",
    description:
      "Stay prepared for tax deadlines with reminders and better financial visibility.",
  },

  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "No bank account connection required. Your financial information stays under your control.",
  },

  {
    icon: Zap,
    title: "Simple & Fast",
    description:
      "Designed for freelancers who need clarity without complicated accounting software.",
  },
];


export default function Features() {

  return (

    <section
      id="features"
      className="relative py-32 md:py-40"
    >

      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />


      <div className="mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-3xl text-center">


          <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
            Features
          </p>


          <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">

            Everything you need to control freelance income

          </h2>


          <p className="mt-6 text-lg text-slate-400">

            A simple financial dashboard designed around the way freelancers actually earn money.

          </p>


        </div>



        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {features.map((feature,index)=>{


            const Icon = feature.icon;


            return (

              <motion.div

                key={feature.title}

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

                transition={{
                  delay:index * .08
                }}


                whileHover={{
                  y:-8
                }}


                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"

              >

                <div className="mb-6 inline-flex rounded-2xl bg-teal-500/10 p-4">

                  <Icon className="h-7 w-7 text-teal-400"/>

                </div>


                <h3 className="text-xl font-bold">

                  {feature.title}

                </h3>


                <p className="mt-4 leading-7 text-slate-400">

                  {feature.description}

                </p>


              </motion.div>

            );

          })}


        </div>


      </div>


    </section>

  );

}