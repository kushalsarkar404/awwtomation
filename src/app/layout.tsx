import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CrispChat from "@/components/crisp-chat"
import { DailyEmailPopup } from "@/components/daily-email-popup"
import GoogleAnalytics from "@/components/google-analytics"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { SITE_URL, buildOrganizationSchema, buildWebsiteSchema } from "@/lib/seo"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Awwtomation | AI Automation Agency",
  description: "AI automation systems for CRM, marketing, content, support, and business growth.",
  applicationName: "Awwtomation",
  openGraph: {
    title: "Awwtomation | AI Automation Agency",
    description: "AI automation systems for CRM, marketing, content, support, and business growth.",
    url: SITE_URL,
    siteName: "Awwtomation",
    type: "website",
    images: [{ url: "/awwtomation-og.webp", width: 1200, height: 630, alt: "Awwtomation AI automation agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awwtomation | AI Automation Agency",
    description: "AI automation systems for CRM, marketing, content, support, and business growth.",
    images: ["/awwtomation-og.webp"],
  },
  icons: {
    icon: "/favicon.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}
      >
        <SeoJsonLd data={[buildOrganizationSchema(), buildWebsiteSchema()]} />
        <GoogleAnalytics />
        <CrispChat />
        {children}
        <DailyEmailPopup />
      </body>
    </html>
  );
}
