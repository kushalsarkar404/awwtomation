import type { UseCasePage } from "@/content/mc-types"

/**
 * Search landing pages that sit outside the menus (linked from the footer,
 * like ManyChat's "Problems" pages). They use the use-case layout.
 */

export const manychatAlternativePage: UseCasePage = {
  path: "/manychat-alternative",
  name: "ManyChat alternative",
  seo: {
    title: "ManyChat Alternative for Instagram & Facebook",
    description: "Compare Awwtomation and ManyChat for Instagram and Facebook DM automation: pricing, free plans, channels and features, side by side.",
  },
  accent: "#3c42c4",
  extra: "manychat-comparison",
  hero: {
    title: "A ManyChat alternative built for Nepal",
    body: "Comment-to-DM, auto-replies and lead capture, without paying for channels you don't use.",
    social: "Free to start, no card needed",
  },
  showcase: {
    photo: "Shop owner switching tools on her laptop",
    step1: { label: "When someone comments on…", selected: "A specific post or reel", other: "Any post or reel" },
    step2: { label: "Send the DM", message: "Here's the link you asked for! 🛍️" },
  },
  seen: {
    thread: [
      { name: "creator", text: "Comment LINK for the collection!" },
      { name: "follower", text: "LINK", time: "Now" },
      { name: "creator", text: "Sent to your DMs!", time: "Now", reply: true },
    ],
    dm: [
      { from: "bot", text: "Here's the collection!" },
      { from: "user", text: "Love it 😍" },
      { from: "bot", text: "Tap below to shop." },
    ],
  },
  because: {
    title: "Everything you use. Nothing you don't.",
    body: "Awwtomation does Instagram and Facebook automation, and prices it that way.",
    checks: ["A free plan to start on", "No overage charges", "Cancel anytime"],
  },
  rows: [
    {
      title: "Pay for DMs, not contacts",
      photo: "Creator reviewing her monthly numbers",
      bullets: [
        { icon: "tag", bold: "Priced by DMs sent", rest: "not active contacts" },
        { icon: "bolt", bold: "No overage bills", rest: "· sending pauses at your limit" },
        { icon: "star", bold: "A bigger free plan", rest: "for trying it on a real account" },
      ],
    },
    {
      title: "Switch in an afternoon",
      photo: "Team setting up a new tool",
      bullets: [
        { icon: "bot", bold: "Templates", rest: "for the flows you already run" },
        { icon: "users", bold: "Import contacts", rest: "by CSV" },
        { icon: "click", bold: "Go live", rest: "in minutes" },
      ],
    },
  ],
  testimonialsTitle: "Customer stories",
  steps: {
    title: "Switch from ManyChat in 3 steps",
    body: "Rebuild, import, go live.",
    items: [
      { title: "Rebuild your flows", body: "Start from a template for each automation.", art: { kind: "keyword", text: "LINK" } },
      { title: "Import your contacts", body: "Upload a CSV export from ManyChat.", art: { kind: "bubble", text: "Welcome back! Here's the link 👋" } },
      { title: "Turn the old one off", body: "Switch off ManyChat's version so only one tool replies.", art: { kind: "list", title: "Automations", value: "Link in DM · Live" } },
    ],
  },
  finale: {
    title: "Ready to make the switch?",
    cards: [
      { photo: "Shop owner smiling at her laptop", title: "Keep what works", checks: ["Comment-to-DM", "Auto-replies and follow checks", "Lead capture in the chat"] },
      { photo: "Friends celebrating", title: "Drop what doesn't", checks: ["No per-contact pricing", "No overage bills", "No channels you never use"] },
      { photo: "Team planning together", title: "Move in an afternoon", checks: ["Templates for the flows you run", "Import contacts from CSV", "A free plan to test on"] },
    ],
  },
  faqs: [
    { question: "Is Awwtomation cheaper than ManyChat?", answer: "Often, when most people get a message or two. ManyChat charges per active contact; Awwtomation charges per DM sent." },
    { question: "What does ManyChat do that Awwtomation doesn't?", answer: "WhatsApp, TikTok, Telegram, SMS, email, AI replies, integrations and an API. Awwtomation covers Instagram and Facebook only." },
    { question: "Can I move my ManyChat automations?", answer: "There's no automatic import. Rebuild each from a template in a few minutes and import contacts by CSV." },
    { question: "How do the free plans compare?", answer: "ManyChat's free plan covers up to 25 active contacts a month. Awwtomation's covers 100 DMs a month." },
  ],
  footerBubbles: ["Moving from ManyChat?", "Yes!", "Welcome aboard 👋"],
  summary:
    "Awwtomation and ManyChat both automate Instagram and Facebook Messenger conversations. ManyChat also supports WhatsApp, TikTok, Telegram, SMS, email, AI replies and an API, and prices by active contacts. Awwtomation covers Instagram and Facebook, prices by DMs sent with no overage charges, and has a free plan of 100 DMs a month.",
}

