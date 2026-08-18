export type GrowthStage = {
  id: string;
  kicker: string;
  headline: string;
  copy: string;
  services?: string[];
  cta: string;
};

export const growthStages: GrowthStage[] = [
  {
    id: "idea",
    kicker: "STAGE 1 — THE IDEA",
    headline: "It starts with an idea.",
    copy: "Every business begins with a thought, a problem worth solving or a vision for something better.",
    cta: "I Have an Idea",
  },
  {
    id: "foundation",
    kicker: "STAGE 2 — THE FOUNDATION",
    headline: "Give it strong roots.",
    copy: "Before your business can grow, it needs a solid foundation.",
    services: ["Company Registration", "Business Setup", "Tax & Compliance Support", "Business Structure Guidance"],
    cta: "Build My Foundation",
  },
  {
    id: "launch",
    kicker: "STAGE 3 — THE LAUNCH",
    headline: "Bring your business to life.",
    copy: "Give your new business a professional presence from day one.",
    services: ["Domain", "Professional Email", "Website", "Hosting", "Google Business Profile", "Basic SEO"],
    cta: "Launch My Business",
  },
  {
    id: "growth",
    kicker: "STAGE 4 — THE GROWTH",
    headline: "Now let's get you customers.",
    copy: "Being online is only the beginning. We help your business reach the right people and turn attention into leads and sales.",
    services: ["SEO", "Google Ads", "Meta Ads", "Content", "Lead Generation", "Analytics", "Conversion Tracking"],
    cta: "Grow My Business",
  },
  {
    id: "scale",
    kicker: "STAGE 5 — THE SCALE",
    headline: "Build something that lasts.",
    copy: "With the right foundation and consistent growth, your business can become something much bigger.",
    services: [
      "Marketing Strategy",
      "Automation",
      "CRM",
      "Ecommerce",
      "Advanced Websites",
      "Performance Marketing",
      "Reporting",
    ],
    cta: "Scale My Business",
  },
];
