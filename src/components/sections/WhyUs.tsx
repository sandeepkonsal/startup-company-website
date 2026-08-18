"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { Reveal } from "@/components/ui/Reveal";
import { Mark } from "@/components/ui/Mark";

const POINTS = [
  {
    title: "Registered agents, not a form generator",
    copy: "We're hands-on with CIPC and SARS — when something stalls, a person calls, not a bot.",
  },
  {
    title: "Flat fees, no surprise add-ons",
    copy: "One price, quoted upfront, for the registration or filing you actually need.",
  },
  {
    title: "Built for first-time owners",
    copy: "Plain-English guidance at every step — no accounting jargon required.",
  },
];

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;
    const { gsap, ScrollTrigger } = getGsap();

    const ctx = gsap.context(() => {
      gsap.to(artRef.current, {
        y: -70,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-8">
        <div className="relative order-2 flex items-center justify-center md:order-1">
          <div ref={artRef} className="relative">
            <div className="rounded-[28px] border border-line bg-paper-raised p-10 shadow-[0_40px_80px_-30px_rgba(22,35,61,0.25)]">
              <Mark className="h-20 w-20" />
              <div className="mt-8 space-y-3">
                <div className="h-2.5 w-full rounded-full bg-line/70" />
                <div className="h-2.5 w-4/5 rounded-full bg-line/70" />
                <div className="h-2.5 w-3/5 rounded-full bg-line/70" />
              </div>
              <div className="mt-8 rounded-lg border border-dashed border-line bg-paper px-4 py-3 font-mono text-[11.5px] text-green">
                CIPC Reg. Confirmation · SC-2026-00417
              </div>
            </div>
            <div className="absolute -right-6 -top-6 h-16 w-16 rounded-2xl bg-gold shadow-lg" />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <Reveal>
            <p data-reveal-item className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
              Why owners choose us
            </p>
            <h2 data-reveal-item className="font-display balance mt-4 text-4xl font-semibold text-ink md:text-5xl">
              We've done this a few thousand times.
            </h2>

            <div className="mt-10 space-y-8">
              {POINTS.map((point) => (
                <div key={point.title} data-reveal-item className="border-l-2 border-gold/50 pl-5">
                  <h3 className="text-[16.5px] font-semibold text-ink">{point.title}</h3>
                  <p className="mt-1.5 max-w-[46ch] text-[14.5px] leading-relaxed text-text-soft">
                    {point.copy}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
