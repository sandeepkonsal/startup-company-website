import { Sprout, Layers, Rocket, TrendingUp, Network, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { serviceGroups } from "@/data/services";

const ICONS: Record<string, LucideIcon> = { Sprout, Layers, Rocket, TrendingUp, Network };

export function Services() {
  return (
    <section id="services" className="relative bg-cream py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <p data-reveal-item className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-green-deep">
            What we handle
          </p>
          <h2 data-reveal-item className="font-display balance mt-4 text-4xl font-semibold text-text md:text-5xl">
            Everything between an idea and an operating business.
          </h2>
        </Reveal>

        <Reveal stagger={0.08} className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((group) => {
            const Icon = ICONS[group.icon];
            return (
              <div
                key={group.stage}
                data-reveal-item
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-cream-raised p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">
                    {group.stage}
                  </span>
                  {Icon && <Icon className="h-5 w-5 text-green-deep" strokeWidth={1.6} />}
                </div>
                <h3 className="font-display mt-4 text-[20px] font-semibold text-text">{group.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-soft">{group.description}</p>
                <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-line pt-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-text">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
