import {
  businessChats,
  chats,
  instagramChats,
  messengerChats,
} from "@/content/chats";
import type { MarketingPage, PageTheme } from "@/content/mc-types";
import { formatUsd, STARTING_PRICE_USD } from "@/lib/pricing";

const YELLOW = "#fff200";
const MAGENTA = "#fb0df7";
const PURPLE = "#7b34ce";
const INDIGO = "#3c42c4";
const GREEN = "#007257";
const ORANGE = "#ff4c00";
const LAVENDER = "#d8bee3";
const SKY = "#96dae3";

const theme = (t: PageTheme) => t;
const fromPrice = formatUsd(STARTING_PRICE_USD);

const bothChannels = [
  {
    channel: "instagram" as const,
    title: "Instagram",
    body: "Automate DMs, comment replies and story replies",
    href: "/product/instagram",
  },
  {
    channel: "messenger" as const,
    title: "Messenger",
    body: "Turn Page comments and chats into sales",
    href: "/product/messenger",
  },
];

const stepsStandard: MarketingPage["steps"] = {
  icon: "rocket",
  title: "Live in three simple steps",
  body: "No code. Build before you pay. Replying to customers in minutes.",
  items: [
    {
      title: "Step 1: Create an account",
      body: "Sign up and build your automations before you pay",
      art: "signup",
    },
    {
      title: "Step 2: Connect your accounts",
      body: "Link Instagram and your Facebook Page",
      art: "connect",
    },
    {
      title: "Step 3: Switch on a template",
      body: "Pick a flow, set your keyword, choose a plan",
      art: "live",
    },
  ],
};

const stepsProduct: MarketingPage["steps"] = {
  icon: "rocket",
  title: "Never automated anything? Easy.",
  body: "Pick a template, connect your account and switch it on.",
  items: [
    {
      title: "Build first",
      body: "Set up automations before you pay",
      art: "signup",
    },
    {
      title: "Launch from a template",
      body: "Templates do the heavy lifting",
      art: "live",
    },
    {
      title: "Cancel anytime",
      body: "No contracts, no lock-in",
      art: "connect",
    },
  ],
};

const safeFaq = {
  question: "Will Awwtomation get my account blocked?",
  answer:
    "No. Awwtomation respects Instagram and Messenger messaging limits and never asks for your social password.",
};
const codeFaq = {
  question: "Do I need to know how to code?",
  answer:
    "No. Start from a template or drag steps together in the flow builder.",
};

/* ------------------------------------------------------------------ Home */

export const homePage: MarketingPage = {
  path: "/",
  name: "Home",
  seo: {
    title: "Awwtomation · Nepal's No.1 Chat Marketing Platform",
    description:
      `Nepal's No.1 chat marketing platform. Auto-reply to comments, DMs and story replies on Instagram and Facebook Messenger, and turn chats into sales. From ${fromPrice} a month.`,
  },
  theme: theme({
    accent: YELLOW,
    onAccentLight: false,
    spot: ORANGE,
    panel: INDIGO,
    panelLight: true,
    channel: "instagram",
  }),
  hero: {
    kind: "photo",
    title: "Every comment, answered.",
    body: "Nepal's No.1 chat marketing platform. Send links, answer questions and capture leads on Instagram and Messenger, automatically.",
    cta: "Get started",
    photo: "Creator relaxing while DMs are answered",
    image: {
      src: "/site-assets/home/hero.webp",
      alt: "Creator leaning back at his desk in Kathmandu while his DMs are answered automatically",
    },
  },
  proof: "❤️ Built for online sellers, creators & agencies",
  intro: {
    icon: "money",
    title: "Turn conversations into customers",
    body: "Instagram and Messenger, both answered the same way.",
  },
  features: [
    {
      title: "Every “PP” gets a price",
      body: "Price please, kati ho, link? Answered in seconds, so buyers never wait.",
      slides: [
        { caption: "Auto-reply to comments", chat: chats.commentPost },
        { caption: "Send the price by DM", chat: chats.commentToDm },
        { caption: "Page comments too", chat: chats.fbComment },
      ],
    },
    {
      title: "Answer every question",
      body: "Price, sizes, stock, delivery charge and cash on delivery, day or night.",
      slides: [
        { caption: "Price and stock", chat: chats.priceFaq },
        { caption: "Delivery charge", chat: chats.photoFaq },
        { caption: "Sizes and colours", chat: chats.sizeChart },
      ],
    },
    {
      title: "Reply to stories automatically",
      body: "Every story reply gets a price, a code or a thank-you, even while you sleep.",
      slides: [{ caption: "Auto-reply to stories", chat: chats.storyReply }],
    },
    {
      title: "Take the order in the chat",
      body: "Ask the size, collect the phone number and confirm cash on delivery.",
      slides: [
        { caption: "Take the order", chat: chats.orderChat },
        { caption: "Collect phone numbers", chat: chats.leadPhone },
        { caption: "Collect emails", chat: chats.leadEmail },
      ],
    },
  ],
  bigWord: {
    word: "Together",
    photo: "Customer smiling at her phone, blue sky",
    image: {
      src: "/site-assets/home/together.webp",
      alt: "Woman smiling at her phone on a Kathmandu rooftop",
    },
  },
  channels: { title: "Instagram and Messenger, together", cards: bothChannels },
  beforeAfter: {
    icon: "eyes",
    title: "Your DMs, before and after",
    body: "More sales. Less typing.",
    before: {
      title: "Drowning in DMs",
      items: [
        "Typing the same answer 200 times.",
        "Losing buyers in unread DMs.",
        "Missing sales while you sleep.",
        "Comments piling up under every post.",
      ],
    },
    after: {
      title: "Every DM answered",
      items: [
        "FAQs answered instantly.",
        "Leads tagged and organised.",
        "Sales happening 24/7.",
        "Every comment becomes a conversation.",
      ],
    },
  },
  seeIt: {
    icon: "spark",
    title: "From one comment to a full sales funnel",
    body: "Start with a template or build your own flow.",
    panelTitle: "See it in action…",
    items: [
      {
        title: "Answer “PP” under your post",
        description:
          "Someone comments PP. They get the price in their DMs within seconds.",
        chat: chats.commentPost,
      },
      {
        title: "Price, stock and cash on delivery",
        description:
          "The questions you answer twenty times a day, answered for you 24/7.",
        chat: chats.priceFaq,
      },
      {
        title: "Take the order in Messenger",
        description:
          "Ask the size, confirm the price and hand over to you when it matters.",
        chat: chats.orderChat,
      },
      {
        title: "Collect emails and phone numbers",
        description:
          "Ask in the chat. Answers are checked and saved to the contact.",
        chat: chats.leadEmail,
      },
      {
        title: "Ask people to follow first",
        description:
          "Send the offer to followers. Everyone else gets a friendly nudge.",
        chat: chats.followGate,
      },
      {
        title: "Reply to story replies",
        description:
          "Every reply to your story gets a price, a code or a thank-you.",
        chat: chats.storyReply,
      },
    ],
  },
  steps: stepsStandard,
  faqs: [
    {
      question: "What is chat marketing?",
      answer:
        "Selling and supporting customers inside the chats they already use, like Instagram DMs and Facebook Messenger. Awwtomation automates it: instant replies, links, lead capture and broadcasts.",
    },
    {
      question: "What can I automate with Awwtomation?",
      answer:
        "Replies to Instagram comments, DMs and story replies, plus comments and messages on your Facebook Page in Messenger.",
    },
    {
      question: "Is Awwtomation built for Nepali businesses?",
      answer:
        "Yes. It's built in Kathmandu, keywords can be matched in Nepali, in Devanagari or Romanised, and AI replies can answer in Romanised Nepali.",
    },
    safeFaq,
    {
      question: "Will automations sound like a robot?",
      answer:
        "No. You write every message, so it sounds like you, and your team can jump into any chat.",
    },
    codeFaq,
  ],
  summary:
    `Awwtomation is Nepal's No.1 chat marketing platform for Instagram and Facebook Messenger, built in Kathmandu. It sends an automatic DM when someone comments a keyword, replies to a story or messages you; posts public replies; collects validated emails and phone numbers; checks follow status; and saves everyone as a contact with tags and pipelines. Plans start at ${fromPrice} a month.`,
};

