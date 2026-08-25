import type { Metadata } from "next";
import { Zeyada, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const hand = Zeyada({ subsets: ["latin"], display: "swap", variable: "--font-hand", weight: "400" });
const sans = IBM_Plex_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans", weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: site.url, title: site.name, description: site.description, siteName: site.name, locale: "en_US" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hand.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
