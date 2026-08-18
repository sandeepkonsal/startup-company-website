export const stageOptions = [
  { id: "idea", label: "I only have an idea" },
  { id: "register", label: "I need to register my business" },
  { id: "registered", label: "My business is already registered" },
  { id: "website", label: "I need a website" },
  { id: "have-website", label: "I already have a website" },
  { id: "customers", label: "I need more customers" },
  { id: "scale", label: "I want to scale" },
] as const;

export type StageId = (typeof stageOptions)[number]["id"];

export const serviceOptions = [
  { id: "registration", label: "Business Registration", band: "foundation" },
  { id: "website", label: "Website", band: "launch" },
  { id: "ecommerce", label: "Ecommerce", band: "launch" },
  { id: "domain", label: "Domain", band: "launch" },
  { id: "email", label: "Business Email", band: "launch" },
  { id: "hosting", label: "Hosting", band: "launch" },
  { id: "gbp", label: "Google Business Profile", band: "launch" },
  { id: "seo", label: "SEO", band: "grow" },
  { id: "google-ads", label: "Google Ads", band: "grow" },
  { id: "meta-ads", label: "Meta Ads", band: "grow" },
  { id: "lead-gen", label: "Lead Generation", band: "grow" },
  { id: "automation", label: "Automation", band: "scale" },
  { id: "analytics", label: "Analytics", band: "grow" },
] as const;

export type ServiceId = (typeof serviceOptions)[number]["id"];

// Rough per-service estimate bands, in Rand, purely illustrative. Edit here —
// never imply these are official/government fees.
export const serviceEstimates: Record<ServiceId, number> = {
  registration: 3000,
  website: 12000,
  ecommerce: 22000,
  domain: 300,
  email: 600,
  hosting: 1200,
  gbp: 0,
  seo: 6000,
  "google-ads": 5000,
  "meta-ads": 5000,
  "lead-gen": 6000,
  automation: 9000,
  analytics: 2000,
};

const BAND_LABEL: Record<string, string> = {
  foundation: "FOUNDATION",
  launch: "LAUNCH",
  grow: "GROW",
  scale: "SCALE",
};

export function bandLabel(band: string) {
  return BAND_LABEL[band] ?? band.toUpperCase();
}
