// Real work only — never fabricate a client, logo, or result here.
// A "placeholder" entry is shown honestly as an open slot, not dressed up
// as a real case study.
export type WorkItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  status: "live" | "placeholder";
  href?: string;
  linkLabel?: string;
};

export const workItems: WorkItem[] = [
  {
    slug: "the-startup-company",
    title: "The Startup Company",
    category: "Brand & Website",
    summary:
      "This site. Built end to end as our own flagship: a dark-luxury brand identity and an animated Next.js site built around a single idea — a seed growing into a tree as a business matures.",
    highlights: [
      "Full brand identity — palette, logotype, typography",
      "Scroll-driven growth story (GSAP ScrollTrigger)",
      "Interactive business plan calculator",
      "Built on Next.js, deployed on Vercel",
    ],
    status: "live",
    href: "/",
    linkLabel: "View live site",
  },
  {
    slug: "placeholder-1",
    title: "Your business, here",
    category: "Case study coming soon",
    summary:
      "We're just getting started — this slot is reserved for the next business we help launch. If that's you, let's talk.",
    highlights: [],
    status: "placeholder",
  },
  {
    slug: "placeholder-2",
    title: "Your business, here",
    category: "Case study coming soon",
    summary: "Another open slot for a future client story — registration, website, or growth work.",
    highlights: [],
    status: "placeholder",
  },
];