/* -------------------------------------------------------------- Products */

export const instagramPage: MarketingPage = {
  path: "/product/instagram",
  name: "Instagram",
  seo: {
    title: "Instagram Automation: Auto-Reply to DMs & Comments",
    description:
      "Auto-DM anyone who comments a keyword on your post or reel, replies to your story or messages you. Instagram chat marketing, built in Nepal.",
  },
  theme: theme({
    accent: PURPLE,
    onAccentLight: true,
    spot: MAGENTA,
    panel: MAGENTA,
    panelLight: true,
    channel: "instagram",
  }),
  hero: {
    kind: "accent",
    title: "Instagram DMs that answer themselves",
    body: "Reply to every comment, DM and story reply in seconds, and turn them into followers, leads and sales.",
    cta: "Get started",
    photo: "Creator outside his shop holding a phone",
  },
  automatically: {
    photo: "Creator outside his shop holding a phone",
    image: {
      src: "/site-assets/products/instagram/hero.webp",
      alt: "Creator smiling on a Patan street with his phone",
    },
    items: [
      { label: "Send product links", chat: instagramChats.commentToDm },
      { label: "Reply to comments", chat: instagramChats.publicReply },
      { label: "Close sales in DMs", chat: instagramChats.dmReply },
      { label: "Reward followers", chat: instagramChats.followGate },
    ],
  },
  proof: "💜 Built for Instagrammers",
  intro: {
    icon: "insta",
    title: "Grow on Instagram without the grind",
    body: "Comments, DMs and story replies, handled while you create.",
  },
  features: [
    {
      title: "Comments in. Sales out.",
      body: "“How much?” “Link?” Answered in seconds, while you post the next reel.",
      slides: [
        {
          caption: "Auto-reply to every comment",
          chat: instagramChats.commentPost,
        },
        { caption: "Send the order link", chat: instagramChats.commentToDm },
      ],
    },
    {
      title: "Answer DMs instantly",
      body: "Keyword replies for the questions you get every day.",
      slides: [
        { caption: "Answer price and delivery", chat: instagramChats.priceFaq },
        { caption: "Reserve products in DMs", chat: instagramChats.dmReply },
      ],
    },
    {
      title: "Grow real followers",
      body: "Send the good stuff to followers. Everyone else gets asked to follow.",
      slides: [
        {
          caption: "Follow to unlock an offer",
          chat: instagramChats.followGate,
        },
      ],
    },
    {
      title: "Get your evenings back",
      body: "Automations reply while you film, pack orders or sleep.",
      slides: [
        { caption: "Collect qualified leads", chat: instagramChats.leadEmail },
        { caption: "Sell from story replies", chat: instagramChats.storyReply },
      ],
    },
  ],
  bigWord: {
    word: "Beyond",
    photo: "Creator taking a selfie on a rooftop",
    image: {
      src: "/site-assets/products/instagram/beyond.webp",
      alt: "Creator taking a selfie on a Kathmandu rooftop at sunset",
    },
  },
  channels: {
    title: "Beyond Instagram",
    body: "Awwtomation also connects you with customers on:",
    cards: [bothChannels[1]],
  },
  beforeAfter: {
    icon: "eyes",
    title: "From buried in DMs to on top of them",
    body: "Keep selling while you sleep.",
    before: {
      title: "One reply at a time",
      items: [
        "Typing the same reply to every DM.",
        "Leads gone cold before you answer.",
        "Comments piling up under every reel.",
        "Followers who never hear back.",
      ],
    },
    after: {
      title: "Instagram on autopilot",
      items: [
        "Every question answered in seconds.",
        "Leads saved, tagged and tracked.",
        "Every comment turned into a chat.",
        "You? Back to creating.",
      ],
    },
  },
  seeIt: {
    icon: "spark",
    title: "Pick a flow and go live today",
    body: "Templates for the automations Instagram sellers use most.",
    panelTitle: "See how it works",
    items: [
      {
        title: "Send links from comments",
        description:
          "A product keyword opens a DM with the price and order link.",
        chat: instagramChats.commentPost,
      },
      {
        title: "Run giveaways by DM",
        description:
          "Every comment becomes a confirmed entry and a sales contact.",
        chat: instagramChats.giveaway,
      },
      {
        title: "Turn guides into leads",
        description:
          "Validate the email, deliver the guide and include an offer.",
        chat: instagramChats.leadEmail,
      },
      {
        title: "Answer buying questions",
        description:
          "Price, delivery and payment questions answered in seconds.",
        chat: instagramChats.priceFaq,
      },
      {
        title: "Sell from story replies",
        description:
          "Turn product reactions into reservations before stock runs out.",
        chat: instagramChats.storyReply,
      },
    ],
  },
  steps: stepsProduct,
  faqs: [
    {
      question: "Will Awwtomation get my Instagram account blocked?",
      answer:
        "No. It respects Instagram's messaging limits, including the private-reply limits for comment automations.",
    },
    {
      question: "What is Instagram DM automation?",
      answer:
        "Automatic replies to comments, DMs and story replies: sending links, answering questions and collecting leads for you.",
    },
    {
      question: "Does it work with personal accounts?",
      answer:
        "No. Connect an Instagram Business or Creator account. Switching account type is free and takes a minute.",
    },
    codeFaq,
  ],
  summary:
    "Awwtomation automates Instagram direct messages for Business and Creator accounts, as part of a chat marketing platform that also covers Facebook Messenger. Automations start from a keyword comment on a post or reel, a story reply, or a DM keyword; they can send links with buttons, post public replies, check follow status, collect validated emails and phone numbers, and save every person as a contact.",
};

