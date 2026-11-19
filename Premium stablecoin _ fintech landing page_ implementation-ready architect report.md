# Premium stablecoin / fintech landing page: implementation-ready architect report

**Evidence date:** 14 November 2026  
**Target:** Next.js App Router on Vercel Pro; 4K desktop through low-end Android/slow networks  
**Scope:** Ten live 2026 fintech/crypto pages, trust/compliance patterns, animation-stack comparison, Vercel limits, and a production architecture. This is implementation guidance, not legal advice.

> **Prompt boundary.** The visible request ends after “SVG vs”. The natural missing comparison is covered here as **SVG vs raster vs video**, with 3D/Rive/Lottie included where relevant. No other unspecified continuation has been invented.

## 1. Decision summary

Build a server-first landing page with one memorable money-flow visual, not a technology showcase. The first viewport should contain a plain-language outcome, one primary CTA, a compact qualifier, and a visual that explains movement between fiat, stablecoin and recipient.

Recommended stack:

1. Server Components for copy, navigation, trust, compliance, SEO and fallbacks.
2. CSS transitions and CSS scroll-driven animations for simple effects.
3. Motion for React for menus, tabs, presence, hover/tap and small component transitions.
4. GSAP core + ScrollTrigger + SplitText + `@gsap/react` only for one cinematic hero sequence and a small number of high-value scroll sequences.
5. Native scrolling initially; add Lenis only if real-device testing proves it materially improves the desktop experience.
6. Prefer one isolated Rive asset for responsive 2D stablecoin/transaction artwork. Use one lazy R3F/Three canvas only if genuine custom 3D is essential. Do not stack Rive, Lottie, Spline and WebGL.

For trust, classify the product and countries before writing copy. Treat every “regulated”, “insured”, “1:1 redeemable”, “instant”, “safe”, “low-cost” or “bank-like” statement as an evidence-backed claim requiring jurisdiction-specific legal review.

## 2. Live design benchmarks

The following observations were made on 14 November 2026. “Observed” means visible in the live page/source review. “Inference” means a design interpretation. Absence of Rive/Lottie/3D is not proof of absence.

