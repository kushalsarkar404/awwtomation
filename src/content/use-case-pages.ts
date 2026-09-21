import type { UseCasePage } from "@/content/mc-types"

const checks = ["Set up in minutes", "No credit card", "Cancel anytime"]

const standardFinaleChecks = {
  smarter: ["Live in about five minutes", "Runs on the posts you choose", "Every interested fan answered", "More creating, less replying"],
  relationships: ["Personal replies at scale", "Freebies delivered instantly", "A list you own"],
}

export const collectEmailsPage: UseCasePage = {
  path: "/use-case/collect-emails",
  name: "Collect Emails",
  seo: {
    title: "Collect Emails from Instagram DMs Automatically",
    description: "Collect emails from Instagram comments and DMs: ask in the chat, check the address and save it to the contact automatically. Free plan.",
  },
  accent: "#fb0df7",
  hero: {
    title: "Collect emails from your Instagram DMs",
    body: "Ask for an email in the DM, check it and send your freebie, automatically. No forms needed.",
    social: "Free to start, no card needed",
  },
  showcase: {
    photo: "Creator walking through the city with her phone",
    step1: { label: "When someone comments on…", selected: "A specific post or reel", other: "Any post or reel" },
    step2: { label: "Ask for their email in DMs", message: "The guide is ready for you! Which email should I send it to?" },
  },
  seen: {
    thread: [
      { name: "creator", text: "Want my free guide? Comment GUIDE below!" },
      { name: "follower", text: "GUIDE", time: "Now" },
      { name: "creator", text: "Great! Check your DMs 💌", time: "Now", reply: true },
    ],
    dm: [
      { from: "bot", text: "Drop your email and I'll send the guide!" },
      { from: "user", text: "follower@gmail.com" },
      { from: "bot", text: "Just sent it! Check your inbox." },
    ],
  },
  because: {
    title: "Built to convert.",
    body: "Emails you collect are yours. No algorithm stands between you and your audience.",
    checks: ["Set up in minutes", "No credit card", "Emails validated"],
  },
  rows: [
    {
      title: "Own your audience",
      photo: "Creator riding an escalator",
      bullets: [
        { icon: "users", bold: "Keep your fans", rest: "even when the algorithm changes" },
        { icon: "bolt", bold: "Reach them directly", rest: "with no feed in the way" },
        { icon: "star", bold: "Reward your true fans", rest: "with guides and early access" },
      ],
    },
    {
      title: "Grow on autopilot",
      photo: "Creator greeting fans on the street",
      bullets: [
        { icon: "bot", bold: "Set it up once", rest: "and it runs on every post you choose" },
        { icon: "click", bold: "Every email checked", rest: "before it's saved" },
        { icon: "trend", bold: "Export your list", rest: "to CSV any time" },
      ],
    },
  ],
  testimonialsTitle: "Customer stories",
  steps: {
    title: "Collect emails in 3 steps",
    body: "From comment to confirmed email without leaving the chat.",
    items: [
      { title: "Get the comment", body: "A keyword comment, DM or story reply starts the chat.", art: { kind: "keyword", text: "GUIDE" } },
      { title: "Ask for the email", body: "They type it in the DM and Awwtomation checks it's valid.", art: { kind: "bubble", text: "Your guide is ready! What's your email? 💛" } },
      { title: "Export your list", body: "Every email is saved to the contact. Export to CSV whenever you like.", art: { kind: "list", title: "Contacts", value: "mia@mail.com" } },
    ],
  },
  finale: {
    title: "Ready to grow your email list?",
    cards: [
      { photo: "Creator smiling at her phone", title: "Save hours", checks: standardFinaleChecks.smarter },
      { photo: "Friends taking a selfie", title: "Convert more", checks: ["More sign-ups than a link in bio", "Asked while they're interested", "Every email checked", "Leads tagged automatically"] },
      { photo: "Creator meeting fans", title: "Build real relationships", checks: standardFinaleChecks.relationships },
    ],
  },
  faqs: [
    { question: "How long does setup take?", answer: "About five minutes. Open the Collect Emails template, choose a keyword and switch it on." },
    { question: "Will it sound like a bot?", answer: "No. You write every message, and your team can jump into any conversation." },
    { question: "Can I control what gets sent?", answer: "Yes. You write the messages, choose the trigger, and can pause the automation whenever you want." },
    { question: "Where do the emails go?", answer: "Onto each contact in Awwtomation. Export them to CSV any time." },
  ],
  footerBubbles: ["Want the free guide?", "Yes please!", "Check your inbox 💌"],
  summary:
    "Awwtomation collects emails from Instagram comments and DMs inside the conversation. A keyword comment or DM starts a flow that asks for an email, validates it, re-asks if it's mistyped, saves it to the contact and tags them as a lead. Contacts export to CSV.",
}