export const messengerPage: MarketingPage = {
  path: "/product/messenger",
  name: "Messenger",
  seo: {
    title: "Messenger Chatbot & Facebook Comment Auto-Reply",
    description:
      "A Messenger chatbot for your Facebook Page: auto-reply to comments and messages, take orders and capture leads. Shares one inbox with Instagram.",
  },
  theme: theme({
    accent: INDIGO,
    onAccentLight: true,
    spot: INDIGO,
    panel: SKY,
    panelLight: false,
    channel: "messenger",
  }),
  hero: {
    kind: "accent",
    title: "Turn Facebook Messenger into your sales desk",
    body: "A Messenger chatbot for your Facebook Page. Reply to comments, answer questions and collect leads, automatically.",
    cta: "Start with Messenger",
    photo: "Shop owner smiling in her studio",
  },
  automatically: {
    photo: "Shop owner smiling in her studio",
    image: {
      src: "/site-assets/products/messenger/hero.webp",
      alt: "Shop owner smiling at her desk with her phone",
    },
    items: [
      { label: "Reply to Page comments", chat: messengerChats.fbComment },
      {
        label: "Recommend products",
        chat: messengerChats.productRecommendation,
      },
      { label: "Take orders in chat", chat: messengerChats.orderChat },
      { label: "Collect delivery details", chat: messengerChats.leadPhone },
    ],
  },
  proof: "💙 Built for Facebook Pages",
  intro: {
    icon: "money",
    title: "Every Page comment, a new conversation",
    body: "Replies, leads and sales from every comment and chat.",
  },
  features: [
    {
      title: "Comments become customers",
      body: "Someone comments on your post. They get your offer in Messenger instantly.",
      slides: [
        { caption: "Reply to Page comments", chat: messengerChats.fbComment },
        { caption: "Take orders in Messenger", chat: messengerChats.orderChat },
      ],
    },
    {
      title: "Answer every question",
      body: "Hours, prices and delivery, answered before they ask twice.",
      slides: [
        { caption: "Answer price and delivery", chat: messengerChats.priceFaq },
        {
          caption: "Flag wholesale leads for your team",
          chat: messengerChats.handoff,
        },
      ],
    },
    {
      title: "Capture every lead",
      body: "Phone numbers and emails saved straight to your contacts.",
      slides: [
        { caption: "Collect phone numbers", chat: messengerChats.leadPhone },
        {
          caption: "Send coupon codes",
          chat: messengerChats.cartRecovery,
        },
      ],
    },
  ],
  bigWord: {
    word: "Connect",
    photo: "Customer with coffee reading messages",
    image: {
      src: "/site-assets/products/messenger/connect.webp",
      alt: "Man with a coffee smiling at his laptop",
    },
  },
  channels: {
    title: "Beyond Messenger",
    body: "Awwtomation also connects you with customers on:",
    cards: [bothChannels[0]],
  },
  beforeAfter: {
    icon: "eyes",
    title: "Your Page, before and after",
    body: "Stop answering the same question all day.",
    before: {
      title: "Stuck answering chats",
      items: [
        "Answering the same question 50 times.",
        "Comments gathering dust.",
        "Customers waiting hours for a reply.",
        "Leads lost in the inbox.",
      ],
    },
    after: {
      title: "Every chat handled",
      items: [
        "Evenings off, orders still in.",
        "Comments become conversations.",
        "Every chat answered in seconds.",
        "Leads saved and followed up.",
      ],
    },
  },
  seeIt: {
    icon: "spark",
    title: "Messenger flows that close sales",
    body: "Start with the flows Facebook Pages set up first.",
    panelTitle: "See how it works",
    items: [
      {
        title: "Reply outside opening hours",
        description:
          "Answer while you're closed, and let your team pick it up in the morning.",
        chat: messengerChats.deliveryUpdate,
      },
      {
        title: "Reply to Page comments",
        description:
          "A product question opens a private Messenger sale automatically.",
        chat: messengerChats.fbComment,
      },
      {
        title: "Collect delivery details",
        description:
          "Capture and save the phone number before confirming the order.",
        chat: messengerChats.leadPhone,
      },
      {
        title: "Run Page giveaways",
        description: "Confirm entries in Messenger and send a follow-up offer.",
        chat: messengerChats.giveaway,
      },
      {
        title: "Qualify bulk buyers",
        description:
          "Quote large orders and tag serious leads for your team.",
        chat: messengerChats.bulkQuote,
      },
    ],
  },
  steps: stepsProduct,
  faqs: [
    {
      question: "What is a Messenger chatbot?",
      answer:
        "An automation that replies in Facebook Messenger for your Page: answering comments and messages, sending links and saving leads, with your team one tap away.",
    },
    {
      question: "Can I offer live chat support in Messenger?",
      answer:
        "Yes. Messenger chats land in a shared inbox where your team can reply and assign conversations.",
    },
    {
      question: "Does it work with a personal Facebook profile?",
      answer:
        "No. You need a Facebook Page you manage. Meta doesn't allow automation on personal profiles.",
    },
    safeFaq,
    codeFaq,
  ],
  summary:
    "Awwtomation is a Facebook Messenger chatbot and chat marketing platform for Facebook Pages. It connects Pages through Facebook Login and automates Messenger replies to Page post comments and incoming messages. Facebook Pages share the same flow builder, contacts, pipelines, broadcasts, analytics and unified inbox as Instagram accounts.",
};

