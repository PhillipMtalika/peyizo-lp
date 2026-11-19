import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06070a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Peyizo",
    default: "Peyizo — Virtual accounts and virtual Visa cards",
  },
  description:
    "Peyizo is a neobank-style digital account with virtual account details and a virtual Visa card funded from supported stablecoin balances. Set limits, freeze your card and spend where Visa is accepted. Accounts and cards are provided through partners; subject to verification and jurisdiction.",
  openGraph: {
    title: "Peyizo — Virtual accounts and virtual Visa cards",
    description:
      "Fund a supported balance, get virtual account details and spend with a virtual Visa card. Card controls, clear fees and support in one place.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
