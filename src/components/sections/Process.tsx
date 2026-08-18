"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Tell us about the business",
    copy: "A 5-minute form: entity type, directors, and what you're trading in.",
  },
  {
    n: "02",
    title: "We file with CIPC",
    copy: "Name reservation and registration submitted, tracked, and chased on your behalf.",
  },
  {
    n: "03",
    title: "SARS registration",
    copy: "Income tax, VAT (if applicable), and PAYE set up so you're compliant from day one.",
  },
  {
    n: "04",
    title: "Documents in your inbox",
    copy: "CIPC certificate, tax number, and a plain-English guide to what happens next.",
  },
];

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const track = trackRef.current;
    const line = lineRef.current;
    if (!track || !line) return;
    const { gsap, ScrollTrigger } = getGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: track,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.4,
          },
        }
      );
    }, track);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === track) st.kill();
      });
    };
  }, [reducedMotion]);

  return (
    <section id="process" className="relative bg-ink py-28 text-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <p data-reveal-item className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-gold">
            The process
          </p>
          <h2 data-reveal-item className="font-display balance mt-4 text-4xl font-semibold md:text-5xl">
            Four steps. No queues at the CIPC office.
          </h2>
        </Reveal>

        <div ref={trackRef} className="relative mt-16 grid gap-x-10 gap-y-14 md:grid-cols-[1px_1fr] md:pl-4">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 w-px bg-white/10" />
            <div
              ref={lineRef}
              className="absolute inset-y-0 left-0 w-px bg-gold"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <Reveal stagger={0.12} className="grid gap-14 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {STEPS.map((step) => (
              <div key={step.n} data-reveal-item className="relative">
                <span className="font-display text-sm font-semibold text-gold">{step.n}</span>
                <h3 className="font-display mt-3 text-[21px] font-semibold">{step.title}</h3>
                <p className="mt-2.5 max-w-[38ch] text-[14.5px] leading-relaxed text-white/60">
                  {step.copy}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
