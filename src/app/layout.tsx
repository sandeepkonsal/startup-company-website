import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Cursor } from "@/components/ui/Cursor";
import { site } from "@/config/site";
import "./globals.css";

// Clash Display (the brand reference) isn't on Google Fonts — Bricolage
// Grotesque is the closest self-hostable match for the same "bold, modern,
// unstoppable" grotesk feel.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  metadataBase: new URL(site.url),
  keywords: [
    "company registration South Africa",
    "register a business in South Africa",
    "website design South Africa",
    "business website development",
    "website hosting South Africa",
    "SEO services South Africa",
    "Google Ads South Africa",
    "digital marketing South Africa",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_ZA",
    type: "website",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#161513",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
