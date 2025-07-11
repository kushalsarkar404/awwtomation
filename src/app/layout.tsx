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
  title: "Awwtomation - CRM, SEO, and Email Marketing Automation for Small and Medium Businesses.",
  description: "Email marketing, SEO, social media, CRM & blog automation.",
  keywords: "marketing automation, business automation, email automation, SEO automation, social media automation, CRM automation, marketing software",
  icons: {
    icon: "/favicon.png"
  },
  openGraph: {
    title: "Automation That Grows Your Business 10x Faster",
    description: "Email marketing, SEO, social media, CRM & blog automation.",
    url: "https://www.awwtomation.com",
    siteName: "Awwtomation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Automation That Grows Your Business 10x Faster",
    description: "🚀 All-in-one marketing automation platform. Join 10,000+ businesses. Free trial.",
    images: ["https://www.awwtomation.com/images/homepage-preview.jpg"]
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://www.awwtomation.com"
  }
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="alternate" href="https://www.awwtomation.com" hrefLang="en-us" />
      <link rel="canonical" href="https://www.awwtomation.com" />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Awwtomation",
      "url": "https://www.awwtomation.com",
      "description": "Automation services for CRM, Email, SEO, and Social Media",
      "mainEntity": {
        "@type": "Organization",
        "name": "Awwtomation",
        "url": "https://www.awwtomation.com"
      },
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "CRM Automation",
          "url": "https://www.awwtomation.com/services/crm-automation"
        },
        {
          "@type": "WebPage",
          "name": "Email Marketing Automation",
          "url": "https://www.awwtomation.com/services/email-marketing-automation"
        },
        {
          "@type": "WebPage",
          "name": "SEO Automation",
          "url": "https://www.awwtomation.com/services/seo-automation"
        },
        {
          "@type": "WebPage",
          "name": "Social Media Automation",
          "url": "https://www.awwtomation.com/services/social-media-automation"
        },
        {
          "@type": "WebPage",
          "name": "Blog Agent",
          "url": "https://www.awwtomation.com/services/blog-automation"
        }
      ]
    })
  }}
/>




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