export const nepalLandingPage: UseCasePage = {
  path: "/instagram-automation-nepal",
  name: "Instagram automation Nepal",
  seo: {
    title: "Instagram Automation Tool in Nepal",
    description: "Instagram and Facebook DM automation built in Kathmandu. Auto-reply to comments and DMs in Nepali or English. Free plan available.",
  },
  accent: "#007257",
  extra: "nepal-pricing",
  hero: {
    title: "Instagram automation, made in Nepal",
    body: "Auto-reply to comments and DMs in Nepali or English, priced for Nepali businesses.",
    social: "Built in Kathmandu",
  },
  showcase: {
    photo: "Kathmandu shop owner with her phone",
    step1: { label: "When someone comments on…", selected: "A specific post or reel", other: "Any post or reel" },
    step2: { label: "Reply in their language", message: "Namaste! Price Rs 2,400. Valley bhitra free delivery 🚚" },
  },
  seen: {
    thread: [
      { name: "shop", text: "Naya collection aayo! Comment PRICE" },
      { name: "customer", text: "price kati?", time: "Now" },
      { name: "shop", text: "DM check garnus!", time: "Now", reply: true },
    ],
    dm: [
      { from: "bot", text: "Rs 2,400. Cash on delivery available!" },
      { from: "user", text: "Pokhara ma delivery?" },
      { from: "bot", text: "Yes! 2–3 days outside the valley." },
    ],
  },
  because: {
    title: "Built for how Nepal sells.",
    body: "Price questions in DMs, cash on delivery and Facebook Pages, all handled.",
    checks: ["Nepali keywords", "Instagram + Facebook", "Cash on delivery questions"],
  },
  rows: [
    {
      title: "Speaks your customers' language",
      photo: "Customer typing a DM in Nepali",
      bullets: [
        { icon: "bot", bold: "Price, kati, मूल्य", rest: "· every spelling gets the answer" },
        { icon: "bolt", bold: "Instant replies", rest: "day or night" },
        { icon: "users", bold: "Your team", rest: "one tap away" },
      ],
    },
    {
      title: "Orders, tracked",
      photo: "Shop owner packing an order",
      bullets: [
        { icon: "tag", bold: "Phone numbers saved", rest: "for delivery" },
        { icon: "trend", bold: "A pipeline", rest: "from enquiry to delivered" },
        { icon: "click", bold: "Facebook and Instagram", rest: "in one inbox" },
      ],
    },
  ],
  testimonialsTitle: "Stories from Nepali businesses",
  steps: {
    title: "Go live in 3 steps",
    body: "Connect, set keywords, switch it on.",
    items: [
      { title: "Connect your accounts", body: "Instagram and your Facebook Page.", art: { kind: "keyword", text: "kati?" } },
      { title: "Add every keyword", body: "English, Nepali and Romanised spellings.", art: { kind: "bubble", text: "Namaste! Price Rs 2,400 🙏" } },
      { title: "Track your orders", body: "Leads land in your order pipeline.", art: { kind: "list", title: "Orders", value: "98XXXXXXXX" } },
    ],
  },
  finale: {
    title: "Ready to answer every “price kati?”",
    cards: [
      { photo: "Shop owner relaxing at the counter", title: "Sell more", checks: ["Instant price answers", "Cash-on-delivery questions handled", "Orders tracked"] },
      { photo: "Friends shopping in Thamel", title: "Work less", checks: ["No more typing the same reply", "Evenings back", "Team inbox for busy days"] },
      { photo: "Customer paying for an order", title: "Priced for Nepal", checks: ["Prices shown in rupees", "A free plan to start", "Cancel anytime"] },
    ],
  },
  faqs: [
    { question: "Is there an Instagram automation tool made in Nepal?", answer: "Yes. Awwtomation is built in Kathmandu for Nepali businesses and creators selling through Instagram and Messenger." },
    { question: "Does it work with Nepali comments and messages?", answer: "Yes. Keywords match in Devanagari, Romanised Nepali and English." },
    { question: "How much does it cost?", answer: "Free for one account and 100 DMs a month. Paid plans start with Starter." },
    { question: "Does it work for online shops?", answer: "Yes: price answers, product links, phone numbers and order pipelines." },
  ],
  footerBubbles: ["Namaste! 🙏", "Price kati?", "Sent to your DMs 💌"],
  summary:
    "Awwtomation is an Instagram and Facebook comment-to-DM automation tool built in Kathmandu for Nepali businesses and creators. Keywords match in Devanagari, Romanised Nepali and English, and the free plan includes 100 DMs a month.",
}
