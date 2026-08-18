"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    title: "CIPC Registration",
    copy: "Pty Ltd, sole prop, or NPC — we handle the CIPC filing, name reservation, and company documents end to end.",
    meta: "Reg. No. issued in 24–48hrs",
  },
  {
    title: "SARS Tax Compliance",
    copy: "Income tax, VAT, and PAYE registration, plus tax clearance certificates when a tender or contract needs one.",
    meta: "Tax Ref. same-day submission",
  },
  {
    title: "Monthly Bookkeeping",
    copy: "Your books kept current, your provisional tax estimated correctly, and your SARS deadlines never missed.",
    meta: "Filed on time, every time",
  },
  {
    title: "Tender & Contractor Compliance",
    copy: "B-BBEE affidavits, CSD listing, Workmen's Compensation, and CIDB grading for contractors who need to qualify for tenders.",
    meta: "CIDB · CSD · COIDA · UIF",
  },
];

function ServiceCard({
  title,
  copy,
  meta,
  index,
}: (typeof SERVICES)[number] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      data-reveal-item
      whileHover="hover"
      className="group relative overflow-hidden rounded-2xl border border-line bg-paper-raised p-8"
    >
      <motion.div
        variants={{ hover: { scale: 1.04 } }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ background: "var(--color-gold)" }}
      />
      <span className="font-mono text-[12px] font-medium text-text-soft">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-display mt-4 text-[22px] font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-3 text-[14.5px] leading-relaxed text-text-soft">
        {copy}
      </p>
      <div className="mt-6 flex items-center gap-2 border-t border-line pt-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-green">
        {meta}
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <p data-reveal-item className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
            What we handle
          </p>
          <h2 data-reveal-item className="font-display balance mt-4 text-4xl font-semibold text-ink md:text-5xl">
            Everything between "I have an idea" and "I'm legally trading."
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal className="contents" stagger={0.1}>
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} index={i} {...service} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
