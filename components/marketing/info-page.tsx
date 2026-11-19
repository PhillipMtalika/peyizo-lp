import { Eyebrow } from "@/components/marketing/ui";

export function InfoHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06] py-16 md:py-20">
      <div className="grid-surface pointer-events-none absolute inset-0 opacity-50" />
      <div className="glow-lime pointer-events-none absolute -top-40 right-[-10%] size-[420px] rounded-full opacity-[0.1] blur-[120px]" />
      <div className="shell relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-balance text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.03] tracking-[-0.055em] text-white">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-white/50 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function InfoSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-white/[0.06] py-12 md:py-16"
    >
      <div className="shell grid gap-6 md:grid-cols-[0.6fr_1.4fr] md:gap-12">
        <h2 className="text-xl font-medium tracking-[-0.03em] text-white md:text-2xl">
          {title}
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-white/50">
          {children}
        </div>
      </div>
    </section>
  );
}

export function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-primary underline decoration-primary/40 underline-offset-2 hover:text-white"
    >
      {children}
    </a>
  );
}
