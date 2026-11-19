import type { Metadata } from "next";
import SiteHeader from "@/components/marketing/site-header";
import SiteFooter from "@/components/marketing/site-footer";
import { InfoHero, InfoSection, InlineLink } from "@/components/marketing/info-page";
import { CompactDisclosure } from "@/components/marketing/disclosures";

export const metadata: Metadata = {
  title: "Fees & limits",
  description:
    "The fee categories and limits that can apply to Peyizo virtual accounts and virtual Visa cards. Exact amounts are shown in your account agreement before you accept.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />
      <main className="flex-1">
        <InfoHero
          eyebrow="Fees & limits"
          title="Clear costs, before you commit."
          description="Funding, card and any conversion or cash-advance fees are described in your account agreement and shown in your account before you accept. This page explains the categories, not a price promise."
        />

        <div className="py-4">
          <InfoSection title="Fee categories">
            <p>
              <span className="text-white/80">Account funding.</span> Fees may
              apply depending on how you add funds. The applicable method, minimum
              and any charge are shown before you confirm.
            </p>
            <p>
              <span className="text-white/80">Card purchases.</span> Your
              cardholder terms describe any program fee that applies to purchases,
              including international transactions where relevant.
            </p>
            <p>
              <span className="text-white/80">Currency conversion.</span> When a
              purchase is in a different currency, the card network sets the
              conversion rate at settlement. Your terms describe any additional
              program fee. We do not lock rates.
            </p>
            <p>
              <span className="text-white/80">ATM and cash advances.</span> Where
              available, network and program fees may apply. Cash access is not
              presented as free or guaranteed.
            </p>
            <p>
              <span className="text-white/80">Other charges.</span> Any replacement,
              inactivity or other charge that applies to your card or account is
              listed in your agreement. We do not take undisclosed deductions.
            </p>
          </InfoSection>

          <InfoSection title="How a card purchase is calculated">
            <div className="panel rounded-[24px] p-5 md:p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">
                Illustrative structure · not a quote
              </div>
              <div className="mt-6 space-y-3 border-b border-white/[0.07] pb-5 text-sm">
                {[
                  ["Purchase amount", "Amount shown by the merchant"],
                  ["Network conversion rate", "Set by the card network at settlement"],
                  ["Program fee", "Only if described in your cardholder terms"],
                  ["Final amount", "Shown in your statement and account activity"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span className="text-white/40">{label}</span>
                    <span className="text-right font-mono text-xs text-white/80">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-white/35">
              This is a structural illustration. Actual amounts depend on your
              account, card program, network conditions and current terms.
            </p>
          </InfoSection>

          <InfoSection title="No yield or interest">
            <p>
              Balances in a Peyizo account do not earn interest, yield or rewards
              described as investment returns. Peyizo does not offer staking,
              lending, credit or investment products.
            </p>
          </InfoSection>

          <InfoSection title="Limits">
            <p>
              Funding minimums, card spending limits, ATM limits and any
              jurisdiction-specific restrictions are shown in your account. Limits
              can change with your verification level, program rules and partner
              coverage.
            </p>
          </InfoSection>

          <InfoSection title="Rates are not locked">
            <p>
              Rates shown on this site are illustrative. Card conversions happen
              at the network rate on settlement, and the final amount appears in
              your statement. Neither Peyizo nor its partners lock a rate based on
              an estimate on this site.
            </p>
          </InfoSection>

          <InfoSection title="Questions">
            <p>
              See the <InlineLink href="/guide">Account & card guide</InlineLink>{" "}
              for how funding and card spend work,{" "}
              <InlineLink href="/legal">Legal & disclosures</InlineLink> for full
              terms, or the <InlineLink href="/support">support center</InlineLink>{" "}
              for contact details.
            </p>
            <CompactDisclosure />
          </InfoSection>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
