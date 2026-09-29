import type { CSSProperties, ReactNode } from "react"

import { LogoMark } from "@/components/site/logo"
import { PlatformIcon } from "@/components/ui/platform-icon"
import { cn } from "@/lib/utils"

/*
 * The drawing on each how-to card and at the top of each guide: a small scene
 * of the thing the guide sets up (a comment turning into a DM, a story reply,
 * an inbox, a pipeline), in flat white cards over the guide's colour.
 *
 * Every size is in `cqw` of the art box, so one scene draws the same in a
 * 450px card and a 1100px guide header. The box is always 447 x 245, the
 * shape of ManyChat's how-to cards.
 */

export const GUIDE_ART_NAMES = [
  "comment-to-dm",
  "follow-gate",
  "dm-reply",
  "messenger",
  "page-comments",
  "story-reply",
  "collect-email",
  "collect-phone",
  "connect",
  "flow",
  "inbox",
  "pipeline",
  "broadcast",
  "ai",
  "team",
  "logs",
  "mcp",
  "segments",
  "giveaway",
  "import",
  "analytics",
] as const

export type GuideArtName = (typeof GUIDE_ART_NAMES)[number]

/** Light guide colours get ink lines and labels; dark ones get white. */
function isLight(hex: string) {
  const value = hex.replace("#", "")
  if (value.length !== 6) return true
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(value.slice(i, i + 2), 16) / 255)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.55
}

/* ------------------------------------------------------------------ *
 * Pieces
 * ------------------------------------------------------------------ */

const shadow = "shadow-[0_1.4cqw_3.4cqw_-1.2cqw_rgba(15,15,15,0.32)]"

function Card({ className, style, children }: { className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <div className={cn("absolute rounded-[2.4cqw] bg-white text-ink", shadow, className)} style={style}>
      {children}
    </div>
  )
}

function Avatar({ initials, tone = "bg-lavender", className }: { initials: string; tone?: string; className?: string }) {
  return (
    <span className={cn("grid size-[6cqw] shrink-0 place-items-center rounded-full text-[2cqw] font-bold text-ink", tone, className)}>
      {initials}
    </span>
  )
}

function Bubble({ from, children, className, tone }: { from: "them" | "us"; children: ReactNode; className?: string; tone?: string }) {
  return (
    <p
      className={cn(
        "w-fit max-w-full rounded-[2.2cqw] px-[2.2cqw] py-[1.3cqw] text-[2.3cqw] leading-[1.25]",
        from === "them" ? "rounded-bl-[0.6cqw] bg-fog text-ink" : cn("ml-auto rounded-br-[0.6cqw] text-white", tone ?? "bg-ink"),
        className,
      )}
    >
      {children}
    </p>
  )
}

function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center justify-center gap-[0.8cqw] rounded-full px-[2cqw] py-[1cqw] text-[2cqw] font-semibold leading-none", className)}>{children}</span>
}

function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("font-mono text-[1.55cqw] uppercase leading-none tracking-[0.08em]", className)}>{children}</p>
}

function Platform({ platform, className }: { platform: "INSTAGRAM" | "FACEBOOK"; className?: string }) {
  return (
    <span className={cn("grid size-[4.2cqw] place-items-center rounded-[1.1cqw] text-white", platform === "INSTAGRAM" ? "bg-magenta" : "bg-blue", className)}>
      <PlatformIcon platform={platform} className="size-[2.5cqw]" />
    </span>
  )
}

