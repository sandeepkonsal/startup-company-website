import { Reveal } from "@/components/ui/Reveal";

const STAGES = [
  { n: "01", tag: "PLANT", title: "Register", copy: "Turn your idea into a recognised business." },
  { n: "02", tag: "ROOT", title: "Build", copy: "Create your digital foundation." },
  { n: "03", tag: "GROW", title: "Market", copy: "Get your business in front of customers." },
  { n: "04", tag: "SCALE", title: "Grow", copy: "Build systems and scale your operation." },
];

export function Journey() {
  return (
    <section className="relative bg-cream py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <p data-reveal-item className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-green-deep">
            From Idea to Business
          </p>
          <h2 data-reveal-item className="font-display balance mt-4 text-4xl font-semibold text-text md:text-5xl">
            Four stages. One continuous path.
          </h2>
        </Reveal>

        <Reveal stagger={0.1} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s) => (
            <div
              key={s.n}
              data-reveal-item
              className="group relative overflow-hidden rounded-2xl border border-line bg-cream-raised p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] font-medium text-text-soft">{s.n}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gold">{s.tag}</span>
              </div>
              <h3 className="font-display mt-5 text-[21px] font-semibold text-text">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-soft">{s.copy}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
