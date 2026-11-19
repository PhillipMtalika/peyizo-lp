"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Info, LockKeyhole } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eyebrow } from "@/components/marketing/ui";
import { Reveal } from "@/components/marketing/reveal";
import { APP_URL } from "@/lib/site";

type Mode = "active" | "frozen";

const modes: Record<
  Mode,
  { label: string; badge: string; title: string; points: string[] }
> = {
  active: {
    label: "Active",
    badge: "Ready to spend",
    title: "Your card is active.",
    points: [
      "New purchases are authorized against your balance",
      "Online, in-app and in-store payments work as normal",
      "Freeze or change limits whenever you want",
    ],
  },
  frozen: {
    label: "Frozen",
    badge: "New spend blocked",
    title: "Your card is frozen.",
    points: [
      "New authorizations are blocked immediately",
      "Charges already captured may still appear on your statement",
      "Unfreeze in one tap when you are ready",
    ],
  },
};

const format = (value: number) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function CardLab() {
  const [mode, setMode] = useState<Mode>("active");
  const [limit, setLimit] = useState(2000);
  const reduce = useReducedMotion();
  const current = modes[mode];

  return (
    <section id="card-controls" className="relative overflow-hidden py-20 md:py-28">
      <div className="glow-blue pointer-events-none absolute left-1/2 top-1/3 size-[600px] -translate-x-1/2 rounded-full opacity-[0.09] blur-[130px]" />
      <div className="shell relative">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>02 / Card controls</Eyebrow>
              <h2 className="mt-5 text-balance text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.055em] text-white">
                Set the rules. <span className="text-white/35">Then just spend.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              Explore how a virtual card behaves when it is active or frozen, and
              how a daily limit changes what you can authorize.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="panel gap-0 rounded-[24px] p-0">
              <div className="border-b border-white/[0.07] px-6 py-5 md:px-8">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  Card state
                </div>
                <Tabs
                  value={mode}
                  onValueChange={(v) => setMode(v as Mode)}
                  className="mt-4 gap-0"
                >
                  <TabsList className="h-10 w-full justify-start gap-1 rounded-full bg-white/[0.05] p-1">
                    {(Object.keys(modes) as Mode[]).map((key) => (
                      <TabsTrigger
                        key={key}
                        value={key}
                        className="h-8 flex-1 rounded-full px-3 text-xs data-active:bg-white/[0.1] data-active:text-white"
                      >
                        {modes[key].label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              <div className="px-6 py-7 md:px-8">
                <div className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-black/25 p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                      <LockKeyhole className="size-4" />
                    </span>
                    <div>
                      <div className="font-mono text-sm text-white/85">•••• 4821</div>
                      <div className="mt-0.5 text-[11px] text-white/35">
                        Virtual Visa card
                      </div>
                    </div>
                  </div>
                  <Badge
                    className={`h-6 rounded-full px-2.5 text-[10px] ${
                      mode === "active"
                        ? "bg-primary/12 text-primary ring-1 ring-primary/20"
                        : "bg-white/[0.06] text-white/60 ring-1 ring-white/10"
                    }`}
                  >
                    {current.label}
                  </Badge>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <span
                      id="card-limit-label"
                      className="text-xs font-medium text-white/55"
                    >
                      Daily card limit
                    </span>
                    <span className="font-mono text-sm text-white/85">
                      ${format(limit)}
                    </span>
                  </div>
                  <div className="mt-4">
                    <Slider
                      value={[limit]}
                      min={100}
                      max={5000}
                      step={100}
                      onValueChange={([v]) => setLimit(v)}
                      aria-labelledby="card-limit-label"
                    />
                  </div>
                  <div className="mt-3 flex justify-between font-mono text-[10px] text-white/30">
                    <span>$100</span>
                    <span>$5,000</span>
                  </div>
                </div>

                <div className="mt-8 flex items-start gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-[11px] leading-relaxed text-white/35">
                  <Info className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  These are illustrative controls. Actual limits, card states and
                  merchant-category rules depend on your account and card program
                  terms.
                </div>
              </div>
            </Card>

            <Card className="panel relative gap-0 overflow-hidden rounded-[24px] p-0">
              <div className="glow-lime pointer-events-none absolute -right-24 -top-24 size-80 rounded-full opacity-25 blur-3xl" />
              <div className="relative px-6 py-7 md:px-8 md:py-8">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                    What changes
                  </span>
                  <Badge className="h-6 gap-1.5 rounded-full bg-primary/12 px-2.5 text-[10px] text-primary ring-1 ring-primary/20">
                    <span className="size-1.5 rounded-full bg-primary" /> Illustrative
                  </Badge>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.28 }}
                  >
                    <div className="mt-5 text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">
                      {current.title}
                    </div>
                    <div className="mt-2 text-xs text-white/40">{current.badge}</div>

                    <div className="mt-7 space-y-3">
                      {current.points.map((point, i) => (
                        <motion.div
                          key={point}
                          initial={reduce ? false : { opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: 0.05 * i }}
                          className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5 text-sm text-white/70"
                        >
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                            <Check className="size-3" />
                          </span>
                          {point}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/[0.07] pt-6">
                  <div className="rounded-xl border border-white/[0.06] bg-black/25 p-4">
                    <div className="text-[10px] uppercase tracking-[0.14em] text-white/35">
                      Daily limit
                    </div>
                    <motion.div
                      key={limit}
                      initial={reduce ? false : { opacity: 0.5, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 font-mono text-lg text-white"
                    >
                      ${format(limit)}
                    </motion.div>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-black/25 p-4">
                    <div className="text-[10px] uppercase tracking-[0.14em] text-white/35">
                      Card state
                    </div>
                    <div className="mt-2 font-mono text-lg text-white">
                      {current.label}
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 h-12 w-full rounded-full text-sm font-semibold"
                >
                  <a href={APP_URL}>
                    Open an account <ArrowRight className="size-4" />
                  </a>
                </Button>

                <p className="mt-4 flex items-start gap-2 text-[11px] leading-relaxed text-white/30">
                  <Info className="mt-0.5 size-3.5 shrink-0" />
                  Illustrative interface only. It does not represent a live card,
                  balance or transaction. Card issuance and controls are subject
                  to approval, eligibility and your cardholder terms.
                </p>
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
