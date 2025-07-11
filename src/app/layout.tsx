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
  title: "Awwtomation – CRM, Email & SEO Automation for Small and Medium Businesses",
    description: "Email, SEO, social media, CRM & blog automation that helps your business grow.",
    keywords: "automation platform, crm automation tools, best email automation platform, project management automation tools, SEO automation, social media automation, CRM automation, marketing software",
    openGraph: {
      title: "Automation That Grows Your Business 10x Faster",
      description: "Email, SEO, social media, CRM & blog automation that helps your business grow.",
      url: "https://www.awwtomation.com",
      siteName: "Awwtomation",
      type: "website",
    },
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    alternates: {
      canonical: "https://www.awwtomation.com"
    }
};



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
