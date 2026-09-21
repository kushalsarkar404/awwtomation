import Image from "next/image";

import { McButton } from "@/components/mc/button";
import { InstagramMark, MessengerMark } from "@/components/mc/icons";
import { PhotoSlot } from "@/components/mc/placeholder";
import {
  HeroChat,
  type HeroChatStep,
} from "@/components/mc/sections/hero-chat";
import type { MarketingPage } from "@/content/mc-types";
import { SIGNUP_URL } from "@/lib/brand";
import { cn } from "@/lib/utils";

/** The trust row under a hero: the two channels the product runs on. */
export function TrustBadges({
  light = true,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-[27px] gap-y-4",
        light ? "text-white" : "text-ink",
        className,
      )}
    >
      <li className="flex items-center gap-2.5">
        <InstagramMark className="size-8" />
        <MessengerMark className="size-8" />
        <span className="text-[1.0625rem] font-semibold leading-[1.05]">
          Instagram &amp;
          <br />
          Messenger
        </span>
      </li>
    </ul>
  );
}

/** The story that plays over a hero photo when a page does not write its own. */
const defaultHeroChat: HeroChatStep[] = [
  {
    kind: "comment",
    name: "anisha.gurung",
    text: "PP 🙏",
    avatar: "/site-assets/profiles/social/anisha-gurung.png",
  },
  {
    kind: "us",
    text: "Hi Anisha! 👋 The Everest tote is Rs 2,400 with free delivery inside the valley.",
  },
  {
    kind: "them",
    text: "Cash on delivery huncha?",
    avatar: "/site-assets/profiles/social/anisha-gurung.png",
  },
  { kind: "us", text: "Yes 🚚 Shall I pack one for you?" },
  { kind: "saved", text: "Contact saved · tagged Buyer" },
];

export function MarketingHero({ page }: { page: MarketingPage }) {
  const { hero, theme } = page;
  const chat = hero.chat ?? defaultHeroChat;

  if (hero.kind === "photo") {
    return (
      <section
        data-nav="light"
        className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
      >
        {hero.image ? (
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-center"
          />
        ) : (
          <PhotoSlot
            tone="warm"
            label={hero.photo}
            className="absolute inset-0"
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"
        />
        <div className="relative flex min-h-[100svh] flex-col px-5 pb-8 pt-28 lg:px-11 lg:pb-[54px] lg:pt-[142px]">
          <h1 className="mc-h1 max-w-[52rem]">{hero.title}</h1>
          <p className="mc-sub mt-5 max-w-[41rem] lg:mt-[27px]">{hero.body}</p>
          <div className="mt-9 lg:mt-[43px]">
            <McButton href={SIGNUP_URL} variant="magenta" size="lg">
              {hero.cta}
            </McButton>
          </div>

          {/* The conversation plays in the clear half of the photograph. */}
          <HeroChat
            steps={chat}
            channel={theme.channel}
            className="mt-9 w-full max-w-[26rem] lg:hidden"
          />
          <div className="pointer-events-none absolute bottom-[13vh] right-11 hidden w-[28vw] max-w-[26rem] lg:block">
            <HeroChat steps={chat} channel={theme.channel} />
          </div>

          <TrustBadges className="mt-auto pt-16" />
        </div>
      </section>
    );
  }

  return (
    <section
      data-nav={theme.onAccentLight ? "light" : "dark"}
      className={cn(
        "mc-grid relative",
        theme.onAccentLight ? "mc-grid-light text-white" : "text-ink",
      )}
      style={{ backgroundColor: theme.accent }}
    >
      <div className="px-5 pb-12 pt-28 lg:px-11 lg:pb-[66px] lg:pt-[142px]">
        <h1 className="mc-h1 max-w-[52rem]">{hero.title}</h1>
        <p className="mc-sub mt-5 max-w-[41rem] lg:mt-[27px]">{hero.body}</p>
        <div className="mt-9 flex flex-col gap-8 lg:mt-[43px] lg:flex-row lg:items-center lg:justify-between">
          <McButton
            href={SIGNUP_URL}
            variant={theme.onAccentLight ? "white" : "black"}
            size="lg"
            className="self-start"
          >
            {hero.cta}
          </McButton>
          <TrustBadges light={theme.onAccentLight} />
        </div>
      </div>
    </section>
  );
}
