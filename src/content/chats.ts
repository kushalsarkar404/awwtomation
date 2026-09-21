import type { ChatScript } from "@/components/mc/chat";

/*
 * Scenes shown in the phone mock-ups. Every one is a flow the product app can
 * actually run: comment, DM and story-reply triggers, public replies, follow
 * checks, validated questions and team hand-off.
 *
 * The cast are online sellers and their customers, and they talk the way
 * Nepali buyers actually do: "PP" for price please, "kati ho?", asking for
 * sizes, colours, delivery charge and cash on delivery. Scenes that belong to
 * a Facebook Page carry `channel: "messenger"` so one section can show both
 * Instagram and Messenger side by side.
 *
 * Each face is a dedicated, named crop from public/site-assets/profiles/social.
 * Home, Instagram and Messenger each use their own ten-person cast.
 */

const face = {
  sita: "/site-assets/profiles/social/sita-rai.png",
  anisha: "/site-assets/profiles/social/anisha-gurung.png",
  aarav: "/site-assets/profiles/social/aarav-shrestha.png",
  rohan: "/site-assets/profiles/social/rohan-kc.png",
  kiran: "/site-assets/profiles/social/kiran-thapa.png",
  bikram: "/site-assets/profiles/social/bikram-tamang.png",
  samuel: "/site-assets/profiles/social/summit-samuel.png",
  samira: "/site-assets/profiles/social/study-samira.png",
  sujan: "/site-assets/profiles/social/street-sujan.png",
  sana: "/site-assets/profiles/social/sunset-sana.png",
};

const photo = {
  creator: "/mockups/post-sita.jpg",
  rooftop: "/mockups/post-kiran.jpg",
  street: "/mockups/story-rohan.jpg",
  desk: "/mockups/story-aarav.jpg",
  cafe: "/mockups/photo-bikram.jpg",
  studio: "/mockups/post-anisha.jpg",
};

const shop = "everest.threads";

const instagramCast = {
  milan: {
    name: "Milan Shrestha",
    username: "milan.frames",
    avatar: "/site-assets/profiles/social/mirror-milan.png",
  },
  tara: {
    name: "Tara Rai",
    username: "tara.trails",
    avatar: "/site-assets/profiles/social/trail-tara.png",
  },
  kavya: {
    name: "Kavya Maharjan",
    username: "kathmandu.frames",
    avatar: "/site-assets/profiles/social/kathmandu-window.png",
  },
  anisha: {
    name: "Anisha Karki",
    username: "anisha.alley",
    avatar: "/site-assets/profiles/social/alley-anisha.png",
  },
  gagan: {
    name: "Gagan Rai",
    username: "gagan.plays",
    avatar: "/site-assets/profiles/social/guitar-gagan.png",
  },
  dipen: {
    name: "Dipen Shahi",
    username: "dipen.dives",
    avatar: "/site-assets/profiles/social/dive-dipen.png",
  },
  bibek: {
    name: "Bibek Lama",
    username: "bibek.boudha",
    avatar: "/site-assets/profiles/social/boudha-bibek.png",
  },
  kriti: {
    name: "Kriti Poudel",
    username: "kriti.and.cat",
    avatar: "/site-assets/profiles/social/cat-kriti.png",
  },
  nabin: {
    name: "Nabin Gurung",
    username: "nabin.noir",
    avatar: "/site-assets/profiles/social/noir-nabin.png",
  },
  tejas: {
    name: "Tejas Karki",
    username: "tejas.treks",
    avatar: "/site-assets/profiles/social/trek-tejas.png",
  },
};

const messengerCast = {
  maya: {
    name: "Maya Thapa",
    avatar: "/site-assets/profiles/social/mirror-maya.png",
  },
  mira: {
    name: "Mira Shrestha",
    avatar: "/site-assets/profiles/social/music-mira.png",
  },
  hima: {
    name: "Hima Rai",
    avatar: "/site-assets/profiles/social/heritage-hima.png",
  },
  deepak: {
    name: "Deepak Gurung",
    avatar: "/site-assets/profiles/social/dusk-deepak.png",
  },
  tanmay: {
    name: "Tanmay Lama",
    avatar: "/site-assets/profiles/social/topi-tanmay.png",
  },
  prisha: {
    name: "Prisha Karki",
    avatar: "/site-assets/profiles/social/plumeria-prisha.png",
  },
  harsha: {
    name: "Harsha Bista",
    avatar: "/site-assets/profiles/social/hike-harsha.png",
  },
  chiran: {
    name: "Chiran Poudel",
    avatar: "/site-assets/profiles/social/city-chiran.png",
  },
  garima: {
    name: "Garima KC",
    avatar: "/site-assets/profiles/social/glasses-garima.png",
  },
  eshaan: {
    name: "Eshaan Shahi",
    avatar: "/site-assets/profiles/social/expedition-eshaan.png",
  },
};

