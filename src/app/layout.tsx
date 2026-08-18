import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Cursor } from "@/components/ui/Cursor";
import { site } from "@/config/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