export const requestToFollowPage: UseCasePage = {
  path: "/use-case/request-to-follow",
  name: "Request to Follow",
  seo: {
    title: "Request to Follow: Turn Comments into Followers",
    description: "Ask people to follow before they get your link. Awwtomation checks follow status in the DM and sends the link once they follow. Free plan.",
  },
  accent: "#7b34ce",
  hero: {
    title: "Turn every comment into a new follower",
    body: "Ask people to follow before they get the link. Awwtomation checks and delivers automatically.",
    social: "Free to start, no card needed",
  },
  showcase: {
    photo: "Creator filming a reel outdoors",
    step1: { label: "When someone comments on…", selected: "A specific post or reel", other: "Any post or reel" },
    step2: { label: "Ask them to follow first", message: "Follow me first, then tap “I'm following” to get the link 👇" },
  },
  seen: {
    thread: [
      { name: "creator", text: "Comment LINK and I'll send it to you!" },
      { name: "follower", text: "LINK", time: "Now" },
      { name: "creator", text: "Check your DMs 👀", time: "Now", reply: true },
    ],
    dm: [
      { from: "bot", text: "Follow me first, then tap below to unlock it!" },
      { from: "user", text: "I'm following" },
      { from: "bot", text: "Thanks for the follow! Here's your link." },
    ],
  },
  because: {
    title: "Built to convert.",
    body: "Every reel that travels becomes followers who stay, not views that vanish.",
    checks: ["Set up in minutes", "No credit card", "Follows checked for you"],
  },
  rows: [
    {
      title: "Grow faster",
      photo: "Creator laughing with friends",
      bullets: [
        { icon: "users", bold: "Turn viewers", rest: "into followers" },
        { icon: "heart", bold: "Reward followers", rest: "with the link they asked for" },
        { icon: "star", bold: "Grow from every reel", rest: "not just the viral ones" },
      ],
    },
    {
      title: "Stay in control",
      photo: "Creator editing on a laptop",
      bullets: [
        { icon: "bot", bold: "Follow status checked", rest: "before the link is sent" },
        { icon: "click", bold: "One tap to retry", rest: "once they've followed" },
        { icon: "tag", bold: "Tag new followers", rest: "so you can reach them later" },
      ],
    },
  ],
  testimonialsTitle: "Customer stories",
  steps: {
    title: "Grow followers in 3 steps",
    body: "Ask, check and deliver, automatically.",
    items: [
      { title: "Get the comment", body: "People comment your keyword on a reel or post.", art: { kind: "keyword", text: "LINK" } },
      { title: "Ask them to follow", body: "Non-followers get a friendly request and a retry button.", art: { kind: "bubble", text: "Follow me first, then tap below 👇" } },
      { title: "Deliver the link", body: "Followers get the link the moment they're checked.", art: { kind: "list", title: "New followers", value: "@rojina.karki" } },
    ],
  },
  finale: {
    title: "Ready to turn reach into followers?",
    cards: [
      { photo: "Creator checking comments", title: "Grow smarter", checks: ["Live in about five minutes", "Runs on every post you choose", "Followers checked automatically"] },
      { photo: "Creator filming with friends", title: "Grow from every reel", checks: ["Views turned into follows", "A retry button for late followers", "No bio link needed"] },
      { photo: "Fans at a meet-up", title: "Keep your fans", checks: ["Reward people who follow", "Tag them for later", "Build a following that sticks"] },
    ],
  },
  faqs: [
    { question: "What happens before someone follows?", answer: "They receive a friendly follow request and can tap the button again once they have followed." },
    { question: "What if someone never follows?", answer: "They keep the request and the button. Nothing else is sent." },
    { question: "Does the follow check slow down the DM?", answer: "No. It takes a fraction of a second." },
    { question: "Does this work on Facebook?", answer: "No. Follow checks are an Instagram feature." },
  ],
  footerBubbles: ["Follow for the link?", "Done!", "Here it is 🔗"],
  summary:
    "Request to Follow is an Awwtomation flow that checks whether an Instagram commenter follows the account. Followers get the link immediately; non-followers get a request to follow with a button to check again.",
}

