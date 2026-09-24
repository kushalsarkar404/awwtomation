import type { Metadata } from "next"
import { Archivo, Figtree, Geist_Mono } from "next/font/google"

import "./globals.css"

import GoogleAnalytics from "@/components/google-analytics"
import { BrandGradients } from "@/components/mc/icons"
import { SiteFooter } from "@/components/mc/site-footer"
import { FooterSwitch } from "@/components/nav/footer-switch"
import { SiteHeader } from "@/components/nav/site-header"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { brand } from "@/lib/brand"
import {
  SITE_NAME,
  SITE_URL,
  buildOrganizationSchema,
  buildSoftwareSchema,
  buildWebsiteSchema,
} from "@/lib/seo"

// Open-licence stand-ins for ManyChat's faces: display, body, mono labels.
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], weight: ["800", "900"], display: "swap" })
const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"], display: "swap" })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" })

const defaultTitle = "Awwtomation · Instagram DM Automation & Comment Auto-Reply"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s · ${SITE_NAME}`,
  },
  description: brand.description,
  applicationName: SITE_NAME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: defaultTitle,
    description: brand.description,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_NP",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: brand.description,
  },
  icons: { icon: "/favicon.png" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The font variables must live on <html>: the theme tokens that reference them resolve at :root.
    <html lang="en" suppressHydrationWarning className={`${archivo.variable} ${figtree.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning>
        <BrandGradients />
        <SeoJsonLd data={[buildOrganizationSchema(), buildWebsiteSchema(), buildSoftwareSchema()]} />
        <GoogleAnalytics />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-magenta focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <FooterSwitch>
          <SiteFooter />
        </FooterSwitch>
      </body>
    </html>
  )
}
