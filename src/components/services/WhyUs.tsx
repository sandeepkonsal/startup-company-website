import { Reveal } from "@/components/ui/Reveal";

const PILLARS = [
  { title: "Foundation", copy: "Get the basics right." },
  { title: "Presence", copy: "Build a credible digital presence." },
  { title: "Growth", copy: "Attract customers and measure results." },
];

export function WhyUs() {
  return (
    <section className="relative bg-charcoal py-28 text-cream">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <h2 data-reveal-item className="font-display balance text-4xl font-semibold md:text-5xl">
            We don&rsquo;t just help you start a business.
          </h2>
          <p data-reveal-item className="mt-3 text-[19px] italic text-sage">
            We help you build one.
          </p>
        </Reveal>

        <Reveal stagger={0.1} className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div key={p.title} data-reveal-item className="border-l-2 border-gold/50 pl-5">
              <span className="font-mono text-[12px] text-text-on-dark-soft">0{i + 1}</span>
              <h3 className="font-display mt-2 text-[22px] font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-[14.5px] text-text-on-dark-soft">{p.copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
