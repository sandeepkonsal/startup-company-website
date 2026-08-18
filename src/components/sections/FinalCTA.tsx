"use client";

import { Reveal } from "@/components/ui/Reveal";
import { whatsappHref } from "@/config/site";

export function FinalCTA() {
  const whatsapp = whatsappHref("Hi, I'd like to start my business with The Startup Company.");

  return (
    <section className="relative overflow-hidden bg-charcoal py-32 text-cream">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-green) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl px-6 text-center md:px-8">
        <Reveal className="flex flex-col items-center">
          <svg data-reveal-item viewBox="0 0 100 140" className="h-24 w-16" aria-hidden="true">
            <line x1="50" y1="140" x2="50" y2="55" stroke="var(--color-green-deep)" strokeWidth="5" strokeLinecap="round" />
            <g fill="var(--color-green)">
              <circle cx="50" cy="42" r="30" />
              <circle cx="24" cy="60" r="20" />
              <circle cx="76" cy="60" r="20" />
            </g>
            <circle cx="40" cy="30" r="10" fill="var(--color-sage)" opacity="0.5" />
          </svg>

          <h2 data-reveal-item className="font-display balance mt-7 text-4xl font-semibold md:text-5xl">
            Ready to plant your business?
          </h2>
          <p data-reveal-item className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-text-on-dark-soft">
            Tell us where you&rsquo;re starting. We&rsquo;ll help you figure out what comes next.
          </p>
          <div data-reveal-item className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#calculator"
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-transform hover:-translate-y-0.5"
            >
              Start Your Business <span aria-hidden="true">→</span>
            </a>
            {whatsapp && (
              <a
                href={whatsapp}
                data-cursor="hover"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.5px] font-semibold text-text-on-dark-soft underline decoration-white/20 decoration-2 underline-offset-4 transition-colors hover:text-cream hover:decoration-gold"
              >
                WhatsApp Us
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