| Site | Hero pattern | Motion / media | Color / type | Trust signals | Section order | Why it feels premium / implementation lesson |
|---|---|---|---|---|---|---|
| **Stripe** | Text-led enterprise promise, “Financial infrastructure to grow your revenue”; white field with saturated multicolor wave; clear CTAs. | Interactive product/business-model demos, carousels and lower-page canvas; wave image; Rive/Lottie/hero video/3D not verified. | White, dark navy, cyan–violet–magenta–orange–yellow signature; oversized clean sans-serif. | Customer logos, enterprise stories, status, PCI/licensing/support surfaces, company-presented scale metrics. | Announcement/nav → hero → logos → demos → metrics → enterprise/startup/platform stories → resources/footer. | Category-defining copy plus one signature visual gesture. Use a memorable brand device, but make product and proof carry credibility. [1] |
| **Circle** | Centered dark-navy hero with review badge, “The complete community platform”, inline email CTA. | Tabs, carousels, media players and loading states; no verified 3D/Rive/Lottie. | Navy/white/blue; large bold modern sans-serif. | “70k+ reviews”, logo carousel, named customers, quotes, G2 proof, transparent trial/pricing. | Hero → logos → all-in-one explanation → proof → feature families → testimonials → G2 → CTA. | Progressive disclosure keeps a broad product composed. Put proof before a large feature inventory. [2] |
| **Wise** | “Send money globally for less” plus a working transfer calculator with rate, fee, timing and savings. | Verified muted looping WebM/MP4 tapestry video; product-animation strings suggest Lottie but rendered Lottie was not independently confirmed. | Green/forest green, dark text, white surfaces; large display type and numeric emphasis. | Scale, Trustpilot, support, safeguarding, 2FA, security controls, certifications/attestations, FCA claim. | Calculator hero → scale/reviews/support → security → testimonials → mission → app/destination directory → legal. | Product proof is interactive and pricing is concrete. If the product can calculate value, put it in the hero. [3] |
| **Mercury** | Cinematic scenic hero, “Radically different banking”, email capture, open-account and demo actions. | One muted inline hero video with responsive MP4 sources and reduced-motion handling; no verified Rive/Lottie/3D. | Dark landscape, warm haze, white type, blue-violet CTA. | Explicit fintech/not-a-bank and partner-bank FDIC language, customer/scale claims, security controls. | Hero → product breadth → customer proof → workflow stories → economics → security/scale → press → disclosures. | Sparse art direction is balanced by specific operational proof. A cinematic hero needs responsive sources, poster fallback and a disclosure-rich page below. [4] |
| **Phantom** | Pale-lavender page with rounded hero panel, “Where the world trades”, one Download CTA and abstract video. | 26 muted/looping/deferred video elements observed; four Lottie heading variants in page data; no populated Rive or verified 3D. | Lavender/off-white, dark navy/black, pill CTAs; oversized light sans-serif. | 20M+ users, self-custody boundary, support, scam detection, Ledger, audits, bug bounty, status/legal. | Hero → trading tools → move money → security/self-custody → user proof → CTA/footer. | Art-directed motion, generous space and prominent security language. Keep animation bounded; never let it carry the trust argument. [5] |
| **Ramp Network** | Black panel, oversized condensed promise, purple geometry, green/white coin artwork and white app mockup. | CSS marquees around 40s/50s with reduced-motion handling; 3D-labelled coin artwork; no verified video/Rive/Lottie. | Black, electric purple, green, white; heavy condensed display face. | Trustpilot, partner logos, review count, operating metrics and US/EU/UK entity/regulatory disclosures. | Hero → partners/reviews → metrics → feature cards → education → marquee → security → regulation → FAQ → footer. | Cohesive art direction, tangible UI and cheap continuous CSS motion. Use marquees instead of a heavyweight runtime where possible. [6] |
| **Brex** | “Finance built for speed and control”, platform breadth and branded product hero. | MP4 product/card videos; raster/interface imagery; Rive/Lottie/3D not verified. | Exact tokens/family not verified; polished display hierarchy and image-led product story. | 35K+ companies, 120+ countries, security/compliance and network claims, customer proof. March 2025 internal metrics are older than 12 months. | Hero → video → trust → product overview → growth-stage solutions → workflows → outcomes → CTA. | Executive promise, breadth and segmentation. Date every metric; never present stale internal evidence as current performance. [7] |
| **Bridge** | “Make money move” with a fiat/stablecoin node-and-route visual. | Video player present; flat 2D flow diagram; no verified 3D/Rive/Lottie. | White, dark text, green/teal atmosphere, line iconography. | Customer logos/stories, docs, founder backgrounds, NMLS and Luxembourg/entity disclosures. | Hero → logos/stories → platform products → solutions → benefits → CTA/legal. | A single conceptual visual makes infrastructure legible. For stablecoins, a flow diagram may communicate more than a generic 3D coin. [8] |
| **MoonPay** | Consumer “Your passport to crypto”; enterprise “Build on stablecoins” with Docs/Sales paths. | MP4/WebM videos and a five-step slider; Rive/Lottie/3D not verified. | Declared Moon font, lavender/black/white, mint/green enterprise accents. | Account/review/country/asset/partner/licensing/security/compliance claims. | Consumer: hero → actions → proof → app. Enterprise: hero → products → stories → use cases/compliance → CTA. | Separate audience architectures, concise headlines, measured proof and product-specific video. [9] |
| **Yellow Card** | “The Infrastructure for Modern Money Movement”, emerging-market qualifier, expert CTA, soft gradient/sweep/bubble. | Three video elements plus canvas modules; no verified Rive/Lottie/conventional 3D. | White/off-white, pale gradients, multicolor sweep; Jost headings and Work Sans body observed. | Partner logos, volume/countries/currencies, banking partners, AML/KYC/sanctions/travel-rule language and licensing claims. | Hero → partners → explanation → metrics → global coverage → products → compliance → customer proof → CTA. | Enterprise editorial hierarchy, restrained motion, interactive coverage and repeated compliance evidence. [10] |

