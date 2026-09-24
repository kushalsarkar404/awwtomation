import type { ChatScript } from "@/components/mc/chat"
import type { SpotIconName } from "@/components/mc/icons"
import type { HeroChatStep } from "@/components/mc/sections/hero-chat"
import type { FaqItem } from "@/lib/seo"

export interface PageTheme {
  /** Colour of the hero (accent variant), feature tabs and channels section. */
  accent: string
  /** True when text on the accent should be white. */
  onAccentLight: boolean
  /** Colour of the spot icons above headings. */
  spot: string
  /** Background of the "See it in action" panel. */
  panel: string
  panelLight: boolean
  channel: "instagram" | "messenger"
}

/** Shared by the home page, product pages and business-type pages. */
export interface MarketingPage {
  path: string
  name: string
  seo: { title: string; description: string }
  theme: PageTheme
  hero: {
    kind: "photo" | "accent"
    title: string
    body: string
    cta: string
    photo: string
    image?: { src: string; alt: string }
    /** Conversation that plays over a photo hero. Falls back to the seller story. */
    chat?: HeroChatStep[]
  }
  automatically?: { photo: string; image?: { src: string; alt: string }; items: { label: string; chat: ChatScript }[] }
  proof: string
  intro: { icon: SpotIconName; title: string; body: string }
  features: { title: string; body: string; slides: { caption: string; chat: ChatScript }[] }[]
  bigWord: { word: string; photo: string; image?: { src: string; alt: string } }
  channels: { title: string; body?: string; cards: { channel: "instagram" | "messenger"; title: string; body: string; href: string }[] }
  beforeAfter: {
    icon: SpotIconName
    title: string
    body: string
    before: { title: string; items: string[] }
    after: { title: string; items: string[] }
  }
  seeIt: {
    icon: SpotIconName
    title: string
    body: string
    panelTitle: string
    items: { title: string; description: string; chat: ChatScript; checks?: string[] }[]
  }
  /** The MCP server section. Only the AI page has one. */
  mcp?: McpBlock
  /** Optional dark band for mechanics: providers, storage, cost. `soon` marks what is not built yet. */
  spotlight?: {
    icon: SpotIconName
    title: string
    body: string
    cards: { label: string; title: string; body: string; soon?: boolean }[]
  }
  steps: { icon: SpotIconName; title: string; body: string; items: { title: string; body: string; art: "signup" | "connect" | "live" }[] }
  faqs: FaqItem[]
  summary: string
}

/** Three AI workspace outcomes shown inside the animated command center. */
export interface McpDemo {
  /** Tab label. */
  label: string
  /** What you type into the assistant. */
  prompt: string
  /** The one-line answer it gives back. */
  answer: string
  result:
    | { kind: "flow"; title: string; steps: string[] }
    | { kind: "stats"; title: string; rows: { label: string; value: string }[] }
    | { kind: "draft"; title: string; to: string; text: string }
}

export interface McpBlock {
  kicker: string
  title: string
  body: string
  demos: McpDemo[]
}

export type BulletIcon = "users" | "bolt" | "star" | "bot" | "click" | "trend" | "heart" | "tag"

/** ManyChat's use-case landing layout. */
export interface UseCasePage {
  path: string
  name: string
  seo: { title: string; description: string }
  accent: string
  hero: { title: string; body: string; social: string }
  showcase: {
    photo: string
    step1: { label: string; selected: string; other: string }
    step2: { label: string; message: string }
  }
  seen: {
    thread: { name: string; text: string; time?: string; reply?: boolean }[]
    dm: { from: "bot" | "user"; text: string }[]
  }
  because: { title: string; body: string; checks: string[] }
  rows: { title: string; bullets: { icon: BulletIcon; bold: string; rest: string }[]; photo: string }[]
  testimonialsTitle: string
  steps: {
    title: string
    body: string
    items: [UseCaseStep, UseCaseStep, UseCaseStep]
  }
  finale: { title: string; cards: { photo: string; title: string; checks: string[] }[] }
  faqs: FaqItem[]
  footerBubbles: string[]
  summary: string
}

export interface UseCaseStep {
  title: string
  body: string
  art: { kind: "keyword"; text: string } | { kind: "bubble"; text: string } | { kind: "list"; title: string; value: string }
}