export const chats = {
  /* -------------------------------------------------- Instagram posts */

  commentPost: {
    kind: "post",
    channel: "instagram",
    account: { name: shop, avatar: face.sita },
    image: photo.creator,
    caption: "Comment PP for the price 🏷️",
    comments: [
      {
        name: "anisha.gurung",
        avatar: face.anisha,
        text: "PP 🙏",
        time: "2h",
        likes: "48",
      },
      {
        name: shop,
        avatar: face.sita,
        mention: "@anisha..",
        text: "Sent to your DMs 💌",
        time: "2h",
        likes: "12",
      },
      {
        name: "kiran.thapa",
        avatar: face.kiran,
        text: "PP",
        time: "1h",
        likes: "3",
        faded: true,
      },
    ],
  },
  productPost: {
    kind: "post",
    channel: "instagram",
    account: { name: shop, avatar: face.sita },
    image: photo.street,
    caption: "Comment SIZE for the size chart 🧥",
    comments: [
      {
        name: "aarav.shrestha",
        avatar: face.aarav,
        text: "SIZE",
        time: "3h",
        likes: "9",
      },
      {
        name: shop,
        avatar: face.sita,
        mention: "@aarav..",
        text: "Chart's in your inbox 📩",
        time: "3h",
        likes: "2",
      },
      {
        name: "rohan.kc",
        avatar: face.rohan,
        text: "PP ni?",
        time: "1h",
        faded: true,
      },
    ],
  },
  giveaway: {
    kind: "post",
    channel: "instagram",
    account: { name: shop, avatar: face.sita },
    image: photo.rooftop,
    caption: "Comment WIN for the Dashain hamper 🎁",
    comments: [
      {
        name: "kiran.thapa",
        avatar: face.kiran,
        text: "WIN 🎉",
        time: "5m",
        likes: "21",
      },
      {
        name: shop,
        avatar: face.sita,
        mention: "@kiran..",
        text: "You're in! Check your DMs",
        time: "5m",
        likes: "6",
      },
      {
        name: "sita.rai",
        avatar: face.sita,
        text: "WIN!!",
        time: "2m",
        faded: true,
      },
    ],
  },
  publicReply: {
    kind: "comments",
    channel: "instagram",
    comments: [
      {
        name: "anisha.gurung",
        avatar: face.anisha,
        text: "PP 🙏",
        time: "2h",
        likes: "15",
      },
      {
        name: shop,
        avatar: face.sita,
        mention: "@anisha..",
        text: "Sent to your DMs 💌",
        time: "2h",
      },
      {
        name: "bikram.tamang",
        avatar: face.bikram,
        text: "Size M cha?",
        time: "1h",
        likes: "4",
      },
      {
        name: shop,
        avatar: face.sita,
        mention: "@bikram..",
        text: "Checked for you, DM sent 📩",
        time: "1h",
      },
    ],
  },

  /* -------------------------------------------------- Instagram DMs */

  commentToDm: {
    channel: "instagram",
    header: { name: "Anisha Gurung", avatar: face.anisha },
    lines: [
      {
        from: "bot",
        text: "Hi Anisha! 👋 The Everest tote is Rs 2,400 with free delivery inside the valley.",
      },
      { from: "user", avatar: face.anisha, text: "Colour kati ota cha?" },
      {
        from: "bot",
        text: "Three: black, olive and mustard. Want me to hold one for you?",
      },
    ],
  },
  sizeChart: {
    channel: "instagram",
    header: { name: "Aarav Shrestha", avatar: face.aarav },
    lines: [
      {
        from: "bot",
        text: "Hey Aarav! Here's the rain jacket size chart 🧥 S to XXL.",
      },
      { from: "user", avatar: face.aarav, text: "M olive cha?" },
      {
        from: "bot",
        text: "Yes, M olive is in stock. Rs 4,200 with free delivery.",
      },
    ],
  },
  followGate: {
    channel: "instagram",
    header: { name: "Rohan KC", avatar: face.rohan },
    lines: [
      {
        from: "bot",
        text: "Hey Rohan! Your Dashain discount code is ready 🎉",
      },
      {
        from: "bot",
        text: "Follow the shop first, then send FOLLOWED and I'll unlock it 🙏",
      },
      { from: "user", avatar: face.rohan, text: "FOLLOWED" },
      {
        from: "bot",
        text: "Perfect! DASHAIN10 takes 10% off. Valid till Sunday.",
      },
    ],
  },
  priceFaq: {
    channel: "instagram",
    header: { name: "Bikram Tamang", avatar: face.bikram },
    lines: [
      { from: "user", avatar: face.bikram, text: "Dai, PP? black wallet" },
      {
        from: "bot",
        text: "The black wallet is Rs 1,800 with free delivery inside the valley.",
      },
      { from: "user", avatar: face.bikram, text: "Cash on delivery huncha?" },
      { from: "bot", text: "Yes, cash on delivery anywhere in Nepal 🚚" },
    ],
  },
  photoFaq: {
    channel: "messenger",
    header: { name: "Samuel Shrestha", avatar: face.samuel },
    lines: [
      {
        from: "user",
        avatar: face.samuel,
        text: "Delivery charge kati parcha?",
      },
      {
        from: "bot",
        text: "Free inside the valley 🚚 Outside Kathmandu it's Rs 150 by courier.",
      },
      { from: "user", avatar: face.samuel, text: "Thik cha, order garne" },
    ],
  },
  dmReply: {
    channel: "instagram",
    header: { name: "Aarav Shrestha", avatar: face.aarav },
    lines: [
      {
        from: "user",
        avatar: face.aarav,
        text: "Is this jacket waterproof? 💧",
      },
      {
        kind: "link",
        avatar: face.aarav,
        url: "everestthreads.com/rain",
        title: "Olive rain jacket",
        domain: "everestthreads.com",
      },
      {
        from: "bot",
        text: "Fully waterproof and it packs into its own pocket. Rs 4,200.",
      },
    ],
  },
  storyReply: {
    channel: "instagram",
    header: {
      name: "Samira Adhikari",
      username: "samira.studies",
      avatar: face.samira,
    },
    lines: [
      {
        kind: "story",
        label: "Replied to your story",
        image: photo.desk,
        avatar: face.samira,
        reaction: "🔥",
      },
      { from: "user", avatar: face.samira, text: "PP for the mustard one?" },
      {
        from: "bot",
        text: "Rs 2,400 😊 DASHAIN10 takes 10% off the new drop.",
      },
    ],
  },
  leadEmail: {
    channel: "instagram",
    header: {
      name: "Sana Maharjan",
      username: "sana.sunsets",
      avatar: face.sana,
    },
    lines: [
      {
        from: "bot",
        text: "Your size guide is ready! What's the best email for you?",
      },
      { from: "user", avatar: face.sana, text: "sana@gmail" },
      { from: "bot", text: "Hmm, that doesn't look complete. Try again?" },
      { from: "user", avatar: face.sana, text: "sana@gmail.com" },
      { from: "bot", text: "Sent! Check your inbox 📩" },
    ],
  },
  giveawayDm: {
    channel: "instagram",
    header: { name: "Kiran Thapa", avatar: face.kiran },
    lines: [
      {
        from: "bot",
        text: "You're in, Kiran! 🎁 Winners go up on our story on Friday.",
      },
      { from: "user", avatar: face.kiran, text: "Fingers crossed 🤞" },
      { from: "bot", text: "Good luck! Keep an eye on your DMs." },
    ],
  },

  /* -------------------------------------------------- Facebook Pages */

  fbComment: {
    kind: "fbpost",
    channel: "messenger",
    image: photo.cafe,
    reactions: "Sita Rai and 114 others",
    comment: {
      name: "Anisha Gurung",
      avatar: face.anisha,
      text: "Price please!",
      time: "1h",
    },
    lines: [
      {
        from: "bot",
        text: "Hi Anisha! The winter set is Rs 1,950. Full menu is in your inbox ☕",
      },
    ],
  },
  leadPhone: {
    channel: "messenger",
    header: { name: "Sujan Karki", avatar: face.sujan },
    lines: [
      { from: "user", avatar: face.sujan, text: "Duita chahiyo" },
      {
        from: "bot",
        text: "Lovely! What's the best phone number for delivery?",
      },
      { from: "user", avatar: face.sujan, text: "98XXXXXXXX" },
      {
        from: "bot",
        text: "Got it! We'll call to confirm today. Cash on delivery 🚚",
      },
    ],
  },
  orderChat: {
    channel: "messenger",
    header: { name: "Sita Rai", avatar: face.sita },
    lines: [
      {
        from: "user",
        avatar: face.sita,
        text: "Green jacket still available?",
      },
      { from: "bot", text: "It is! M and L left. Want me to reserve one?" },
      { from: "user", avatar: face.sita, text: "Yes, size M" },
      {
        from: "bot",
        text: "Reserved ✅ Rs 4,200, cash on delivery. We'll confirm pickup here.",
      },
    ],
  },
  handoff: {
    channel: "messenger",
    header: { name: "Aarav Shrestha", avatar: face.aarav },
    lines: [
      {
        from: "user",
        avatar: face.aarav,
        text: "I want 50 pieces for my office",
      },
      {
        from: "bot",
        text: "Bulk order, nice! Someone from our team will reply here shortly.",
      },
      { kind: "note", text: "Assigned to Bikash · needs reply" },
    ],
  },

  /* -------------------------------------------------- Teams and agencies */

  teamReport: {
    header: { name: "This week" },
    lines: [
      { kind: "note", text: "3 accounts · 1,240 DMs answered" },
      { from: "bot", text: "Top keyword: PP · 412 buyers given a price" },
      { kind: "note", text: "86 new leads tagged" },
    ],
  },
  workspace: {
    header: { name: "Client workspace" },
    lines: [
      { kind: "note", text: "Workspace: Everest Beans Coffee" },
      { from: "bot", text: "Automation duplicated from Everest Threads" },
      { kind: "note", text: "Live · 2 accounts connected" },
    ],
  },

  /* -------------------------------------------------- AI agent replies */

  /** Something no template covers, answered from the agent's knowledge block. */
  aiReply: {
    channel: "instagram",
    header: { name: "Anisha Gurung", avatar: face.anisha },
    lines: [
      {
        from: "user",
        avatar: face.anisha,
        text: "Does the tote fit a 14 inch laptop?",
      },
      {
        from: "bot",
        text: "It does. The Everest tote is 38cm wide, so a 14 inch laptop slides in flat.",
      },
      { from: "user", avatar: face.anisha, text: "Perfect, order garne" },
    ],
  },
  /** Prices come from the facts the workspace pasted in, never invented. */
  aiPrice: {
    channel: "instagram",
    header: { name: "Kiran Thapa", avatar: face.kiran },
    lines: [
      { from: "user", avatar: face.kiran, text: "Duita tote ko total kati?" },
      {
        from: "bot",
        text: "Two totes are Rs 4,800. Delivery inside the valley is free, so that is the full amount.",
      },
      { from: "user", avatar: face.kiran, text: "Thik cha 🙏" },
    ],
  },
  /** Policy questions: the answer is the one written in the knowledge block. */
  aiPolicy: {
    channel: "messenger",
    header: { name: "Aarav Shrestha", avatar: face.aarav },
    lines: [
      {
        from: "user",
        avatar: face.aarav,
        text: "Can I return it if the size is wrong?",
      },
      {
        from: "bot",
        text: "Yes, within 7 days, unworn and with the tags on. Size swaps are free inside the valley.",
      },
    ],
  },
  /** The agent stops rather than guessing, and the flow takes the handover branch. */
  aiHandoff: {
    channel: "messenger",
    header: { name: "Bikram Tamang", avatar: face.bikram },
    lines: [
      {
        from: "user",
        avatar: face.bikram,
        text: "I need 200 pieces with our logo printed",
      },
      {
        from: "bot",
        text: "That is past what I can quote. Let me get someone from the team onto this chat.",
      },
      { kind: "note", text: "Handed to Bikash · needs reply" },
    ],
  },

  /* -------------------------------------------------- Hero overlays */

  /** Plays over the home hero photograph: a price question, answered. */
  heroPrice: {
    channel: "instagram",
    lines: [
      { from: "user", avatar: face.anisha, text: "PP 🙏" },
      {
        from: "bot",
        text: "Hi Anisha! 👋 The Everest tote is Rs 2,400 with free delivery inside the valley.",
      },
      { from: "user", avatar: face.anisha, text: "Cash on delivery huncha?" },
      { from: "bot", text: "Yes 🚚 Shall I pack one for you?" },
    ],
  },
  /** The Messenger half of the same story, for pages themed on Messenger. */
  heroOrder: {
    channel: "messenger",
    lines: [
      { from: "user", avatar: face.bikram, text: "Size M cha? kati ho?" },
      {
        from: "bot",
        text: "M is in stock. Rs 4,200 with free delivery inside the valley.",
      },
      { from: "user", avatar: face.bikram, text: "Order garne ho ta" },
      {
        from: "bot",
        text: "Reserved ✅ What's your phone number for delivery?",
      },
    ],
  },
} satisfies Record<string, ChatScript>;

