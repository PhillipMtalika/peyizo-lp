"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/marketing/ui";
import { cn } from "@/lib/utils";
import { APP_URL } from "@/lib/site";

const links = [
  { label: "Account", href: "/#account" },
  { label: "Cards", href: "/#card-controls" },
  { label: "Acceptance", href: "/#acceptance" },
  { label: "Security", href: "/#security" },
  { label: "FAQ", href: "/#faq" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="relative z-50 border-b border-white/[0.06] bg-[#0b0d11]">
        <div className="shell flex h-9 items-center justify-center gap-2 text-center text-[11px] tracking-wide text-white/60 sm:text-xs">
          <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_#c9f55e]" />
          <span>Virtual account details and a virtual Visa card in one app</span>
          <Link
            href="/#how-it-works"
            className="inline-flex items-center gap-0.5 font-medium text-primary transition-colors hover:text-white"
          >
            See how <ArrowUpRight className="size-3" />
          </Link>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-white/[0.07] bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-6">
          <Link href="/" aria-label="Peyizo home" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/pricing"
              className="hidden rounded-lg px-3 py-2 text-[13px] font-medium text-white/60 transition-colors hover:text-white sm:block"
            >
              Fees
            </a>
            <Button asChild size="lg" className="hidden h-10 rounded-full px-5 text-[13px] sm:inline-flex">
              <a href={APP_URL}>
                Open an account <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/10 md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className={`fixed inset-x-0 z-40 px-4 md:hidden ${
              scrolled ? "top-[68px]" : "top-[104px]"
            }`}
          >
            <nav
              aria-label="Mobile navigation"
              className="panel flex flex-col gap-1 rounded-2xl p-3"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/pricing"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                Fees & limits
              </a>
              <Button asChild size="lg" className="mt-2 h-11 w-full rounded-full">
                <a href={APP_URL}>
                  Open an account <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
