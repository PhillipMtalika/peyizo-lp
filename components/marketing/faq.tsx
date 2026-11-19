import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "@/components/marketing/ui";
import { Reveal } from "@/components/marketing/reveal";
import { SUPPORT_EMAIL } from "@/lib/site";
import { supportQuestions } from "@/lib/support-content";

/** Keep the landing FAQ product-focused; the "no API" clarification lives in Support and Legal. */
const homeQuestions = supportQuestions.filter(
  (item) => !/api|sdk|webhook|sandbox|developer/i.test(item.q)
);

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <Eyebrow>07 / FAQ</Eyebrow>
          <h2 className="mt-5 text-balance text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.055em] text-white">
            The details, <span className="text-white/35">up front.</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">
            Common questions about payments, availability and support.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-4 inline-block text-sm font-medium text-primary hover:text-white"
          >
            {SUPPORT_EMAIL}
          </a>
          <a
            href="/support"
            className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-white"
          >
            Full support center
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible defaultValue="q-0" className="w-full">
            {homeQuestions.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`q-${i}`}
                className="border-white/[0.09] py-2"
              >
                <AccordionTrigger className="py-5 text-base font-medium text-white/85 hover:no-underline hover:text-white [&_svg]:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-8 text-sm leading-relaxed text-white/45">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