### Shared patterns

The common architecture is:

1. Promise: one category/outcome statement.
2. Qualifier: who it serves and what actually moves or gets controlled.
3. One primary CTA; optionally a Docs/Demo CTA for B2B.
4. Immediate proof: logos, review signal, scale or status.
5. Product explanation: calculator, flow diagram, UI mockup or short video.
6. Use cases: cross-border payments, payouts, on/off-ramp, wallets, cards, treasury or API.
7. Risk reduction: security, custody, fees, redemption, countries and licensing.
8. Evidence: docs, stories, FAQ, reserves, terms and status.
9. Repeated conversion CTA.

The design language worth borrowing is editorial whitespace, bounded reading columns, a restrained base palette, one distinctive visual signature, proof next to the claim it supports, and a coherent motion grammar such as “reveal → route → settle”.

## 3. Stablecoin trust and compliance

### Classification comes first

The page must be classified by product and audience: issuer, wallet/custodian, exchange, payment/remittance service, token promotion, lending/yield or another activity. Entity, user location, custody model, reserve and redemption arrangements determine the perimeter. Do not copy another company’s “regulated” badge.

### Legal/likely mandatory where applicable

These are not universal rules for every product, but are legal obligations or likely obligations in relevant regimes: truthful and non-misleading marketing; required licensing and geo-perimeter; white-paper/offering disclosures; sanctions/AML/KYC and applicable travel-rule controls; consumer disclosures; and reserve, redemption and fee disclosures required by the product classification.

- **US:** The enacted GENIUS Act prohibits representing a covered payment stablecoin as backed by the US Government or FDIC/NCUA insured, and regulates issuer pathways, redemption policy, fees, reserve disclosures and marketing for covered products. Confirm implementing rules, effective dates and qualification before claiming compliance.
- **EU:** MiCA governs ART/EMT classification, issuer authorisation, white papers, fair/clear/non-misleading marketing, reserve governance and redemption. EMT messaging must address redemption at par where applicable.
- **UK:** Check the FCA regime and current legislation/perimeter at launch. Stablecoin issuance, custody, admission/trading, financial promotions, Consumer Duty, operational resilience and financial crime rules may apply. Prominent risk warnings and restrictions on crypto incentives are relevant; losses generally are not FSCS protected.
- **Emerging markets:** Do not assume US/EU/UK passporting, stablecoin legality, FX permission, remittance/payment licensing or local redemption access. Build a country matrix for monetary/FX controls, payments/e-money, AML/sanctions, consumer, data, tax and advertising rules. [11]

### Strong best practice

Before signup or transaction, show the legal issuer/entity; licence and regulator only if true; product classification; supported/excluded countries; direct redemption eligibility; redemption timing/minimums/suspension rights; all fees including network, FX, conversion and withdrawal costs; reserve date/composition/custody geography and assurance scope; no-bank/no-deposit-insurance wording; irreversible-transfer, depeg, smart-contract, freeze/blacklist, operational and loss-of-keys risks; current terms/white paper; fee schedule; reserve dashboard; attestation; status page; and dated changes.

A counsel-tailored short panel beside the CTA should communicate the equivalent of: **This is not a bank account or deposit. It is not FDIC/FSCS or other deposit-insured. Value and redemption depend on the issuer, eligibility and current terms. Availability, fees and supported countries vary.**

Avoid unsupported words: **safe, guaranteed, risk-free, insured, legal tender, bank-like, instant, 1:1 redeemable, low-cost, regulated**. “1:1 redeemable” must identify who can redeem, in what currency, under what conditions, with what fees and timing.

### Lawyer handoff

