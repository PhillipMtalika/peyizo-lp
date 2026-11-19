"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeftRight,
  Check,
  Clock3,
  CreditCard,
  Globe2,
  LockKeyhole,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/marketing/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/marketing/reveal";

const accountDetails = [
  { label: "Account holder", value: "A. Cardholder" },
  { label: "Routing number", value: "••••••021" },
  { label: "Account number", value: "••••••4821" },
];

const controls = [
  "Fee schedule in your account",
  "Monthly card statements",
  "Dispute intake and support",
  "No undisclosed deductions",
];

export default function Features() {
  const reduce = useReducedMotion();

  return (
    <section id="account" className="relative py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>01 / The account</Eyebrow>
              <h2 className="mt-5 text-balance text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.055em] text-white">
                Everything you need. <span className="text-white/35">Nothing you don&apos;t.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45 md:text-right">
              A virtual account for receiving funds, a virtual Visa card for
              spending, and controls that stay in your hands.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-6" gap={0.1}>
          <StaggerItem className="md:col-span-4">
            <Card className="panel group h-full min-h-[360px] gap-0 rounded-[24px] p-0 transition-colors duration-500 hover:border-primary/25">
              <div className="flex items-start justify-between px-6 pt-6 md:px-8 md:pt-8">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    <Globe2 className="size-3.5" /> Virtual account
                  </div>
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">
                    Receive money with confidence.
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/45">
                    Virtual account and routing details are provided through our
                    banking partners for ACH and US domestic wires. Every deposit
                    is screened before it appears in your account.
                  </p>
                </div>
                <motion.div
                  whileHover={reduce ? undefined : { rotate: 180 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 sm:flex"
                >
                  <ArrowLeftRight className="size-4" />
                </motion.div>
              </div>

              <div className="mt-7 flex-1 px-6 pb-6 md:px-8 md:pb-8">
                <div className="rounded-2xl border border-white/[0.07] bg-black/25 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                      Account details · illustrative
                    </span>
                    <Badge
                      variant="outline"
                      className="h-5 rounded-full border-primary/25 bg-primary/10 px-2 text-[10px] text-primary"
                    >
                      ACH + US wires
                    </Badge>
                  </div>
                  {accountDetails.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={reduce ? false : { opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.12 * i }}
                      className="flex items-center justify-between gap-4 border-t border-white/[0.06] py-3 first:border-0"
                    >
                      <span className="text-xs text-white/40">{item.label}</span>
                      <span className="font-mono text-xs text-white/85">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem className="md:col-span-2">
            <Card className="panel group h-full min-h-[360px] gap-0 rounded-[24px] p-0 transition-colors duration-500 hover:border-[#72e5c3]/25">
              <div className="px-6 pt-6 md:px-7 md:pt-8">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#72e5c3]">
                  <CreditCard className="size-3.5" /> Virtual Visa card
                </div>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.04em] text-white">
                  Spend from your balance.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  Your card draws from your supported stablecoin balance at
                  authorization, so you spend what you have.
                </p>
              </div>

              <div className="mt-6 flex-1 px-6 pb-6 md:px-7">
                <div className="rounded-2xl border border-white/[0.07] bg-black/25 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-white/80">•••• 4821</span>
                    <Badge className="h-5 rounded-full bg-primary/12 px-2 text-[10px] text-primary ring-1 ring-primary/20">
                      Virtual
                    </Badge>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2 text-white/35">
                    <ShoppingBag className="size-4 text-primary" />
                    <Smartphone className="size-4 text-[#72e5c3]" />
                    <Globe2 className="size-4 text-[#7fa8ff]" />
                  </div>
                  <div className="mt-4 text-[11px] leading-relaxed text-white/35">
                    Online, in-app and in stores where Visa is accepted. Add to
                    supported mobile wallets.
                  </div>
                </div>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem className="md:col-span-2">
            <Card className="panel group h-full min-h-[300px] gap-0 rounded-[24px] p-0 transition-colors duration-500 hover:border-[#7fa8ff]/25">
              <div className="px-6 pt-6 md:px-7 md:pt-7">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7fa8ff]">
                  <LockKeyhole className="size-3.5" /> Card controls
                </div>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.04em] text-white">
                  You set the limits.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  Freeze your card, set a daily limit and review activity in your
                  account whenever you want.
                </p>
              </div>

              <div className="flex-1 px-5 pb-5 pt-7 md:px-6">
                <div className="rounded-2xl border border-white/[0.07] bg-black/35 p-4">
                  <div className="flex items-center justify-between text-[11px] text-white/50">
                    <span>Daily limit</span>
                    <span className="font-mono text-white/85">$2,000.00</span>
                  </div>
                  <div className="relative mt-4 h-1.5 rounded-full bg-white/[0.08]">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#7fa8ff]/50 via-[#7fa8ff] to-primary"
                      initial={reduce ? false : { width: "12%" }}
                      whileInView={{ width: "68%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <span className="absolute -top-[3px] left-[68%] size-3 rounded-full bg-white shadow-[0_0_12px_#c9f55e]" />
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-[11px] text-white/35">
                    <Zap className="size-3.5 text-primary" />
                    Changes apply to new authorizations
                  </div>
                </div>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem className="md:col-span-4">
            <Card className="panel relative h-full min-h-[300px] gap-0 overflow-hidden rounded-[24px] p-0 transition-colors duration-500 hover:border-white/20">
              <div className="glow-blue pointer-events-none absolute -right-20 -top-28 size-72 rounded-full opacity-40 blur-3xl" />
              <div className="relative flex h-full flex-col px-6 pt-6 md:px-8 md:pt-7">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                  <ShieldCheck className="size-3.5 text-[#b78bff]" /> Clear by design
                </div>
                <h3 className="mt-3 max-w-md text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">
                  Know what you&apos;re paying.
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/45">
                  Funding, card and any currency-conversion or cash-advance fees
                  are described in your account terms and shown in the app before
                  you confirm. No yield, interest or investment product is offered.
                </p>

                <div className="mt-auto grid gap-x-8 gap-y-3 pb-7 pt-8 sm:grid-cols-2">
                  {controls.map((control) => (
                    <div key={control} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span className="flex size-5 items-center justify-center rounded-full bg-white/[0.06] text-[#b78bff]">
                        <Check className="size-3" />
                      </span>
                      {control}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.1} className="mt-4">
          <div className="panel flex flex-col items-start justify-between gap-4 rounded-2xl px-6 py-5 sm:flex-row sm:items-center md:px-8">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                <LockKeyhole className="size-4" />
              </span>
              <div>
                <div className="text-sm font-medium text-white">Transparent by default</div>
                <div className="text-xs text-white/40">
                  Fees, limits and card terms are shown in your account before you
                  accept them.
                </div>
              </div>
            </div>
            <Badge
              variant="outline"
              className="h-7 gap-2 rounded-full border-white/10 bg-white/[0.03] px-3 text-[11px] text-white/60"
            >
              <Clock3 className="size-3" /> Terms before you confirm
            </Badge>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