/* -------------------------------------------------------- Business types */

function businessPage(
  page: Omit<MarketingPage, "steps" | "channels"> & {
    channels?: MarketingPage["channels"];
  },
): MarketingPage {
  return {
    ...page,
    steps: stepsStandard,
    channels: page.channels ?? {
      title: "Everywhere you sell on social",
      cards: bothChannels,
    },
  };
}

export const creatorsPage = businessPage({
  path: "/solution/for-creators",
  name: "for Creators",
  seo: {
    title: "DM Automation for Creators on Instagram & Facebook",
    description:
      "Turn comments into followers, leads and sales. Send links by DM, gate them behind a follow and run giveaways that confirm every entry.",
  },
  theme: theme({
    accent: MAGENTA,
    onAccentLight: true,
    spot: MAGENTA,
    panel: YELLOW,
    panelLight: false,
    channel: "instagram",
  }),
  hero: {
    kind: "accent",
    title: "Your reel went viral. Now keep the people.",
    body: "Turn comments into followers, fans and sales, automatically.",
    cta: "Get started",
    photo: "Creator filming a reel",
  },
  automatically: {
    photo: "Creator filming a reel",
    image: {
      src: "/site-assets/solutions/creators/hero.webp",
      alt: "Creator relaxing with headphones while customer DMs are handled",
    },
    items: [
      { label: "Send creator guides", chat: businessChats.creatorLink },
      { label: "Sell a course", chat: businessChats.creatorCourse },
      { label: "Run giveaways", chat: businessChats.creatorGiveaway },
      { label: "Grow a newsletter", chat: businessChats.creatorNewsletter },
    ],
  },
  proof: "💖 Built for creators",
  intro: {
    icon: "heart",
    title: "Grow faster without living in your DMs",
    body: "Monetise the reach you already have.",
  },
  features: [
    {
      title: "Links without the bio",
      body: "“Comment GUIDE” beats “link in bio” every time.",
      slides: [
        { caption: "Deliver a creator guide", chat: businessChats.creatorLink },
        { caption: "Offer the next lesson", chat: businessChats.creatorCourse },
      ],
    },
    {
      title: "Followers that stay",
      body: "Send the link only after they follow you.",
      slides: [{ caption: "Follow to unlock", chat: businessChats.creatorLink }],
    },
    {
      title: "Giveaways that scale",
      body: "Every entry confirmed by DM, every entrant tagged.",
      slides: [{ caption: "Run giveaways", chat: businessChats.creatorGiveaway }],
    },
    {
      title: "An audience you own",
      body: "Collect emails so the algorithm can't take your fans.",
      slides: [{ caption: "Build a newsletter", chat: businessChats.creatorNewsletter }],
    },
  ],
  bigWord: {
    word: "Create",
    photo: "Creator laughing with friends",
    image: {
      src: "/site-assets/solutions/creators/create.webp",
      alt: "Creator using her phone on a sunny terrace",
    },
  },
  beforeAfter: {
    icon: "eyes",
    title: "Creating and replying? Pick one.",
    body: "We'll handle the DMs.",
    before: {
      title: "Creating AND replying",
      items: [
        "Hundreds of “link?” comments.",
        "Fans waiting days for a reply.",
        "Viral reach, zero follow-ups.",
        "No way to reach fans again.",
      ],
    },
    after: {
      title: "Create. We'll reply.",
      items: [
        "Every fan gets the link instantly.",
        "Followers grow with every post.",
        "Giveaways run themselves.",
        "An email list you own.",
      ],
    },
  },
  seeIt: {
    icon: "spark",
    title: "Flows creators love",
    body: "Start with one. Add more as you grow.",
    panelTitle: "See it in action…",
    items: [
      {
        title: "Send links from comments",
        description: "Comment a keyword, get the link.",
        chat: businessChats.creatorLink,
      },
      {
        title: "Ask people to follow first",
        description: "Turn reach into followers.",
        chat: businessChats.creatorCourse,
      },
      {
        title: "Run giveaways",
        description: "Confirm entries and tag entrants.",
        chat: businessChats.creatorGiveaway,
      },
      {
        title: "Collect emails",
        description: "Build a list the algorithm can't touch.",
        chat: businessChats.creatorNewsletter,
      },
    ],
  },
  faqs: [
    {
      question: "How much does it cost for creators?",
      answer:
        `Starter is ${fromPrice} a month for 2 accounts and 2,500 contacts, with no limit on DMs. You can build your automations before you pay.`,
    },
    {
      question: "Does it work with Creator accounts?",
      answer: "Yes. Both Instagram Creator and Business accounts work.",
    },
    {
      question: "Will automated DMs hurt my reach?",
      answer:
        "No. Asking for comments usually lifts engagement, and Awwtomation stays inside Meta's limits.",
    },
    {
      question: "Can I send affiliate links?",
      answer: "Yes. Put them on a button, and use a tracked link to count clicks.",
    },
  ],
  summary:
    `Awwtomation helps creators on Instagram and Facebook turn engagement into followers, contacts and sales with comment-to-DM links, follow-to-unlock flows, giveaway confirmations and email collection. Plans start at ${fromPrice} a month.`,
});

