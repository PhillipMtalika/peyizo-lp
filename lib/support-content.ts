import { SUPPORT_EMAIL } from "@/lib/site";

/**
 * Consumer-facing questions for virtual accounts and virtual Visa cards.
 * Includes the support topics Bridge asks partners to publish, reused on the
 * landing page and support center so the answers cannot drift between surfaces.
 */
export const supportQuestions = [
  {
    q: "Is Peyizo a bank?",
    a: "Peyizo is a neobank-style digital account, not a chartered bank. Banking services, virtual account details and card issuance are provided through licensed partners. A Peyizo balance is not a bank account or a deposit, is not FDIC, FSCS or otherwise deposit-insured, and stablecoins are not legal tender.",
  },
  {
    q: "What can I hold in a Peyizo account?",
    a: "Depending on your jurisdiction and account type, you can hold supported stablecoin balances. The assets, funding methods and limits available to you are shown in your account. Balances do not earn interest or yield.",
  },
  {
    q: "Who issues my virtual Visa card?",
    a: "Your card is issued through a partner bank and card program. Peyizo provides the account interface and card controls; it does not issue the card or provide banking services directly. Visa is a trademark of Visa Inc.",
  },
  {
    q: "Where can I use my card?",
    a: "You can use your virtual Visa card at merchants that accept Visa, online, in-app and in stores, and in supported mobile wallets. Acceptance depends on the merchant, country and program rules; some merchants decline virtual cards or card-not-present payments.",
  },
  {
    q: "How do I freeze my card or change a limit?",
    a: "Open the card screen in your account to freeze or unfreeze the card and adjust your limits. Changes apply to new authorizations. Freezing does not cancel charges that were already captured or outstanding disputes.",
  },
  {
    q: "What does it cost?",
    a: "Funding, card, currency-conversion and any ATM or cash-advance fees are described in your account agreement and cardholder terms, and shown in your account before you accept them. We do not take undisclosed deductions after you confirm. There is no yield or interest on balances.",
  },
  {
    q: "Do you lock exchange rates?",
    a: "No. For card purchases in another currency, the conversion rate is set by the card network at settlement. Any program fee is described in your cardholder terms. Rate figures on this site are illustrative, not locked quotes.",
  },
  {
    q: "How fast do transfers settle?",
    a: "Stablecoin transfers can settle on public networks around the clock. Fiat delivery depends on the rail: next-day ACH can take 1–3 business days, same-day ACH sent before 4 p.m. ET may arrive the same day, and wires received before 5 p.m. ET are typically processed the same day. These are estimates, not guarantees.",
  },
  {
    q: "Where is Peyizo available?",
    a: "Availability varies by country, state, entity and card program. Some jurisdictions are unsupported or prohibited, and sanctions, KYC and local rules determine access. The current supported list for your account is shown during onboarding; see Jurisdictions in our legal disclosures.",
  },
  {
    q: "Do you offer an API, SDK or developer sandbox?",
    a: "No. Peyizo is a consumer account product with virtual accounts and virtual Visa cards. We do not offer a public API, SDK, webhooks, sandbox or developer integration. The account and card experience is delivered in the Peyizo app.",
  },
  {
    q: "I have a question about a payment or card. How do I contact support?",
    a: `Email Peyizo support at ${SUPPORT_EMAIL}. Cardholder phone support is available at the number shown in your account and cardholder agreement. Include your account email and any transaction reference so we can investigate. Please avoid contacting banking partners directly.`,
  },
  {
    q: "My funds are missing or have not landed. What should I do?",
    a: `Contact us at ${SUPPORT_EMAIL} and we will investigate. If you sent funds from a bank account, request a Trace ID for an ACH payment or an IMAD for a wire from your bank; that information helps us track the transaction faster.`,
  },
  {
    q: "When will funds land in the account?",
    a: "Next-day ACH transactions can take 1–3 business days to arrive. Same-day ACH sent before 4 p.m. ET will generally arrive the same day. Wires can take a few hours and are usually processed the same day if received before 5 p.m. ET. Stablecoin transfers depend on network confirmations and screening.",
  },
  {
    q: "What is the minimum amount I can send or receive?",
    a: "Minimums depend on the asset, funding method and account configuration. The applicable minimum is shown in your account before you confirm; there is no single site-wide minimum.",
  },
  {
    q: "Where do I enter the memo when making a payment?",
    a: "Enter the memo in the Memo or reference field of the ACH or wire. For JP Morgan Chase and Mercury, the correct field is called “Message to Recipient.” If you are unsure, ask your bank which field to use.",
  },
  {
    q: "My bank doesn't recognize the routing number. What should I do?",
    a: "Confirm the routing number shown in your account against the Federal Reserve Bank Services directory at frbservices.org or the American Bankers Association lookup tool. If your bank still cannot recognize it, ask them to verify the listing and contact Peyizo support. Avoid sending funds to an unverified number.",
  },
  {
    q: "Do you provide SWIFT codes or international account numbers?",
    a: "Virtual accounts with Peyizo currently support ACH and US domestic wires. SWIFT payments are not currently supported.",
  },
  {
    q: "What transactions can a virtual account receive?",
    a: "For non-US residents, permitted transfers include first-party payments from your own bank, fintech or brokerage account; payments from a registered business; payments from a family member with a shared surname; and person-to-person payments under $4,000. For US residents, first-party payments, payroll from businesses and third-party payments in most states are permitted. All payments are subject to screening and account eligibility.",
  },
  {
    q: "I received a microdeposit or a 3-letter Plaid code. Where do I find it?",
    a: "Microdeposit notifications are sent to the email, SMS or push channel associated with your account, and amounts can take up to a day to arrive. The 3-letter Plaid code is included in the microdeposit descriptor.",
  },
  {
    q: "I don't recognize a card charge. What should I do?",
    a: "Freeze your card in the app, then contact support with the merchant name and date. We will help you review the transaction and start a dispute where appropriate. Provisional credits and final dispute decisions follow your cardholder agreement and network rules.",
  },
  {
    q: "Can I use the card at an ATM or for a cash advance?",
    a: "ATM access and cash advances depend on your card program and jurisdiction. Where available, network and program fees may apply and are described in your cardholder terms. We do not present cash access as free or guaranteed.",
  },
] as const;