Counsel approval is a launch gate for cross-border US/EU/UK targeting; ART/EMT/payment-stablecoin/security/e-money classification; regulated/licensed/insured/bank/guaranteed/redeemable/yield claims; custody, lending, staking or remittance; retail, referral, affiliate or influencer campaigns; emerging-market deployment; sanctions/high-risk countries; local-language claims; and transitional regimes or exemptions.

The handoff package should contain a claim inventory with source/date/owner, entity/licence matrix, country matrix, reserve/redemption and fee contract, white paper/terms, risk disclosures, sanctions/KYC flow, geo-controls, copy variants, approval log and change triggers.

## 4. Animation stack for Next.js App Router/Vercel

| Technology | Practical characteristics | Best use | Decision |
|---|---|---|---|
| CSS transitions / scroll timelines | No third-party JS; SSR-safe; ideal for transform/opacity; browser support requires progressive enhancement. | Simple reveals, progress, sticky effects. | Default. |
| Motion for React | Official directional figures: `useAnimate` mini ~3.3 kB; `m` + LazyMotion just over 5 kB initial; regular motion ~43 kB before build variance. MIT packages; low learning curve; client island. | Menus, hover/tap, presence, layout transitions, gestures. | Use broadly; measure actual chunks. |
| GSAP + ScrollTrigger + SplitText + `@gsap/react` | Import-dependent; no universal kB claim. Client-only; scoped cleanup is essential. Current GSAP 3.13+ plugins are freely available, but verify terms/version. Medium-high learning curve. | Hero timelines, text reveals, scrub/pin, SVG/DOM/canvas coordination. | Use narrowly for high-value sequences. |
| Lenis | A few kB per official repo; continuous RAF; MIT; touch and battery risks. | Optional desktop smooth-scroll clock and GSAP sync. | Start native; add only after testing. |
| Rive | Runtime plus `.riv`; MIT runtime/no royalties per official runtime page; client-only canvas/WebGL; medium learning curve. | Responsive 2D state-machine transaction/coin art. | Preferred hero runtime for 2D. |
| Lottie | Player/wrapper + JSON/images + generated SVG/canvas cost; client-only; low-medium learning curve. | Small bounded illustration/loading accents. | Optional, not hero default. |
| React Three Fiber / Three.js | Import, scene and GPU cost are scene-dependent; high learning curve; client-only, usually `dynamic(...,{ssr:false})`; Three/R3F/drei are MIT. | One low-poly custom 3D object. | Only if 3D is essential. |
| Spline | Runtime plus scene assets; no fixed bundle; commercial/export terms are plan-dependent; client-only. | Designer-owned 3D scene. | Avoid unless a ready scene justifies it. |

### App Router rules

- Keep page copy, navigation, trust and legal as Server Components.
- Use `use client` only at a narrow island boundary.
- Dynamically import browser-only players/canvas with `ssr:false` when necessary.
- Keep initial markup deterministic; hydration must not depend on random values, time or device dimensions.
- Reserve media space and keep meaningful HTML outside canvas/video.
- Pause offscreen media with IntersectionObserver; dispose Three resources; cap DPR; use demand rendering for static scenes.
- Honor `prefers-reduced-motion`, keyboard/touch input and static fallbacks.

## 5. Vercel Pro: current pricing and limits

Retrieved 14 November 2026 from official Vercel sources. Pro is **$20/month**, including one deploying seat and **$20/month usage credit**. Additional deploying Owner/Member seats are $20/month; Viewer seats are free. Credit expires monthly; overage becomes on-demand billing. Set spend thresholds before launch.

Relevant limits/cost centers:

