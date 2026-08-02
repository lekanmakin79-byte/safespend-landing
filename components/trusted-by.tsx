"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Camera,
  PenTool,
  Briefcase,
  Rocket,
} from "lucide-react";

const users = [
  {
    title: "Developers",
    description: "Freelancers building software and digital products.",
    icon: Code2,
  },
  {
    title: "Designers",
    description: "Creative professionals working with clients.",
    icon: Palette,
  },
  {
    title: "Photographers",
    description: "Creators managing irregular income.",
    icon: Camera,
  },
  {
    title: "Consultants",
    description: "Independent experts billing clients.",
    icon: Briefcase,
  },
  {
    title: "Writers",
    description: "Copywriters and content creators.",
    icon: PenTool,
  },
  {
    title: "Solopreneurs",
    description: "Anyone managing their own business income.",
    icon: Rocket,
  },
];

export default function TrustedBy() {
  return (
    <section className="border-y border-white/10 bg-slate-950 py-32 md:py-40">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
            Built for independent workers
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Made for people who earn their own income
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Whether you freelance full-time or earn extra income,
            SafeSpend helps you separate tax money before you spend it.
          </p>

        </div>


        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {users.map((user,index)=>{

            const Icon=user.icon;

            return (

              <motion.div

                key={user.title}

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
                  delay:index*0.1
                }}

                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"

              >

                <div className="mb-5 inline-flex rounded-xl bg-teal-500/10 p-3">

                  <Icon className="h-6 w-6 text-teal-400"/>

                </div>


                <h3 className="text-xl font-bold">

                  {user.title}

                </h3>


                <p className="mt-2 text-sm text-slate-400">

                  {user.description}

                </p>


              </motion.div>

            );

          })}

        </div>


      </div>

    </section>
  );
}