export const ecommercePage = businessPage({
  path: "/solution/for-ecommerce",
  name: "for eCommerce",
  seo: {
    title: "Messenger & Instagram Chatbot for Online Stores",
    description:
      "Answer price and delivery questions in Messenger and Instagram DMs instantly, send product links from comments and track every order. Built for Nepali shops.",
  },
  theme: theme({
    accent: GREEN,
    onAccentLight: true,
    spot: GREEN,
    panel: LAVENDER,
    panelLight: false,
    channel: "instagram",
  }),
  hero: {
    kind: "accent",
    title: "Sell in the DMs without living in them",
    body: "Answer buyers instantly, send product links and track every order.",
    cta: "Get started",
    photo: "Shop owner packing orders",
  },
  automatically: {
    photo: "Shop owner packing orders",
    image: {
      src: "/site-assets/solutions/ecommerce/hero.webp",
      alt: "Online shop owner checking customer messages in his studio",
    },
    items: [
      { label: "Answer price questions", chat: businessChats.ecommercePrice },
      { label: "Answer stock questions", chat: businessChats.ecommerceStock },
      { label: "Take orders in chat", chat: businessChats.ecommerceOrder },
      { label: "Handle delivery", chat: businessChats.ecommerceDelivery },
    ],
  },
  proof: "💚 Built for online shops",
  intro: {
    icon: "money",
    title: "Answer buyers before they scroll away",
    body: "Every question answered. Every order tracked.",
  },
  features: [
    {
      title: "Answer buyers instantly",
      body: "“Price?” gets a reply in seconds, day or night.",
      slides: [
        { caption: "Answer price questions", chat: businessChats.ecommercePrice },
        { caption: "Answer stock questions", chat: businessChats.ecommerceStock },
      ],
    },
    {
      title: "Links from product posts",
      body: "“Comment SIZE” sends the size chart and the link.",
      slides: [
        { caption: "Send product links", chat: businessChats.ecommerceStock },
        { caption: "Explain delivery", chat: businessChats.ecommerceDelivery },
      ],
    },
    {
      title: "Capture every order",
      body: "Phone numbers saved, orders tagged, pipeline updated.",
      slides: [
        { caption: "Confirm an order", chat: businessChats.ecommerceOrder },
        { caption: "Update delivery", chat: businessChats.ecommerceDelivery },
      ],
    },
  ],
  bigWord: {
    word: "Sell",
    photo: "Customer unboxing an order",
    image: {
      src: "/site-assets/solutions/ecommerce/sell.webp",
      alt: "Online seller checking orders from his phone",
    },
  },
  beforeAfter: {
    icon: "eyes",
    title: "Your shop's DMs, before and after",
    body: "Faster answers. More orders.",
    before: {
      title: "Losing buyers in the DMs",
      items: [
        "“Price?” left on seen.",
        "Orders scribbled in a notebook.",
        "Customers buying elsewhere.",
        "Same answers, all day.",
      ],
    },
    after: {
      title: "Every buyer answered",
      items: [
        "Prices sent in seconds.",
        "Orders tracked in a pipeline.",
        "Phone numbers saved automatically.",
        "Your team handles only what matters.",
      ],
    },
  },
  seeIt: {
    icon: "spark",
    title: "Flows that sell",
    body: "The automations shops set up first.",
    panelTitle: "See it in action…",
    items: [
      {
        title: "Answer price questions",
        description: "Instant prices with buttons for more.",
        chat: businessChats.ecommercePrice,
      },
      {
        title: "Send links from product posts",
        description: "Comment a keyword, get the product link.",
        chat: businessChats.ecommerceStock,
      },
      {
        title: "Collect phone numbers",
        description: "Saved to the contact for delivery.",
        chat: businessChats.ecommerceDelivery,
      },
      {
        title: "Take orders in chat",
        description: "Buyers order with one tap, tagged for your team.",
        chat: businessChats.ecommerceOrder,
      },
    ],
  },
  faqs: [
    {
      question: "Can customers pay inside the DM?",
      answer:
        "No. Awwtomation sends messages and links. Link to your checkout or take payment as you do today.",
    },
    {
      question: "Can my whole team use it?",
      answer: "Yes, on Pro (5 team members) and Agency (20). Starter is for one person.",
    },
    {
      question: "Does it work with Facebook Pages?",
      answer: "Yes. Connect Instagram and Facebook side by side.",
    },
    safeFaq,
  ],
  summary:
    "Awwtomation is a Messenger and Instagram chatbot for online stores: instant answers to price and delivery questions, product links sent from comments, phone number collection and order tracking in sales pipelines, with a shared team inbox.",
});