function Check({ className }: { className?: string }) {
  return (
    <span className={cn("grid size-[2.8cqw] place-items-center rounded-full bg-green text-white", className)}>
      <svg viewBox="0 0 12 12" className="size-[1.7cqw]" aria-hidden>
        <path d="M2.5 6.3 5 8.6l4.5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

/** A hand-drawn arrow from one card to the next. */
function Arrow({ d, light, className }: { d: string; light: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 100 55" preserveAspectRatio="none" className={cn("pointer-events-none absolute inset-0 size-full", className)} aria-hidden>
      <path d={d} fill="none" stroke={light ? "rgba(15,15,15,0.55)" : "rgba(255,255,255,0.8)"} strokeWidth="0.45" strokeLinecap="round" strokeDasharray="1.2 1.2" vectorEffect="non-scaling-stroke" style={{ strokeWidth: "0.35cqw" }} />
    </svg>
  )
}

const lift = "transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:-translate-y-[1.2cqw]"
const drift = "transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-[0.8cqw]"

/* ------------------------------------------------------------------ *
 * Scenes
 * ------------------------------------------------------------------ */

function Scene({ name, light }: { name: GuideArtName; light: boolean }) {
  const ink = light ? "text-ink" : "text-white"
  switch (name) {
    case "comment-to-dm":
      return (
        <>
          <Card className={cn("left-[7%] top-[16%] w-[40%] rotate-[-3deg] p-[2.2cqw]", drift)}>
            <div className="flex items-center gap-[1.6cqw]">
              <Avatar initials="PK" tone="bg-sky" />
              <div className="min-w-0">
                <p className="text-[1.9cqw] font-semibold leading-none">priya.k</p>
                <p className="mt-[0.8cqw] font-display text-[4cqw] font-black leading-none tracking-[-0.02em]">LINK</p>
              </div>
            </div>
            <p className="mt-[1.6cqw] text-[1.6cqw] text-mute">2s · Reply</p>
          </Card>
          <Arrow d="M30 33 C 34 45, 44 46, 52 40" light={light} />
          <Card className={cn("right-[7%] top-[30%] w-[44%] rotate-[2deg] p-[2cqw]", lift)}>
            <div className="flex items-center gap-[1.2cqw]">
              <Platform platform="INSTAGRAM" />
              <Label className="text-mute">Direct message</Label>
            </div>
            <Bubble from="us" className="mt-[1.6cqw]">
              Here&apos;s the link you asked for
            </Bubble>
            <Pill className="mt-[1.4cqw] w-full bg-fog text-ink">Shop the drop</Pill>
          </Card>
        </>
      )
    case "follow-gate":
      return (
        <>
          <Card className={cn("left-[7%] top-[18%] w-[36%] rotate-[-2deg] p-[2.2cqw] text-center", drift)}>
            <span className="mx-auto block size-[9cqw] rounded-full bg-[conic-gradient(#fb0df7,#ff4c00,#fff200,#fb0df7)] p-[0.5cqw]">
              <span className="grid size-full place-items-center rounded-full border-[0.5cqw] border-white bg-lavender text-[2.6cqw] font-bold">HT</span>
            </span>
            <p className="mt-[1.2cqw] text-[2cqw] font-semibold">himalayanthreads</p>
            <Pill className="mt-[1.4cqw] w-full bg-blue text-white">Follow</Pill>
          </Card>
          <Arrow d="M30 40 C 38 50, 46 44, 51 36" light={light} />
          <Card className={cn("right-[7%] top-[26%] w-[46%] rotate-[2deg] p-[2cqw]", lift)}>
            <Bubble from="us">Follow us first, then tap below and it&apos;s yours</Bubble>
            <Pill className="mt-[1.4cqw] w-full border-[0.3cqw] border-ink bg-white text-ink">I&apos;m following</Pill>
            <div className="mt-[1.4cqw] flex items-center gap-[1cqw] text-[1.8cqw] font-semibold text-green">
              <Check />
              Follower, link sent
            </div>
          </Card>
        </>
      )
    case "dm-reply":
      return (
        <>
          {[
            ["price", "left-[6%] top-[14%] rotate-[-6deg]"],
            ["rate", "left-[18%] top-[36%] rotate-[4deg]"],
            ["kati", "left-[8%] top-[58%] rotate-[-3deg]"],
            ["मूल्य", "left-[21%] top-[76%] rotate-[5deg]"],
          ].map(([word, position]) => (
            <Pill key={word} className={cn("absolute bg-white/90 font-mono text-ink", position)}>
              {word}
            </Pill>
          ))}
          <Card className={cn("right-[8%] top-[13%] w-[52%] p-[2.2cqw]", lift)}>
            <div className="flex items-center gap-[1.2cqw] border-b border-line pb-[1.4cqw]">
              <Avatar initials="AG" tone="bg-sky" className="size-[4.6cqw] text-[1.6cqw]" />
              <p className="text-[2cqw] font-semibold">aayush.gurung</p>
              <Platform platform="INSTAGRAM" className="ml-auto" />
            </div>
            <div className="mt-[1.6cqw] space-y-[1.2cqw]">
              <Bubble from="them">kati ho yo kurta?</Bubble>
              <Bubble from="us">Rs 2,450. Free delivery inside the valley.</Bubble>
              <Pill className="ml-auto flex w-[62%] bg-fog text-ink">See sizes</Pill>
            </div>
          </Card>
        </>
      )
    case "messenger":
      return (
        <>
          <Card className={cn("left-[9%] top-[12%] w-[58%] p-[2.2cqw]", lift)}>
            <div className="flex items-center gap-[1.2cqw] border-b border-line pb-[1.4cqw]">
              <Avatar initials="KG" tone="bg-yellow" className="size-[4.6cqw] text-[1.6cqw]" />
              <p className="text-[2cqw] font-semibold">Kiran Gurung</p>
              <Platform platform="FACEBOOK" className="ml-auto" />
            </div>
            <div className="mt-[1.6cqw] space-y-[1.2cqw]">
              <Bubble from="them">How much is delivery to Pokhara?</Bubble>
              <Bubble from="us" tone="bg-blue">
                Rs 150, and it takes 2 to 3 days. Want to order?
              </Bubble>
              <div className="ml-auto flex w-[70%] gap-[1cqw]">
                <Pill className="flex-1 bg-fog text-ink">Order now</Pill>
                <Pill className="flex-1 bg-fog text-ink">Talk to us</Pill>
              </div>
            </div>
          </Card>
          <Card className={cn("right-[7%] top-[58%] rotate-[4deg] px-[2cqw] py-[1.4cqw]", drift)}>
            <Label className="text-mute">Replied in</Label>
            <p className="mt-[0.6cqw] font-display text-[4.4cqw] font-black leading-none tracking-[-0.03em]">2 sec</p>
          </Card>
        </>
      )
    case "page-comments":
      return (
        <>
          <Card className={cn("left-[7%] top-[12%] w-[42%] -rotate-2 overflow-hidden", drift)}>
            <div className="flex items-center gap-[1.2cqw] p-[1.6cqw]">
              <Avatar initials="EC" tone="bg-orange" className="size-[4.4cqw] text-[1.5cqw] text-white" />
              <p className="text-[1.9cqw] font-semibold">Everest Coffee</p>
              <Platform platform="FACEBOOK" className="ml-auto size-[3.6cqw]" />
            </div>
            <div className="mc-grid h-[12cqw] bg-sage" />
            <div className="flex items-center gap-[1.2cqw] p-[1.6cqw]">
              <Avatar initials="AS" tone="bg-sky" className="size-[3.8cqw] text-[1.3cqw]" />
              <p className="rounded-[1.6cqw] bg-fog px-[1.6cqw] py-[0.8cqw] text-[2cqw] font-bold">MENU</p>
            </div>
          </Card>
          <Arrow d="M40 44 C 48 52, 54 46, 56 38" light={light} />
          <Card className={cn("right-[7%] top-[24%] w-[40%] rotate-[3deg] p-[2cqw]", lift)}>
            <Label className="text-mute">Messenger</Label>
            <Bubble from="us" tone="bg-blue" className="mt-[1.4cqw]">
              Here&apos;s today&apos;s menu. Order before 11 for lunch.
            </Bubble>
            <Pill className="mt-[1.4cqw] w-full bg-fog text-ink">View menu</Pill>
          </Card>
        </>
      )
    case "story-reply":
      return (
        <>
          <div className={cn("absolute left-[12%] top-[7%] h-[86%] w-[27%] -rotate-3 overflow-hidden rounded-[2.4cqw] bg-ink", shadow, drift)}>
            <div className="flex gap-[0.6cqw] p-[1.4cqw]">
              <span className="h-[0.5cqw] flex-1 rounded-full bg-white" />
              <span className="h-[0.5cqw] flex-1 rounded-full bg-white/35" />
            </div>
            <div className="absolute inset-x-[10%] top-[34%] rotate-[-4deg] rounded-[1.6cqw] bg-yellow px-[1.6cqw] py-[1.4cqw] text-center">
              <p className="text-[1.7cqw] font-semibold leading-tight">Reply</p>
              <p className="font-display text-[3.6cqw] font-black leading-none">SALE</p>
            </div>
            <div className="absolute inset-x-[8%] bottom-[5%] rounded-full border-[0.25cqw] border-white/60 px-[1.4cqw] py-[1cqw] text-[1.5cqw] text-white/80">Send message</div>
          </div>
          <Arrow d="M40 42 C 47 50, 53 46, 55 36" light={light} />
          <Card className={cn("right-[8%] top-[22%] w-[44%] rotate-[2deg] p-[2cqw]", lift)}>
            <Bubble from="them" className="ml-auto rounded-bl-[2.2cqw] rounded-br-[0.6cqw]">
              SALE
            </Bubble>
            <Bubble from="us" className="mt-[1.2cqw] ml-0 rounded-bl-[0.6cqw] rounded-br-[2.2cqw]">
              Your code is ready. It ends Sunday.
            </Bubble>
            <p className="mt-[1.4cqw] rounded-[1.4cqw] border-[0.3cqw] border-dashed border-ink/40 py-[1.2cqw] text-center font-mono text-[2.6cqw] font-bold tracking-[0.12em]">DASHAIN20</p>
          </Card>
        </>
      )
    case "collect-email":
    case "collect-phone": {
      const email = name === "collect-email"
      return (
        <>
          <Card className={cn("left-[8%] top-[10%] w-[48%] p-[2.2cqw]", drift)}>
            <div className="space-y-[1.2cqw]">
              <Bubble from="us" className="ml-0 rounded-bl-[0.6cqw] rounded-br-[2.2cqw]">
                {email ? "What's the best email to send the guide to?" : "What number should the rider call?"}
              </Bubble>
              <Bubble from="them" className="ml-auto rounded-bl-[2.2cqw] rounded-br-[0.6cqw]">
                {email ? "asha.gurung@gmail.com" : "98XXXXXXXX"}
              </Bubble>
            </div>
          </Card>
          <Card className={cn("right-[7%] top-[46%] w-[40%] rotate-[3deg] p-[2cqw]", lift)}>
            <div className="flex items-center gap-[1.4cqw]">
              <Avatar initials="AG" tone="bg-sky" />
              <div>
                <p className="text-[2.1cqw] font-semibold leading-none">Asha Gurung</p>
                <p className="mt-[0.8cqw] flex items-center gap-[0.8cqw] text-[1.7cqw] text-mute">
                  <Check className="size-[2.2cqw]" />
                  {email ? "Email saved" : "Phone saved"}
                </p>
              </div>
            </div>
            <div className="mt-[1.4cqw] flex gap-[0.8cqw]">
              <Pill className="bg-lavender px-[1.4cqw] text-[1.6cqw] text-ink">lead</Pill>
              <Pill className="bg-sage px-[1.4cqw] text-[1.6cqw] text-ink">{email ? "guide" : "cod order"}</Pill>
            </div>
          </Card>
        </>
      )
    }
    case "connect":
      return (
        <>
          <Arrow d="M27 27.5 L 50 27.5 L 73 27.5" light={light} />
          <div className={cn("absolute left-[12%] top-[31%] grid size-[20cqw] -rotate-6 place-items-center rounded-[4cqw] bg-magenta text-white", shadow, drift)}>
            <PlatformIcon platform="INSTAGRAM" className="size-[10cqw]" />
          </div>
          <div className={cn("absolute left-1/2 top-[27%] grid size-[24cqw] -translate-x-1/2 place-items-center rounded-[4.6cqw] bg-white text-ink", shadow, lift)}>
            <LogoMark className="h-[11cqw]" />
          </div>
          <div className={cn("absolute right-[12%] top-[31%] grid size-[20cqw] rotate-6 place-items-center rounded-[4cqw] bg-blue text-white", shadow)}>
            <PlatformIcon platform="FACEBOOK" className="size-[10cqw]" />
          </div>
          <Pill className="absolute bottom-[10%] left-1/2 -translate-x-1/2 bg-white text-green shadow-sm">
            <Check className="size-[2.4cqw]" />
            Connected
          </Pill>
        </>
      )
    case "flow":
      return (
        <>
          <Arrow d="M22 20 C 22 27, 30 27, 38 27 M 62 27 C 72 27, 78 30, 78 36" light={light} />
          {[
            { label: "Comment", detail: "Keyword: LINK", tone: "bg-yellow", left: "6%", top: "14%" },
            { label: "Send message", detail: "Here's your link", tone: "bg-purple text-white", left: "33%", top: "38%" },
            { label: "Ask for email", detail: "Checks it's valid", tone: "bg-sky", left: "60%", top: "62%" },
          ].map((node, index) => (
            <Card key={node.label} className={cn("w-[34%] overflow-hidden", index === 1 ? lift : drift)} style={{ left: node.left, top: node.top }}>
              <p className={cn("px-[1.8cqw] py-[1.2cqw] font-mono text-[1.7cqw] uppercase tracking-[0.08em]", node.tone)}>{node.label}</p>
              <p className="px-[1.8cqw] py-[1.6cqw] text-[2.3cqw] font-medium">{node.detail}</p>
            </Card>
          ))}
        </>
      )
    case "inbox":
      return (
        <>
          <Card className={cn("left-[10%] top-[10%] w-[56%] overflow-hidden py-[0.8cqw]", lift)}>
            {[
              { i: "RB", n: "Rajesh Bhattarai", m: "Wholesale price for 25 pieces?", unread: true, p: "INSTAGRAM" as const },
              { i: "KG", n: "Kiran Gurung", m: "How much is delivery to Pokhara?", unread: true, p: "FACEBOOK" as const },
              { i: "PL", n: "Priya Lama", m: "You: Back in stock on Friday", unread: false, p: "INSTAGRAM" as const },
            ].map((row) => (
              <div key={row.n} className="flex items-center gap-[1.4cqw] px-[2cqw] py-[1.3cqw]">
                <span className="relative">
                  <Avatar initials={row.i} />
                  <Platform platform={row.p} className="absolute -bottom-[0.4cqw] -right-[0.4cqw] size-[2.6cqw] rounded-[0.7cqw] [&_svg]:size-[1.6cqw]" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className={cn("text-[2cqw] leading-none", row.unread ? "font-bold" : "font-medium")}>{row.n}</p>
                  <p className="mt-[0.7cqw] truncate text-[1.75cqw] text-mute">{row.m}</p>
                </div>
                {row.unread ? <span className="size-[1.6cqw] rounded-full bg-magenta" /> : null}
              </div>
            ))}
          </Card>
          <Pill className={cn("absolute right-[8%] top-[22%] rotate-[4deg] bg-white text-ink", shadow, drift)}>Assigned to you</Pill>
          <Pill className={cn("absolute right-[12%] top-[56%] -rotate-3 bg-ink text-white", shadow)}>23h left to reply</Pill>
        </>
      )
    case "pipeline":
      return (
        <div className="absolute inset-x-[6%] top-1/2 flex -translate-y-1/2 gap-[2cqw]">
          {[
            { stage: "New lead", tone: "bg-sky", cards: ["Asha Gurung", "Nabin Karki"] },
            { stage: "Quoted", tone: "bg-yellow", cards: ["Rajesh Bhattarai"] },
            { stage: "Won", tone: "bg-green text-white", cards: ["Priya Lama", "Maya Magar"] },
          ].map((column, index) => (
            <div key={column.stage} className={cn("flex-1 rounded-[2.2cqw] bg-white/90 p-[1.4cqw]", shadow, index === 1 && lift)}>
              <Label className={cn("w-fit rounded-full px-[1.2cqw] py-[0.8cqw]", column.tone)}>{column.stage}</Label>
              <div className="mt-[1.2cqw] space-y-[1cqw]">
                {column.cards.map((card) => (
                  <div key={card} className="rounded-[1.4cqw] border border-line bg-white p-[1.2cqw]">
                    <p className="text-[2.1cqw] font-semibold leading-none">{card}</p>
                    <p className="mt-[1cqw] h-[0.9cqw] w-[70%] rounded-full bg-fog" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    case "broadcast":
      return (
        <>
          <Card className={cn("left-[8%] top-[12%] w-[50%] p-[2.2cqw]", lift)}>
            <Label className="text-mute">New broadcast</Label>
            <div className="mt-[1.4cqw] flex flex-wrap gap-[0.8cqw]">
              <Pill className="bg-lavender text-ink">Tag: dashain-sale</Pill>
              <Pill className="bg-sage text-ink">Instagram</Pill>
            </div>
            <Bubble from="us" className="mt-[1.6cqw] ml-0">
              The Dashain sale starts now. 20% off everything until Sunday.
            </Bubble>
          </Card>
          <Card className={cn("right-[7%] top-[22%] w-[32%] rotate-[3deg] p-[2cqw]", drift)}>
            <p className="font-display text-[6cqw] font-black leading-none tracking-[-0.04em]">842</p>
            <p className="mt-[0.8cqw] text-[1.8cqw] leading-tight text-mute">people can get it now</p>
            <Pill className="mt-[1.6cqw] w-full bg-ink text-white">Send</Pill>
          </Card>
          <Pill className={cn("absolute bottom-[12%] right-[16%] -rotate-2 bg-white text-ink", shadow)}>Sat, 6:00 PM</Pill>
        </>
      )
    case "ai":
      return (
        <>
          <Card className={cn("left-[10%] top-[12%] w-[54%] p-[2.2cqw]", lift)}>
            <div className="space-y-[1.2cqw]">
              <Bubble from="them">Do you have the maroon kurta in M?</Bubble>
              <Bubble from="us">Yes, M is in stock. It&apos;s Rs 2,450 with free delivery in the valley.</Bubble>
              <Pill className="ml-auto flex w-[56%] bg-fog text-ink">Order on the site</Pill>
            </div>
          </Card>
          <Pill className={cn("absolute right-[10%] top-[20%] rotate-[5deg] bg-ink text-white", shadow, drift)}>
            <svg viewBox="0 0 16 16" className="size-[2.2cqw]" aria-hidden>
              <path d="M8 1l1.6 4.4L14 7l-4.4 1.6L8 13l-1.6-4.4L2 7l4.4-1.6z" fill="#fff200" />
            </svg>
            AI reply
          </Pill>
          <Card className={cn("right-[8%] top-[52%] w-[26%] -rotate-3 p-[1.8cqw]")}>
            <Label className="text-mute">Knows</Label>
            <p className="mt-[0.8cqw] text-[1.8cqw] leading-snug">Prices, sizes, delivery, returns</p>
          </Card>
        </>
      )
    case "team":
      return (
        <>
          <div className={cn("absolute left-[10%] top-[16%] flex", drift)}>
            {[
              ["SR", "bg-yellow"],
              ["AK", "bg-sky"],
              ["MT", "bg-lavender"],
              ["+", "bg-white"],
            ].map(([initials, tone]) => (
              <Avatar key={initials} initials={initials} tone={tone} className="-ml-[2cqw] size-[13cqw] border-[0.7cqw] border-white text-[4cqw] first:ml-0" />
            ))}
          </div>
          <Card className={cn("left-[12%] top-[52%] w-[48%] p-[2cqw]", lift)}>
            <Label className="text-mute">Invite link</Label>
            <div className="mt-[1.2cqw] flex items-center gap-[1cqw]">
              <p className="min-w-0 flex-1 truncate rounded-[1.2cqw] bg-fog px-[1.4cqw] py-[1cqw] font-mono text-[1.7cqw]">app.awwtomation.com/invite/…</p>
              <Pill className="bg-ink text-white">Copy</Pill>
            </div>
          </Card>
          <div className="absolute right-[8%] top-[20%] flex w-[26%] flex-col gap-[1.2cqw]">
            {["Owner", "Admin", "Member"].map((role, index) => (
              <Pill key={role} className={cn("bg-white text-ink", shadow, index === 1 && "translate-x-[3cqw]")}>
                {role}
              </Pill>
            ))}
          </div>
        </>
      )
    case "logs":
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Card className={cn("relative w-[84%] overflow-hidden py-[0.6cqw]", lift)}>
            {[
              { dot: "bg-green", status: "Sent", text: "DM to @asha.gurung, Autumn collection link" },
              { dot: "bg-yellow", status: "Already sent", text: "Got this reply once already" },
              { dot: "bg-green", status: "Sent", text: "Comment reply to @nabin.k" },
              { dot: "bg-orange", status: "Over 24 hours", text: "Hasn't messaged in 24 hours" },
            ].map((row, index) => (
              <div key={index} className="flex items-center gap-[1.6cqw] border-b border-line px-[2.4cqw] py-[1.9cqw] last:border-0">
                <span className={cn("size-[1.8cqw] shrink-0 rounded-full", row.dot)} />
                <p className="w-[24%] shrink-0 font-mono text-[1.7cqw] uppercase tracking-[0.06em]">{row.status}</p>
                <p className="min-w-0 flex-1 truncate text-[2.2cqw] text-mute">{row.text}</p>
              </div>
            ))}
          </Card>
        </div>
      )
    case "mcp":
      return (
        <>
          <Card className={cn("left-[10%] top-[10%] w-[60%] overflow-hidden", lift)}>
            <div className="flex items-center gap-[0.8cqw] border-b border-line px-[2cqw] py-[1.3cqw]">
              {[0, 1, 2].map((dot) => (
                <span key={dot} className="size-[1.2cqw] rounded-full bg-ink/15" />
              ))}
              <Label className="ml-[1cqw] text-mute">Your AI app</Label>
            </div>
            <div className="space-y-[1.2cqw] p-[2cqw]">
              <Bubble from="them" className="ml-auto rounded-bl-[2.2cqw] rounded-br-[0.6cqw]">
                Which automation sent the most DMs this week?
              </Bubble>
              <Pill className="bg-lavender font-mono text-[1.6cqw] font-medium text-ink">awwtomation · list automations</Pill>
              <p className="text-[2.1cqw] leading-snug">Autumn collection link: 136 DMs and 49 clicks.</p>
            </div>
          </Card>
          <div className={cn("absolute right-[9%] top-[30%] grid size-[17cqw] rotate-6 place-items-center rounded-[3.6cqw] bg-white text-ink", shadow, drift)}>
            <LogoMark className="h-[8cqw]" />
          </div>
        </>
      )
    case "segments":
      return (
        <>
          <Card className={cn("left-[8%] top-[14%] w-[52%] p-[2.2cqw]", lift)}>
            <Label className="text-mute">Segment</Label>
            <p className="mt-[1cqw] text-[2.6cqw] font-bold">Wholesale buyers</p>
            <div className="mt-[1.4cqw] flex flex-wrap gap-[0.8cqw]">
              <Pill className="bg-lavender text-ink">Tag: wholesale</Pill>
              <Pill className="bg-sky text-ink">Stage: Quoted</Pill>
              <Pill className="bg-sage text-ink">Active in 30 days</Pill>
            </div>
          </Card>
          <Card className={cn("right-[8%] top-[40%] w-[30%] -rotate-3 p-[2cqw]", drift)}>
            <p className="font-display text-[6cqw] font-black leading-none tracking-[-0.04em]">214</p>
            <p className="mt-[0.8cqw] text-[1.8cqw] text-mute">contacts match</p>
          </Card>
          <p className={cn("absolute bottom-[10%] left-[10%] font-mono text-[1.6cqw] uppercase tracking-[0.08em]", ink)}>Saved filters you can message</p>
        </>
      )
    case "giveaway":
      return (
        <>
          <div className={cn("absolute left-[8%] top-[10%] w-[40%] -rotate-3 overflow-hidden rounded-[2.4cqw] bg-white", shadow, drift)}>
            <div className="mc-grid grid h-[16cqw] place-items-center bg-yellow">
              <p className="font-display text-[5.4cqw] font-black leading-none tracking-[-0.04em]">WIN</p>
            </div>
            <div className="space-y-[1.2cqw] p-[1.8cqw]">
              {[
                ["SM", "so excited 🙌", "bg-sky"],
                ["NK", "count me in!", "bg-lavender"],
              ].map(([initials, text, tone]) => (
                <div key={initials} className="flex items-center gap-[1cqw]">
                  <Avatar initials={initials} tone={tone} className="size-[4cqw] text-[1.4cqw]" />
                  <p className="rounded-[1.4cqw] bg-fog px-[1.4cqw] py-[0.7cqw] text-[1.8cqw]">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <Arrow d="M44 38 C 50 46, 55 44, 57 36" light={light} />
          <Card className={cn("right-[8%] top-[20%] w-[40%] rotate-[3deg] p-[2cqw]", lift)}>
            <Bubble from="us" className="ml-0 rounded-bl-[0.6cqw] rounded-br-[2.2cqw]">
              You&apos;re in the giveaway! Winner on Friday.
            </Bubble>
            <div className="mt-[1.4cqw] flex items-center justify-between">
              <Pill className="bg-lavender px-[1.4cqw] text-[1.6cqw] text-ink">giveaway</Pill>
              <p className="font-display text-[3.6cqw] font-black leading-none tracking-[-0.03em]">
                59 <span className="font-sans text-[1.6cqw] font-medium text-mute">entries</span>
              </p>
            </div>
          </Card>
        </>
      )
    case "import":
      return (
        <>
          <div className={cn("absolute left-[10%] top-[16%] h-[62%] w-[24%] -rotate-6 rounded-[2cqw] bg-white p-[1.8cqw]", shadow, drift)}>
            <span className="absolute right-0 top-0 size-[5cqw] rounded-bl-[1.6cqw] rounded-tr-[2cqw] bg-fog" />
            <p className="mt-[5cqw] font-display text-[4.2cqw] font-black leading-none text-green">CSV</p>
            {[80, 64, 72, 50].map((w) => (
              <span key={w} className="mt-[1.3cqw] block h-[0.9cqw] rounded-full bg-fog" style={{ width: `${w}%` }} />
            ))}
          </div>
          <Arrow d="M36 28 C 42 22, 46 24, 50 28" light={light} />
          <Card className={cn("right-[8%] top-[12%] w-[46%] overflow-hidden py-[0.6cqw]", lift)}>
            {[
              ["SR", "Sunita Rai", "wholesale"],
              ["DS", "Dipesh Shrestha", "vip"],
              ["MT", "Manisha Tamang", "repeat-buyer"],
            ].map(([initials, name, tag]) => (
              <div key={name} className="flex items-center gap-[1.2cqw] border-b border-line px-[1.8cqw] py-[1.2cqw] last:border-0">
                <Avatar initials={initials} tone="bg-sky" className="size-[4.4cqw] text-[1.5cqw]" />
                <p className="min-w-0 flex-1 truncate text-[1.9cqw] font-semibold">{name}</p>
                <Pill className="bg-sage px-[1.2cqw] py-[0.7cqw] text-[1.5cqw] text-ink">{tag}</Pill>
              </div>
            ))}
          </Card>
          <Pill className={cn("absolute bottom-[10%] right-[16%] bg-white text-green", shadow)}>
            <Check className="size-[2.4cqw]" />
            Imported 5 contacts
          </Pill>
        </>
      )
    case "analytics":
      return (
        <>
          <Card className={cn("left-[8%] top-[12%] w-[56%] p-[2.2cqw]", lift)}>
            <Label className="text-mute">DMs sent · 30 days</Label>
            <p className="mt-[1cqw] font-display text-[6cqw] font-black leading-none tracking-[-0.04em]">1,223</p>
            <div className="mt-[1.8cqw] flex h-[13cqw] items-end gap-[1cqw]">
              {[34, 52, 40, 68, 58, 88, 72, 96, 64, 80].map((h, i) => (
                <span key={i} className={cn("flex-1 rounded-t-[0.8cqw]", i === 7 ? "bg-purple" : "bg-lavender")} style={{ height: `${h}%` }} />
              ))}
            </div>
          </Card>
          <Card className={cn("right-[8%] top-[24%] w-[28%] rotate-[3deg] p-[2cqw]", drift)}>
            <Label className="text-mute">Click rate</Label>
            <p className="mt-[0.8cqw] font-display text-[5cqw] font-black leading-none tracking-[-0.04em]">34%</p>
            <p className="mt-[0.8cqw] text-[1.7cqw] font-semibold text-green">↗ up 12%</p>
          </Card>
        </>
      )
  }
}

/**
 * The guide's drawing on its colour, with the faint square grid. Hovering the
 * card around it (a `group`) lifts the front card a little.
 */
export function GuideArt({ name, color, className }: { name: string; color: string; className?: string }) {
  const light = isLight(color)
  return (
    <div
      className={cn("@container relative aspect-[447/245] overflow-hidden", light ? "mc-grid" : "mc-grid mc-grid-light", className)}
      style={{ backgroundColor: color }}
      aria-hidden
    >
      <Scene name={name as GuideArtName} light={light} />
    </div>
  )
}
