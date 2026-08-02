"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 p-2">
            <ShieldCheck className="h-6 w-6 text-slate-950" />
          </div>

          <span className="text-2xl font-black tracking-tight">
            SafeSpend
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#signup"
            className="rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 px-6 py-3 font-bold text-slate-950 shadow-lg transition hover:scale-105"
          >
            Join Beta
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-slate-950 lg:hidden"
        >
          <div className="flex flex-col gap-6 px-6 py-8">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-slate-300"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#signup"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 px-6 py-4 text-center font-bold text-slate-950"
            >
              Join Free Beta
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}