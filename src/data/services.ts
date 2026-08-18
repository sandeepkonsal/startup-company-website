export type ServiceGroup = {
  stage: string;
  icon: string; // lucide icon name, resolved in the component
  title: string;
  description: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    stage: "START",
    icon: "Sprout",
    title: "Business Registration",
    description: "Help getting your business officially established.",
    items: ["Company registration", "Business structure guidance", "Tax & compliance support"],
  },
  {
    stage: "BUILD",
    icon: "Layers",
    title: "Digital Foundation",
    description: "The infrastructure every credible business needs online.",
    items: ["Domain", "Website hosting", "Professional email", "Google Business Profile", "Analytics"],
  },
  {
    stage: "LAUNCH",
    icon: "Rocket",
    title: "Website Development",
    description: "A professional presence from day one.",
    items: ["Business websites", "Ecommerce websites", "Landing pages", "Conversion-focused design"],
  },
  {
    stage: "GROW",
    icon: "TrendingUp",
    title: "Digital Marketing",
    description: "Turn attention into leads and sales.",
    items: ["SEO", "Google Ads", "Meta Ads", "Lead generation", "Content", "Conversion tracking"],
  },
  {
    stage: "SCALE",
    icon: "Network",
    title: "Growth & Automation",
    description: "Systems that let a business run beyond its founder.",
    items: ["CRM", "Automation", "Reporting", "Ecommerce growth", "Conversion optimisation", "Growth strategy"],
  },
];
