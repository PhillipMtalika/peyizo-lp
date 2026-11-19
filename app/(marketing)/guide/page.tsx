import type { Metadata } from "next";
import SiteHeader from "@/components/marketing/site-header";
import SiteFooter from "@/components/marketing/site-footer";
import { InfoHero, InfoSection, InlineLink } from "@/components/marketing/info-page";
import { CompactDisclosure } from "@/components/marketing/disclosures";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Account & card guide",
  description:
    "How Peyizo virtual accounts and virtual Visa cards work: verification, funding, card use, controls, fees, statements and support.",
};

export default function GuidePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />
      <main className="flex-1">
        <InfoHero
          eyebrow="Account guide"
          title="Your Peyizo account, explained."
          description="A consumer guide to virtual account details, virtual Visa cards, funding, controls and support. Peyizo is not a bank; accounts and cards are provided through partners."
        />

        <div className="py-4">
          <InfoSection title="What you get">
            <p>
              An approved Peyizo account includes virtual account and routing
              details for ACH and US domestic wires, plus a virtual Visa card you
              can use online, in stores and in supported mobile wallets. Card
              issuance, banking services and fiat rails are provided through
              licensed partners.
            </p>
            <p>
              Peyizo is a digital account product. It is not a bank account or a
              deposit, and it does not earn interest or yield. Stablecoins are
              not legal tender. See <InlineLink href="/legal">Legal & disclosures</InlineLink>{" "}
              for the full classification.
            </p>
          </InfoSection>

          <InfoSection title="Opening an account">
            <p>
              Sign up with your legal name, contact details and the information
              required for identity and sanctions screening. Individual and
              business account types have different requirements. Source-of-funds
              information may be requested before an account is approved.
            </p>
            <p>
              Card approval is separate from account approval and requires
              additional verification. Availability depends on your jurisdiction,
              the card program and partner approval. You do not need to contact
              banking partners directly.
            </p>
          </InfoSection>

          <InfoSection title="Funding your balance">
            <p>
              Add funds through a supported source. Your account shows the assets,
              funding methods, limits and any fees before you confirm. Stablecoin
              transfers depend on network confirmations and screening; fiat
              deposits follow the timing of the underlying rail.
            </p>
            <p>
              ACH and US domestic wires are supported through virtual account
              details. SWIFT is not currently supported. See{" "}
              <InlineLink href="/support">Support</InlineLink> for the memo field
              and routing-number checks banks sometimes ask about.
            </p>
          </InfoSection>

          <InfoSection title="Using your virtual Visa card">
            <p>
              Your card draws from your supported stablecoin balance when a
              purchase is authorized. Card details are shown securely in the app.
              You can add the card to supported mobile wallets and use it at
              merchants that accept Visa, subject to merchant and program rules.
            </p>
            <p>
              Some merchants decline virtual cards or card-not-present payments.
              ATM access and cash advances depend on your program and may carry
              additional fees. See{" "}
              <InlineLink href="/legal#cardholder-terms">Cardholder terms</InlineLink>.
            </p>
          </InfoSection>

          <InfoSection title="Controls and security">
            <p>
              Freeze or unfreeze your card, set a daily limit and review activity
              from the card screen. Changes apply to new authorizations; charges
              already captured and open disputes are not cancelled by freezing.
            </p>
            <p>
              Use a strong, unique password and enable two-factor authentication.
              If you see a charge you do not recognize, freeze the card and
              contact support. Disputes follow your cardholder agreement and
              network rules.
            </p>
          </InfoSection>

          <InfoSection title="Fees and statements">
            <p>
              Funding, card, currency-conversion and any ATM or cash-advance fees
              are described in your account agreement and shown in your account.
              Currency conversion uses card-network rates at settlement. See{" "}
              <InlineLink href="/pricing">Fees & limits</InlineLink> for the fee
              categories.
            </p>
            <p>
              Monthly card statements are provided through the card program.
              Statements and transaction records are available in your account.
            </p>
            <CompactDisclosure />
          </InfoSection>

          <InfoSection title="Support">
            <p>
              Email <InlineLink href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</InlineLink>{" "}
              with your account email and a transaction reference where relevant.
              Cardholder phone support is available at the number in your account
              and cardholder agreement. More answers are in the{" "}
              <InlineLink href="/support">support center</InlineLink>.
            </p>
          </InfoSection>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
