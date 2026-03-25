export const SITE_URL = "https://www.awwtomation.com"
export const SITE_NAME = "Awwtomation"

export type ServiceKey =
  | "blog-automation"
  | "social-media-automation"
  | "seo-automation"
  | "email-marketing-automation"
  | "crm-automation"
  | "customer-support-automation"

export interface BreadcrumbItem {
  name: string
  href: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface LinkCardItem {
  title: string
  href: string
  description: string
  label?: string
}

export interface ServiceDefinition {
  key: ServiceKey
  name: string
  shortName: string
  href: string
  primaryKeyword: string
  secondaryKeywords: string[]
  title: string
  description: string
  heroTitle: string
  heroDescription: string
  faqs: FaqItem[]
  relatedResources: LinkCardItem[]
}

export const serviceDefinitions: Record<ServiceKey, ServiceDefinition> = {
  "blog-automation": {
    key: "blog-automation",
    name: "Blog Automation Service",
    shortName: "Blog Automation",
    href: "/services/blog-automation",
    primaryKeyword: "blog automation service",
    secondaryKeywords: ["blog automation", "ai blog writing service", "seo blog automation"],
    title: "Blog Automation Service for SEO Content Production | Awwtomation",
    description:
      "Launch a blog automation service that handles keyword research, AI-assisted drafting, editorial workflows, publishing, and reporting so your team can scale organic traffic faster.",
    heroTitle: "Blog Automation Service for SEO Content at Scale",
    heroDescription:
      "We build blog automation workflows that connect keyword research, AI-assisted drafting, human review, CMS publishing, and reporting so your content engine grows traffic without creating editorial chaos.",
    faqs: [
      {
        question: "What does a blog automation service actually automate?",
        answer:
          "A blog automation service can automate topic discovery, keyword clustering, content briefs, AI-assisted drafts, internal linking suggestions, CMS uploads, publishing schedules, and post-launch performance reporting.",
      },
      {
        question: "Will blog automation replace human editors?",
        answer:
          "No. The strongest setup uses automation for research, drafting, formatting, and publishing while keeping human review in place for brand voice, fact-checking, positioning, and final approval.",
      },
      {
        question: "Can you connect blog automation to our current CMS and workflow?",
        answer:
          "Yes. We can connect blog workflows to systems like WordPress, Webflow, Notion, Airtable, Google Docs, and approval tools so content moves cleanly from brief to publish.",
      },
      {
        question: "How does blog automation help SEO rankings?",
        answer:
          "It helps by improving publishing consistency, expanding topic coverage, speeding up refresh cycles, and standardizing on-page SEO elements like headings, metadata, internal links, and schema opportunities.",
      },
    ],
    relatedResources: [
      {
        title: "Best SEO Tools to Supercharge Audience Growth",
        href: "/blog/best-seo-tools-to-supercharge-audience-growth",
        description: "Use this to shape your content operations stack and reporting workflow.",
        label: "Related blog",
      },
      {
        title: "Why Link Building Can't Be Fully Automated",
        href: "/blog/why-link-building-cant-be-fully-automated",
        description: "A useful boundary-setting piece for what automation should and should not own.",
        label: "Related blog",
      },
      {
        title: "SEO Automation Service",
        href: "/services/seo-automation",
        description: "Pair blog production with technical reporting and optimization workflows.",
        label: "Related service",
      },
    ],
  },
  "social-media-automation": {
    key: "social-media-automation",
    name: "Social Media Automation Service",
    shortName: "Social Media Automation",
    href: "/services/social-media-automation",
    primaryKeyword: "social media automation service",
    secondaryKeywords: [
      "social media automation",
      "automated social media posting service",
      "social media workflow automation",
    ],
    title: "Social Media Automation Service for Scheduling, Content, and Reporting | Awwtomation",
    description:
      "Build a social media automation service that handles content planning, approvals, scheduling, inbox workflows, and reporting across the channels that matter to your brand.",
    heroTitle: "Social Media Automation Service for Scheduling, Content, and Reporting",
    heroDescription:
      "We build social media automation workflows that turn strategy into consistent publishing, faster community management, and cleaner reporting across your highest-value channels.",
    faqs: [
      {
        question: "What can a social media automation service automate?",
        answer:
          "It can automate content calendars, approvals, multi-platform scheduling, asset routing, reporting, and first-response workflows while keeping your team in control of final strategy and brand tone.",
      },
      {
        question: "Does social media automation hurt engagement?",
        answer:
          "Not when it is implemented correctly. Automation should handle repetitive scheduling, routing, and reporting so your team can spend more time on creative direction and meaningful conversations.",
      },
      {
        question: "Can you connect social automation with our CRM and email tools?",
        answer:
          "Yes. We can route leads, form submissions, and high-intent engagements from social channels into your CRM, email nurture flows, and internal notifications.",
      },
      {
        question: "Which businesses benefit most from social media automation?",
        answer:
          "Agencies, local businesses, ecommerce brands, and content teams benefit most because they need consistent output, faster responses, and measurable performance without manual coordination.",
      },
    ],
    relatedResources: [
      {
        title: "Best Social Media Tool to Boost Online Presence",
        href: "/blog/best-social-media-tool-to-boost-online-presence",
        description: "Benchmark the tooling and features that support automated publishing workflows.",
        label: "Related blog",
      },
      {
        title: "CRM Automation Service",
        href: "/services/crm-automation",
        description: "Turn social responses and lead capture into automated follow-up sequences.",
        label: "Related service",
      },
      {
        title: "Email Marketing Automation Service",
        href: "/services/email-marketing-automation",
        description: "Link campaign engagement to nurture flows and segmented lifecycle messaging.",
        label: "Related service",
      },
    ],
  },
  "seo-automation": {
    key: "seo-automation",
    name: "SEO Automation Service",
    shortName: "SEO Automation",
    href: "/services/seo-automation",
    primaryKeyword: "seo automation service",
    secondaryKeywords: ["seo automation", "ai seo service", "seo reporting automation"],
    title: "SEO Automation Service for Reporting, Content, and Technical Workflows | Awwtomation",
    description:
      "Deploy an SEO automation service that streamlines reporting, keyword monitoring, content workflows, technical checks, and stakeholder updates without losing strategic control.",
    heroTitle: "SEO Automation Service for Reporting, Content, and Technical Workflows",
    heroDescription:
      "We build SEO automation systems for dashboards, keyword tracking, technical alerts, content operations, and reporting so your team can act faster on the work that moves rankings.",
    faqs: [
      {
        question: "What parts of SEO can be automated safely?",
        answer:
          "Reporting, keyword monitoring, technical alerts, content briefs, metadata drafting, internal linking suggestions, and publishing workflows can all be automated safely when strategy and QA stay human-led.",
      },
      {
        question: "Can SEO automation help agencies and in-house teams?",
        answer:
          "Yes. Agencies use it to standardize reporting and delivery, while in-house teams use it to reduce repetitive work and act faster on content and technical opportunities.",
      },
      {
        question: "Do you automate SEO reporting from GA4 and Search Console?",
        answer:
          "Yes. We connect GA4, Google Search Console, spreadsheets, CRM data, and other sources into dashboards and recurring reports so performance is easier to track and explain.",
      },
      {
        question: "How long does SEO automation take to show business value?",
        answer:
          "Operational value is visible quickly because teams spend less time on exports and manual QA. Ranking improvements take longer, but automation helps teams execute consistently and spot issues earlier.",
      },
    ],
    relatedResources: [
      {
        title: "Best SEO Tools to Supercharge Audience Growth",
        href: "/blog/best-seo-tools-to-supercharge-audience-growth",
        description: "Compare the tools most often used in modern SEO reporting and execution stacks.",
        label: "Related blog",
      },
      {
        title: "Why Link Building Can't Be Fully Automated",
        href: "/blog/why-link-building-cant-be-fully-automated",
        description: "Clarify where automation helps and where human-led outreach still matters.",
        label: "Related blog",
      },
      {
        title: "Blog Automation Service",
        href: "/services/blog-automation",
        description: "Connect reporting and keyword ops to a repeatable content publishing pipeline.",
        label: "Related service",
      },
    ],
  },
  "email-marketing-automation": {
    key: "email-marketing-automation",
    name: "Email Marketing Automation Service",
    shortName: "Email Marketing Automation",
    href: "/services/email-marketing-automation",
    primaryKeyword: "email marketing automation service",
    secondaryKeywords: [
      "email marketing automation",
      "email automation agency",
      "automated email campaigns",
    ],
    title: "Email Marketing Automation Service for Lifecycle Campaigns and Revenue Workflows | Awwtomation",
    description:
      "Build email marketing automation workflows for welcome series, lead nurturing, abandoned cart recovery, segmentation, and reporting across your CRM and email stack.",
    heroTitle: "Email Marketing Automation Service for Lifecycle Campaigns and Revenue Workflows",
    heroDescription:
      "We implement email marketing automation that improves onboarding, nurture sequences, abandoned cart recovery, segmentation, and reporting so revenue workflows run without constant manual work.",
    faqs: [
      {
        question: "What workflows do you set up in an email marketing automation service?",
        answer:
          "We commonly implement welcome flows, lead nurture sequences, onboarding emails, abandoned cart recovery, re-engagement campaigns, sales handoff notifications, and reporting dashboards.",
      },
      {
        question: "Can you work with our current email platform?",
        answer:
          "Yes. We regularly work with Mailchimp, Klaviyo, HubSpot, ConvertKit, ActiveCampaign, and CRM-connected stacks as long as the platform supports APIs, events, or webhooks.",
      },
      {
        question: "How does email marketing automation improve conversions?",
        answer:
          "It improves conversions by sending better-timed, behavior-based messages, reducing manual delays, and making it easier to segment audiences based on real activity and lifecycle stage.",
      },
      {
        question: "Do you handle analytics and attribution too?",
        answer:
          "Yes. We can connect email platform data to CRM outcomes, dashboards, and recurring reports so your team sees which automations influence pipeline and revenue.",
      },
    ],
    relatedResources: [
      {
        title: "Drive Sales with Email Marketing Automation",
        href: "/blog/drive-sales-with-email-marketing-automation",
        description: "A practical guide to funnel design, nurture sequences, and revenue-driving flows.",
        label: "Related blog",
      },
      {
        title: "Best Email Marketing Platforms",
        href: "/blog/best-email-marketing-platforms",
        description: "Compare the tools you may want to automate around.",
        label: "Related blog",
      },
      {
        title: "CRM Automation Service",
        href: "/services/crm-automation",
        description: "Connect lifecycle campaigns to lead routing, scoring, and pipeline stages.",
        label: "Related service",
      },
    ],
  },
  "crm-automation": {
    key: "crm-automation",
    name: "CRM Automation Service",
    shortName: "CRM Automation",
    href: "/services/crm-automation",
    primaryKeyword: "crm automation service",
    secondaryKeywords: ["crm automation", "crm automation agency", "crm workflow automation"],
    title: "CRM Automation Service for Lead Routing, Follow-Ups, and Pipeline Workflows | Awwtomation",
    description:
      "Launch a CRM automation service that automates lead capture, scoring, handoffs, follow-up sequences, data syncing, and pipeline visibility across your sales process.",
    heroTitle: "CRM Automation Service for Lead Routing, Follow-Ups, and Pipeline Workflows",
    heroDescription:
      "We build CRM automation systems that route leads faster, trigger follow-ups automatically, sync data across your tools, and give your team a cleaner pipeline to work from.",
    faqs: [
      {
        question: "What does a CRM automation service improve first?",
        answer:
          "The fastest wins usually come from lead capture, assignment, follow-up triggers, deduplication, handoffs, and data syncing between sales, marketing, and support systems.",
      },
      {
        question: "Can CRM automation work with the tools we already use?",
        answer:
          "Yes. We build around your current CRM and connected tools whenever possible so you improve process quality without replacing your whole stack.",
      },
      {
        question: "How does CRM automation help sales teams?",
        answer:
          "It reduces response time, standardizes follow-up, improves lead quality visibility, and removes repetitive admin work so reps can focus on conversations and deals.",
      },
      {
        question: "Do you support custom CRM workflows and reporting?",
        answer:
          "Yes. We can tailor triggers, fields, pipeline stages, alerts, and dashboards to fit the way your business actually sells and services customers.",
      },
    ],
    relatedResources: [
      {
        title: "CRM Integration: The Ultimate Guide",
        href: "/blog/crm-integration-ultimate-guide-to-unify-business-operations",
        description: "Use this to plan how sales, marketing, and support systems should connect.",
        label: "Related blog",
      },
      {
        title: "Top CRM Tool",
        href: "/blog/top-crm-tool",
        description: "A shortlisting resource for teams evaluating CRM tooling.",
        label: "Related blog",
      },
      {
        title: "Email Marketing Automation Service",
        href: "/services/email-marketing-automation",
        description: "Extend CRM events into lifecycle campaigns and nurture sequences.",
        label: "Related service",
      },
    ],
  },
  "customer-support-automation": {
    key: "customer-support-automation",
    name: "Customer Support Automation Service",
    shortName: "Customer Support Automation",
    href: "/services/customer-support-automation",
    primaryKeyword: "customer support automation service",
    secondaryKeywords: [
      "customer support automation",
      "customer service automation",
      "chatbot automation service",
    ],
    title: "Customer Support Automation Service for AI Chatbots, Routing, and Self-Service | Awwtomation",
    description:
      "Implement a customer support automation service with AI chatbots, ticket routing, self-service workflows, and reporting that shortens response times without sacrificing customer experience.",
    heroTitle: "Customer Support Automation Service for AI Chatbots, Routing, and Self-Service",
    heroDescription:
      "We build customer support automation workflows that handle common questions, route conversations correctly, shorten response times, and connect support data to the rest of your business.",
    faqs: [
      {
        question: "What support workflows can be automated?",
        answer:
          "Common automations include chatbot triage, FAQ handling, ticket routing, appointment scheduling, status updates, escalation triggers, satisfaction surveys, and reporting.",
      },
      {
        question: "Will support automation replace our team?",
        answer:
          "No. The goal is to remove repetitive work and first-line volume so your team can focus on complex, revenue-critical, and empathy-heavy conversations.",
      },
      {
        question: "Can you connect support automation with our CRM or help desk?",
        answer:
          "Yes. We can connect chatbots, inboxes, forms, and ticketing systems with CRMs, calendars, knowledge bases, and internal notifications.",
      },
      {
        question: "How do you keep automated support accurate?",
        answer:
          "We use clear routing logic, knowledge-source governance, fallback escalation paths, and reporting so the automation stays accurate and improves over time.",
      },
    ],
    relatedResources: [
      {
        title: "Best Live Chat Software for Businesses",
        href: "/blog/best-live-chat-software-for-businesses",
        description: "Use this when planning the chat and routing layer of your support stack.",
        label: "Related blog",
      },
      {
        title: "CRM Automation Service",
        href: "/services/crm-automation",
        description: "Turn support interactions into cleaner customer records and follow-up workflows.",
        label: "Related service",
      },
      {
        title: "Automation Services",
        href: "/services",
        description: "See how support automation fits into a broader operations automation roadmap.",
        label: "Related service",
      },
    ],
  },
}

export const serviceCards: LinkCardItem[] = Object.values(serviceDefinitions).map((service) => ({
  title: service.shortName,
  href: service.href,
  description: service.description,
  label: "Service",
}))

export const homePageSeo = {
  title: "Business Automation Services for CRM, SEO, Email, and Social Media | Awwtomation",
  description:
    "A business automation agency for CRM, SEO, email marketing, blog operations, and customer support workflows that help service businesses grow with cleaner systems.",
  heroTitle: "Business Automation Services for Revenue, Marketing, and Operations Growth",
  heroDescription:
    "Awwtomation is a business automation agency that designs CRM, SEO, email marketing, social media, blog, and support workflows so service businesses can scale without adding manual overhead.",
  faqs: [
    {
      question: "What does a business automation agency do?",
      answer:
        "A business automation agency maps the manual work slowing down your company, then designs systems for lead handling, reporting, content, communication, and operations so teams can move faster with fewer errors.",
    },
    {
      question: "Which teams benefit most from business automation services?",
      answer:
        "Sales, marketing, customer support, and operations teams benefit the most because they typically manage the most repetitive routing, reporting, follow-up, and data-sync work.",
    },
    {
      question: "How quickly can business automation services start showing value?",
      answer:
        "Operational improvements can show up quickly because automation reduces manual work almost immediately. Revenue impact usually follows as lead response, nurture speed, reporting, and customer experience improve.",
    },
    {
      question: "Do we need to replace our current tools to automate processes?",
      answer:
        "Usually no. The best automation projects improve the systems you already use by connecting them more effectively and removing process gaps before recommending larger platform changes.",
    },
  ],
  relatedResources: [
    {
      title: "Automation Services Hub",
      href: "/services",
      description: "Review the full service stack across CRM, SEO, email, support, and social workflows.",
      label: "Core page",
    },
    {
      title: "What is RPA? A Comprehensive Guide to Robotic Process Automation",
      href: "/blog/what-is-rpa-robotic-process-automation-guide",
      description: "A foundational article for teams comparing task automation and broader workflow changes.",
      label: "Related blog",
    },
    {
      title: "Low-Code vs No-Code Automation Business Guide",
      href: "/blog/low-code-vs-no-code-automation-business-guide",
      description: "Helpful when deciding how much flexibility and ownership your stack needs.",
      label: "Related blog",
    },
  ],
}

export const servicesHubSeo = {
  title: "Automation Services for Marketing, Sales, Support, and Operations | Awwtomation",
  description:
    "Explore automation services for CRM, SEO, email marketing, social media, blog publishing, and customer support workflows built for growing service businesses.",
  heroTitle: "Automation Services for Marketing, Sales, Support, and Operations",
  heroDescription:
    "Our automation services cover the highest-friction parts of growth: lead routing, nurture flows, reporting, content production, social publishing, and support operations.",
  faqs: [
    {
      question: "What is professional services automation?",
      answer:
        "Professional services automation is the use of systems and workflows to reduce repetitive delivery, reporting, coordination, and customer-management tasks across service businesses.",
    },
    {
      question: "How do automation services help customer service and operations?",
      answer:
        "They shorten response times, reduce manual routing, improve visibility, and make it easier for teams to work from the same source of truth across departments.",
    },
    {
      question: "Can automation services be rolled out in phases?",
      answer:
        "Yes. Most companies start with one core workflow such as CRM follow-up, email nurture, support triage, or reporting, then expand once the early process wins are visible.",
    },
    {
      question: "How do I choose the right automation service for my business?",
      answer:
        "Start with the process that creates the most operational drag or lost revenue. That is often lead handling, customer follow-up, content execution, or support volume.",
    },
  ],
  relatedResources: [
    {
      title: "What is Agentic AI? Complete Guide",
      href: "/blog/what-is-agentic-ai-complete-guide",
      description: "A useful primer for teams evaluating newer AI-driven workflow patterns.",
      label: "Related blog",
    },
    {
      title: "Small Business Workflow Automation: n8n vs Make Guide",
      href: "/blog/small-business-workflow-automation-n8n-make-guide",
      description: "A practical guide to choosing the orchestration layer behind your automations.",
      label: "Related blog",
    },
    ...serviceCards.slice(0, 2),
  ],
}

export const blogIndexSeo = {
  heroTitle: "Business Automation Blog for CRM, SEO, Email, and Workflow Systems",
  heroDescription:
    "Guides, comparisons, and implementation ideas for teams building better CRM, SEO, email marketing, customer support, and workflow automation systems.",
}

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/full-logo.svg"),
    sameAs: [
      "https://www.instagram.com/awwtomation/",
      "https://www.linkedin.com/company/awwtomation/",
      "https://youtube.com/@Awwtomation",
      "https://x.com/awwtomation",
    ],
  }
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: homePageSeo.description,
  }
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  }
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function buildWebPageSchema({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function buildServiceSchema(service: ServiceDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.primaryKeyword,
    url: absoluteUrl(service.href),
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(service.href),
    },
  }
}