/**
 * Business-page casts and conversations. These never appear on the generic
 * home or channel pages, so each solution page tells one coherent sales story
 * instead of recycling the same shop demo.
 */
export const businessChats = {
  creatorLink: {
    channel: "instagram",
    header: {
      name: "Tara Rai",
      username: "tara.trails",
      avatar: instagramCast.tara.avatar,
    },
    lines: [
      { from: "user", avatar: instagramCast.tara.avatar, text: "GUIDE 🙋‍♀️" },
      { from: "bot", text: "Your 7-day trekking checklist is ready. Follow me and I’ll unlock it here." },
      { from: "user", avatar: instagramCast.tara.avatar, text: "Followed!" },
      { from: "bot", text: "Perfect. Download it here. I also added my packing video 🏔️" },
    ],
  },
  creatorCourse: {
    channel: "instagram",
    header: {
      name: "Milan Shrestha",
      username: "milan.frames",
      avatar: instagramCast.milan.avatar,
    },
    lines: [
      { from: "user", avatar: instagramCast.milan.avatar, text: "Is your mobile photo class beginner friendly?" },
      { from: "bot", text: "Completely. It starts with light and framing, then builds to editing. Want the first lesson free?" },
      { from: "user", avatar: instagramCast.milan.avatar, text: "Yes please" },
      { from: "bot", text: "Sent 🎬 If you like it, enrollment closes Sunday." },
    ],
  },
  creatorGiveaway: {
    channel: "instagram",
    header: {
      name: "Kriti Poudel",
      username: "kriti.and.cat",
      avatar: instagramCast.kriti.avatar,
    },
    lines: [
      { from: "bot", text: "You’re entered for the creator kit, Kriti 🎁" },
      { from: "bot", text: "Share the reel to your story for one bonus entry." },
      { from: "user", avatar: instagramCast.kriti.avatar, text: "Shared ✨" },
      { kind: "note", text: "Bonus entry added · Creator kit giveaway" },
    ],
  },
  creatorNewsletter: {
    channel: "instagram",
    header: {
      name: "Gagan Rai",
      username: "gagan.plays",
      avatar: instagramCast.gagan.avatar,
    },
    lines: [
      { from: "bot", text: "Want my weekly creator prompts before they go public?" },
      { from: "user", avatar: instagramCast.gagan.avatar, text: "Definitely" },
      { from: "bot", text: "Drop your email and I’ll add you to Friday’s issue." },
      { from: "user", avatar: instagramCast.gagan.avatar, text: "gagan@studio.com" },
      { kind: "note", text: "Subscriber added · Creator newsletter" },
    ],
  },

  ecommercePrice: {
    channel: "instagram",
    header: {
      name: "Garima KC",
      avatar: messengerCast.garima.avatar,
    },
    lines: [
      { from: "user", avatar: messengerCast.garima.avatar, text: "PP for the olive co-ord?" },
      { from: "bot", text: "Rs 3,450. S–XL are in stock and delivery is free inside Kathmandu." },
      { from: "user", avatar: messengerCast.garima.avatar, text: "M cha?" },
      { from: "bot", text: "Yes, M is ready to ship today. Want me to reserve it?" },
    ],
  },
  ecommerceStock: {
    channel: "instagram",
    header: {
      name: "Nabin Gurung",
      username: "nabin.noir",
      avatar: instagramCast.nabin.avatar,
    },
    lines: [
      { from: "user", avatar: instagramCast.nabin.avatar, text: "Black 42 restock bhayo?" },
      { from: "bot", text: "Just landed. Only 6 pairs left in size 42." },
      { kind: "link", url: "northstar.store/runner-black", title: "Runner 02 · Black", domain: "northstar.store", avatar: instagramCast.nabin.avatar },
      { from: "user", avatar: instagramCast.nabin.avatar, text: "Ordering now 🔥" },
    ],
  },
  ecommerceOrder: {
    channel: "messenger",
    header: {
      name: "Maya Thapa",
      avatar: messengerCast.maya.avatar,
    },
    lines: [
      { from: "user", avatar: messengerCast.maya.avatar, text: "One walnut lamp please" },
      { from: "bot", text: "Reserved. It’s Rs 2,850 with cash on delivery." },
      { from: "bot", text: "What phone number should the courier use?" },
      { from: "user", avatar: messengerCast.maya.avatar, text: "98XXXXXXXX" },
      { kind: "note", text: "Order #1842 · Confirmed" },
    ],
  },
  ecommerceDelivery: {
    channel: "messenger",
    header: {
      name: "Deepak Gurung",
      avatar: messengerCast.deepak.avatar,
    },
    lines: [
      { from: "user", avatar: messengerCast.deepak.avatar, text: "Pokhara delivery kati din?" },
      { from: "bot", text: "2–3 working days. Delivery is Rs 150, or free above Rs 5,000." },
      { from: "user", avatar: messengerCast.deepak.avatar, text: "Then add two cushions too" },
      { from: "bot", text: "Done. Your delivery is now free 🚚" },
    ],
  },

  agencyWorkspace: {
    channel: "instagram",
    header: { name: "Northstar Coffee · Client" },
    lines: [
      { kind: "note", text: "Workspace switched · Northstar Coffee" },
      { from: "bot", text: "Launch flow duplicated from the agency library." },
      { kind: "note", text: "Keyword changed · MENU → BREW" },
      { kind: "note", text: "Instagram + Messenger · Ready to publish" },
    ],
  },
  agencyLead: {
    channel: "instagram",
    header: {
      name: "Kavya Maharjan",
      username: "kathmandu.frames",
      avatar: instagramCast.kavya.avatar,
    },
    lines: [
      { from: "user", avatar: instagramCast.kavya.avatar, text: "BREW" },
      { from: "bot", text: "Here’s Northstar’s wholesale menu. Are you buying for a café or an office?" },
      { from: "user", avatar: instagramCast.kavya.avatar, text: "New café in Patan" },
      { kind: "note", text: "Qualified lead · Café wholesale" },
    ],
  },
  agencyHandoff: {
    channel: "messenger",
    header: {
      name: "Tanmay Lama",
      avatar: messengerCast.tanmay.avatar,
    },
    lines: [
      { from: "user", avatar: messengerCast.tanmay.avatar, text: "We need coffee for three branches" },
      { from: "bot", text: "Great fit. I’m bringing Northstar’s wholesale manager into this chat." },
      { kind: "note", text: "Assigned to Asha · High-value lead" },
      { from: "bot", text: "Asha will reply with volume pricing today." },
    ],
  },
  agencyReport: {
    channel: "instagram",
    header: { name: "Northstar · August report" },
    lines: [
      { kind: "note", text: "2,486 conversations · +38%" },
      { from: "bot", text: "BREW generated 184 qualified wholesale leads." },
      { kind: "note", text: "71 leads moved to proposal" },
      { from: "bot", text: "Top campaign: Patan café launch · 12.4% conversion" },
    ],
  },

  brandLaunch: {
    channel: "instagram",
    header: {
      name: "Anisha Karki",
      username: "anisha.alley",
      avatar: instagramCast.anisha.avatar,
    },
    lines: [
      { from: "user", avatar: instagramCast.anisha.avatar, text: "DROP" },
      { from: "bot", text: "You’re early ✨ The Monsoon collection opens at 7 PM." },
      { from: "bot", text: "Want first access plus the launch code?" },
      { from: "user", avatar: instagramCast.anisha.avatar, text: "Yes!" },
      { kind: "note", text: "VIP launch segment · Added" },
    ],
  },
  brandSupport: {
    channel: "messenger",
    header: {
      name: "Prisha Karki",
      avatar: messengerCast.prisha.avatar,
    },
    lines: [
      { from: "user", avatar: messengerCast.prisha.avatar, text: "Can I exchange the shade?" },
      { from: "bot", text: "Yes, unopened products can be exchanged within 14 days." },
      { from: "bot", text: "Share your order number and I’ll start it here." },
      { from: "user", avatar: messengerCast.prisha.avatar, text: "NW-4821" },
      { kind: "note", text: "Exchange request · Created" },
    ],
  },
  brandStory: {
    channel: "instagram",
    header: {
      name: "Bibek Lama",
      username: "bibek.boudha",
      avatar: instagramCast.bibek.avatar,
    },
    lines: [
      { kind: "story", label: "Replied to your launch story", image: photo.studio, avatar: instagramCast.bibek.avatar, reaction: "🔥" },
      { from: "user", avatar: instagramCast.bibek.avatar, text: "That blue one" },
      { from: "bot", text: "Midnight Blue is the bestseller. I saved your early-access link here." },
    ],
  },
  brandLoyalty: {
    channel: "instagram",
    header: {
      name: "Tejas Karki",
      username: "tejas.treks",
      avatar: instagramCast.tejas.avatar,
    },
    lines: [
      { from: "bot", text: "You’ve unlocked Insider status after your third order." },
      { from: "user", avatar: instagramCast.tejas.avatar, text: "What do I get?" },
      { from: "bot", text: "Free delivery, early drops and 15% off your birthday order." },
      { kind: "note", text: "Loyalty tier · Insider" },
    ],
  },
} satisfies Record<string, ChatScript>;

