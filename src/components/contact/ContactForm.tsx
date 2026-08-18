"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const STAGES = [
  "Just an idea",
  "Need registration",
  "Registered",
  "Need website",
  "Already operating",
  "Need marketing",
  "Want to scale",
];

const SERVICES = ["Registration", "Website", "Domain & Email", "Hosting", "SEO", "Google Ads", "Meta Ads", "Ecommerce"];

const inputClass =
  "w-full rounded-lg border border-line bg-cream px-4 py-3 text-[13.5px] text-text placeholder:text-text-soft/70 outline-none transition-colors focus:border-green";

export function ContactForm() {
  // No backend wired yet — this validates the shape of the form and gives
  // real UI feedback; swap the onSubmit body for an API route/email service
  // when ready.
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative bg-cream-raised py-28">
      <div className="mx-auto max-w-2xl px-6 md:px-8">
        <Reveal className="text-center">
          <p data-reveal-item className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-green-deep">
            Get in touch
          </p>
          <h2 data-reveal-item className="font-display balance mt-4 text-4xl font-semibold text-text md:text-5xl">
            Let&rsquo;s grow your business.
          </h2>
        </Reveal>

        <div className="mt-12 rounded-3xl border border-line bg-cream p-6 md:p-10">
          {submitted ? (
            <div className="py-10 text-center">
              <p className="font-display text-xl font-semibold text-text">Message sent.</p>
              <p className="mt-2 text-[13.5px] text-text-soft">We&rsquo;ll be in touch shortly.</p>
            </div>
          ) : (
            <form
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input required name="name" placeholder="Name" className={inputClass} />
              <input required type="email" name="email" placeholder="Email" className={inputClass} />
              <input name="phone" placeholder="Phone" className={inputClass} />
              <input name="business" placeholder="Business name" className={inputClass} />

              <label className="sm:col-span-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-text-soft">
                Current stage
              </label>
              <select name="stage" required className={`sm:col-span-2 ${inputClass}`} defaultValue="">
                <option value="" disabled>
                  Select your current stage
                </option>
                {STAGES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <label className="sm:col-span-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-text-soft">
                Services needed
              </label>
              <div className="sm:col-span-2 flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <label
                    key={s}
                    className="flex items-center gap-1.5 rounded-full border border-line bg-cream-raised px-3.5 py-1.5 text-[12.5px] text-text-soft has-[:checked]:border-green has-[:checked]:bg-green has-[:checked]:text-text"
                  >
                    <input type="checkbox" name="services" value={s} className="hidden" />
                    {s}
                  </label>
                ))}
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className={`sm:col-span-2 resize-none ${inputClass}`}
              />

              <button
                type="submit"
                data-cursor="hover"
                className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-[13.5px] font-semibold text-text transition-transform hover:-translate-y-0.5"
              >
                Let&rsquo;s Grow Your Business →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
