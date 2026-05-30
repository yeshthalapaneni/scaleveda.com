import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scaleveda.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ScaleVeda | Data Platform Consulting",
  description:
    "ScaleVeda helps growing companies organize messy data, build scalable data platforms, and integrate analytics and ML into daily decisions.",
  keywords: [
    "data platform consulting",
    "data engineering",
    "data governance",
    "lakehouse",
    "warehouse",
    "ML integration",
    "ScaleVeda",
  ],
  openGraph: {
    title: "ScaleVeda | Data Platform Consulting",
    description:
      "From messy data to production-grade platforms for growing companies.",
    url: siteUrl,
    siteName: "ScaleVeda",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "scaleveda data platform consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleVeda | Data Platform Consulting",
    description:
      "Clean, scalable data foundations for companies that need to move faster.",
    images: ["/og.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