/** Instagram-only product demos. Every scene keeps Instagram chrome and its own cast. */
export const instagramChats = {
  commentPost: {
    kind: "post",
    channel: "instagram",
    account: {
      name: instagramCast.milan.username,
      avatar: instagramCast.milan.avatar,
    },
    image: photo.creator,
    caption: "Comment PRICE for the handmade frame 🖼️",
    comments: [
      {
        name: instagramCast.tara.username,
        avatar: instagramCast.tara.avatar,
        text: "PRICE",
        time: "4m",
        likes: "18",
      },
      {
        name: instagramCast.milan.username,
        avatar: instagramCast.milan.avatar,
        mention: "@tara.trails",
        text: "Price and order link sent 💌",
        time: "4m",
        likes: "6",
      },
      {
        name: instagramCast.kavya.username,
        avatar: instagramCast.kavya.avatar,
        text: "Delivery outside valley?",
        time: "2m",
        faded: true,
      },
    ],
  },
  commentToDm: {
    channel: "instagram",
    header: instagramCast.tara,
    lines: [
      {
        from: "bot",
        text: "Hi Tara! The walnut frame is Rs 2,850. Tap the link to choose your size.",
      },
      {
        kind: "link",
        avatar: instagramCast.tara.avatar,
        url: "milanframes.com/walnut",
        title: "Walnut photo frame",
        domain: "milanframes.com",
      },
      {
        from: "user",
        avatar: instagramCast.tara.avatar,
        text: "Can you deliver by Friday?",
      },
      {
        from: "bot",
        text: "Yes. Order today and Friday delivery inside the valley is free.",
      },
    ],
  },
  publicReply: {
    kind: "comments",
    channel: "instagram",
    comments: [
      {
        name: instagramCast.gagan.username,
        avatar: instagramCast.gagan.avatar,
        text: "Black one in stock?",
        time: "12m",
        likes: "9",
      },
      {
        name: instagramCast.milan.username,
        avatar: instagramCast.milan.avatar,
        mention: "@gagan.plays",
        text: "Yes! Sent the checkout link by DM.",
        time: "11m",
      },
      {
        name: instagramCast.dipen.username,
        avatar: instagramCast.dipen.avatar,
        text: "Need two for my studio",
        time: "5m",
        likes: "3",
      },
      {
        name: instagramCast.milan.username,
        avatar: instagramCast.milan.avatar,
        mention: "@dipen.dives",
        text: "Bundle price is in your inbox 📩",
        time: "4m",
      },
    ],
  },
  dmReply: {
    channel: "instagram",
    header: instagramCast.bibek,
    lines: [
      {
        from: "user",
        avatar: instagramCast.bibek.avatar,
        text: "Will the travel bag fit cabin luggage?",
      },
      {
        from: "bot",
        text: "Yes. It is 45 × 30 × 20 cm and accepted as cabin luggage by most airlines.",
      },
      {
        from: "user",
        avatar: instagramCast.bibek.avatar,
        text: "Great, send the olive one",
      },
      { from: "bot", text: "Reserved ✅ Rs 3,600. Checkout link sent." },
    ],
  },
  followGate: {
    channel: "instagram",
    header: instagramCast.kriti,
    lines: [
      { from: "bot", text: "Your free-delivery code is ready, Kriti." },
      {
        from: "bot",
        text: "Follow the shop, then reply FOLLOWED to unlock it.",
      },
      { from: "user", avatar: instagramCast.kriti.avatar, text: "FOLLOWED" },
      { from: "bot", text: "Unlocked 🎉 Use SHIPFREE at checkout today." },
    ],
  },
  priceFaq: {
    channel: "instagram",
    header: instagramCast.nabin,
    lines: [
      {
        from: "user",
        avatar: instagramCast.nabin.avatar,
        text: "Price for the desk lamp?",
      },
      {
        from: "bot",
        text: "The walnut desk lamp is Rs 3,250 and is ready to ship.",
      },
      {
        from: "user",
        avatar: instagramCast.nabin.avatar,
        text: "COD available in Pokhara?",
      },
      {
        from: "bot",
        text: "Yes. Cash on delivery is available nationwide for Rs 150.",
      },
    ],
  },
  leadEmail: {
    channel: "instagram",
    header: instagramCast.tejas,
    lines: [
      {
        from: "bot",
        text: "Want the full trekking shoe size guide? Drop your email below.",
      },
      { from: "user", avatar: instagramCast.tejas.avatar, text: "tejas@gmail" },
      {
        from: "bot",
        text: "That looks incomplete. Please add the ending too.",
      },
      {
        from: "user",
        avatar: instagramCast.tejas.avatar,
        text: "tejas@gmail.com",
      },
      { from: "bot", text: "Sent 📩 Your 10% first-order code is inside." },
    ],
  },
  storyReply: {
    channel: "instagram",
    header: instagramCast.anisha,
    lines: [
      {
        kind: "story",
        label: "Replied to your story",
        image: photo.studio,
        avatar: instagramCast.anisha.avatar,
        reaction: "😍",
      },
      {
        from: "user",
        avatar: instagramCast.anisha.avatar,
        text: "Are these earrings still available?",
      },
      {
        from: "bot",
        text: "Yes, two pairs left. Rs 1,450 with free delivery today.",
      },
      {
        from: "user",
        avatar: instagramCast.anisha.avatar,
        text: "Reserve one for me",
      },
    ],
  },
  giveaway: {
    kind: "post",
    channel: "instagram",
    account: {
      name: instagramCast.milan.username,
      avatar: instagramCast.milan.avatar,
    },
    image: photo.rooftop,
    caption: "Comment WIN for a Rs 5,000 studio makeover 🎁",
    comments: [
      {
        name: instagramCast.kavya.username,
        avatar: instagramCast.kavya.avatar,
        text: "WIN",
        time: "3m",
        likes: "14",
      },
      {
        name: instagramCast.milan.username,
        avatar: instagramCast.milan.avatar,
        mention: "@kathmandu.frames",
        text: "Entry confirmed in your DMs!",
        time: "2m",
      },
    ],
  },
} satisfies Record<string, ChatScript>;

