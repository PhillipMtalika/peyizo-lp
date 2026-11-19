import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import SiteHeader from "@/components/marketing/site-header";
import SiteFooter from "@/components/marketing/site-footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InfoHero, InlineLink } from "@/components/marketing/info-page";
import { SUPPORT_EMAIL } from "@/lib/site";
import { supportQuestions } from "@/lib/support-content";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Contact Peyizo support and find answers about virtual accounts, virtual Visa cards, missing funds, card charges, fees and verification.",
};

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />
      <main className="flex-1">
        <InfoHero
          eyebrow="Support"
          title="We're here to help."
          description="Answers to the account and card questions we hear most often. If you need a person, email us with your account reference and, where relevant, a transaction ID."
        />

        <div className="shell py-12 md:py-16">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="panel flex flex-col gap-5 rounded-[24px] p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <Mail className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-medium text-white">Email support</div>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/45">
                    Email us about an account, a card or these disclosures. Please
                    do not contact banking partners directly.
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-[#0A1204] transition-opacity hover:opacity-90"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>

            <div className="panel flex flex-col gap-5 rounded-[24px] p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <Phone className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-medium text-white">Cardholder phone support</div>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/45">
                    Card network rules require phone support for cardholders. The
                    number for your account is shown in your account and in your
                    cardholder agreement.
                  </p>
                </div>
              </div>
              <a
                href="/guide"
                className="shrink-0 rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-center text-sm font-medium text-white/85 transition-colors hover:bg-white/[0.08]"
              >
                Find your support number
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <h2 className="text-xl font-medium tracking-[-0.03em] text-white md:text-2xl">
                Common questions
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/45">
                Covers accounts, cards, missing funds, arrival times, minimums,
                memos, routing numbers and verification.
              </p>
              <div className="mt-6 space-y-2 text-sm text-white/50">
                <p>
                  <InlineLink href="/guide">Account & card guide</InlineLink>
                </p>
                <p>
                  <InlineLink href="/legal">Legal & disclosures</InlineLink>
                </p>
                <p>
                  <InlineLink href="/pricing">Fees & limits</InlineLink>
                </p>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {supportQuestions.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`q-${i}`}
                  className="border-white/[0.09] py-2"
                >
                  <AccordionTrigger className="py-5 text-left text-sm font-medium text-white/85 hover:no-underline hover:text-white md:text-base [&_svg]:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pr-8 text-sm leading-relaxed text-white/45">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
