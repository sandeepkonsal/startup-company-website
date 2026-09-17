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
    slug: "custom-golf-cart-solutions",
    title: "Custom Golf Cart Solutions",
    category: "Website",
    summary:
      "A South African manufacturer of bespoke golf carts for golf courses, estates, hotels, and fleets. We built their website — product gallery, colour customisation options, and clear enquiry paths for a business that sells on trust and specification detail.",
    highlights: [
      "Product gallery across cart models and configurations",
      "Fleet and business-focused pricing pages",
      "Direct enquiry and call-to-action integration",
    ],
    status: "live",
    href: "https://customgolfcartsolutions.co.za/",
    linkLabel: "Visit site",
  },
  {
    slug: "tms365",
    title: "TMS365",
    category: "Website & Marketing",
    summary:
      "A regional freight and logistics company operating across nine Southern African countries. We built their website and run ongoing SEO and ads to bring in freight and warehousing enquiries.",
    highlights: [
      "Service-led website across six logistics categories",
      "Regional network presentation across nine countries",
      "Ongoing SEO and paid ads",
    ],
    status: "live",
    href: "https://tms365.co.za",
    linkLabel: "Visit site",
  },
  {
    slug: "headspace-with-ri",
    title: "Headspace with Ri",
    category: "Marketing",
    summary:
      "A relationship and life coaching practice in Durban North. We run SEO and ads to help the right clients find her counselling, pre-marital, and coaching services.",
    highlights: ["Ongoing SEO and paid ads", "Local-market targeting for Durban North"],
    status: "live",
    href: "https://www.headspacewithri.co.za",
    linkLabel: "Visit site",
  },
];