/** Facebook Page and Messenger-only demos with Messenger-native chrome and sales flows. */
export const messengerChats = {
  fbComment: {
    kind: "fbpost",
    channel: "messenger",
    image: photo.studio,
    reactions: "Hima Rai and 86 others",
    comment: {
      name: messengerCast.maya.name,
      avatar: messengerCast.maya.avatar,
      text: "Is the blue kurta available in M?",
      time: "6m",
    },
    lines: [
      {
        from: "bot",
        text: "Hi Maya! M is in stock for Rs 2,950. I sent the order link in Messenger.",
      },
    ],
  },
  priceFaq: {
    channel: "messenger",
    header: messengerCast.mira,
    lines: [
      {
        from: "user",
        avatar: messengerCast.mira.avatar,
        text: "How much is the coffee gift box?",
      },
      {
        from: "bot",
        text: "Rs 1,650 with three local roasts and a gift card.",
      },
      {
        from: "user",
        avatar: messengerCast.mira.avatar,
        text: "Can it reach Lalitpur tomorrow?",
      },
      {
        from: "bot",
        text: "Yes. Order before 5 PM for free delivery tomorrow.",
      },
    ],
  },
  orderChat: {
    channel: "messenger",
    header: messengerCast.hima,
    lines: [
      {
        from: "user",
        avatar: messengerCast.hima.avatar,
        text: "I want the green jacket in M",
      },
      {
        from: "bot",
        text: "M is available. Total is Rs 4,200 with free delivery.",
      },
      {
        from: "user",
        avatar: messengerCast.hima.avatar,
        text: "Reserve it, cash on delivery",
      },
      {
        from: "bot",
        text: "Reserved ✅ Send your delivery area and phone number to confirm.",
      },
    ],
  },
  leadPhone: {
    channel: "messenger",
    header: messengerCast.deepak,
    lines: [
      {
        from: "user",
        avatar: messengerCast.deepak.avatar,
        text: "Two black wallets please",
      },
      {
        from: "bot",
        text: "Done. Your total is Rs 3,400 after the bundle discount. Best phone number for delivery?",
      },
      { from: "user", avatar: messengerCast.deepak.avatar, text: "98XXXXXXXX" },
      { from: "bot", text: "Saved ✅ We will call once before dispatch." },
    ],
  },
  handoff: {
    channel: "messenger",
    header: messengerCast.tanmay,
    lines: [
      {
        from: "user",
        avatar: messengerCast.tanmay.avatar,
        text: "Can you make 80 hoodies with our logo?",
      },
      {
        from: "bot",
        text: "Yes, that needs a custom quote. I have sent your quantity and deadline to our sales team.",
      },
      { kind: "note", text: "Assigned to Bina · priority wholesale lead" },
    ],
  },
  giveaway: {
    kind: "fbpost",
    channel: "messenger",
    image: photo.cafe,
    reactions: "Prisha Karki and 203 others",
    comment: {
      name: messengerCast.prisha.name,
      avatar: messengerCast.prisha.avatar,
      text: "WIN",
      time: "2m",
    },
    lines: [
      {
        from: "bot",
        text: "Entry confirmed, Prisha 🎁 Check Messenger for your bonus discount code.",
      },
    ],
  },
  productRecommendation: {
    channel: "messenger",
    header: messengerCast.harsha,
    lines: [
      {
        from: "user",
        avatar: messengerCast.harsha.avatar,
        text: "Need hiking shoes under Rs 6,000",
      },
      {
        from: "bot",
        text: "The Ridge Low is Rs 5,800, waterproof and available in sizes 40–44.",
      },
      {
        from: "user",
        avatar: messengerCast.harsha.avatar,
        text: "Send size 42",
      },
      { from: "bot", text: "Added to your cart. Checkout link sent." },
    ],
  },
  cartRecovery: {
    channel: "messenger",
    header: messengerCast.chiran,
    lines: [
      {
        from: "bot",
        text: "Your city backpack is still reserved, Chiran. Want to finish the order?",
      },
      {
        from: "user",
        avatar: messengerCast.chiran.avatar,
        text: "Yes, but can I pay on delivery?",
      },
      {
        from: "bot",
        text: "Absolutely. Cash on delivery selected. Confirm your address to place it.",
      },
    ],
  },
  deliveryUpdate: {
    channel: "messenger",
    header: messengerCast.garima,
    lines: [
      {
        from: "bot",
        text: "Good news, Garima. Order #1842 has left our Kathmandu store.",
      },
      {
        from: "user",
        avatar: messengerCast.garima.avatar,
        text: "When will it arrive?",
      },
      {
        from: "bot",
        text: "Tomorrow between 11 AM and 2 PM. Track it here anytime.",
      },
    ],
  },
  bulkQuote: {
    channel: "messenger",
    header: messengerCast.eshaan,
    lines: [
      {
        from: "user",
        avatar: messengerCast.eshaan.avatar,
        text: "Need 30 travel kits for our team",
      },
      {
        from: "bot",
        text: "For 30 kits, the business price is Rs 2,150 each including logo printing.",
      },
      {
        from: "user",
        avatar: messengerCast.eshaan.avatar,
        text: "Send the formal quote",
      },
      {
        from: "bot",
        text: "Sent to your email and assigned to our wholesale desk.",
      },
    ],
  },
} satisfies Record<string, ChatScript>;
