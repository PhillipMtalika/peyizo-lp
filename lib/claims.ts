export interface Claim {
  id: string;
  text: string;
  source: string;
  date: string;
  owner: string;
  reviewDue: string;
  jurisdiction?: string[];
}

/**
 * Claim inventory for copy that could be read as a regulated, financial or
 * performance statement. Every visible claim on the marketing site should map
 * to an entry here. Unsupported scale, yield, insurance and rate-lock claims
 * were intentionally removed.
 */
export const CLAIMS: Claim[] = [
  {
    id: "not-a-bank",
    text: "Peyizo is a neobank-style digital account, not a bank or deposit-taking institution. Banking services, virtual accounts and card issuance are provided through licensed partners.",
    source: "Site disclosures and account terms",
    date: "2026-11-19",
    owner: "Legal",
    reviewDue: "2027-11-19",
    jurisdiction: ["US", "EU", "UK"],
  },
  {
    id: "partner-bank-card-issuance",
    text: "Virtual Visa cards are issued through a partner bank and card program, subject to BIN sponsor, Visa and partner approval.",
    source: "Bridge consumer issuing and card KYC documentation; /legal#cardholder-terms",
    date: "2026-11-19",
    owner: "Compliance",
    reviewDue: "2027-05-19",
  },
  {
    id: "card-acceptance",
    text: "Cards are accepted where Visa is accepted, subject to merchant, country and program rules. Virtual cards and card-not-present payments may be declined.",
    source: "Bridge card features documentation; /legal#cardholder-terms",
    date: "2026-11-19",
    owner: "Product",
    reviewDue: "2027-05-19",
  },
  {
    id: "network-rate-at-settlement",
    text: "Currency conversion for card purchases uses card-network rates at settlement. Rate figures on this site are illustrative and are not locked quotes.",
    source: "Bridge exchange rates and card fees documentation; /pricing",
    date: "2026-11-19",
    owner: "Product",
    reviewDue: "2027-05-19",
    jurisdiction: ["US", "EU", "UK"],
  },
  {
    id: "settlement-estimates",
    text: "Stablecoin networks operate continuously. ACH can take 1–3 business days; same-day ACH before 4 p.m. ET and wires before 5 p.m. ET may process the same day. Waiting times are estimates, not guarantees.",
    source: "Bridge support FAQ guidance; /support",
    date: "2026-11-19",
    owner: "Support",
    reviewDue: "2027-05-19",
    jurisdiction: ["US"],
  },
  {
    id: "fees-in-terms",
    text: "Funding, card, FX, ATM and cash-advance fees are described in the account agreement and cardholder terms and shown in the account before acceptance.",
    source: "Bridge card fees documentation; /pricing",
    date: "2026-11-19",
    owner: "Legal",
    reviewDue: "2027-05-19",
  },
  {
    id: "monthly-statements",
    text: "Monthly card statements and cardholder phone support are provided through the card program.",
    source: "Bridge statements and card features documentation; /legal#cardholder-terms",
    date: "2026-11-19",
    owner: "Support",
    reviewDue: "2027-05-19",
  },
  {
    id: "no-public-api",
    text: "Peyizo does not offer a public API, SDK, webhooks, sandbox or developer integration.",
    source: "Business description in /legal and /support",
    date: "2026-11-19",
    owner: "Product",
    reviewDue: "2027-11-19",
  },
  {
    id: "jurisdiction-availability",
    text: "Availability varies by jurisdiction, entity and card program. Sanctions, KYC/KYB, BIN sponsor and local rules determine access.",
    source: "Bridge supported countries and card KYC documentation; /legal#jurisdictions",
    date: "2026-11-19",
    owner: "Compliance",
    reviewDue: "2027-05-19",
  },
  {
    id: "no-investment-services",
    text: "Peyizo does not offer yield, interest, staking, lending, credit, investment, money transmission or money-services products to third parties.",
    source: "Business description in /legal; Bridge high-risk activity guidance",
    date: "2026-11-19",
    owner: "Legal",
    reviewDue: "2027-11-19",
  },
  {
    id: "illustrative-interfaces",
    text: "Balances, card art, account details and transactions shown in product interfaces are illustrative and do not represent live data. Card art is subject to partner and Visa approval.",
    source: "Site copy review; /legal and Bridge card art guidance",
    date: "2026-11-19",
    owner: "Marketing",
    reviewDue: "2027-11-19",
  },
];

export function getClaim(id: string) {
  return CLAIMS.find((c) => c.id === id);
}