- **CDN:** 1M CDN requests and 1 TB Fast Data Transfer/month in the included Flat Rate CDN tier. Static files are CDN-cached. Cacheable function responses generally need GET/HEAD, cacheable status, no Authorization/set-cookie/private/no-store/no-cache/high-cardinality Vary and ≤10MB; maximum cache time is one year, retention best effort.
- **Images:** Transformations, cache reads and writes are usage-based; transformed output ≤10MB; source dimensions max 8192px; optimized formats include JPEG, PNG, WebP and AVIF.
- **Functions:** Default 300s duration, generally available max 800s; 2GB/1 vCPU default and configurable max 4GB/2 vCPU; 4.5MB request/non-streamed response body; 1,024 shared file descriptors.
- **Edge:** Response should begin within 25s and can stream up to 300s.
- **Build/deploy:** Unlimited projects; 6,000 deployments/day; 2,048 routes/deployment; 45-minute build; 1GB static uploads; 64GB disk; 100 cron jobs/project; 5 deploy hooks/project; up to 500 concurrent on-demand builds.
- **Observability:** Basic has one-day retention. Plus is an add-on path with richer retention/querying. Web Analytics and Speed Insights are event-billed.

A mostly static/ISR marketing site is well served by Pro. Budget for CDN overage, image transformation/cache churn, origin transfer, build CPU and analytics. Use immutable assets, ISR/Cache-Control, static generation and object storage for large uploads; avoid unnecessary middleware/polling. [12]

## 6. 4K and low-end mobile plan

### Responsive geometry

Do not make 2560 or 3840 universal breakpoints. Test at **1920, 2560 and 3840 CSS pixels**, at DPR 1 and 2. Bound readable text to roughly **1200–1440px**; allow 1600–1920px only for dashboards/media; keep full-bleed backgrounds separate. Use `clamp()` for fluid type, for example:

```css
:root {
  --body-size: clamp(1rem, 0.2vw + 0.98rem, 1.125rem);
  --display-size: clamp(2rem, 2.5vw, 4.5rem);
}
```

### Images and media

- Use `next/image` with intrinsic dimensions or a positioned `fill` parent; always provide accurate `sizes`.
- Candidate widths can include 640, 750, 828, 1080, 1200, 1440, 1920, 2560 and 3840, but expose 2560/3840 only when the rendered asset needs them.
- Use `<picture>` for art-directed crops and `srcset`/`sizes` for resolution switching.
- Prefer AVIF where measured; retain WebP/JPEG/PNG fallback and compare decode cost on low-end Android.
- Preload only the actual LCP asset; lazy-load below-fold media.
- Use responsive hero video sources, poster-first behavior and no autoplay on reduced-motion/reduced-data paths.
- Use SVG for simple geometry, icons, logos and route diagrams. Rasterize complex SVG only after measuring DOM/paint cost.
- Self-host/subset WOFF2 with `next/font`; ideally one variable family and only required weights.

### Proposed performance budgets

These are project budgets to calibrate with field data, not platform facts:

- Initial HTML ≤50KB compressed.
- Critical CSS ≤30KB.
- Initial route JS ≤120KB compressed; ≤200KB total JS before interaction.
- LCP image ≤200KB, with a 300KB hard review cap.
- Eagerly loaded images ≤500KB.
- Initial fonts ≤100KB and ≤2 files.
- Third-party JS ≤50KB.
- One LCP preload.
- TTFB ≤800ms; FCP ≤1.8s; LCP ≤2.5s; INP ≤200ms; CLS ≤0.1 at P75.
- Internal stretch goals: LCP ≤2.0s and FCP ≤1.5s.

The web platform’s current Core Web Vitals thresholds are LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 at the 75th percentile. [13]

### Instrumentation

Use `next build` and `next analyze` or `@next/bundle-analyzer`; gate route JS, image and font budgets in CI. Run Lighthouse/WebPageTest on slow 4G and CPU-throttled low-end Android. Use Chrome Performance for long tasks, scroll frames and GPU. Collect RUM with Vercel Speed Insights and/or `useReportWebVitals`; segment by device, network, route, country, release and LCP element. Compare native vs Lenis, Rive vs WebGL and poster vs live hero on real devices before committing.

## 7. Recommended architecture

