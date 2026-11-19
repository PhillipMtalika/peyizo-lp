import { CircleAlert } from "lucide-react";
import { SUPPORT_EMAIL } from "@/lib/site";

/**
 * Stablecoin, account and card disclosures are intentionally more conservative
 * than the marketing copy. They align with the risk disclosures Bridge requires
 * its partners to surface, and are reused on the landing page, legal page and
 * support page so the wording cannot drift between surfaces.
 */
export const stablecoinRisks = [
  {
    title: "Not legal tender or a bank deposit",
    text: "Stablecoins are not government-issued legal tender. A Peyizo balance is not a bank account or a deposit, and it is not FDIC, FSCS or otherwise deposit-insured.",
  },
  {
    title: "Value and peg risk",
    text: "A stablecoin's market value can fluctuate and may deviate from its intended peg. You can lose value when converting between assets or when exiting a position.",
  },
  {
    title: "Liquidity and redemption risk",
    text: "Redemption depends on the issuer, your eligibility, applicable minimums, processing windows and the issuer's current terms. Redemption can be delayed, limited or suspended.",
  },
  {
    title: "Issuer, custodian and intermediary risk",
    text: "Stablecoins and fiat balances rely on third-party issuers, custodians, banks and payment partners. Their financial or operational failure, or a freeze, block or seizure of funds, may affect access to your balance.",
  },
  {
    title: "Cybersecurity and technology risk",
    text: "Networks, wallets and smart contracts can be exploited, congested or interrupted. Software errors, outages and attacks can delay or prevent settlement.",
  },
  {
    title: "Irreversible transactions",
    text: "Blockchain and some fiat rail transactions are final. Funds sent to a wrong address or an unintended recipient may not be recoverable. Always verify recipient details before confirming.",
  },
  {
    title: "Key and access loss",
    text: "If you lose access credentials or private keys held under your control, access to the associated assets may be permanently lost. Peyizo cannot recover keys it does not hold.",
  },
  {
    title: "Regulatory and jurisdiction risk",
    text: "Rules governing stablecoins and digital assets are evolving. Availability, supported assets and required checks vary by jurisdiction and can change at short notice.",
  },
] as const;

export const cardholderRisks = [
  {
    title: "Cards are issued through partners",
    text: "Your virtual Visa card is issued through a partner bank and card program. Peyizo is not a bank and does not issue cards or provide banking services directly.",
  },
  {
    title: "Acceptance is not guaranteed",
    text: "Visa acceptance depends on the merchant, country and card program. Some merchants decline virtual cards, card-not-present payments or certain categories.",
  },
  {
    title: "Fees and currency conversion",
    text: "Currency conversion uses rates set by the card network at settlement. Your cardholder terms describe any program, international, ATM or cash-advance fees that may apply.",
  },
  {
    title: "Statements, disputes and support",
    text: "Monthly statements, dispute rights and provisional credits are governed by your cardholder agreement and network rules. Cardholder phone support is available at the number in your account.",
  },
  {
    title: "Freezing and closure",
    text: "Freezing a card blocks new authorizations but does not cancel already captured charges or outstanding disputes. A card can be cancelled or suspended where required by the program or by law.",
  },
  {
    title: "Restricted use",
    text: "Cards may not be used for unlawful activity or prohibited categories in your cardholder terms, including money services, money transmission to third parties or digital-asset brokerage.",
  },
] as const;

export function CompactDisclosure({
  className = "",
  withSupport = true,
}: {
  className?: string;
  withSupport?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-xs leading-relaxed text-white/45 ${className}`}
    >
      <div className="mb-2 flex items-center gap-2 font-medium text-white/70">
        <CircleAlert className="size-4 text-primary" /> Important disclosure
      </div>
      <p>
        Peyizo is not a bank or deposit-taking institution. Banking services,
        virtual accounts and card issuance are provided through licensed
        partners. Balances are not FDIC, FSCS or otherwise deposit-insured and
        are not legal tender. Stablecoin value and redemption depend on the
        issuer, your eligibility and current terms. Cards are accepted where
        Visa is accepted, subject to merchant and program rules. Transfers can
        be irreversible and networks can be disrupted. Fees, limits and
        availability vary by jurisdiction and program. Nothing on this site is
        financial, legal or investment advice.
      </p>
      {withSupport ? (
        <p className="mt-3">
          Questions about an account or card? Contact support at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-primary underline decoration-primary/40 underline-offset-2 hover:text-white"
          >
            {SUPPORT_EMAIL}
          </a>
          . Please do not contact banking partners directly.
        </p>
      ) : null}
      <a
        href="/legal"
        className="mt-3 inline-block text-primary underline decoration-primary/40 underline-offset-2 hover:text-white"
      >
        Read the full disclosures →
      </a>
    </div>
  );
}

export function StablecoinRiskList({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-4 md:grid-cols-2 ${className}`}>
      {stablecoinRisks.map((risk) => (
        <div
          key={risk.title}
          className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
        >
          <h3 className="text-sm font-medium text-white/90">{risk.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/45">{risk.text}</p>
        </div>
      ))}
    </div>
  );
}

export function CardholderRiskList({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-4 md:grid-cols-2 ${className}`}>
      {cardholderRisks.map((risk) => (
        <div
          key={risk.title}
          className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
        >
          <h3 className="text-sm font-medium text-white/90">{risk.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/45">{risk.text}</p>
        </div>
      ))}
    </div>
  );
}
