import { CreditCard, FileCheck2, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/marketing/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/marketing/reveal";

const steps = [
  {
    icon: FileCheck2,
    number: "01",
    title: "Apply and verify",
    text: "Tell us about yourself or your business. Identity, sanctions and source-of-funds checks are completed before an account is opened, and availability depends on your jurisdiction.",
  },
  {
    icon: Wallet,
    number: "02",
    title: "Fund your account",
    text: "Add funds through a supported source. Your account shows the assets, funding methods and limits available to you before you commit.",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Spend with your card",
    text: "Get virtual account details and a virtual Visa card in the app. Set a limit, add it to a supported wallet and pay where Visa is accepted.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-white/[0.06] bg-white/[0.012] py-20 md:py-28"
    >
      <div className="shell">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>06 / How it works</Eyebrow>
            <h2 className="mt-5 text-balance text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.055em] text-white">
              From signup to <span className="text-white/35">first spend.</span>
            </h2>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-3" gap={0.1}>
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <Card className="panel h-full min-h-[280px] gap-0 rounded-[24px] p-0">
                <div className="flex h-full flex-col p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20">
                      <step.icon className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-white/25">{step.number}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-medium tracking-[-0.04em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/45">{step.text}</p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-[11px] leading-relaxed text-white/30">
            Product walkthrough. Interfaces, balances and transactions shown on
            this page are illustrative and do not represent live data.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
