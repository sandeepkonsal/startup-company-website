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

      {/* Full canopy — stage 5, the mature tree crown. Built from many
          overlapping lobes at varied sizes so it reads as one soft, rounded
          mass rather than four visible circles. */}
      <g ref={setRef("canopy")} fill="var(--color-green)" style={{ transformOrigin: "300px 220px" }}>
        <circle cx="300" cy="235" r="88" />
        <circle cx="215" cy="255" r="66" />
        <circle cx="385" cy="255" r="66" />
        <circle cx="248" cy="175" r="58" />
        <circle cx="352" cy="175" r="58" />
        <circle cx="300" cy="130" r="56" />
        <circle cx="255" cy="290" r="46" />
        <circle cx="345" cy="290" r="46" />
        <circle cx="300" cy="300" r="52" />
      </g>

      {/* A darker underside pass, offset low and behind the highlight, so the
          canopy reads as a rounded volume rather than a flat silhouette. */}
      <g ref={setRef("canopyShade")} fill="var(--color-green-deep)" opacity="0.35" style={{ transformOrigin: "300px 220px" }}>
        <circle cx="300" cy="300" r="50" />
        <circle cx="230" cy="270" r="34" />
        <circle cx="370" cy="270" r="34" />
      </g>

      {/* Canopy highlight — a lighter gold pass for depth, mature tree only.
          Gold is the "legacy" moment, only present once the tree is mature. */}
      <g ref={setRef("canopyHighlight")} fill="var(--color-gold)" opacity="0.4">
        <circle cx="258" cy="165" r="30" />
        <circle cx="335" cy="150" r="24" />
        <circle cx="300" cy="200" r="22" />
      </g>

      {/* Fruit — the very last beat: small, ripe dots settled into the
          canopy once the tree is fully grown. The stem ticks live in the
          same group so they only ever appear together with the fruit. */}
      <g ref={setRef("fruit")}>
        <g fill="none" stroke="var(--color-green-deep)" strokeWidth="1.4" strokeLinecap="round" opacity="0.6">
          <path d="M240,213 L240,220" />
          <path d="M335,198 L335,205" />
          <path d="M285,263 L285,270" />
        </g>
        <g fill="var(--color-gold)">
          <circle cx="240" cy="220" r="8" />
          <circle cx="335" cy="205" r="7" />
          <circle cx="285" cy="270" r="8" />
          <circle cx="365" cy="240" r="6.5" />
          <circle cx="220" cy="270" r="6.5" />
          <circle cx="320" cy="150" r="7" />
          <circle cx="300" cy="255" r="7.5" />
        </g>
      </g>
    </svg>
  );
});
