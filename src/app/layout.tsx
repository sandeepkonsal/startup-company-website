import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
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
  title: "The Startup Company | Business Registration & Tax, Done Right",
  description:
    "CIPC business registration, SARS tax compliance, and ongoing bookkeeping for South African small business owners. Registered fast, filed on time, every time.",
  metadataBase: new URL("https://thestartupcompany.co.za"),
  openGraph: {
    title: "The Startup Company",
    description:
      "CIPC business registration, SARS tax compliance, and ongoing bookkeeping for South African small business owners.",
    url: "https://thestartupcompany.co.za",
    siteName: "The Startup Company",
    locale: "en_ZA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#16233d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