export const respondToCommentsPage: UseCasePage = {
  path: "/use-case/respond-to-comments",
  name: "Respond to Comments",
  seo: {
    title: "Auto-Reply to Instagram Comments with a DM",
    description: "Automatically reply to every Instagram comment: publicly under the comment and privately by DM with your link or offer. Free plan.",
  },
  accent: "#3c42c4",
  hero: {
    title: "Reply to every comment automatically",
    body: "Answer publicly under the comment and send the details by DM, in seconds.",
    social: "Free to start, no card needed",
  },
  showcase: {
    photo: "Shop owner posting a new product",
    step1: { label: "When someone comments on…", selected: "A specific post or reel", other: "Any post or reel" },
    step2: { label: "Reply publicly and by DM", message: "Hey! Just sent the price list to your DMs 💌" },
  },
  seen: {
    thread: [
      { name: "creator", text: "New drop is live! Comment PRICE for details" },
      { name: "follower", text: "PRICE", time: "Now" },
      { name: "creator", text: "Sent to your DMs!", time: "Now", reply: true },
    ],
    dm: [
      { from: "bot", text: "Here's the full price list!" },
      { from: "user", text: "Can I order the black one?" },
      { from: "bot", text: "Yes! Tap below to order." },
    ],
  },
  because: {
    title: "Built to convert.",
    body: "Every comment answered means more reach, more trust and more sales.",
    checks,
  },
  rows: [
    {
      title: "Never miss a comment",
      photo: "Busy shop owner with a phone",
      bullets: [
        { icon: "users", bold: "Answer everyone", rest: "even on your busiest posts" },
        { icon: "bolt", bold: "Reply in seconds", rest: "not hours" },
        { icon: "star", bold: "Varied public replies", rest: "so threads look natural" },
      ],
    },
    {
      title: "Turn comments into sales",
      photo: "Customer shopping on her phone",
      bullets: [
        { icon: "click", bold: "Send links by DM", rest: "with tappable buttons" },
        { icon: "tag", bold: "Tag every commenter", rest: "by the post they came from" },
        { icon: "trend", bold: "Track clicks", rest: "for every automation" },
      ],
    },
  ],
  testimonialsTitle: "Customer stories",
  steps: {
    title: "Answer every comment in 3 steps",
    body: "Pick the post, write the reply, go live.",
    items: [
      { title: "Pick the post", body: "One reel, a few posts, or all of them.", art: { kind: "keyword", text: "PRICE" } },
      { title: "Write your replies", body: "A public reply plus a DM with buttons.", art: { kind: "bubble", text: "Just sent the details to your DMs!" } },
      { title: "Watch it work", body: "Every commenter is answered and saved as a contact.", art: { kind: "list", title: "Contacts", value: "@anisha.gurung" } },
    ],
  },
  finale: {
    title: "Ready to answer every comment?",
    cards: [
      { photo: "Shop owner relaxing after work", title: "Save hours", checks: standardFinaleChecks.smarter },
      { photo: "Customer tapping a product link", title: "Sell more", checks: ["Every comment gets an answer", "Links delivered by DM", "Contacts you can follow up"] },
      { photo: "Customers chatting outside a store", title: "Look good in public", checks: ["Varied public replies", "No comment left hanging", "Busy threads that attract buyers"] },
    ],
  },
  faqs: [
    { question: "Can it reply publicly and by DM?", answer: "Yes. Post a public reply under the comment and send a private DM at the same time." },
    { question: "Can I choose which posts it runs on?", answer: "Yes: specific posts and reels, or all of them." },
    { question: "What if someone comments twice?", answer: "By default each person gets the DM once. You can change that per automation." },
    { question: "Can I limit repeat replies?", answer: "Yes. Each person receives the DM once by default, and you can change that behavior for each automation." },
  ],
  footerBubbles: ["Price?", "Sent to your DMs!", "Got it, thanks 🙌"],
  summary:
    "Awwtomation automatically responds to Instagram comments: a keyword comment (or any comment) on chosen posts triggers a public reply under the comment and a private DM with links and buttons, and saves the commenter as a contact.",
}

