import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="9" fill="#C9F55E" />
        <path
          d="M10.5 23V9h6.6a5 5 0 0 1 0 10h-3.3v4"
          stroke="#0A1204"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22.4" cy="22.6" r="2.1" fill="#0A1204" />
      </svg>
      <span className="text-[19px] font-semibold tracking-[-0.055em] text-white">
        peyizo<span className="text-primary">.</span>
      </span>
    </span>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
        className
      )}
    >
      <span className="h-px w-5 bg-primary/60" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="max-w-3xl text-balance text-[clamp(2rem,4.2vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.055em] text-white">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-base",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function CheckItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("flex items-start gap-3 text-sm text-foreground/80", className)}>
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary ring-1 ring-primary/20">
        <Check className="size-3" strokeWidth={2.5} />
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

export function Sparkline({
  className,
  color = "#C9F55E",
}: {
  className?: string;
  color?: string;
}) {
  const path =
    "M2 64 C 14 60, 20 44, 32 48 S 48 66, 62 52 S 78 26, 92 34 S 110 50, 124 30 S 142 16, 158 20 S 176 36, 190 10";
  return (
    <svg
      viewBox="0 0 192 72"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L190 72 L2 72 Z`} fill="url(#spark-fill)" />
      <path
        d={path}
        stroke={color}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        className="draw-path"
      />
    </svg>
  );
}
