"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const QUOTES = [
  {
    quote:
      "I had my CIPC certificate in two days. I'd been putting off registering for six months because I thought it'd be a nightmare.",
    name: "Lindiwe M.",
    role: "Owner, Braided & Co. Hair Studio",
  },
  {
    quote:
      "They caught that I needed a tax clearance certificate before I even knew what one was — got it sorted before my tender deadline.",
    name: "Johan P.",
    role: "Director, JP Electrical Contracting",
  },
  {
    quote:
      "First accountant-type service that's explained things to me in a way I actually understood. No jargon, just what to do next.",
    name: "Naledi K.",
    role: "Founder, Naledi's Kitchen",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <p data-reveal-item className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
            From owners like you
          </p>
          <h2 data-reveal-item className="font-display balance mt-4 text-4xl font-semibold text-ink md:text-5xl">
            Small businesses, sorted.
          </h2>
        </Reveal>

        <div className="mt-14">
          <div ref={trackRef} className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${active * 100}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {QUOTES.map((q) => (
                <div key={q.name} className="w-full shrink-0 px-1">
                  <div className="rounded-2xl border border-line bg-paper-raised p-10 md:p-14">
                    <p className="font-display balance max-w-[52ch] text-[22px] font-medium leading-snug text-ink md:text-[26px]">
                      &ldquo;{q.quote}&rdquo;
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-[13px] font-semibold text-paper">
                        {q.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-[13.5px] font-semibold text-ink">{q.name}</div>
                        <div className="text-[12.5px] text-text-soft">{q.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-7 flex items-center gap-2.5">
            {QUOTES.map((q, i) => (
              <button
                key={q.name}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === active ? "w-8 bg-gold" : "w-1.5 bg-line hover:bg-text-soft"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
