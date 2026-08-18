import { forwardRef } from "react";

/**
 * The single visual through-line of the site: one SVG organism whose parts
 * (roots, stem, leaf clusters, canopy) are revealed and scaled by the
 * GrowthStory scroll timeline. Nothing here is swapped out — every stage is
 * the same drawing with more of it visible, which is what keeps the "same
 * seed becomes the tree" idea honest.
 *
 * Refs are exposed per part so GSAP can target them directly without
 * re-querying the DOM on every scroll frame.
 */
export const GrowthOrganism = forwardRef<
  SVGSVGElement,
  { partRefs: React.MutableRefObject<Record<string, SVGElement | null>> }
>(function GrowthOrganism({ partRefs }, ref) {
  const setRef = (key: string) => (el: SVGElement | null) => {
    partRefs.current[key] = el;
  };

  return (
    <svg
      ref={ref}
      viewBox="0 0 600 700"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* Soil line — always present, the constant ground the story grows from */}
      <line x1="40" y1="560" x2="560" y2="560" stroke="var(--color-line-dark)" strokeWidth="1.5" opacity="0.5" />

      {/* Root system — fans out below the soil line, revealed in stage 2 */}
      <g ref={setRef("roots")} stroke="var(--color-earth)" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M300,560 C280,590 260,610 230,630" />
        <path d="M300,560 C310,595 300,620 290,655" />
        <path d="M300,560 C320,590 340,608 375,625" />
        <path d="M300,560 C295,600 305,625 315,650" />
      </g>

      {/* Stem — grows from soil upward, height driven by scaleY in the timeline */}
      <line
        ref={setRef("stem") as unknown as React.Ref<SVGLineElement>}
        x1="300"
        y1="560"
        x2="300"
        y2="200"
        stroke="var(--color-green-deep)"
        strokeWidth="5"
        strokeLinecap="round"
        style={{ transformOrigin: "300px 560px" }}
      />

      {/* Seed — the opening state, fades out as the stem takes over */}
      <ellipse
        ref={setRef("seed") as unknown as React.Ref<SVGEllipseElement>}
        cx="300"
        cy="558"
        rx="9"
        ry="12"
        fill="var(--color-earth)"
      />

      {/* Sprout leaves — the first pair, stage 3 */}
      <g ref={setRef("sprout")} fill="var(--color-green)" style={{ transformOrigin: "300px 480px" }}>
        <path d="M300,480 C270,470 250,440 258,410 C292,418 306,450 300,480 Z" />
        <path d="M300,480 C330,470 350,440 342,410 C308,418 294,450 300,480 Z" />
      </g>

      {/* Mid canopy — stage 4 growth, a fuller cluster around the mid-stem */}
      <g ref={setRef("midCanopy")} fill="var(--color-green)" style={{ transformOrigin: "300px 340px" }}>
        <path d="M300,340 C255,335 220,300 228,255 C278,262 302,300 300,340 Z" />
        <path d="M300,340 C345,335 380,300 372,255 C322,262 298,300 300,340 Z" />
        <path d="M300,340 C296,300 300,265 300,230 C312,262 314,305 300,340 Z" />
      </g>

      {/* Full canopy — stage 5, the mature tree crown */}
      <g ref={setRef("canopy")} fill="var(--color-green)" style={{ transformOrigin: "300px 220px" }}>
        <circle cx="300" cy="210" r="95" />
        <circle cx="225" cy="250" r="70" />
        <circle cx="375" cy="250" r="70" />
        <circle cx="300" cy="130" r="60" />
      </g>

      {/* Canopy highlight — a lighter sage pass for depth, mature tree only */}
      {/* Gold — the "legacy" moment, only present once the tree is mature */}
      <g ref={setRef("canopyHighlight")} fill="var(--color-gold)" opacity="0.45">
        <circle cx="270" cy="170" r="34" />
        <circle cx="345" cy="200" r="28" />
      </g>
    </svg>
  );
});
