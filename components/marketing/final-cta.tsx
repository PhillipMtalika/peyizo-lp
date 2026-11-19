"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/marketing/reveal";
import { APP_URL } from "@/lib/site";

export default function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="px-4 pb-20 md:pb-28">
      <Reveal>
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] border border-white/[0.09] bg-[#0b0e12] px-6 py-16 text-center md:px-12 md:py-24">
          <motion.div
            aria-hidden="true"
            className="glow-lime pointer-events-none absolute left-1/2 top-1/2 size-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.16] blur-[100px]"
            animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.14, 0.22, 0.14] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="grid-surface pointer-events-none absolute inset-0 opacity-70" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5 text-[11px] font-medium text-primary">
              <Sparkles className="size-3.5" /> Applications open
            </span>
            <h2 className="mt-7 text-balance text-[clamp(2.25rem,5vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.06em] text-white">
              Your account. <span className="text-gradient">Your card.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/50 md:text-base">
              Open a Peyizo account to get virtual account details and a virtual
              Visa card. Review fees and limits before you accept, then spend
              where Visa is accepted.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-7 text-sm font-semibold shadow-[0_0_40px_-10px_rgba(201,245,94,0.6)]"
              >
                <a href={APP_URL}>
                  Open an account <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/12 bg-white/[0.03] px-7 text-sm font-medium text-white/85 hover:bg-white/[0.08] hover:text-white"
              >
                <a href="/pricing">See fees and limits</a>
              </Button>
            </div>
            <p className="mt-6 text-[11px] leading-relaxed text-white/30">
              Peyizo is not a bank. Banking services, virtual accounts and card
              issuance are provided through licensed partners. Balances are not
              deposit-insured and stablecoins are not legal tender. Visa is a
              trademark of Visa Inc.; acceptance is subject to merchant and
              program rules. Subject to verification, eligibility and
              jurisdiction.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
