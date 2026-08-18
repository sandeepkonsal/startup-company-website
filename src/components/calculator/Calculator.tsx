"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { stageOptions, serviceOptions, serviceEstimates, bandLabel, type ServiceId } from "@/data/calculator";
import { whatsappHref } from "@/config/site";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Calculator() {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [stage, setStage] = useState<string | null>(null);
  const [services, setServices] = useState<Set<ServiceId>>(new Set());
  const resultsRef = useRef<HTMLDivElement>(null);

  function toggleService(id: ServiceId) {
    setServices((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const grouped = useMemo(() => {
    const byBand = new Map<string, string[]>();
    serviceOptions.forEach((opt) => {
      if (!services.has(opt.id)) return;
      const list = byBand.get(opt.band) ?? [];
      list.push(opt.label);
      byBand.set(opt.band, list);
    });
    return byBand;
  }, [services]);

  const total = useMemo(
    () => Array.from(services).reduce((sum, id) => sum + serviceEstimates[id], 0),
    [services]
  );

  const whatsapp = whatsappHref(
    `Hi, I'd like a business plan for: ${Array.from(services)
      .map((id) => serviceOptions.find((o) => o.id === id)?.label)
      .join(", ")}`
  );

  return (
    <section id="calculator" className="relative bg-cream-raised py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="text-center">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-green-deep">
            Build Your Business Plan
          </p>
          <h2 className="font-display balance mt-4 text-4xl font-semibold text-text md:text-5xl">
            Tell us where you&rsquo;re starting.
          </h2>
        </div>

        <div className="mt-12 rounded-3xl border border-line bg-cream p-6 md:p-10">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="stage"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <h3 className="text-[15px] font-semibold text-text">What best describes you?</h3>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {stageOptions.map((opt) => (
                    <button
                      key={opt.id}
                      data-cursor="hover"
                      onClick={() => {
                        setStage(opt.id);
                        setStep(1);
                      }}
                      className={cn(
                        "rounded-xl border px-4 py-3.5 text-left text-[13.5px] font-medium transition-colors",
                        stage === opt.id
                          ? "border-green bg-green/10 text-text"
                          : "border-line bg-cream-raised text-text-soft hover:border-green/50 hover:text-text"
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <h3 className="text-[15px] font-semibold text-text">What do you need help with?</h3>
                <p className="mt-1 text-[12.5px] text-text-soft">Select everything that applies.</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {serviceOptions.map((opt) => {
                    const active = services.has(opt.id);
                    return (
                      <button
                        key={opt.id}
                        data-cursor="hover"
                        onClick={() => toggleService(opt.id)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-[13px] font-medium transition-colors",
                          active
                            ? "border-green bg-green text-text"
                            : "border-line bg-cream-raised text-text-soft hover:border-green/50"
                        )}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <button
                    data-cursor="hover"
                    onClick={() => setStep(0)}
                    className="text-[13px] font-semibold text-text-soft hover:text-text"
                  >
                    ← Back
                  </button>
                  <button
                    data-cursor="hover"
                    disabled={services.size === 0}
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-[13.5px] font-semibold text-text transition-transform enabled:hover:-translate-y-0.5 disabled:opacity-40"
                  >
                    See my plan →
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                ref={resultsRef}
                key="results"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <h3 className="font-display text-2xl font-semibold text-text">Your business is ready to grow.</h3>
                <p className="mt-1 text-[13px] text-text-soft">Your Recommended Plan</p>

                <div className="mt-6 space-y-4">
                  {Array.from(grouped.entries()).map(([band, items]) => (
                    <div key={band} className="rounded-xl border border-line bg-cream-raised p-4">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">
                        {bandLabel(band)}
                      </span>
                      <p className="mt-1.5 text-[13.5px] text-text">{items.join(" + ")}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-baseline gap-2 border-t border-line pt-6">
                  <span className="text-[13px] text-text-soft">Estimated investment:</span>
                  <span className="font-display text-2xl font-semibold text-text">
                    From R{total.toLocaleString("en-ZA")}
                  </span>
                </div>
                <p className="mt-1.5 text-[11.5px] text-text-soft">
                  A rough estimate only — not a fixed quote. We&rsquo;ll confirm exact pricing once we understand your business.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a
                    href={whatsapp ?? "#contact"}
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-[13.5px] font-semibold text-text transition-transform hover:-translate-y-0.5"
                  >
                    Get My Business Plan →
                  </a>
                  <a href="#contact" data-cursor="hover" className="text-[13px] font-semibold text-text-soft hover:text-text">
                    Speak to Us →
                  </a>
                  <button
                    data-cursor="hover"
                    onClick={() => setStep(1)}
                    className="ml-auto text-[13px] font-semibold text-text-soft hover:text-text"
                  >
                    ← Edit selection
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
