"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { getGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { Mark } from "@/components/ui/Mark";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Counter } from "@/components/ui/Counter";

const WORDS = ["Registered.", "Compliant.", "Open for business."];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Parallax: the stamp mark and background grid drift at different rates
  // on scroll. Pure transform, capped work via a single ScrollTrigger.
  useEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;
    const { gsap, ScrollTrigger } = getGsap();

    const ctx = gsap.context(() => {
      gsap.to(markRef.current, {
        y: 120,
        rotate: 8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(bgRef.current, {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
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
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Subtle ambient background motion: a soft radial glow + fine grid */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 90%)",
          }}
        />
        <div
          className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl animate-drift"
          style={{
            background:
              "radial-gradient(circle, var(--color-gold) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper-raised px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-text-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            CIPC &amp; SARS registered agents
          </motion.div>

          <h1 className="font-display balance text-[13vw] font-semibold leading-[0.98] text-ink sm:text-6xl md:text-[4.6vw] lg:text-[64px]">
            {WORDS.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`block ${i === 2 ? "italic text-gold-deep" : ""}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            className="mt-7 max-w-[46ch] text-[17px] leading-relaxed text-text-soft"
          >
            We register your business with the CIPC, get you tax compliant
            with SARS, and keep the paperwork moving — so you can run the
            shop, not the admin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#cta" className="bg-ink text-paper">
              <span className="relative z-10">Register my business</span>
            </MagneticButton>
            <a
              href="#process"
              className="text-[13.5px] font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-gold"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-7"
          >
            <div>
              <div className="font-display text-2xl font-semibold text-ink">
                <Counter to={2400} suffix="+" />
              </div>
              <div className="mt-1 text-[12px] text-text-soft">
                Businesses registered
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-ink">
                <Counter to={48} suffix="hr" />
              </div>
              <div className="mt-1 text-[12px] text-text-soft">
                Avg. CIPC turnaround
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-ink">
                <Counter to={100} suffix="%" />
              </div>
              <div className="mt-1 text-[12px] text-text-soft">
                SARS filing accuracy
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          ref={markRef}
          className="mx-auto hidden md:block"
        >
          <div className="relative">
            <Mark className="h-64 w-64 drop-shadow-[0_30px_60px_rgba(22,35,61,0.18)] lg:h-80 lg:w-80" />
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full border border-dashed border-gold/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
