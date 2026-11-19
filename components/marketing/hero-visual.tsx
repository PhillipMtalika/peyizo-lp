"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { ArrowDownLeft, Check, LockKeyhole, MoreHorizontal, Radio } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkline } from "@/components/marketing/ui";

const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedBalance() {
  const reduce = useReducedMotion();
  const value = useMotionValue(0);
  const display = useTransform(value, (v) =>
    "$" +
    v.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );

  useEffect(() => {
    if (reduce) {
      value.set(2480.5);
      return;
    }
    const controls = animate(value, 2480.5, {
      duration: 1.9,
      ease,
      delay: 0.35,
    });
    return () => controls.stop();
  }, [reduce, value]);

  return <motion.span className="tabular-nums">{display}</motion.span>;
}

function FloatingChip({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.9, y: 12 }}
      animate={
        reduce
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 1, scale: 1, y: [0, -9, 0] }
      }
      transition={
        reduce
          ? { duration: 0.2 }
          : {
              opacity: { duration: 0.6, delay },
              scale: { duration: 0.6, delay },
              y: {
                duration: 5.5,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

function VirtualCard() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 40, rotate: -16 }}
      animate={{ opacity: 1, y: 0, rotate: -8 }}
      transition={{ duration: 1, ease, delay: 0.5 }}
      className="relative aspect-[1.586/1] w-[268px] rounded-[22px] border border-white/15 bg-[linear-gradient(135deg,#1c2530_0%,#0d1117_45%,#172012_100%)] p-5 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.95)] sm:w-[326px] sm:p-6"
    >
      <div className="glow-lime pointer-events-none absolute -right-10 -top-16 size-52 rounded-full opacity-60 blur-3xl" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-base font-semibold tracking-[-0.05em] text-white sm:text-lg">
              peyizo<span className="text-primary">.</span>
            </div>
            <div className="mt-0.5 text-[9px] uppercase tracking-[0.22em] text-white/40">
              Virtual debit
            </div>
          </div>
          <Badge
            variant="outline"
            className="h-5 rounded-full border-white/15 bg-white/[0.04] px-2 text-[9px] uppercase tracking-wider text-white/60"
          >
            Visa
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-7 w-9 rounded-md border border-yellow-200/30 bg-gradient-to-br from-yellow-100/60 to-yellow-500/20 sm:h-8 sm:w-11" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            contactless
          </span>
        </div>

        <div>
          <div className="font-mono text-base tracking-[0.16em] text-white/90 sm:text-xl">
            •••• •••• •••• 4821
          </div>
          <div className="mt-3 flex items-end justify-between">
            <div>
              <div className="text-[8px] uppercase tracking-[0.18em] text-white/35">
                Cardholder
              </div>
              <div className="mt-0.5 text-[11px] uppercase tracking-wider text-white/75 sm:text-xs">
                A. Cardholder
              </div>
            </div>
            <div className="text-right">
              <div className="text-[8px] uppercase tracking-[0.18em] text-white/35">
                Expires
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-white/75 sm:text-xs">
                09/29
              </div>
            </div>
            <div className="text-lg font-bold italic tracking-tight text-white/90 sm:text-xl">
              VISA
            </div>
          </div>
        </div>
      </div>
      <span className="absolute -bottom-6 left-4 font-mono text-[8px] uppercase tracking-[0.14em] text-white/25">
        Illustrative card design · subject to partner and Visa approval
      </span>
    </motion.div>
  );
}

export default function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative isolate mx-auto h-[500px] w-full max-w-[560px] sm:h-[560px] lg:h-[600px]">
      <div className="glow-lime pointer-events-none absolute -right-10 -top-16 size-[420px] rounded-full opacity-90 blur-[70px]" />
      <div className="glow-blue pointer-events-none absolute -bottom-20 -left-16 size-[360px] rounded-full opacity-80 blur-[80px]" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-1 top-1 hidden size-[420px] rounded-full border border-dashed border-white/[0.09] sm:block"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_14px_#c9f55e]" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-12 hidden size-[290px] rounded-full border border-white/[0.05] sm:block"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -bottom-1 left-1/4 size-1.5 -translate-x-1/2 rounded-full bg-[#72e5c3]" />
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 34, rotateX: 6 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.15 }}
        className="absolute left-0 right-0 top-2 sm:right-auto sm:w-[400px]"
      >
        <Card className="panel rounded-[26px] gap-0 p-0">
          <div className="flex items-center justify-between px-6 pt-6">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
              <Radio className="size-3.5 text-primary" />
              Available balance · illustrative
            </div>
            <MoreHorizontal className="size-4 text-white/35" />
          </div>

          <div className="px-6 pt-3">
            <div className="text-[clamp(2rem,5vw,2.9rem)] font-medium leading-none tracking-[-0.06em] text-white">
              <AnimatedBalance />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Badge className="h-6 gap-1 rounded-full bg-primary/12 px-2 text-[11px] text-primary ring-1 ring-primary/20">
                <Check className="size-3" /> Ready to spend
              </Badge>
              <span className="text-xs text-white/40">Funded in USDC</span>
            </div>
          </div>

          <div className="mt-4 px-2">
            <Sparkline className="h-16 w-full" />
          </div>

          <div className="mt-1 grid grid-cols-2 gap-2 border-t border-white/[0.07] px-6 py-5">
            {[
              { code: "USDC balance", value: "$2,480.50", color: "bg-[#2775CA]" },
              { code: "Card limit today", value: "$3,000.00", color: "bg-primary" },
            ].map((item) => (
              <div key={item.code} className="flex items-center gap-2.5">
                <span className={`size-2 rounded-full ${item.color}`} />
                <div className="min-w-0">
                  <div className="truncate font-mono text-[10px] uppercase tracking-wider text-white/45">
                    {item.code}
                  </div>
                  <div className="truncate text-xs font-medium text-white/85">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      <FloatingChip
        delay={0.9}
        className="absolute bottom-48 left-0 z-20 sm:bottom-44 sm:left-2"
      >
        <div className="panel flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
            <ArrowDownLeft className="size-4" />
          </span>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/40">
              Funding received
            </div>
            <div className="font-mono text-sm font-medium text-white">
              +$500.00 USDC
            </div>
          </div>
        </div>
      </FloatingChip>

      <div className="absolute bottom-6 right-0 z-10 sm:bottom-8 sm:right-2">
        <VirtualCard />
      </div>

      <FloatingChip
        delay={1.3}
        className="absolute right-0 top-24 z-20 hidden sm:block"
      >
        <div className="panel flex items-center gap-2 rounded-full px-3.5 py-2 text-[11px] shadow-xl">
          <LockKeyhole className="size-3.5 text-[#72e5c3]" />
          <span className="text-white/45">Freeze in one tap</span>
          <span className="font-mono font-medium text-white">On</span>
        </div>
      </FloatingChip>
    </div>
  );
}