export function buildItemListSchema({
  title,
  path,
  items,
}: {
  title: string
  path: string
  items: Array<{ name: string; href: string }>
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    url: absoluteUrl(path),
    hasPart: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.href),
      })),
    },
  }
}

export function getServiceBreadcrumbs(service: ServiceDefinition): BreadcrumbItem[] {
  return [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.shortName, href: service.href },
  ]
}

export function getBlogBreadcrumbs(slug?: string, title?: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ]

  if (slug && title) {
    items.push({ name: title, href: `/blog/${slug}` })
  }

  return items
}

function normalize(values: string[]) {
  return values.join(" ").toLowerCase()
}

export function getPrimaryServiceForPost(post: { slug: string; title: string; keywords?: string[] }) {
  const haystack = normalize([post.slug, post.title, ...(post.keywords ?? [])])

  if (/(email|mailchimp|klaviyo|convertkit|automation platform)/.test(haystack)) {
    return serviceDefinitions["email-marketing-automation"]
  }

  if (/(crm|lead|hubspot|salesforce|pipedrive|zoho)/.test(haystack)) {
    return serviceDefinitions["crm-automation"]
  }

  if (/(seo|search|link building)/.test(haystack)) {
    return serviceDefinitions["seo-automation"]
  }

  if (/(social|instagram|tiktok|linkedin|youtube)/.test(haystack)) {
    return serviceDefinitions["social-media-automation"]
  }

  if (/(chat|support|service)/.test(haystack)) {
    return serviceDefinitions["customer-support-automation"]
  }

  if (/(blog|content)/.test(haystack)) {
    return serviceDefinitions["blog-automation"]
  }

  return undefined
}

export function getSupplementaryServicesForPost(post: { slug: string; title: string; keywords?: string[] }) {
  const primary = getPrimaryServiceForPost(post)
  const picks = primary
    ? [primary, serviceDefinitions["crm-automation"], serviceDefinitions["seo-automation"]]
    : [serviceDefinitions["seo-automation"], serviceDefinitions["email-marketing-automation"], serviceDefinitions["crm-automation"]]

  const unique = new Map<ServiceKey, ServiceDefinition>()
  for (const item of picks) {
    unique.set(item.key, item)
  }

  return Array.from(unique.values())
    .slice(0, 3)
    .map((service) => ({
      title: service.shortName,
      href: service.href,
      description: service.description,
      label: "Related service",
    }))
}
