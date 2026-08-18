"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Mark } from "@/components/ui/Mark";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink py-28 text-paper">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-8">
        <Reveal className="flex flex-col items-center">
          <div data-reveal-item>
            <Mark className="mx-auto h-14 w-14" />
          </div>
          <h2 data-reveal-item className="font-display balance mt-7 text-4xl font-semibold md:text-5xl">
            Let's get your business official.
          </h2>
          <p data-reveal-item className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-white/65">
            Tell us what you're building. We'll quote the registration and
            handle CIPC and SARS from there — usually within 48 hours.
          </p>
          <div data-reveal-item className="mt-9">
            <MagneticButton
              href="mailto:hello@thestartupcompany.co.za"
              className="bg-gold text-ink"
            >
              <span className="relative z-10">hello@thestartupcompany.co.za</span>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