```text
app/
  layout.tsx                         # server shell, metadata, font, analytics boundary
  (marketing)/page.tsx               # server-composed landing page
  (marketing)/docs/page.tsx
  (marketing)/pricing/page.tsx
  (marketing)/legal/page.tsx
components/marketing/
  AnnouncementBar.tsx                # server
  SiteHeader.tsx                     # server + tiny menu island
  Hero/
    HeroCopy.tsx                     # server HTML
    HeroVisualFallback.tsx           # server SVG/poster
    HeroMotion.client.tsx             # GSAP/Rive optional island
  ProofStrip.tsx                     # server
  MoneyFlowDiagram.tsx               # server SVG baseline
  ProductCalculator.client.tsx       # isolated client island
  UseCaseTabs.client.tsx             # Motion island
  SecurityPanel.tsx                  # server
  ComplianceDisclosure.tsx            # jurisdiction-aware server content
  ReserveEvidence.tsx                # server/link cards
  FAQ.client.tsx                      # small island
  Footer.tsx                          # server
lib/
  claims.ts                           # source/date/owner/review metadata
  jurisdictions.ts                    # country matrix and copy variants
  performance.ts                      # telemetry helpers
```

### Loading and progressive enhancement

1. Stream HTML with nav, hero copy, CTA, qualifier, trust/legal and static SVG/poster.
2. Preload only the actual LCP poster/image.
3. Hydrate calculator/tabs when visible or immediately relevant.
4. Lazy-load GSAP after hero HTML is present; load Rive/WebGL only after visibility/idle and supported-condition checks.
5. Pause/unmount offscreen videos/canvases; use static poster for reduced motion, Save-Data and WebGL-disabled paths.
6. Keep below-fold videos and heavy visual assets out of the initial route graph.

Baseline must work with JavaScript disabled: proposition, CTA, Docs, trust, fees, countries, risk panel, legal links and static money-flow SVG. JavaScript adds tabs/calculator/motion/video; WebGL/Rive is optional polish only.

## 8. Rollout plan

**Phase 0 — evidence/legal:** Classify product, build US/EU/UK/emerging-market matrix, freeze claims, fees, reserve/redemption evidence and approved disclosures.

**Phase 1 — baseline:** Ship the server-rendered page with SVG flow diagram, static poster, HTML trust/compliance, `next/font`, `next/image`, native scroll, analytics and budgets.

**Phase 2 — interaction:** Add calculator, tabs and accordion with Motion; test keyboard, touch, reduced motion and low-end Android.

**Phase 3 — premium motion:** Add one scoped GSAP sequence with reduced-motion branch; compare against baseline for LCP, INP, memory and conversion.

**Phase 4 — one visual runtime:** Stage Rive 2D against static SVG/poster. Use R3F/Three only if 2D cannot communicate the intended value and the team accepts GPU ownership.

**Phase 5 — production gates:** Canary 5%, then 25%, then 100%. Roll back on P75 CWV regression, memory/context-loss errors, legal-copy mismatch or material CDN/usage-cost variance. Review claims monthly and on every regulatory, reserve, fee, licence or country change.

## References

[1] Stripe official pages: https://stripe.com/ ; https://stripe.com/payments ; https://stripe.com/pricing ; https://status.stripe.com/

[2] Circle official pages: https://circle.so/ ; https://circle.so/platform ; https://circle.so/pricing

[3] Wise official pages: https://wise.com/ ; https://wise.com/us/pricing/ ; https://wise.com/gb/safety-and-security/

[4] Mercury official pages: https://mercury.com/ ; https://mercury.com/pricing ; https://mercury.com/legal

[5] Phantom official pages: https://phantom.com/ ; https://phantom.com/security ; https://phantom.com/trade ; https://phantom.com/terms

[6] Ramp Network official pages: https://rampnetwork.com/ ; https://ramp.network/about ; https://ramp.network/terms-of-service

[7] Brex official pages: https://www.brex.com/ ; https://www.brex.com/pricing ; https://www.brex.com/product/credit-card ; https://www.brex.com/support/cost-of-brex-services

[8] Bridge official pages: https://www.bridge.xyz/ ; https://www.bridge.xyz/company ; https://apidocs.bridge.xyz/ ; https://www.bridge.xyz/legal/us-privacy-policy/bridge-building-inc

