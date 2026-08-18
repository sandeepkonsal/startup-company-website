"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Starter",
    price: "R1,250",
    unit: "once-off",
    copy: "For sole proprietors and side hustles going official.",
    features: ["CIPC name reservation", "Sole prop or Pty Ltd registration", "SARS income tax registration", "Documents within 48hrs"],
    featured: false,
  },
  {
    name: "Growth",
    price: "R2,450",
    unit: "once-off",
    copy: "The full registration stack for a business ready to trade.",
    features: [
      "Everything in Starter",
      "VAT & PAYE registration",
      "B-BBEE affidavit",
      "Tax clearance certificate",
      "30-min compliance call",
    ],
    featured: true,
  },
  {
    name: "Managed",
    price: "R850",
    unit: "per month",
    copy: "Ongoing bookkeeping and SARS filing, handled for you.",
    features: ["Monthly bookkeeping", "Provisional tax filing", "Annual return to CIPC", "Priority support"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <p data-reveal-item className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
            Pricing
          </p>
          <h2 data-reveal-item className="font-display balance mt-4 text-4xl font-semibold text-ink md:text-5xl">
            One flat fee. No surprise line items.
          </h2>
        </Reveal>

        <Reveal stagger={0.1} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              data-reveal-item
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "flex flex-col rounded-2xl border p-8",
                tier.featured
                  ? "border-ink bg-ink text-paper shadow-[0_30px_60px_-20px_rgba(22,35,61,0.35)]"
                  : "border-line bg-paper-raised text-text"
              )}
            >
              {tier.featured && (
                <span className="mb-5 inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
                  Most chosen
                </span>
              )}
              <h3 className={cn("font-display text-xl font-semibold", tier.featured ? "text-paper" : "text-ink")}>
                {tier.name}
              </h3>
              <p className={cn("mt-2 text-[13.5px] leading-relaxed", tier.featured ? "text-white/65" : "text-text-soft")}>
                {tier.copy}
              </p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-semibold">{tier.price}</span>
                <span className={cn("text-[13px]", tier.featured ? "text-white/50" : "text-text-soft")}>
                  {tier.unit}
                </span>
              </div>
              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px]">
                    <svg
                      viewBox="0 0 20 20"
                      className={cn("mt-0.5 h-4 w-4 shrink-0", tier.featured ? "text-gold" : "text-green")}
                      fill="none"
                    >
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={tier.featured ? "text-white/85" : "text-text"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={cn(
                  "mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-[13.5px] font-semibold transition-transform hover:-translate-y-0.5",
                  tier.featured ? "bg-gold text-ink" : "bg-ink text-paper"
                )}
              >
                Get started
              </a>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
