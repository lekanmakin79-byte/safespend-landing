"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";


const questions = [
  {
    question: "Is SafeSpend a replacement for my accountant?",
    answer:
      "No. SafeSpend helps freelancers estimate and separate tax money so they can make smarter spending decisions. It does not replace professional tax advice.",
  },

  {
    question: "Does SafeSpend connect to my bank account?",
    answer:
      "No. SafeSpend is designed to work without requiring your bank login or access to your accounts.",
  },

  {
    question: "How does the tax calculation work?",
    answer:
      "SafeSpend uses an estimated tax percentage to help freelancers reserve money from each payment before spending.",
  },

  {
    question: "Is my financial information private?",
    answer:
      "Yes. Privacy is a core principle. Your financial information is only used to provide your SafeSpend experience.",
  },

  {
    question: "When will SafeSpend launch?",
    answer:
      "SafeSpend is currently preparing for early access. Join the beta list to receive launch updates.",
  },
];


export default function FAQ() {

  const [open,setOpen] = useState<number | null>(null);


  return (

    <section 
id="faq"
className="relative py-32 md:py-40"
>


      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />


      <div className="mx-auto max-w-4xl px-6">


        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
            FAQ
          </p>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Questions before you start?
          </h2>

        </div>



        <div className="mt-14 space-y-4">


          {questions.map((item,index)=>{


            const isOpen=open===index;


            return (

              <motion.div

                key={item.question}

                className="rounded-2xl border border-white/10 bg-white/5"

              >

                <button

                  onClick={()=>setOpen(isOpen ? null:index)}

                  className="flex w-full items-center justify-between p-6 text-left"

                >

                  <span className="font-bold">

                    {item.question}

                  </span>


                  <ChevronDown

                    className={`transition ${
                      isOpen ? "rotate-180" : ""
                    }`}

                  />

                </button>


                {isOpen && (

                  <div className="px-6 pb-6 text-slate-400 leading-7">

                    {item.answer}

                  </div>

                )}


              </motion.div>

            );


          })}


        </div>


      </div>


    </section>

  );

}