"use client";

import { motion } from "framer-motion";
import {
  Receipt,
  Calculator,
  WalletCards,
} from "lucide-react";


const steps = [
  {
    number: "01",
    icon: Receipt,
    title: "Log your client payment",
    description:
      "Enter any freelance payment, invoice, or project income in seconds."
  },
  {
    number: "02",
    icon: Calculator,
    title: "SafeSpend calculates your reserve",
    description:
      "Your estimated tax amount is separated automatically so you know what belongs to taxes."
  },
  {
    number: "03",
    icon: WalletCards,
    title: "Spend with confidence",
    description:
      "See your true safe-to-spend balance and avoid unexpected tax stress."
  }
];


export default function HowItWorks() {

  return (

    <section
id="how-it-works"
className="relative py-32 md:py-40"
>

      <div className="mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-3xl text-center">


          <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
            How It Works
          </p>


          <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">

            Three steps to smarter spending

          </h2>


          <p className="mt-6 text-lg text-slate-400">

            Turn unpredictable freelance income into a clear spending plan.

          </p>


        </div>



        <div className="mt-16 grid gap-8 md:grid-cols-3">


          {steps.map((step,index)=>{


            const Icon = step.icon;


            return (

              <motion.div

                key={step.number}

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
                  delay:index * .15
                }}

                className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

              >


                <div className="absolute right-6 top-5 text-5xl font-black text-white/5">

                  {step.number}

                </div>


                <div className="mb-6 inline-flex rounded-xl bg-teal-500/10 p-4">

                  <Icon className="h-7 w-7 text-teal-400"/>

                </div>


                <h3 className="text-xl font-bold">

                  {step.title}

                </h3>


                <p className="mt-4 leading-7 text-slate-400">

                  {step.description}

                </p>


              </motion.div>

            );


          })}


        </div>


      </div>


    </section>

  );

}