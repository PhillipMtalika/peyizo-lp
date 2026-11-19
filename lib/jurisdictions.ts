export interface Jurisdiction {
  code: string;
  name: string;
  availability: string;
  disclosure: string;
  excluded: boolean;
  exclusionReason?: string;
}

/**
 * Availability reference used for disclosure copy only. Licensing, regulator
 * and entity details are intentionally not asserted here; the authoritative
 * information for a customer is provided in their account agreement and during
 * onboarding. Card availability is also subject to BIN sponsor and Visa approval.
 */
export const JURISDICTIONS: Jurisdiction[] = [
  {
    code: "US",
    name: "United States",
    availability: "Varies by entity, state and card program",
    disclosure:
      "Virtual accounts support ACH and US domestic wires. Cards are issued by a partner bank and may not be available in every state. Not FDIC or NCUA insured. Value and redemption depend on the issuer, eligibility, and current terms.",
    excluded: false,
  },
  {
    code: "EU",
    name: "European Union",
    availability: "Varies by member state, entity and card program",
    disclosure:
      "Card issuance, wallets and virtual account rails depend on partner program approval and local rules. Stablecoin and e-money rules may apply. Redemption rights, where applicable, depend on the issuer and current terms.",
    excluded: false,
  },
  {
    code: "UK",
    name: "United Kingdom",
    availability: "Varies by entity and card program",
    disclosure:
      "Card and account availability depends on partner program approval. Cryptoasset promotions may be restricted. Losses are generally not FSCS protected.",
    excluded: false,
  },
  {
    code: "SG",
    name: "Singapore",
    availability: "Not currently offered",
    exclusionReason: "Outside current partner and card program coverage",
    disclosure: "Not currently offered to Singapore residents.",
    excluded: true,
  },
];

export function getJurisdiction(code: string) {
  return JURISDICTIONS.find((j) => j.code === code);
}

export const COMPLIANCE_PANEL_COPY =
  "This is not a bank account or deposit. Banking services, virtual accounts and card issuance are provided through licensed partners. It is not FDIC, FSCS, or other deposit-insured. Value and redemption depend on the issuer, eligibility, and current terms. Availability, fees and supported countries vary.";