export const followToDmPage: UseCasePage = {
  path: "/use-case/follow-to-dm",
  name: "Follow to DM",
  seo: {
    title: "Follow to DM: Exclusive Instagram DMs for Your Followers",
    description: "Reward followers with exclusive links and codes by DM. Awwtomation checks who follows you and sends the DM only to followers. Free plan.",
  },
  accent: "#ff4c00",
  hero: {
    title: "Reward followers with exclusive DMs",
    body: "Send exclusive links, codes and offers by DM, only to the people who follow you.",
    social: "Free to start, no card needed",
  },
  showcase: {
    photo: "Friends shopping together",
    step1: { label: "When someone comments on…", selected: "A specific post or reel", other: "Any post or reel" },
    step2: { label: "Followers get the DM", message: "Thanks for following! Here's your members-only code: FAN15 🎁" },
  },
  seen: {
    thread: [
      { name: "creator", text: "Followers get 15% off today, comment CODE" },
      { name: "follower", text: "CODE", time: "Now" },
      { name: "creator", text: "Check your DMs!", time: "Now", reply: true },
    ],
    dm: [
      { from: "bot", text: "You follow us, so here's your code: FAN15" },
      { from: "user", text: "Yay, thank you!" },
      { from: "bot", text: "Enjoy! It works until Sunday." },
    ],
  },
  because: {
    title: "Built to convert.",
    body: "Followers who get real perks stick around, and come back to buy.",
    checks,
  },
  rows: [
    {
      title: "Reward your followers",
      photo: "Customer opening a gift",
      bullets: [
        { icon: "heart", bold: "Exclusive codes", rest: "for followers only" },
        { icon: "star", bold: "Early access", rest: "before everyone else" },
        { icon: "users", bold: "Loyal fans", rest: "who keep coming back" },
      ],
    },
    {
      title: "Grow while you reward",
      photo: "Creator hosting a live session",
      bullets: [
        { icon: "bot", bold: "Follow status checked", rest: "automatically" },
        { icon: "click", bold: "Non-followers get a nudge", rest: "to follow first" },
        { icon: "tag", bold: "Tag every follower", rest: "for your next broadcast" },
      ],
    },
  ],
  testimonialsTitle: "Customer stories",
  steps: {
    title: "Reward followers in 3 steps",
    body: "Check, reward, repeat.",
    items: [
      { title: "Post your offer", body: "Ask followers to comment a keyword.", art: { kind: "keyword", text: "CODE" } },
      { title: "We check who follows", body: "Followers get the DM. Everyone else is asked to follow.", art: { kind: "bubble", text: "Thanks for following! Here's your code 🎁" } },
      { title: "Grow your fan list", body: "Every follower is tagged for your next campaign.", art: { kind: "list", title: "Fans", value: "@maya.lama" } },
    ],
  },
  finale: {
    title: "Ready to reward your followers?",
    cards: [
      { photo: "Creator packing gifts for fans", title: "Delight fans", checks: ["Exclusive codes and links", "Delivered in seconds", "Only to followers"] },
      { photo: "Customer using a discount code", title: "Sell to fans", checks: ["Codes that bring buyers back", "Links with tracked clicks", "Offers for followers only"] },
      { photo: "Friends celebrating a deal", title: "Grow loyalty", checks: ["Followers who stay", "Tags for future campaigns", "Offers people share"] },
    ],
  },
  faqs: [
    {
      question: "Does it DM people the moment they follow?",
      answer: "No. Instagram doesn't tell apps when someone follows. The DM goes out when someone comments or messages you, and only followers receive it.",
    },
    { question: "What do non-followers get?", answer: "A friendly request to follow, with a button to check again." },
    { question: "Can I message followers again later?", answer: "Yes. Broadcast to tagged contacts inside Meta's 24-hour window, from the Starter plan." },
    { question: "Can I decide which followers receive the offer?", answer: "Yes. Choose the trigger, audience and offer, then tag contacts for later follow-up." },
  ],
  footerBubbles: ["Code for followers?", "Following ✅", "Here's FAN15 🎁"],
  summary:
    "Follow to DM in Awwtomation sends exclusive Instagram DMs only to followers: when someone comments or messages, Awwtomation checks whether they follow the account, sends followers the offer and asks non-followers to follow first. Instagram does not notify apps about new follows, so DMs are triggered by comments or messages.",
}

export const useCasePages: UseCasePage[] = [collectEmailsPage, requestToFollowPage, respondToCommentsPage, followToDmPage]
