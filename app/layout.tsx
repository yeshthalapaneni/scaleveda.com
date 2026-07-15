import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scaleveda.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ScaleVeda | Custom AI Agents for Business",
  description:
    "ScaleVeda is a data and AI company that designs and builds custom AI agents for unique business use cases, on a data foundation solid enough to trust.",
  keywords: [
    "custom AI agents",
    "AI agent development",
    "data and AI company",
    "business automation",
    "applied AI",
    "data engineering",
    "ScaleVeda",
  ],
  openGraph: {
    title: "ScaleVeda | Custom AI Agents for Business",
    description:
      "We design and build custom AI agents for the specific problems in your business — not generic AI features.",
    url: siteUrl,
    siteName: "ScaleVeda",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "scaleveda — custom AI agents for business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleVeda | Custom AI Agents for Business",
    description:
      "Custom AI agents, built on a data foundation solid enough to trust.",
    images: ["/og.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#f7f6f1",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
