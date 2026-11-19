"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CreditCard, Globe2, Play, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroVisual from "@/components/marketing/hero-visual";
import { APP_URL } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { icon: CreditCard, value: "Visa", label: "accepted where Visa is accepted" },
  { icon: Globe2, value: "ACH", label: "virtual account details" },
  { icon: ShieldCheck, value: "KYC", label: "identity checks at signup" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="grid-surface pointer-events-none absolute inset-x-0 top-0 h-[720px]" />
      <div className="glow-lime pointer-events-none absolute -top-56 left-1/3 size-[620px] rounded-full opacity-[0.14] blur-[130px]" />
      <div className="glow-blue pointer-events-none absolute right-[-12%] top-20 size-[520px] rounded-full opacity-[0.12] blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="shell relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="max-w-2xl">
            <motion.div {...rise(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/70 backdrop-blur-sm">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                </span>
                Virtual accounts + virtual Visa cards
                <span className="text-primary">→</span>
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.08)}
              className="mt-7 text-balance text-[clamp(2.75rem,6.5vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.065em] text-white"
            >
              One account. <span className="text-gradient">Spend anywhere.</span>
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/55 md:text-lg"
            >
              Peyizo puts virtual account details and a virtual Visa card in one
              app. Fund with a supported stablecoin, see your balance, set card
              limits and pay online or in stores where Visa is accepted.
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-6 text-sm font-semibold shadow-[0_0_36px_-8px_rgba(201,245,94,0.55)]"
              >
                <a href={APP_URL}>
                  Open an account <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/12 bg-white/[0.03] px-6 text-sm font-medium text-white/85 hover:bg-white/[0.08] hover:text-white"
              >
                <a href="#how-it-works">
                  <Play className="size-3.5 fill-current" /> See how it works
                </a>
              </Button>
            </motion.div>

            <motion.p {...rise(0.28)} className="mt-4 max-w-xl text-[11px] leading-relaxed text-white/35">
              Peyizo is not a bank. Banking services, virtual accounts and card
              issuance are provided through licensed partners, subject to identity
              verification, eligibility and jurisdiction.
            </motion.p>

            <motion.div
              {...rise(0.32)}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/40"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-primary" /> Identity checked at signup
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-primary" /> Freeze your card anytime
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-primary" /> Fees shown in your account
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>

        <motion.div
          {...rise(0.5)}
          className="mt-10 grid grid-cols-1 gap-5 border-t border-white/[0.07] pt-8 sm:grid-cols-3 md:mt-16 md:pt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-start gap-3">
              <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <stat.icon className="size-4" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xl tracking-tight text-white md:text-2xl">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.12em] text-white/35">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
