export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-gold)" strokeWidth="3" />
      <circle cx="50" cy="50" r="37" fill="var(--color-ink)" />
      <path
        d="M32 52 L44 64 L70 36"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
