import SiteHeader from "@/components/marketing/site-header";
import Hero from "@/components/marketing/hero";
import LogoCloud from "@/components/marketing/logo-cloud";
import Features from "@/components/marketing/features";
import CardLab from "@/components/marketing/card-lab";
import Network from "@/components/marketing/network";
import Solutions from "@/components/marketing/solutions";
import Security from "@/components/marketing/security";
import HowItWorks from "@/components/marketing/how-it-works";
import FAQ from "@/components/marketing/faq";
import FinalCTA from "@/components/marketing/final-cta";
import SiteFooter from "@/components/marketing/site-footer";

export const metadata = {
  title: "Peyizo — Virtual accounts and virtual Visa cards",
  description:
    "A neobank-style account with virtual account details and a virtual Visa card. Fund with supported stablecoins, manage card controls and spend where Visa is accepted. Not a bank; accounts and cards provided through partners.",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Features />
        <CardLab />
        <Network />
        <Solutions />
        <Security />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
