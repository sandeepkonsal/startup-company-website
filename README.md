# The Startup Company — Website

CIPC registration and SARS tax compliance, marketed to South African small
business owners. Premium, animated, and fast.

## Stack

- **Next.js 16** (App Router, static export of the marketing page)
- **TypeScript**, **Tailwind CSS v4**
- **GSAP + ScrollTrigger** for scroll-driven parallax, pinned progress lines, and staggered reveals
- **Framer Motion** for micro-interactions (magnetic buttons, nav drawer, testimonial carousel)
- Self-hosted fonts via `next/font` (Fraunces + Inter — no external font requests)

## Performance choices

- Every animation drives `transform`/`opacity` only.
- `prefers-reduced-motion` is respected at both the CSS level (`globals.css`) and the JS level (`useReducedMotion` hook gates every GSAP/Framer effect).
- One `ScrollTrigger` per animated section, killed on unmount via `gsap.context`.
- No scroll-jacking library (Lenis/ScrollSmoother) — native scroll stays buttery and avoids the extra JS weight.
- The page is fully static (`○ (Static)` at build) — no server work per request.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Push to GitHub, then import the repo in Vercel — zero config needed
(`next.config.ts` is the default). Point `thestartupcompany.co.za`'s DNS at
Vercel once the project is live.

## Structure

```
src/
  app/            # root layout, globals, page assembly
  components/
    sections/     # Nav, Hero, Services, Process, WhyUs, Testimonials, Pricing, CTA, Footer
    ui/            # Reveal, Counter, MagneticButton, Mark (logo)
  lib/            # gsap registration, cn() helper, useReducedMotion
```
