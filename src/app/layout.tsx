import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CrispChat from "@/components/crisp-chat"
import GoogleAnalytics from "@/components/google-analytics"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awwtomation – Business Automation & CRM Workflows Made Simple",
  description: "Automate business processes, CRM tasks, and content workflows with Awwtomation. Smart, SEO-friendly automations that save time and scale fast.",
  icons: {
    icon: "/favicon.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="preload" href="/fonts/Geist.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

      <link rel="alternate" href="https://www.awwtomation.com" hrefLang="en-us" />
      <link rel="canonical" href="https://www.awwtomation.com" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Awwtomation",
  "url": "https://www.awwtomation.com",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",  // or your pricing
    "priceCurrency": "USD"
  }
}) }} />


      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <CrispChat />
        {children}
      </body>
    </html>
  );
}
