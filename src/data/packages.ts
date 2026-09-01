export type Package = {
  emoji: string;
  name: string;
  forWhom: string;
  price: string; // "From R15,000" or "Custom" — keep as display string, edit here
  featured: boolean;
  inclusions: string[];
};

// Central pricing config — every number on the site should trace back here.
export const packages: Package[] = [
  {
    emoji: "🌱",
    name: "Seed",
    forWhom: "For people starting with an idea.",
    price: "From R9,500",
    featured: false,
    inclusions: [
      "Business registration",
      "Basic business setup",
      "Logo design",
      "Professional website",
      "Domain",
      "Professional email",
      "Hosting",
    ],
  },
  {
    emoji: "🌿",
    name: "Sprout",
    forWhom: "For new businesses establishing themselves.",
    price: "From R25,000",
    featured: true,
    inclusions: [
      "Business registration",
      "Professional website",
      "Domain",
      "Email",
      "Hosting",
      "Google Business Profile",
      "Basic SEO",
    ],
  },
  {
    emoji: "🌳",
    name: "Grow",
    forWhom: "For businesses ready to acquire customers.",
    price: "Custom",
    featured: false,
    inclusions: ["Website", "SEO", "Google Ads", "Meta Ads", "Conversion tracking", "Lead generation", "Reporting"],
  },
  {
    emoji: "🚀",
    name: "Scale",
    forWhom: "For established businesses.",
    price: "Custom",
    featured: false,
    inclusions: [
      "Advanced website",
      "Ecommerce",
      "SEO",
      "Paid media",
      "Automation",
      "CRM",
      "Analytics",
      "Growth strategy",
    ],
  },
];
