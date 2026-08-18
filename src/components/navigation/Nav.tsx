"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LeafMark } from "@/components/ui/LeafMark";
import { nav, site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,padding] duration-300",
        scrolled
          ? "border-b border-line/70 bg-cream/85 py-2 shadow-[0_1px_0_0_rgba(22,21,19,0.05)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-4"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-8">
        <a href="#top" data-cursor="hover" className="flex items-center gap-2.5">
          <LeafMark className={cn("transition-[width,height] duration-300", scrolled ? "h-7 w-7" : "h-8 w-8")} />
          <span className="font-display text-[16.5px] font-semibold text-text">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor="hover"
                className="text-[13.5px] font-medium text-text-soft transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={nav.cta.href}
          data-cursor="hover"
          className="hidden items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-[13px] font-semibold text-text transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          {nav.cta.label} <span aria-hidden="true">→</span>
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="h-[1.5px] w-5 bg-text" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-[1.5px] w-5 bg-text" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="h-[1.5px] w-5 bg-text" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-line bg-cream px-6 py-6 md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[15px] font-medium text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={nav.cta.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-[13px] font-semibold text-text"
                >
                  {nav.cta.label} <span aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
