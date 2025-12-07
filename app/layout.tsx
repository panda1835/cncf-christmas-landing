import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Lobster,
  Be_Vietnam_Pro,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lobster",
});

const beVietnam = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-be-vietnam",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const siteUrl = "https://christmas.cncf.org";
const siteName = "A Thousand Wishes | CNCF";
const siteDescription =
  "Join CNCF's A Thousand Wishes campaign to bring Christmas Magic and hope to underprivileged children in Vietnam and Mongolia this holiday season. Make a difference with your donation today.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "A Thousand Wishes | CNCF",
    template: "%s | A Thousand Wishes",
  },
  description: siteDescription,
  keywords: [
    "CNCF",
    "Christina Noble Children's Foundation",
    "a thousand wishes",
    "A Thousand Wishes",
    "charity",
    "children",
    "Vietnam",
    "Mongolia",
    "donations",
    "holiday campaign",
    "thousand wishes",
    "community giving",
    "underprivileged children",
    "christmas",
  ],
  authors: [{ name: "Christina Noble Children's Foundation" }],
  creator: "Christina Noble Children's Foundation",
  publisher: "Christina Noble Children's Foundation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "A Thousand Wishes | CNCF",
    description: siteDescription,
    images: [
      {
        url: "/CNCF-logo.png",
        width: 1200,
        height: 630,
        alt: "A Thousand Wishes - Christina Noble Children's Foundation Christmas Campaign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Thousand Wishes | CNCF",
    description: siteDescription,
    images: ["/CNCF-logo.png"],
    creator: "@CloudNativeFdn",
  },
  alternates: {
    canonical: siteUrl,
  },
  // verification: {
  //   google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    publisher: {
      "@type": "Organization",
      name: "Christina Noble Children's Foundation",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/CNCF-logo.png`,
      },
    },
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Christina Noble Children's Foundation",
    url: "https://www.cncf.org",
    logo: `${siteUrl}/CNCF-logo.png`,
    sameAs: [
      "https://www.facebook.com/ChristinaNobleChildrensFoundationInt",
      "https://www.linkedin.com/company/christina-noble-children-s-foundation-international",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lobster.variable} ${beVietnam.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
