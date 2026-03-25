import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import CrispChat from "@/components/crisp-chat"
import GoogleAnalytics from "@/components/google-analytics"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { SITE_URL, buildOrganizationSchema, buildWebsiteSchema } from "@/lib/seo"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Awwtomation | Business Automation Agency",
  description: "Automation systems for CRM, SEO, email marketing, content, and customer support.",
  applicationName: "Awwtomation",
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
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistMono.variable} antialiased`}
      >
        <SeoJsonLd data={[buildOrganizationSchema(), buildWebsiteSchema()]} />
        <GoogleAnalytics />
        <CrispChat />
        {children}
      </body>
    </html>
  );
}
