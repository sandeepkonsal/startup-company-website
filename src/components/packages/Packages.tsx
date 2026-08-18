"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { packages } from "@/data/packages";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="packages" className="relative bg-cream py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <p data-reveal-item className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-green-deep">
            Packages
          </p>
          <h2 data-reveal-item className="font-display balance mt-4 text-4xl font-semibold text-text md:text-5xl">
            Grown to match where you are.
          </h2>
        </Reveal>

        <Reveal stagger={0.1} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              data-reveal-item
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "flex flex-col rounded-2xl border p-7",
                pkg.featured
                  ? "border-charcoal bg-charcoal text-cream shadow-[0_30px_60px_-20px_rgba(22,21,19,0.35)]"
                  : "border-line bg-cream-raised text-text"
              )}
            >
              <span className="text-2xl">{pkg.emoji}</span>
              <h3 className={cn("font-display mt-3 text-xl font-semibold", pkg.featured ? "text-cream" : "text-text")}>
                {pkg.name}
              </h3>
              <p className={cn("mt-2 text-[13px] leading-relaxed", pkg.featured ? "text-text-on-dark-soft" : "text-text-soft")}>
                {pkg.forWhom}
              </p>
              <div className="mt-5 font-display text-2xl font-semibold">{pkg.price}</div>
              <ul className="mt-6 flex-1 space-y-2.5">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px]">
                    <span className={cn("mt-1.5 h-1 w-1 shrink-0 rounded-full", pkg.featured ? "bg-gold" : "bg-green")} />
                    <span className={pkg.featured ? "text-text-on-dark-soft" : "text-text-soft"}>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#calculator"
                data-cursor="hover"
                className={cn(
                  "mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-[13px] font-semibold transition-transform hover:-translate-y-0.5",
                  pkg.featured ? "bg-gold text-charcoal" : "bg-charcoal text-cream"
                )}
              >
                Get started
              </a>
            </motion.div>
          ))}
        </Reveal>

        <p className="mt-8 text-center text-[12.5px] text-text-soft">
          Pricing shown is an estimated starting investment, not a fixed quote. Final pricing depends on your specific business.
        </p>
      </div>
    </section>
  );
}
