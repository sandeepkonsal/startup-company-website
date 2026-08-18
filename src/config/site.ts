export const site = {
  name: "The Startup Company",
  tagline: "Where ideas take root.",
  altTagline: "Plant your idea. Grow your business.",
  description:
    "We help South African entrepreneurs turn ideas into real businesses — from registration and digital setup to websites, hosting, email and digital marketing.",
  url: "https://thestartupcompany.co.za",
  email: "hello@thestartupcompany.co.za",
  // Read from env at build time — never hard-code the number in components.
  // Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local, e.g. 27821234567 (no +, no spaces).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
};

export function whatsappHref(prefilledMessage?: string) {
  if (!site.whatsappNumber) return null;
  const base = `https://wa.me/${site.whatsappNumber}`;
  return prefilledMessage
    ? `${base}?text=${encodeURIComponent(prefilledMessage)}`
    : base;
}

export const nav = {
  links: [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#services", label: "Services" },
    { href: "#packages", label: "Packages" },
    { href: "#growth", label: "Growth" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { href: "#calculator", label: "Start Your Business" },
};
