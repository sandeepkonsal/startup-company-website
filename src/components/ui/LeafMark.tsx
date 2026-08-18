export function LeafMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="var(--color-charcoal)" />
      <path
        d="M20 30 C20 24 20 18 20 12"
        stroke="var(--color-sage)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 22 C13 22 9 17 10 11 C17 11 21 16 20 22 Z"
        fill="var(--color-green)"
      />
      <path
        d="M20 18 C27 18 31 13.5 30 8 C23 8 19 12.5 20 18 Z"
        fill="var(--color-gold)"
      />
    </svg>
  );
}
