"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Plane,
  Repeat2,
  ShoppingBag,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eyebrow } from "@/components/marketing/ui";
import { Reveal } from "@/components/marketing/reveal";

const solutions = [
  {
    id: "shopping",
    label: "Online shopping",
    icon: ShoppingBag,
    title: "Buy what you want, from where you are.",
    description:
      "Use your virtual Visa card at online stores and marketplaces that accept Visa. Your available balance and card limits are shown in the app before you pay.",
    points: ["Virtual card details in the app", "Daily limits you control", "Activity in your account"],
    stat: "Visa",
    statLabel: "merchant acceptance",
    rows: [
      { name: "Design marketplace", detail: "Online · Card present", amount: "$48.00", status: "Approved" },
      { name: "Software subscription", detail: "Online · Recurring", amount: "$24.00", status: "Approved" },
      { name: "Electronics store", detail: "Online · International", amount: "$189.00", status: "Pending" },
    ],
  },
  {
    id: "travel",
    label: "Travel",
    icon: Plane,
    title: "Take your card with you.",
    description:
      "Add your virtual card to a supported mobile wallet and pay in stores or on transit where Visa is accepted. Currency conversion and any fees depend on your card terms.",
    points: ["Mobile wallet support", "In-store and transit payments", "Freeze if your phone is lost"],
    stat: "Wallet",
    statLabel: "where supported",
    rows: [
      { name: "Airline booking", detail: "Travel · Online", amount: "$420.00", status: "Approved" },
      { name: "Airport transit", detail: "Transit · Wallet", amount: "$18.50", status: "Approved" },
      { name: "Hotel deposit", detail: "Travel · Hold", amount: "$150.00", status: "Pending" },
    ],
  },
  {
    id: "subscriptions",
    label: "Subscriptions",
    icon: Repeat2,
    title: "Keep the services you rely on.",
    description:
      "Pay recurring subscriptions from your balance and see each charge in your activity. Set limits or freeze the card if a charge looks unfamiliar.",
    points: ["Recurring payments", "Clear transaction history", "Dispute support when needed"],
    stat: "1 tap",
    statLabel: "to freeze your card",
    rows: [
      { name: "Music subscription", detail: "Recurring · Monthly", amount: "$11.99", status: "Approved" },
      { name: "Cloud storage", detail: "Recurring · Monthly", amount: "$9.99", status: "Approved" },
      { name: "Streaming service", detail: "Recurring · Annual", amount: "$79.00", status: "Approved" },
    ],
  },
  {
    id: "business",
    label: "Business spend",
    icon: Briefcase,
    title: "A clean way to pay for work.",
    description:
      "Freelancers and small teams can fund an account, pay for tools and keep a readable record of card activity. Account features depend on your approved account type.",
    points: ["Fund from supported sources", "Monthly card statements", "Records you can export"],
    stat: "KYC",
    statLabel: "verification at signup",
    rows: [
      { name: "Hosting provider", detail: "Software · Online", amount: "$32.00", status: "Approved" },
      { name: "Office supplies", detail: "Retail · In store", amount: "$64.20", status: "Approved" },
      { name: "Advertising platform", detail: "Online · Recurring", amount: "$250.00", status: "Pending" },
    ],
  },
] as const;

type SolutionId = (typeof solutions)[number]["id"];

export default function Solutions() {
  const [active, setActive] = useState<SolutionId>("shopping");
  const reduce = useReducedMotion();
  const current = solutions.find((s) => s.id === active) ?? solutions[0];

  return (
    <section id="everyday" className="py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>04 / Made for everyday</Eyebrow>
              <h2 className="mt-5 text-balance text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.055em] text-white">
                Built for the way <span className="text-white/35">you actually spend.</span>
              </h2>
            </div>
            <a
              href="/pricing"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-primary"
            >
              See fees and limits
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Tabs
          value={active}
          onValueChange={(v) => setActive(v as SolutionId)}
          className="mt-10 gap-0"
        >
          <TabsList className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-none border-b border-white/[0.08] bg-transparent p-0">
            {solutions.map((solution) => (
              <TabsTrigger
                key={solution.id}
                value={solution.id}
                className="h-11 shrink-0 rounded-none border-b-2 border-transparent px-1 text-sm font-medium text-white/40 transition-colors data-active:border-primary data-active:bg-transparent data-active:text-white hover:text-white/70 sm:px-5"
              >
                <solution.icon className="mr-2 size-4" />
                {solution.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="relative mt-8 min-h-[420px]">
            <AnimatePresence mode="wait">
              <TabsContent key={active} value={active} forceMount className="mt-0">
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-10 lg:grid-cols-2 lg:items-center"
                >
                  <div>
                    <h3 className="text-balance text-2xl font-medium tracking-[-0.045em] text-white md:text-4xl">
                      {current.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/50 md:text-base">
                      {current.description}
                    </p>
                    <ul className="mt-7 space-y-3">
                      {current.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 text-sm text-white/70"
                        >
                          <span className="flex size-5 items-center justify-center rounded-full bg-primary/12 text-primary">
                            <Check className="size-3" />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex items-center gap-4">
                      <span className="font-mono text-3xl font-medium tracking-[-0.05em] text-primary">
                        {current.stat}
                      </span>
                      <span className="text-xs uppercase tracking-[0.14em] text-white/35">
                        {current.statLabel}
                      </span>
                    </div>
                  </div>

                  <div className="panel rounded-[24px] p-5 md:p-6">
                    <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                        Activity overview
                      </span>
                      <Badge
                        variant="outline"
                        className="h-6 rounded-full border-white/10 bg-white/[0.03] px-2.5 text-[10px] text-white/55"
                      >
                        Illustrative
                      </Badge>
                    </div>
                    <div className="mt-2">
                      {current.rows.map((row, i) => (
                        <motion.div
                          key={row.name}
                          initial={reduce ? false : { opacity: 0, x: 14 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: 0.06 * i }}
                          className="flex items-center justify-between gap-3 border-b border-white/[0.05] py-4 last:border-0"
                        >
                          <div className="min-w-0">
                            <div className="truncate text-sm font-medium text-white/85">
                              {row.name}
                            </div>
                            <div className="mt-1 text-[11px] text-white/35">{row.detail}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-mono text-sm text-white">{row.amount}</div>
                            <div
                              className={`mt-1 text-[10px] ${
                                row.status === "Pending"
                                  ? "text-[#ffca7a]"
                                  : "text-[#72e5c3]"
                              }`}
                            >
                              {row.status}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-3 rounded-xl border border-white/[0.06] bg-black/25 p-4">
                      <div className="flex items-center justify-between text-[11px] text-white/40">
                        <span>Illustrative activity</span>
                        <span className="font-mono text-white/70">Demo</span>
                      </div>
                      <div className="mt-3 flex h-8 items-end gap-1">
                        {[38, 52, 44, 68, 55, 74, 62, 88, 70, 96, 82, 100].map(
                          (h, i) => (
                            <motion.span
                              key={i}
                              className="flex-1 rounded-sm bg-gradient-to-t from-primary/10 to-primary/70"
                              initial={reduce ? false : { height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 0.5, delay: i * 0.025 }}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
