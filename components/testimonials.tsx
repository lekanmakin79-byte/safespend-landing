"use client";

import { motion } from "framer-motion";
import {
  Quote,
  Users,
  Sparkles,
} from "lucide-react";


const betaUsers = [
  {
    role: "Freelance Developers",
    text:
      "Track project payments and know what income is actually available.",
  },

  {
    role: "Creative Professionals",
    text:
      "Separate tax money before lifestyle spending gets out of control.",
  },

  {
    role: "Independent Consultants",
    text:
      "Bring clarity to irregular income without complicated accounting tools.",
  },
];


export default function Testimonials() {

  return (

    <section className="relative py-32 md:py-40">

      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />


      <div className="mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-3xl text-center">


          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-teal-400">

            <Sparkles size={16}/>

            Early Access Community

          </p>


          <h2 className="mt-6 text-4xl font-black md:text-5xl">

            Built with independent earners

          </h2>


          <p className="mt-6 text-lg text-slate-400">

            SafeSpend is being created for freelancers,
            creators, and entrepreneurs who want more control
            over their money.

          </p>


        </div>



        <div className="mt-16 grid gap-8 md:grid-cols-3">


          {betaUsers.map((item,index)=>{


            return (

              <motion.div

                key={item.role}

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
                  delay:index*.15
                }}


                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

              >

                <Quote className="mb-6 h-8 w-8 text-teal-400"/>


                <p className="leading-7 text-slate-300">

                  "{item.text}"

                </p>


                <div className="mt-6 flex items-center gap-3">


                  <div className="rounded-full bg-teal-500/20 p-3">

                    <Users className="h-5 w-5 text-teal-400"/>

                  </div>


                  <div>

                    <p className="font-bold">

                      {item.role}

                    </p>


                    <p className="text-sm text-slate-500">

                      Beta Community

                    </p>

                  </div>


                </div>


              </motion.div>

            );

          })}


        </div>


      </div>


    </section>

  );

}