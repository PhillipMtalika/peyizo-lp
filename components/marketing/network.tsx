"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CreditCard, Globe2, Smartphone } from "lucide-react";
import { Eyebrow } from "@/components/marketing/ui";
import { Reveal } from "@/components/marketing/reveal";

const arcs = [
  { d: "M 300 150 Q 400 60 520 160", delay: 0, duration: 3.8, label: "ONLINE" },
  { d: "M 270 250 Q 400 360 540 250", delay: 1.1, duration: 4.6, label: "IN STORE" },
  { d: "M 300 150 Q 480 220 540 250", delay: 2, duration: 4.2, label: "WALLET" },
];

const nodes = [
  { x: 300, y: 150, label: "YOUR CARD" },
  { x: 520, y: 160, label: "MERCHANT" },
  { x: 540, y: 250, label: "VISA NETWORK" },
  { x: 270, y: 250, label: "PARTNER BANK" },
];

const metrics = [
  { icon: CreditCard, value: "Visa", label: "card network acceptance" },
  { icon: Globe2, value: "ACH", label: "virtual account rails" },
  { icon: Smartphone, value: "Wallet", label: "supported mobile wallets" },
];

export default function Network() {
  const reduce = useReducedMotion();

  return (
    <section
      id="acceptance"
      className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.012] py-20 md:py-28"
    >
      <div className="grid-surface pointer-events-none absolute inset-0 opacity-60" />
      <div className="shell relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow>03 / Acceptance</Eyebrow>
          <h2 className="mt-5 text-balance text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.055em] text-white">
            Spend where <span className="text-gradient">Visa is accepted.</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/50 md:text-base">
            Your virtual Visa card works at merchants that accept Visa, online
            and in stores, and can be added to supported mobile wallets. Your
            virtual account details support ACH and US domestic wires through our
            banking partners. Acceptance and rails depend on your card program
            and jurisdiction.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
              >
                <metric.icon className="size-4 text-primary" />
                <div className="mt-3 font-mono text-xl tracking-tight text-white">
                  {metric.value}
                </div>
                <div className="mt-1 text-[11px] text-white/35">{metric.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="panel relative mx-auto aspect-[8/5] w-full max-w-[680px] overflow-hidden rounded-[28px]">
            <div className="glow-lime pointer-events-none absolute left-1/2 top-1/2 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-3xl" />
            <svg
              viewBox="0 0 800 500"
              className="relative size-full"
              fill="none"
              aria-label="Illustrative Visa card acceptance network"
              role="img"
            >
              <defs>
                <linearGradient id="globe-stroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#C9F55E" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#72E5C3" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="arc-stroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#C9F55E" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#C9F55E" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#72E5C3" stopOpacity="0.2" />
                </linearGradient>
                <radialGradient id="globe-fill">
                  <stop offset="0%" stopColor="#C9F55E" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#C9F55E" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="400" cy="245" r="190" fill="url(#globe-fill)" />
              <motion.circle
                cx="400"
                cy="245"
                r="190"
                stroke="url(#globe-stroke)"
                strokeWidth="1"
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "400px 245px" }}
              />

              {[130, 95, 55].map((ry, i) => (
                <ellipse
                  key={ry}
                  cx="400"
                  cy="245"
                  rx={190 - i * 4}
                  ry={ry}
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="1"
                />
              ))}
              {[70, 130].map((rx) => (
                <ellipse
                  key={rx}
                  cx="400"
                  cy="245"
                  rx={rx}
                  ry="190"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="1"
                />
              ))}
              <path d="M400 55 V435" stroke="rgba(255,255,255,0.07)" />
              <path d="M210 245 H590" stroke="rgba(255,255,255,0.07)" />

              {arcs.map((arc, i) => (
                <g key={arc.label}>
                  <path d={arc.d} stroke="rgba(201,245,94,0.12)" strokeWidth="1" />
                  <motion.path
                    d={arc.d}
                    stroke="url(#arc-stroke)"
                    strokeWidth="2"
                    pathLength={1}
                    strokeDasharray="0.12 0.88"
                    initial={{ strokeDashoffset: 1 }}
                    animate={reduce ? undefined : { strokeDashoffset: 0 }}
                    transition={{
                      duration: arc.duration,
                      delay: arc.delay,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <text
                    x={i === 0 ? 408 : i === 1 ? 388 : 424}
                    y={i === 0 ? 86 : i === 1 ? 336 : 196}
                    className="fill-white/25 font-mono text-[10px]"
                  >
                    {arc.label}
                  </text>
                </g>
              ))}

              {nodes.map((node, i) => (
                <g key={node.label}>
                  {reduce ? null : (
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="6"
                      stroke="#C9F55E"
                      strokeWidth="1"
                      initial={{ opacity: 0.6, r: 4 }}
                      animate={{ opacity: 0, r: 18 }}
                      transition={{
                        duration: 2.4,
                        delay: i * 0.6,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  )}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="6"
                    fill="#0B0E12"
                    stroke="#C9F55E"
                    strokeWidth="1.5"
                  />
                  <circle cx={node.x} cy={node.y} r="2" fill="#C9F55E" />
                  <text
                    x={node.x + 14}
                    y={node.y + 4}
                    className="fill-white/45 font-mono text-[10px]"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
            <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[10px] text-white/45 backdrop-blur-sm">
              ACCEPTANCE VIEW · ILLUSTRATIVE
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
