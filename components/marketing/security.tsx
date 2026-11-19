"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CircleAlert,
  Fingerprint,
  Globe2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eyebrow, CheckItem } from "@/components/marketing/ui";
import { Reveal } from "@/components/marketing/reveal";
import {
  CompactDisclosure,
  cardholderRisks,
} from "@/components/marketing/disclosures";

const controls = [
  { icon: Fingerprint, label: "Identity verification", detail: "KYC checks at onboarding" },
  { icon: LockKeyhole, label: "Card freeze and limits", detail: "Stop new spend in one tap" },
  { icon: ShieldCheck, label: "Account access", detail: "Secure sign-in and 2FA" },
];

export default function Security() {
  const reduce = useReducedMotion();

  return (
    <section id="security" className="relative overflow-hidden py-20 md:py-28">
      <div className="glow-blue pointer-events-none absolute -right-40 top-1/4 size-[520px] rounded-full opacity-[0.1] blur-[130px]" />
      <div className="shell relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Eyebrow>05 / Trust & controls</Eyebrow>
          <h2 className="mt-5 text-balance text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.055em] text-white">
            Control in your hands. <span className="text-gradient">Partners underneath.</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/50 md:text-base">
            A virtual card needs more than a good design. Peyizo pairs your
            account controls with the verification, servicing and disclosures
            required by our banking and card partners.
          </p>

          <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
            <CheckItem>Freeze or set limits on your card anytime</CheckItem>
            <CheckItem>Cards issued through partner banks</CheckItem>
            <CheckItem>KYC and sanctions checks at onboarding</CheckItem>
            <CheckItem>Monthly statements and dispute support</CheckItem>
          </ul>

          <CompactDisclosure className="mt-9" />
        </Reveal>

        <Reveal delay={0.12}>
          <Card className="panel gap-0 rounded-[26px] p-0">
            <Tabs defaultValue="cardterms" className="gap-0">
              <div className="border-b border-white/[0.07] px-5 pt-5 md:px-6">
                <TabsList className="h-10 w-full justify-start gap-1 rounded-full bg-white/[0.05] p-1">
                  {[
                    { value: "cardterms", label: "Card terms" },
                    { value: "controls", label: "Controls" },
                    { value: "availability", label: "Availability" },
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="h-8 flex-1 rounded-full px-2 text-xs data-active:bg-white/[0.1] data-active:text-white"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="cardterms" className="mt-0 p-5 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                      Before you spend
                    </div>
                    <div className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white">
                      Know the card terms.
                    </div>
                  </div>
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20">
                    <CircleAlert className="size-5" />
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {cardholderRisks.slice(0, 4).map((risk) => (
                    <div
                      key={risk.title}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5"
                    >
                      <div className="text-xs font-medium text-white/85">{risk.title}</div>
                      <p className="mt-1 text-[11px] leading-relaxed text-white/40">
                        {risk.text}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="/legal#cardholder-terms"
                  className="mt-5 inline-block text-xs text-primary underline decoration-primary/40 underline-offset-2 hover:text-white"
                >
                  Read the cardholder disclosures →
                </a>
              </TabsContent>

              <TabsContent value="controls" className="mt-0 p-5 md:p-6">
                <div className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                  Active controls
                </div>
                <div className="mt-4 text-2xl font-medium tracking-[-0.04em] text-white">
                  Guardrails everywhere.
                </div>
                <div className="mt-7 space-y-3">
                  {controls.map((control) => (
                    <div
                      key={control.label}
                      className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                    >
                      <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <control.icon className="size-4" />
                      </span>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white/85">
                          {control.label}
                        </div>
                        <div className="mt-0.5 text-[11px] text-white/35">
                          {control.detail}
                        </div>
                      </div>
                      <Badge className="h-6 rounded-full bg-primary/12 px-2 text-[10px] text-primary ring-1 ring-primary/20">
                        On
                      </Badge>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="availability" className="mt-0 p-5 md:p-6">
                <div className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                  Coverage
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Globe2 className="size-5 text-primary" />
                  <span className="text-2xl font-medium tracking-[-0.04em] text-white">
                    Varies by jurisdiction.
                  </span>
                </div>
                <div className="mt-6 space-y-3 text-xs leading-relaxed text-white/45">
                  <p>
                    Cards are issued through a partner bank and card program,
                    subject to BIN sponsor, Visa and partner approval. Card
                    availability, mobile wallets and permitted merchant categories
                    can vary by country and state.
                  </p>
                  <p>
                    Virtual account details support ACH and US domestic wires.
                    SWIFT is not currently supported. Stablecoin funding depends
                    on supported assets, networks and screening.
                  </p>
                </div>
                <div className="mt-6">
                  <motion.a
                    href="/legal#jurisdictions"
                    whileHover={reduce ? undefined : { x: 3 }}
                    className="inline-block text-xs text-primary underline decoration-primary/40 underline-offset-2 hover:text-white"
                  >
                    See jurisdiction information →
                  </motion.a>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
