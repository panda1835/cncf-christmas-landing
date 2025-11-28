import type { Metadata } from "next";
import { Geist, Geist_Mono, Lobster, Be_Vietnam_Pro, Montserrat } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "A Thousand Wishes | CNCF",
  description: "A Thousand Wishes - Bringing Joy to Children in Vietnam and Mongolia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lobster.variable} ${beVietnam.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
