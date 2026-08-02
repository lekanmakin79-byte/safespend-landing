"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wallet,
  ArrowUpRight,
} from "lucide-react";


export default function DashboardPreview() {

  return (

    <section className="relative py-32 md:py-40">

      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />


      <div className="mx-auto max-w-6xl px-6">


        <div className="grid items-center gap-16 lg:grid-cols-2">


          {/* Text Side */}

          <div>


            <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">

              Your Tax Dashboard

            </p>


            <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">

              See your real spending power instantly.

            </h2>


            <p className="mt-6 text-lg leading-8 text-slate-400">

              Every payment is automatically separated into money you can spend and money reserved for taxes.

            </p>



            <div className="mt-8 space-y-4">


              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-teal-400/10 p-3">

                  <Wallet className="text-teal-400"/>

                </div>

                <p className="text-slate-300">

                  Know your safe-to-spend balance

                </p>

              </div>



              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-emerald-400/10 p-3">

                  <ShieldCheck className="text-emerald-400"/>

                </div>

                <p className="text-slate-300">

                  Protect your future tax payments

                </p>

              </div>


            </div>


          </div>




          {/* Phone Preview */}


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

            className="mx-auto w-full max-w-sm"

          >


            <div className="rounded-[40px] border border-white/10 bg-slate-900 p-4 shadow-2xl">


              <div className="rounded-[32px] bg-slate-950 p-6">


                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-400">

                      SafeSpend

                    </p>

                    <h3 className="text-xl font-bold">

                      Tax Dashboard

                    </h3>

                  </div>


                  <div className="rounded-full bg-teal-400/10 p-3">

                    🛡️

                  </div>


                </div>



                <div className="mt-8 rounded-3xl bg-white/5 p-6">


                  <p className="text-sm text-slate-400">

                    Safe to Spend

                  </p>


                  <p className="mt-2 text-4xl font-black text-emerald-400">

                    $6,330

                  </p>


                </div>



                <div className="mt-4 grid grid-cols-2 gap-4">


                  <div className="rounded-2xl bg-white/5 p-4">

                    <p className="text-xs text-slate-400">

                      IRS Vault

                    </p>


                    <p className="mt-2 font-bold text-red-400">

                      $2,120

                    </p>

                  </div>



                  <div className="rounded-2xl bg-white/5 p-4">

                    <p className="text-xs text-slate-400">

                      Income

                    </p>


                    <p className="mt-2 font-bold">

                      $8,450

                    </p>

                  </div>


                </div>



                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-400 py-3 font-bold text-slate-950">

                  Log Payment

                  <ArrowUpRight size={18}/>

                </button>


              </div>


            </div>


          </motion.div>


        </div>


      </div>


    </section>

  );

}