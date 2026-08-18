"use client";

import { useEffect, useRef, useState } from "react";
import { getGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type CounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/** Animated numeric counter, triggered once when it scrolls into view. */
export function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(reducedMotion ? to : 0);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(to);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const { gsap, ScrollTrigger } = getGsap();
    const counter = { value: 0 };

    const tween = gsap.to(counter, {
      value: to,
      duration,
      ease: "power2.out",
      onUpdate: () => setDisplay(Math.round(counter.value)),
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [to, duration, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-ZA")}
      {suffix}
    </span>
  );
}