export const agenciesPage = businessPage({
  path: "/solution/for-agencies",
  name: "for Agencies",
  seo: {
    title: "Chat Marketing Platform for Agencies & Clients",
    description:
      "Run Instagram and Messenger chat marketing for every client from one login. A workspace per client, team roles, up to 40 accounts and no DM limit.",
  },
  theme: theme({
    accent: ORANGE,
    onAccentLight: true,
    spot: ORANGE,
    panel: SKY,
    panelLight: false,
    channel: "instagram",
  }),
  hero: {
    kind: "accent",
    title: "Every client's automation, one login",
    body: "A workspace per client. One plan for all of them.",
    cta: "Get started",
    photo: "Agency team in a planning session",
  },
  automatically: {
    photo: "Agency team in a planning session",
    image: {
      src: "/site-assets/solutions/agencies/hero.webp",
      alt: "Agency owner managing client conversations from her phone",
    },
    items: [
      { label: "A workspace per client", chat: businessChats.agencyWorkspace },
      { label: "Qualify client leads", chat: businessChats.agencyLead },
      { label: "Hand off to the client", chat: businessChats.agencyHandoff },
      { label: "Report real outcomes", chat: businessChats.agencyReport },
    ],
  },
  proof: "🧡 Built for agencies",
  intro: {
    icon: "rocket",
    title: "Scale automation across every client",
    body: "Build once. Duplicate for the next brand.",
  },
  features: [
    {
      title: "A workspace per client",
      body: "Accounts, contacts and automations kept separate.",
      slides: [{ caption: "Client workspaces", chat: businessChats.agencyWorkspace }],
    },
    {
      title: "Launch proven flows fast",
      body: "Duplicate an automation that worked and change the keyword.",
      slides: [
        { caption: "Qualify a lead", chat: businessChats.agencyLead },
        { caption: "Hand off to the client", chat: businessChats.agencyHandoff },
      ],
    },
    {
      title: "Report results clients read",
      body: "Funnels and top keywords, with daily numbers in CSV.",
      slides: [{ caption: "Report results", chat: businessChats.agencyReport }],
    },
  ],
  bigWord: {
    word: "Grow",
    photo: "Agency founders celebrating a launch",
    image: {
      src: "/site-assets/solutions/agencies/grow.webp",
      alt: "Agency founders reviewing campaign results together",
    },
  },
  beforeAfter: {
    icon: "eyes",
    title: "Client work, before and after",
    body: "More clients. Same team.",
    before: {
      title: "One client, one headache",
      items: [
        "Separate logins for every brand.",
        "Rebuilding the same flow again.",
        "Reports stitched together by hand.",
        "Seats paid per tool.",
      ],
    },
    after: {
      title: "Every client, one login",
      items: [
        "A workspace per client.",
        "Flows duplicated in seconds.",
        "Daily numbers exported to CSV.",
        "20 seats on the Agency plan.",
      ],
    },
  },
  seeIt: {
    icon: "spark",
    title: "Flows agencies launch for clients",
    body: "Proven automations, ready to duplicate.",
    panelTitle: "See it in action…",
    items: [
      {
        title: "Client workspaces",
        description: "Switch between brands without logging out.",
        chat: businessChats.agencyWorkspace,
      },
      {
        title: "Send links from comments",
        description: "The flow every client asks for first.",
        chat: businessChats.agencyLead,
      },
      {
        title: "Collect emails",
        description: "Lead magnets delivered in the chat.",
        chat: businessChats.agencyHandoff,
      },
      {
        title: "Report results",
        description: "Numbers clients understand.",
        chat: businessChats.agencyReport,
      },
    ],
  },
  faqs: [
    {
      question: "Can clients see only their own workspace?",
      answer:
        "No. Roles cover the whole organization. For strict separation, a client needs their own organization and plan, or you can share CSV reports.",
    },
    {
      question: "What counts as a connected account?",
      answer:
        "Each Instagram account or Facebook Page. The Agency plan includes 40.",
    },
    {
      question: "Can I white-label Awwtomation?",
      answer: "No. The app shows the Awwtomation name.",
    },
    {
      question: "Is onboarding included?",
      answer: "Yes. The Agency plan includes dedicated onboarding.",
    },
  ],
  summary:
    "Awwtomation is a chat marketing platform for agencies managing Instagram and Facebook Messenger automation for many clients: an organization holds the plan and team and contains a workspace per client. The Agency plan includes 40 connected accounts, 20 workspaces, 500 active automations, 50,000 contacts, no DM limit, 15,000 built-in AI replies a month, 20 team members and dedicated onboarding.",
});

export const brandsPage = businessPage({
  path: "/solution/for-brand",
  name: "for Brands",
  seo: {
    title: "Chat Marketing for Brands on Instagram & Messenger",
    description:
      "Answer customers 24/7, run giveaways, broadcast to segments and capture leads across Instagram and Facebook Messenger, on brand and at scale.",
  },
  theme: theme({
    accent: LAVENDER,
    onAccentLight: false,
    spot: PURPLE,
    panel: GREEN,
    panelLight: true,
    channel: "instagram",
  }),
  hero: {
    kind: "accent",
    title: "Conversations that build loyalty at scale",
    body: "Answer customers instantly, run campaigns and keep every conversation on brand.",
    cta: "Get started",
    photo: "Brand campaign shoot",
  },
  automatically: {
    photo: "Brand campaign shoot",
    image: {
      src: "/site-assets/solutions/brands/hero.webp",
      alt: "Brand team reviewing a campaign together",
    },
    items: [
      { label: "Launch new collections", chat: businessChats.brandLaunch },
      { label: "Answer support", chat: businessChats.brandSupport },
      { label: "Convert story replies", chat: businessChats.brandStory },
      { label: "Reward loyal buyers", chat: businessChats.brandLoyalty },
    ],
  },
  proof: "💜 Built for growing brands",
  intro: {
    icon: "spark",
    title: "Every conversation, on brand",
    body: "Campaigns, support and sales in one place.",
  },
  features: [
    {
      title: "Campaigns that convert",
      body: "Giveaways and story campaigns that turn reach into contacts.",
      slides: [
        { caption: "Build a VIP launch list", chat: businessChats.brandLaunch },
        { caption: "Convert story replies", chat: businessChats.brandStory },
      ],
    },
    {
      title: "Support that never sleeps",
      body: "Instant answers, with your team one tap away.",
      slides: [
        { caption: "Create an exchange", chat: businessChats.brandSupport },
        { caption: "Reward loyal buyers", chat: businessChats.brandLoyalty },
      ],
    },
    {
      title: "Audiences you own",
      body: "Collect emails and message segments later.",
      slides: [{ caption: "Grow a launch segment", chat: businessChats.brandLaunch }],
    },
  ],
  bigWord: {
    word: "Engage",
    photo: "Fans at a brand event",
    image: {
      src: "/site-assets/solutions/brands/engage.webp",
      alt: "Brand manager reviewing customer engagement on her laptop",
    },
  },
  beforeAfter: {
    icon: "eyes",
    title: "Your brand's DMs, before and after",
    body: "Faster support. Bigger campaigns.",
    before: {
      title: "Slow replies, lost fans",
      items: [
        "Customers waiting hours.",
        "Campaign comments unanswered.",
        "No list to reach fans again.",
        "Support scattered across apps.",
      ],
    },
    after: {
      title: "Loyalty on autopilot",
      items: [
        "Answers in seconds.",
        "Every campaign comment followed up.",
        "Segments you can broadcast to.",
        "One inbox for the whole team.",
      ],
    },
  },
  seeIt: {
    icon: "spark",
    title: "Flows brands run",
    body: "From launch campaigns to everyday support.",
    panelTitle: "See it in action…",
    items: [
      {
        title: "Run giveaways",
        description: "Confirm every entry by DM.",
        chat: businessChats.brandLaunch,
      },
      {
        title: "Story reply campaigns",
        description: "Codes and links for every story reply.",
        chat: businessChats.brandStory,
      },
      {
        title: "Answer FAQs",
        description: "Support that never sleeps.",
        chat: businessChats.brandSupport,
      },
      {
        title: "Collect emails",
        description: "Build an audience you own.",
        chat: businessChats.brandLoyalty,
      },
    ],
  },
  faqs: [
    {
      question: "Can we broadcast to our audience?",
      answer:
        "Yes, from the Starter plan, to segments of contacts inside Meta's 24-hour messaging window.",
    },
    {
      question: "Can multiple team members work together?",
      answer: "Yes. Invite your team with Owner, Admin or Member roles.",
    },
    {
      question: "Does it keep messages on brand?",
      answer: "Yes. You write every message and control every flow.",
    },
    safeFaq,
  ],
  summary:
    "Awwtomation helps brands run chat marketing on Instagram and Facebook Messenger at scale: 24/7 FAQ answers, giveaway and story-reply campaigns, email collection, segment broadcasts and a shared team inbox.",
});

