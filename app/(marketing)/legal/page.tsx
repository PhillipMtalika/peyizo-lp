import type { Metadata } from "next";
import SiteHeader from "@/components/marketing/site-header";
import SiteFooter from "@/components/marketing/site-footer";
import { InfoHero, InfoSection, InlineLink } from "@/components/marketing/info-page";
import {
  StablecoinRiskList,
  CardholderRiskList,
  CompactDisclosure,
} from "@/components/marketing/disclosures";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal & disclosures",
  description:
    "Peyizo's product classification, stablecoin and cardholder risk disclosures, jurisdiction information and permitted-use policy.",
};

export default function LegalPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />
      <main className="flex-1">
        <InfoHero
          eyebrow="Legal & disclosures"
          title="Clear terms, before you commit."
          description="This page explains what Peyizo is, what it is not, and the risks that come with stablecoin balances and virtual Visa cards. It is not legal or investment advice."
        />

        <div className="py-4">
          <InfoSection title="Business description">
            <p>
              Peyizo is a neobank-style digital account product that gives
              customers virtual account details and a virtual Visa card funded
              from a supported stablecoin balance. Banking services, virtual
              accounts, card issuance and fiat rails are performed by licensed
              partners. Peyizo provides the account interface, card controls and
              customer support for its own product.
            </p>
            <p>
              Peyizo does not offer a public API, SDK, webhooks, sandbox or
              developer integration. It does not issue its own stablecoin, operate
              as a bank, hold client funds in escrow, provide investment or credit
              services, lend, provide money transmission or money services to
              third parties, operate a digital-asset exchange, or offer
              check-cashing, bail-bond, collections or similar services.
            </p>
            <p>
              Peyizo is a trading name. The contracting entity, its registered
              details and applicable regulator — where one applies — are shown in
              your account agreement during onboarding.
            </p>
          </InfoSection>

          <InfoSection title="Not a bank or deposit account">
            <p>
              Peyizo is not a bank or deposit-taking institution. A Peyizo
              balance is not a bank account and is not FDIC, FSCS or otherwise
              deposit-insured. Stablecoins are not government-issued legal tender
              and are not backed or guaranteed by a government.
            </p>
            <CompactDisclosure />
          </InfoSection>

          <InfoSection title="Stablecoin risk disclosures">
            <p>
              Stablecoins carry risks that are different from those of bank
              deposits. Please read the following before funding an account.
            </p>
            <StablecoinRiskList />
          </InfoSection>

          <InfoSection id="cardholder-terms" title="Virtual Visa card terms">
            <p>
              Your virtual Visa card is issued through a partner bank and card
              program, subject to BIN sponsor, Visa and partner approval. Peyizo
              does not issue the card directly. Card approval requires separate
              identity verification, and the card is governed by the cardholder
              agreement provided during onboarding.
            </p>
            <CardholderRiskList />
            <p>
              Monthly statements, dispute intake and cardholder phone support are
              provided through the card program. Cardholder phone support is
              available at the number shown in your account and cardholder
              agreement. Freezing a card blocks new authorizations but does not
              cancel captured charges or outstanding disputes. Cards may be
              suspended or closed where required by the program or by law.
            </p>
            <p>
              See <InlineLink href="/pricing">Fees & limits</InlineLink> for the
              fee categories and <InlineLink href="/guide">Account & card guide</InlineLink>{" "}
              for how card spend works.
            </p>
          </InfoSection>

          <InfoSection id="jurisdictions" title="Jurisdictions and availability">
            <p>
              Availability varies by country, state, legal entity, card program
              and partner coverage. Sanctions screening, KYC and local rules
              determine which accounts, funding methods and cards can be used.
              The authoritative supported list for your entity is shown in your
              account during onboarding.
            </p>
            <p>
              For the underlying partners, services are currently unavailable for
              individuals and businesses located in Algeria, Burundi, China, Japan
              and Tunisia. Prohibited jurisdictions include Myanmar, Syria, the
              West Bank and Yemen. Restrictions can change, and an unsupported or
              prohibited jurisdiction will prevent onboarding or use. Card
              availability is also subject to BIN sponsor and Visa program
              approval.
            </p>
            <p>
              Fiat rails follow banking hours and partner processing windows.
              Stablecoin networks operate continuously but may be congested,
              interrupted or restricted.
            </p>
          </InfoSection>

          <InfoSection title="Permitted use">
            <p>
              Accounts and cards may not be used for unlawful or deceptive
              activity, fraud, gambling or games of chance, investment or credit
              services offered to third parties, digital-asset exchange or
              brokerage services, money services or money transmission offered to
              third parties, check cashing, bail bonds, collections, adult content,
              counterfeit goods, controlled substances, or any activity that
              creates elevated financial, legal or regulatory risk.
            </p>
            <p>
              Certain activities — including remittances, holding client funds,
              third-party payment processing and foreign-exchange or virtual
              currency brokerage — are treated as high risk and must be disclosed
              during onboarding. Peyizo reviews identity, business information,
              source of funds, expected volumes and ownership as part of KYC.
            </p>
          </InfoSection>

          <InfoSection title="Rates, fees and settlement">
            <p>
              Rate figures shown in product interfaces are illustrative. Card
              conversions happen at rates set by the card network at settlement.
              Neither Peyizo nor its partners lock rates for a fixed period on the
              basis of those figures. The applicable fees are shown in your
              account before you accept them and can change with program terms and
              network conditions.
            </p>
          </InfoSection>

          <InfoSection id="privacy" title="Privacy, terms and changes">
            <p>
              Personal and business information is collected to verify identity,
              screen for sanctions and financial crime, provide the service and
              meet legal obligations. Data handling is described in the privacy
              notice provided with your account agreement.
            </p>
            <p>
              Your use of Peyizo is governed by the terms provided during
              onboarding. Product descriptions and disclosures on this site are
              informational, may be updated, and do not override your account
              agreement, cardholder agreement or the terms of our partners.
            </p>
          </InfoSection>

          <InfoSection title="Contact">
            <p>
              For questions about an account, a card or these disclosures, contact{" "}
              <InlineLink href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</InlineLink>
              . Cardholder phone support is available at the number in your
              account. Please do not contact banking partners directly.
            </p>
          </InfoSection>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
