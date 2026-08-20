"use client";

import { useEffect, useRef, useState } from "react";
import { getGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { growthStages } from "@/data/growth-stages";
import { GrowthOrganism } from "./GrowthOrganism";
import { cn } from "@/lib/utils";

const STAGE_COUNT = growthStages.length;

export function GrowthStory() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const partRefs = useRef<Record<string, SVGElement | null>>({});
  const progressFillRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // Reduced motion: show the mature tree and the final stage's text
    // statically — the story still reads, just without the scroll-driven
    // reveal.
    if (reducedMotion) {
      setActiveStage(STAGE_COUNT - 1);
      const parts = partRefs.current;
      Object.values(parts).forEach((el) => el?.setAttribute("opacity", "1"));
      const stem = parts.stem as SVGLineElement | undefined;
      if (stem) stem.style.transform = "scaleY(1)";
      return;
    }

    const { gsap, ScrollTrigger } = getGsap();
    const p = partRefs.current;

    const ctx = gsap.context(() => {
      gsap.set(p.roots, { opacity: 0, scale: 0.7, transformOrigin: "300px 560px" });
      gsap.set(p.sprout, { opacity: 0, scale: 0.6 });
      gsap.set(p.midCanopy, { opacity: 0, scale: 0.7 });
      gsap.set(p.canopy, { opacity: 0, scale: 0.6 });
      gsap.set(p.canopyShade, { opacity: 0, scale: 0.6 });
      gsap.set(p.canopyHighlight, { opacity: 0 });
      gsap.set(p.fruit, { opacity: 0, scale: 0.3, transformOrigin: "300px 235px" });
      gsap.set(p.stem, { scaleY: 0 });
      gsap.set(p.seed, { opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
          pin: pinRef.current,
          onUpdate: (self) => {
            const stage = Math.min(STAGE_COUNT - 1, Math.floor(self.progress * STAGE_COUNT));
            setActiveStage((prev) => (prev === stage ? prev : stage));
            if (progressFillRef.current) {
              progressFillRef.current.style.height = `${self.progress * 100}%`;
            }
          },
        },
      });

      // Stem grows continuously through the whole story.
      tl.to(p.stem, { scaleY: 1, ease: "none", duration: 4 }, 0.4);

      // Stage 1 -> 2: seed fades, roots take hold.
      tl.to(p.seed, { opacity: 0, duration: 0.4 }, 0.7);
      tl.to(p.roots, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }, 0.8);

      // Stage 2 -> 3: first leaves break the surface.
      tl.to(p.sprout, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }, 1.9);

      // Stage 3 -> 4: fuller canopy forms, sprout recedes into it.
      tl.to(p.sprout, { opacity: 0, duration: 0.4 }, 2.9);
      tl.to(p.midCanopy, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }, 2.9);

      // Stage 4 -> 5: the mature tree.
      tl.to(p.midCanopy, { opacity: 0.35, duration: 0.5 }, 3.9);
      tl.to(p.canopy, { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" }, 3.9);
      tl.to(p.canopyShade, { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" }, 3.9);
      tl.to(p.canopyHighlight, { opacity: 1, duration: 0.6 }, 4.2);

      // The very last beat: fruit settles in once the tree is fully grown.
      tl.to(p.fruit, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.6)" }, 4.5);
    }, wrap);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === wrap) st.kill();
      });
    };
  }, [reducedMotion]);

  const stage = growthStages[activeStage];

  return (
    <section id="how-it-works" ref={wrapRef} className="relative" style={{ height: `${STAGE_COUNT * 100}vh` }}>
      <div ref={pinRef} className="sticky top-0 flex h-[100svh] items-center overflow-hidden bg-charcoal">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-8">
          {/* Text panel */}
          <div className="relative order-2 md:order-1">
            <div className="flex items-center gap-3">
              <div className="relative h-24 w-1 overflow-hidden rounded-full bg-white/10">
                <div ref={progressFillRef} className="absolute bottom-0 left-0 w-full bg-gold" style={{ height: "0%" }} />
              </div>
              <div>
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-gold">{stage.kicker}</p>
                <h2 className="font-display balance mt-3 max-w-[16ch] text-3xl font-semibold text-text md:text-4xl lg:text-[42px]">
                  {stage.headline}
                </h2>
              </div>
            </div>

            <p className="mt-6 max-w-[42ch] text-[15.5px] leading-relaxed text-text-on-dark-soft">{stage.copy}</p>

            {stage.services && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {stage.services.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[12.5px] font-medium text-text-on-dark-soft"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            )}

            <a
              href="#calculator"
              data-cursor="hover"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[13.5px] font-semibold text-charcoal transition-transform hover:-translate-y-0.5"
            >
              {stage.cta} <span aria-hidden="true">→</span>
            </a>

            <div className="mt-10 flex gap-1.5">
              {growthStages.map((s, i) => (
                <span
                  key={s.id}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    i === activeStage ? "w-8 bg-gold" : "w-1.5 bg-white/15"
                  )}
                />
              ))}
            </div>
          </div>

          {/* The organism */}
          <div className="order-1 flex items-center justify-center md:order-2">
            <div className="h-[52vh] w-full max-w-md md:h-[64vh]">
              <GrowthOrganism ref={svgRef} partRefs={partRefs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