/* --------------------------------------------------------------- AI */

/*
 * The AI product page. Everything claimed here is what lib/ai and
 * lib/services/ai.ts in the product app actually do: Awwtomation AI (the
 * built-in model on our key) by default on Pro and Agency, or a workspace's own key from 24
 * provider presets or a public custom endpoint; an agent built from a prompt,
 * a knowledge block, guardrails, a fallback reply and link buttons; an "AI
 * reply" step with Done and Needs a human exits; replies in English or
 * Romanised Nepali only, by DM only (never public comment replies); and
 * per-agent reply and token counters. The MCP showcase uses real MCP tools.
 */
export const aiPage: MarketingPage = {
  path: "/product/ai",
  name: "Awwtomation AI",
  seo: {
    title: "AI Chatbot for Instagram & Messenger DMs",
    description:
      "An AI chatbot that answers Instagram and Messenger DMs in your words, with your prices and policies. Built in on Pro and Agency, or bring your own AI key.",
  },
  theme: theme({
    accent: GREEN,
    onAccentLight: true,
    spot: ORANGE,
    panel: LAVENDER,
    panelLight: false,
    channel: "instagram",
  }),
  hero: {
    kind: "accent",
    title: "Scale every conversation without losing your voice",
    body: "Answer every buyer in your tone, using your prices, policies and product knowledge.",
    cta: "Turn on AI",
    photo: "Shop owner writing answers at her laptop",
  },
  automatically: {
    photo: "Shop owner writing answers at her laptop",
    items: [
      { label: "Answer anything", chat: chats.aiReply },
      { label: "Quote your prices", chat: chats.aiPrice },
      { label: "Know your policies", chat: chats.aiPolicy },
      { label: "Hand over to you", chat: chats.aiHandoff },
    ],
  },
  proof: "🤖 Built in, or bring your own key",
  intro: {
    icon: "bolt",
    title: "Your always-on DM assistant",
    body: "Set it up once. Minimum effort, every buyer answered.",
  },
  features: [
    {
      title: "AI replies",
      body: "Your prompt plus your facts means every question is answered the way you would answer it, at three in the morning.",
      slides: [
        { caption: "Answer off-script", chat: chats.aiReply },
        { caption: "Do the maths", chat: chats.aiPrice },
      ],
    },
    {
      title: "AI on comments",
      body: "A comment starts the flow and the AI answers the buyer in a private DM, while the post is still warm.",
      slides: [
        { caption: "Answer PP comments", chat: chats.commentPost },
        { caption: "Send the price by DM", chat: chats.commentToDm },
      ],
    },
    {
      title: "AI that knows its limits",
      body: "Guardrails say what it must never do. Past that it stops guessing and leaves the chat for your team.",
      slides: [
        { caption: "Your returns policy", chat: chats.aiPolicy },
        { caption: "Hand off to your team", chat: chats.aiHandoff },
      ],
    },
  ],
  bigWord: {
    word: "Answer",
    photo: "Shop owner laughing at her phone in the studio",
  },
  channels: {
    title: "Answer wherever they message you",
    body: "The same agent works on:",
    cards: bothChannels,
  },
  beforeAfter: {
    icon: "eyes",
    title: "Smarter flows, better conversations",
    body: "Keyword flows do the routine. The agent does the rest.",
    before: {
      title: "Losing sleep and sales",
      items: [
        "Racing Meta's 24-hour window by hand.",
        "One typo and the keyword misses.",
        "Every new product needs a new flow.",
        "Buyers go quiet while they wait.",
      ],
    },
    after: {
      title: "Answered while you sleep",
      items: [
        "Every question gets an answer.",
        "Your prices, quoted correctly.",
        "New facts pasted in, not rebuilt.",
        "A person takes over when it matters.",
      ],
    },
  },
  seeIt: {
    icon: "spark",
    title: "Smarter automations, better conversations",
    body: "Four ways the agent sits inside the flows you already run.",
    panelTitle: "See how it works",
    items: [
      {
        title: "AI reply step",
        description:
          "Drop it into any flow, next to Send message, Ask a question and Follow gate.",
        chat: chats.aiReply,
        checks: [
          "Tell it the goal, then let it do the talking",
          "It answers for as many turns as you allow (four by default, up to twelve)",
          "One agent can play several parts in the same flow",
        ],
      },
      {
        title: "Knowledge block",
        description:
          "Prices, hours, delivery and returns, pasted in word for word.",
        chat: chats.aiPrice,
        checks: [
          "Paste your facts in, no training and no waiting",
          "Prices come from your notes, never from guesswork",
          "Change a price once and every reply changes with it",
        ],
      },
      {
        title: "Guardrails",
        description: "The rules it can never break, written in your own words.",
        chat: chats.aiPolicy,
        checks: [
          "Say what it must never do, in plain language",
          "Links only come from buttons you approved",
          "A fallback reply covers you if the model fails",
        ],
      },
      {
        title: "Handover",
        description:
          "When it cannot help, your team gets the chat, not the buyer a wrong answer.",
        chat: chats.aiHandoff,
        checks: [
          "It stops rather than inventing an answer",
          "The flow takes its handover branch automatically",
          "The whole conversation is in your inbox for the team",
        ],
      },
    ],
  },
  mcp: {
    kicker: "MCP server",
    title: "Turn a sentence into a selling system",
    body: "Ask for the outcome. Awwtomation builds the flow, works the conversation and shows what moved the sale forward.",
    demos: [
      {
        label: "Build a flow",
        prompt:
          "Build a flow: when someone comments PP on my new reel, DM them the price and ask which size they want.",
        answer:
          "Built and saved as a draft on everest.threads. Nothing is live until you switch it on.",
        result: {
          kind: "flow",
          title: "PP to price · draft",
          steps: [
            "Trigger · comment contains PP",
            "Message · price and free delivery",
            "Ask · which size?",
            "Tag · Buyer",
            "Add to pipeline · New orders",
          ],
        },
      },
      {
        label: "Pull the numbers",
        prompt:
          "How did last week go? Which keyword triggered most, and where did people drop off?",
        answer:
          "1,240 DMs sent across three accounts. PP is doing the work; most people drop off between getting the DM and replying.",
        result: {
          kind: "stats",
          title: "Last 7 days",
          rows: [
            { label: "DMs sent", value: "1,240" },
            { label: "New contacts", value: "86" },
            { label: "Top keyword", value: "PP · 412 triggers" },
            { label: "Clicked or replied", value: "38%" },
          ],
        },
      },
      {
        label: "Draft a reply",
        prompt:
          "Anisha asked about bulk pricing for 50 totes. Draft a reply in our voice for me to check first.",
        answer:
          "Here is a draft for you to check. Nothing is sent until you tell me to send it.",
        result: {
          kind: "draft",
          title: "Draft · not sent",
          to: "Anisha Gurung",
          text: "Hi Anisha! For 50 totes we do Rs 2,100 each, and printing is Rs 180 a piece on top. Delivery inside the valley is free. Shall I put a quote together?",
        },
      },
    ],
  },
  spotlight: {
    icon: "bolt",
    title: "Built in, or bring your own key",
    body: "Awwtomation AI works out of the box on Pro and Agency. On any plan, connect your own provider's key and that provider bills you directly.",
    cards: [
      {
        label: "Providers",
        title: "24 providers, or your own endpoint",
        body: "OpenAI, Anthropic, Google Gemini, OpenRouter, xAI, Mistral, DeepSeek, Groq and more, or any public OpenAI-compatible endpoint.",
      },
      {
        label: "Storage",
        title: "Keys encrypted, never sent back",
        body: "Saved with AES-256-GCM, decrypted only on the server. The browser only ever sees the last four characters.",
      },
      {
        label: "Cost",
        title: "You can see what it does",
        body: "Replies sent, tokens in and tokens out are counted per agent, whichever model it runs on. Built-in replies count toward your plan's monthly AI replies.",
      },
      {
        label: "Control",
        title: "Off is a valid setting",
        body: "Keyword flows work exactly as before. The AI step is one node you choose to add, on the automations you choose.",
      },
    ],
  },
  steps: {
    icon: "rocket",
    title: "Live in five. Literally.",
    body: "From a blank agent to your first answered DM in less time than it takes to make tea.",
    items: [
      {
        title: "Pick a model",
        body: "Use Awwtomation AI, or connect your own key",
        art: "signup",
      },
      {
        title: "Write the agent",
        body: "Your prompt, your facts, your rules",
        art: "connect",
      },
      {
        title: "Drop it in a flow",
        body: "Add the AI step and switch the flow on",
        art: "live",
      },
    ],
  },
  faqs: [
    {
      question: "Do I need my own AI key?",
      answer:
        "Only on Starter. On Pro and Agency, agents use Awwtomation AI, our built-in model, by default. On any plan you can switch an agent to your own OpenAI, Anthropic, Gemini or other provider key, billed by that provider.",
    },
    {
      question: "Does AI cost extra?",
      answer:
        "No. Pro includes 3,000 built-in AI replies a month and Agency 15,000. At the limit, AI steps send your fallback reply until the 1st, and agents on your own key keep replying. Your own key is billed by your provider.",
    },
    {
      question: "Which languages does it reply in?",
      answer:
        "English or Romanised Nepali. A message written in Devanagari gets a reply in Romanised Nepali.",
    },
    {
      question: "Can the AI invent a price or a link?",
      answer:
        "It can only send links you added as buttons, because it names a button and we fill in the URL. Prices come from the knowledge block you paste in.",
    },
    {
      question: "What happens if the AI can't answer?",
      answer:
        "It stops instead of guessing: the contact gets the fallback reply you wrote and the flow takes its Needs a human branch, with the whole chat in your inbox.",
    },
    {
      question: "Do I have to use AI at all?",
      answer:
        "No. Keyword flows work exactly as before, and the AI reply step is one node you can choose to add.",
    },
    safeFaq,
  ],
  summary:
    "Awwtomation AI is an AI chatbot that answers Instagram and Facebook Messenger DMs. Agents run on Awwtomation AI, the built-in model included on Pro and Agency, or on the workspace's own key from 24 providers (OpenAI, Anthropic, Google Gemini, OpenRouter, xAI, Mistral, DeepSeek, Groq and more) or a public OpenAI-compatible endpoint. An agent is a prompt, a knowledge block, guardrails, a fallback reply and approved link buttons. It is added to a flow as an AI reply step, replies by DM in English or Romanised Nepali for a set number of turns, and takes a handover branch when it cannot help. Workspace keys are encrypted at rest and never returned to the browser.",
};

export const marketingPages: MarketingPage[] = [
  homePage,
  instagramPage,
  messengerPage,
  aiPage,
  creatorsPage,
  ecommercePage,
  agenciesPage,
  brandsPage,
];
