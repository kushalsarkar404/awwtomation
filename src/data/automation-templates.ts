export type TemplateDifficulty = "Beginner" | "Intermediate" | "Advanced"

export interface Template {
  slug: string
  title: string
  excerpt: string
  thumbnail: string
  originalPrice: number
  currentPrice: number
  difficulty: TemplateDifficulty
  creator: {
    name: string
    avatar: string
  }
  downloads: number
  rating: number
  reviews: number
  availability: {
    platform: string
    logo: string
  }
  tags: string[]
  category: string
  metaDescription: string
  introduction: string
  workflowDescription: string
  benefits: string[]
  roi: string[]
  sampleOutputUrl: string
  customizationPriceRange: string
}

export const automationTemplates: Template[] = [
  {
    slug: "automated-seo-reports-ga4-gsc",
    title: "Automated SEO Reports Template: GA4 & GSC",
    excerpt:
      "Automate SEO reporting with our workflow template. Get automated SEO reports from GA4 & GSC data, including keywords, pages, and visitor insights. Save time, boost ROI.",
    thumbnail: "/automated-seo-report-template.png",
    originalPrice: 49.99,
    currentPrice: 0,
    difficulty: "Intermediate",
    creator: {
      name: "Awwtomation Team",
      avatar: "/favicon.png",
    },
    downloads: 1247,
    rating: 4.8,
    reviews: 23,
    availability: {
      platform: "n8n",
      logo: "/n8n-logo.png",
    },
    tags: ["SEO", "Reporting", "Analytics"],
    category: "Marketing",
    metaDescription:
      "Automate SEO reporting with our workflow template. Get automated SEO reports from GA4 & GSC data, including keywords, pages, and visitor insights. Save time, boost ROI.",
    introduction:
      "In digital marketing, efficient reporting automation is crucial. Manual SEO data collection is time-consuming and error-prone. Our template automates this, providing unparalleled insights and freeing you for strategic work.",
    workflowDescription:
      "This template connects to your Google Analytics 4 (GA4) and Google Search Console (GSC) accounts. It automatically pulls GA4 data (session group/channel performance, visitor town/city) and GSC data (top 10 keywords, top 10 pages). This data is then processed with AI, and a comprehensive report PDF is generated, which can be automatically sent to stakeholders. This provides a holistic, automated overview of your SEO performance without manual effort.",
    benefits: [
      "Eliminate hours of manual data collection, freeing up your team for strategic tasks.",
      "Automated data pulls ensure consistent, error-free reporting, leading to more reliable insights.",
      "Get immediate access to critical SEO metrics, enabling quicker decision-making and agile strategy adjustments.",
      "Streamline your reporting workflow, reducing operational costs and increasing productivity.",
      "Make informed choices based on comprehensive, up-to-date performance data, leading to better SEO outcomes and higher ROI on your marketing efforts.",
    ],
    roi: [
      "Time Savings: Eliminate hours of manual data collection, freeing up your team for strategic tasks.",
      "Enhanced Accuracy: Automated data pulls ensure consistent, error-free reporting, leading to more reliable insights.",
      "Faster Insights: Get immediate access to critical SEO metrics, enabling quicker decision-making and agile strategy adjustments.",
      "Improved Efficiency: Streamline your reporting workflow, reducing operational costs and increasing productivity.",
      "Data-Driven Decisions: Make informed choices based on comprehensive, up-to-date performance data, leading to better SEO outcomes and higher ROI on your marketing efforts.",
    ],
    sampleOutputUrl: "/automated-seo-reporting-output.pdf", // Placeholder PDF
    customizationPriceRange: "$99.99 - $199.99",
  },
  {
    slug: "automated-reddit-commenting",
    title: "Reddit Comment Automation Template",
    excerpt:
      "Automate Reddit commenting with our template. Boost brand awareness, drive traffic, and build community engagement without lifting a finger.",
    thumbnail: "/Reddit_Commenting_Automation_Thumbnail.png",
    originalPrice: 19.99,
    currentPrice: 0,
    difficulty: "Beginner",
    creator: {
      name: "Awwtomation Team",
      avatar: "/favicon.png",
    },
    downloads: 323,
    rating: 5.0,
    reviews: 50,
    availability: {
      platform: "n8n",
      logo: "/n8n-logo.png",
    },
    tags: ["Social Media", "Reddit", "Engagement"],
    category: "Marketing",
    metaDescription:
      "Automate Reddit commenting with our powerful n8n template. Increase brand presence, drive high-quality traffic, and stay active in online conversations without manual effort.",
    introduction:
      "Reddit is one of the most influential platforms for niche communities and real-time engagement. However, managing Reddit manually can be time-consuming and inconsistent. Our Reddit Comment Automation Template helps you stay active and relevant in targeted subreddits by automating the entire engagement process—saving you time while driving visibility, clicks, and conversions.",
    workflowDescription:
      "This template starts on a scheduled basis, searches Reddit for posts based on your keywords and subreddits, checks against Google Sheets to avoid duplicate replies, generates on-brand comments using predefined prompts or AI, posts them directly, and logs all activity into your tracking sheet. It’s plug-and-play with powerful logic under the hood.",
    benefits: [
      "Drive organic traffic by automatically engaging in relevant Reddit threads.",
      "Promote your brand subtly and consistently without being spammy.",
      "Stay ahead of competitors by being an always-on presence in community conversations.",
      "Reduce manual labor while boosting your marketing outreach.",
      "Strengthen trust and visibility by participating in real-time discussions."
    ],
    roi: [
      "Time Savings: Eliminate the need for daily Reddit monitoring and manual responses.",
      "Increased Traffic: Direct relevant users to your site or product from high-intent threads.",
      "Higher Conversion: Reach users at the right time with contextual responses.",
      "Brand Growth: Build credibility and authority in your niche subreddits.",
      "Cost Efficiency: Replace hours of community management with one smart automation."
    ],
    sampleOutputUrl: "/Reddit_Commenting_Automation_Output.pdf",
    customizationPriceRange: "$49.99 - $149.99"
  }
]

export const allTemplateTags = Array.from(new Set(automationTemplates.flatMap((t) => t.tags)))
export const allTemplateCategories = Array.from(new Set(automationTemplates.map((t) => t.category)))
