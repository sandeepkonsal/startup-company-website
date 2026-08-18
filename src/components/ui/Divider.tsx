import { cn } from "@/lib/utils";

type Tone = "ink" | "paper";

type DividerProps = {
  /** Section above the seam (becomes the box's own background). */
  from: Tone;
  /** Section below the seam (the curve painted over that background). */
  to: Tone;
  className?: string;
};

const TONE_VAR: Record<Tone, string> = {
  ink: "var(--color-ink)",
  paper: "var(--color-paper)",
};

/**
 * A soft curved seam between two sections, replacing a hard border.
 * The box is painted in the "from" section's color; the curve painted
 * over it is the "to" section's color, so it reads as one continuous
 * shape regardless of what sits above or below in the DOM.
 */
export function Divider({ from, to, className }: DividerProps) {
  return (
    <div
      className={cn("relative h-14 w-full overflow-hidden md:h-20", className)}
      style={{ background: TONE_VAR[from] }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,0 C360,120 1080,120 1440,0 L1440,120 L0,120 Z"
          fill={TONE_VAR[to]}
        />
      </svg>
    </div>
  );
}
