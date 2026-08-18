"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay (seconds) applied to direct children with [data-reveal-item]. */
  stagger?: number;
  y?: number;
  delay?: number;
};

/**
 * Wraps a block of content and fades/slides its [data-reveal-item] children
 * in with a stagger once the block enters the viewport. transform+opacity
 * only, GPU-cheap, one ScrollTrigger per instance.
 */
export function Reveal({
  children,
  className,
  stagger = 0.08,
  y = 28,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const { gsap, ScrollTrigger } = getGsap();
    const items = el.querySelectorAll<HTMLElement>("[data-reveal-item]");
    const targets = items.length ? items : [el];

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          once: true,
        },
      });
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [reducedMotion, stagger, y, delay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
