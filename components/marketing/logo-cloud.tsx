const capabilities = [
  { name: "Virtual account details", className: "font-medium tracking-[-0.02em]" },
  { name: "Virtual Visa card", className: "font-semibold tracking-[0.08em]" },
  { name: "Stablecoin funding", className: "font-medium italic tracking-[-0.03em]" },
  { name: "Mobile wallet ready", className: "font-semibold tracking-[0.1em]" },
  { name: "Freeze in one tap", className: "font-medium lowercase tracking-[-0.03em]" },
  { name: "Monthly statements", className: "font-semibold tracking-[0.04em]" },
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {capabilities.map((item) => (
        <div
          key={item.name}
          className="flex w-[230px] items-center justify-center px-3 text-center text-sm text-white/35 md:w-[290px] md:text-base"
        >
          <span className={item.className}>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function LogoCloud() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.012] py-8">
      <div className="shell">
        <p className="mb-6 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
          One account for funding, spending and control
        </p>
      </div>
      <div className="mask-fade-x overflow-hidden">
        <div className="marquee-track">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
