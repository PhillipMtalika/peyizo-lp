import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/marketing/ui";
import { SUPPORT_EMAIL, APP_URL } from "@/lib/site";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Virtual accounts", href: "/#account" },
      { label: "Virtual Visa card", href: "/#account" },
      { label: "Card controls", href: "/#card-controls" },
      { label: "Security", href: "/#security" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Fees & limits", href: "/pricing" },
      { label: "Account guide", href: "/guide" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Support center", href: "/support" },
      { label: "Missing funds", href: "/support" },
      { label: "Card questions", href: "/support" },
      { label: `Email ${SUPPORT_EMAIL}`, href: `mailto:${SUPPORT_EMAIL}` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Disclosures", href: "/legal" },
      { label: "Cardholder terms", href: "/legal#cardholder-terms" },
      { label: "Privacy", href: "/legal#privacy" },
      { label: "Jurisdictions", href: "/legal#jurisdictions" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#080a0e]">
      <div className="shell py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Link href="/" aria-label="Peyizo home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
              A neobank-style digital account with virtual account details and a
              virtual Visa card. Fund with supported stablecoins, manage card
              controls and spend where Visa is accepted.
            </p>
            <a
              href={APP_URL}
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-white"
            >
              Open an account
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                  {column.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/40 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/[0.07] pt-6">
          <p className="max-w-4xl text-[11px] leading-relaxed text-white/25">
            Peyizo is not a bank or deposit-taking institution. Banking services,
            virtual accounts and card issuance are provided through licensed
            partners. Balances are not FDIC, FSCS or otherwise deposit-insured,
            and stablecoins are not legal tender. Stablecoin value and redemption
            depend on the issuer, eligibility and current terms. Visa is a
            trademark of Visa Inc.; acceptance is subject to merchant and program
            rules. Fees, limits and availability are described in your account
            agreement and cardholder terms. Nothing on this page is financial,
            legal or investment advice. Support:{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="underline">
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
          <div className="mt-5 flex flex-col gap-2 text-[11px] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Peyizo. All rights reserved.</span>
            <span className="font-mono">VIRTUAL ACCOUNTS · VISA CARDS · CARD CONTROLS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
