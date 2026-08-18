import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="relative bg-cream py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <p data-reveal-item className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-green-deep">
            From founders like you
          </p>
          <h2 data-reveal-item className="font-display balance mt-4 text-4xl font-semibold text-text md:text-5xl">
            Real businesses, growing.
          </h2>
        </Reveal>

        <Reveal stagger={0.1} className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} data-reveal-item className="rounded-2xl border border-line bg-cream-raised p-7">
              <p className="text-[15px] leading-relaxed text-text">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal font-display text-[12px] font-semibold text-cream">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-text">{t.name}</div>
                  <div className="text-[12px] text-text-soft">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
