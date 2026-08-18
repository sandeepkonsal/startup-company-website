const ITEMS = [
  "CIPC Accredited Agents",
  "SARS eFiling Registered",
  "2,400+ Businesses Registered",
  "48hr Average Turnaround",
  "B-BBEE Affidavits",
  "POPIA Compliant",
];

/**
 * Infinite horizontal ticker. The track is the item list duplicated once
 * and animated -50%, so the loop is seamless — one CSS animation, no JS.
 */
export function TrustMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-paper-raised py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper-raised to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper-raised to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-text-soft">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
