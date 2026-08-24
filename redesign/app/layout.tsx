import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-display", weight: ["400", "500", "600", "700"] });
const sans = IBM_Plex_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans", weight: ["300", "400", "500", "600"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — AI Research · Systems Engineering`, template: `%s — ${site.name}` },
  description: site.description,
  keywords: ["Santhoshini Pranathi Singaraju", "AI researcher", "ML systems", "CUDA", "Triton", "KV-cache", "inference engineering", "federated learning", "anomaly detection"],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: site.url, title: `${site.name} — AI Research · Systems Engineering`,
    description: site.description, siteName: site.name, locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: `${site.name} — AI Research · Systems Engineering`, description: site.description },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
