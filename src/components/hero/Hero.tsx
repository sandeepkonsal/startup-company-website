"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { site } from "@/config/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reducedMotion = useReducedMotion();
  // With reduced motion, render every element already in its resting state
  // instead of skipping the sequence — nothing is lost, it just doesn't move.
  const initial = reducedMotion ? false : undefined;

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream pt-24">
      <div
        className="pointer-events-none absolute left-1/2 top-[8%] h-[420px] w-[640px] -translate-x-1/2 rounded-full opacity-[0.18] blur-3xl animate-drift"
        style={{ background: "radial-gradient(circle, var(--color-green) 0%, transparent 68%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center md:px-8">
        {/* The seed-in-soil visual */}
        <motion.div
          initial={initial && { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          className="relative mb-10 h-40 w-56"
        >
          <svg viewBox="0 0 220 160" className="h-full w-full" aria-hidden="true">
            {/* Soil mound */}
            <motion.path
              initial={initial && { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              d="M20,120 C60,100 160,100 200,120 L220,160 L0,160 Z"
              fill="var(--color-earth)"
              opacity="0.16"
            />
            <motion.ellipse
              initial={initial && { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              cx="110"
              cy="122"
              rx="70"
              ry="10"
              fill="var(--color-earth)"
              opacity="0.28"
            />

            {/* Faint emerging root tendrils */}
            <motion.g
              initial={initial && { opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
              style={{ transformOrigin: "110px 120px" }}
              stroke="var(--color-earth)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.55"
            >
              <path d="M110,120 C104,128 98,132 90,138" />
              <path d="M110,120 C116,130 116,136 120,144" />
            </motion.g>

            {/* The seed */}
            <motion.ellipse
              initial={initial && { opacity: 0, scale: 0.4, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              cx="110"
              cy="110"
              rx="11"
              ry="15"
              fill="var(--color-green-deep)"
            />
            <motion.ellipse
              initial={initial && { opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 0.5 }}
              cx="106"
              cy="104"
              rx="4"
              ry="5.5"
              fill="var(--color-sage)"
            />
          </svg>
        </motion.div>

        <motion.p
          initial={initial && { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[12px] font-semibold uppercase tracking-[0.16em] text-green-deep"
        >
          {site.tagline}
        </motion.p>

        <h1 className="font-display balance mt-5 text-[11vw] font-semibold leading-[1.04] text-text sm:text-5xl md:text-[3.6vw] lg:text-[54px]">
          <span className="block overflow-hidden">
            <motion.span
              initial={initial && { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.65, ease: EASE }}
              className="block"
            >
              Every great business
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={initial && { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.78, ease: EASE }}
              className="block italic text-green-deep"
            >
              starts with an idea.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={initial && { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-6 max-w-[46ch] text-[16.5px] leading-relaxed text-text-soft"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={initial && { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#calculator"
            data-cursor="hover"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Start Your Business <span aria-hidden="true">→</span>
          </a>
          <a
            href="#how-it-works"
            data-cursor="hover"
            className="text-[13.5px] font-semibold text-text underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-green"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.p
          initial={initial && { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-8 text-[12px] font-medium text-text-soft"
        >
          Built for South African entrepreneurs.
        </motion.p>
      </div>
    </section>
  );
}
