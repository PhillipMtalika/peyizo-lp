export function trackWebVitals(metric: {
  name: string;
  value: number;
  id: string;
  delta: number;
}) {
  if (typeof window !== "undefined" && typeof navigator.sendBeacon === "function") {
    navigator.sendBeacon(
      "/api/vitals",
      JSON.stringify({ event: "web-vital", ...metric })
    );
  } else if (typeof window !== "undefined") {
    console.debug("[vitals]", metric);
  }
}

export const PERFORMANCE_BUDGETS = {
  initialRouteJS: 120 * 1024,
  totalJSBeforeInteraction: 200 * 1024,
  lcpImage: 200 * 1024,
  lcpImageHardCap: 300 * 1024,
  eagerImages: 500 * 1024,
  initialFonts: 100 * 1024,
  thirdPartyJS: 50 * 1024,
  ttfb: 800,
  fcp: 1800,
  lcp: 2500,
  inp: 200,
  cls: 0.1,
} as const;