[9] MoonPay official pages: https://www.moonpay.com/ ; https://www.moonpay.com/buy ; https://www.moonpay.com/enterprise

[10] Yellow Card official pages: https://yellowcard.io/ ; https://yellowcard.io/api-suite ; https://yellowcard.io/about-us

[11] Compliance sources: https://www.congress.gov/119/plaws/publ27/PLAW-119publ27.pdf ; https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R1114 ; https://www.eba.europa.eu/regulation-and-policy/asset-referenced-and-e-money-tokens-mica ; https://www.fca.org.uk/publications/policy-statements/cryptoasset-regime ; https://www.fca.org.uk/consumers/cryptoassets ; https://www.gov.uk/government/publications/regulatory-regime-for-cryptoassets-regulated-activities-draft-si-and-policy-note ; https://www.circle.com/legal/usdc-terms ; https://www.circle.com/en/transparency ; https://tether.to/legal/ ; https://www.fatf-gafi.org/en/publications/Fatfrecommendations/targeted-update-virtual-assets-vasps-2025.html ; https://www.fsb.org/2025/10/fsb-finds-significant-gaps-and-inconsistencies-in-implementation-of-crypto-and-stablecoin-recommendations/

[12] Vercel official pricing and limits: https://vercel.com/pricing ; https://vercel.com/docs/plans/pro-plan ; https://vercel.com/docs/pricing ; https://vercel.com/docs/manage-cdn-usage ; https://vercel.com/docs/image-optimization/limits-and-pricing ; https://vercel.com/docs/limits ; https://vercel.com/docs/limits/fair-use-guidelines ; https://vercel.com/docs/functions/limitations ; https://vercel.com/docs/functions/runtimes/edge-runtime ; https://vercel.com/docs/builds/managing-builds ; https://vercel.com/docs/caching/cdn-cache ; https://vercel.com/docs/observability ; https://vercel.com/docs/observability/observability-plus

[13] Animation, Next.js and performance sources: https://motion.dev/docs/react ; https://motion.dev/docs/react-reduce-bundle-size ; https://gsap.com/docs/v3/Installation/ ; https://gsap.com/docs/v3/Plugins/ScrollTrigger/ ; https://gsap.com/docs/v3/Plugins/SplitText/ ; https://gsap.com/resources/React/ ; https://github.com/darkroomengineering/lenis ; https://r3f.docs.pmnd.rs/ ; https://threejs.org/manual/ ; https://docs.spline.design/exporting-your-scene/web/code-api-for-web ; https://docs.spline.design/exporting-your-scene/how-to-optimize-your-scene ; https://rive.app/docs/runtimes/react/react ; https://rive.app/runtimes ; https://github.com/airbnb/lottie-web ; https://www.npmjs.com/package/lottie-react ; https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations ; https://nextjs.org/docs/app/getting-started/server-and-client-components ; https://nextjs.org/docs/app/guides/package-bundling

[14] Responsive delivery and performance sources: https://nextjs.org/docs/pages/api-reference/components/image ; https://nextjs.org/docs/app/getting-started/fonts ; https://nextjs.org/docs/app/api-reference/config/next-config-js/images ; https://nextjs.org/docs/app/api-reference/functions/use-report-web-vitals ; https://web.dev/articles/defining-core-web-vitals-thresholds ; https://web.dev/articles/optimize-lcp ; https://web.dev/articles/performance-budgets-101 ; https://web.dev/articles/font-best-practices ; https://web.dev/learn/images/ ; https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images ; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp ; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion ; https://vercel.com/docs/speed-insights

### Older-evidence flags

MiCA dates from 2023; the FCA consumer page was originally published in 2023 but updated in 2026; Brex’s internal metrics are from March 2025; Yellow Card’s historical recognition items include 2023–2025 material; Motion bundle examples reference older Rollup-era versions; and older Lottie, Next.js bundle-analyzer, web.dev budget and font articles should be treated as historical/context unless reproduced against current locked versions.
