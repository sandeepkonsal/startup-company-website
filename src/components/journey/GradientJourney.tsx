import { Sprout, TreeDeciduous, Crown } from "lucide-react";

const STOPS = [
  { label: "IDEA", copy: "Dark soil", icon: "seed", color: "var(--color-sand)" },
  { label: "ROOT", copy: "Building foundation", icon: "root", color: "var(--color-charcoal)" },
  { label: "GROW", copy: "Getting stronger", icon: "sprout", color: "var(--color-green)" },
  { label: "THRIVE", copy: "Reaching new heights", icon: "tree", color: "var(--color-lime)" },
  { label: "LEGACY", copy: "Leaving a lasting impact", icon: "crown", color: "var(--color-gold)" },
];

function StopIcon({ icon }: { icon: string }) {
  const cls = "h-5 w-5";
  if (icon === "seed") return <span className="block h-2.5 w-2 rounded-full bg-current" aria-hidden="true" />;
  if (icon === "root")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M12 3v9M12 12c-3 1-4 3-5 6M12 12c3 1 4 3 5 6" strokeLinecap="round" />
      </svg>
    );
  if (icon === "sprout") return <Sprout className={cls} strokeWidth={1.6} />;
  if (icon === "tree") return <TreeDeciduous className={cls} strokeWidth={1.6} />;
  return <Crown className={cls} strokeWidth={1.6} />;
}

/**
 * The literal palette-as-narrative strip: Black -> Forest -> Emerald ->
 * Lime -> Gold reads as Idea -> Foundation -> Growth -> Thrive -> Legacy.
 * Pure CSS gradient, no JS — cheap, and it doubles as a wayfinding recap
 * of the GrowthStory section above it.
 */
export function GradientJourney() {
  return (
    <div
      className="relative overflow-hidden border-y border-line"
      style={{
        background:
          "linear-gradient(90deg, var(--color-cream) 0%, var(--color-charcoal) 26%, var(--color-green) 52%, var(--color-lime) 76%, var(--color-gold) 100%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-5 px-6 py-8 sm:grid-cols-5 md:px-8">
        {STOPS.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-3.5"
            style={{ background: "rgba(11, 15, 13, 0.4)", backdropFilter: "blur(2px)" }}
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              style={{ color: s.color, border: "1px solid rgba(233, 226, 210, 0.25)" }}
            >
              <StopIcon icon={s.icon} />
            </span>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: s.color }}>
                {s.label}
              </div>
              <div className="text-[11.5px] text-sand/80">{s.copy}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
