"use client";

import { useEffect, useState } from "react";

/**
 * Tracks prefers-reduced-motion so GSAP/Framer Motion code can bail out of
 * non-essential motion at the JS level (CSS backstop lives in globals.css).
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return reduced;
}
