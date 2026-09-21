import { cn } from "@/lib/utils"

/*
 * Small playful spot icons that sit above section headings, drawn for this
 * site in the same spirit as ManyChat's (flat, one colour, slightly tilted).
 */

export type SpotIconName = "money" | "eyes" | "spark" | "rocket" | "smile" | "insta" | "bolt" | "heart"

/** Desktop sizes that give each drawing the same optical weight as ManyChat's spot icons at 1800px. */
export const spotIconSize: Record<SpotIconName, string> = {
  money: "lg:size-[3.7rem]",
  eyes: "lg:size-[4.6rem]",
  spark: "lg:size-[4.8rem]",
  rocket: "lg:size-[5.6rem]",
  smile: "lg:size-[3.9rem]",
  insta: "lg:size-[5.1rem]",
  bolt: "lg:size-[4.2rem]",
  heart: "lg:size-[4.2rem]",
}

export function SpotIcon({ name, className }: { name: SpotIconName; className?: string }) {
  const common = { viewBox: "0 0 64 64", className: cn("h-14 w-14", className), "aria-hidden": true as const }
  switch (name) {
    case "money":
      return (
        <svg {...common}>
          <path d="M32 6c14.4 0 26 10.3 26 23s-11.6 23-26 23c-2.2 0-4.4-.2-6.4-.7L14 58l2.6-11.1C10.1 42.7 6 36.2 6 29 6 16.3 17.6 6 32 6z" fill="currentColor" />
          <path d="M37.5 22.5c-1.2-1.6-3.3-2.6-5.7-2.6-3.3 0-5.8 1.8-5.8 4.4 0 6.1 11.9 3.2 11.9 9.4 0 2.8-2.7 4.8-6.3 4.8-2.7 0-5.1-1.1-6.3-3M32 16v4m0 18.5v4.5" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
        </svg>
      )
    case "eyes":
      return (
        <svg {...common}>
          <ellipse cx="21" cy="32" rx="13" ry="18" fill="currentColor" transform="rotate(-12 21 32)" />
          <ellipse cx="43" cy="32" rx="13" ry="18" fill="currentColor" transform="rotate(12 43 32)" />
          <ellipse cx="21" cy="33" rx="8" ry="12.5" fill="#fff" transform="rotate(-12 21 33)" />
          <ellipse cx="43" cy="33" rx="8" ry="12.5" fill="#fff" transform="rotate(12 43 33)" />
          <circle cx="24" cy="38" r="4.2" fill="currentColor" />
          <circle cx="46" cy="38" r="4.2" fill="currentColor" />
        </svg>
      )
    case "spark":
      return (
        <svg {...common}>
          <path d="M34 14l5.5 14.5L55 30l-12 9.5L47 55 34 46 21 55l4-15.5L13 30l15.5-1.5z" fill="currentColor" transform="rotate(-10 34 34)" />
          <path d="M10 14l5 4M8 28h6M52 8l-3 6M58 20l-6 2M22 6l1 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case "rocket":
      return (
        <svg {...common}>
          <path d="M50 10c-12 1-22 8-28 19l-8 1-6 8 11 1 8 8 1 11 8-6 1-8c11-6 18-16 19-28 0-4-2-6-6-6z" fill="currentColor" />
          <circle cx="40" cy="22" r="5.5" fill="#fff" />
          <path d="M14 46c-4 1-6 4-6 10 6 0 9-2 10-6" fill="currentColor" />
          <path d="M56 40l2 4 4 1-4 2-2 4-1-4-4-2 4-1zM30 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="currentColor" />
        </svg>
      )
    case "smile":
      return (
        <svg {...common}>
          <path d="M8 10h48v34H32l-10 12 2-12H8z" fill="currentColor" transform="rotate(-6 32 32)" />
          <circle cx="25" cy="24" r="2.8" fill="#fff" />
          <circle cx="38" cy="22.5" r="2.8" fill="#fff" />
          <path d="M23 32c4 5 13 4 17-1" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case "insta":
      return (
        <svg {...common}>
          <path d="M32 4l6 10 11-4-1 12 12 3-8 9 8 9-12 3 1 12-11-4-6 10-6-10-11 4 1-12-12-3 8-9-8-9 12-3-1-12 11 4z" fill="currentColor" />
          <rect x="21" y="21" width="22" height="22" rx="7" fill="none" stroke="#fff" strokeWidth="3.2" />
          <circle cx="32" cy="32" r="5.2" fill="none" stroke="#fff" strokeWidth="3.2" />
          <circle cx="38.5" cy="25.5" r="1.8" fill="#fff" />
        </svg>
      )
    case "bolt":
      return (
        <svg {...common}>
          <path d="M36 4L12 36h16l-4 24 26-34H34z" fill="currentColor" />
        </svg>
      )
    case "heart":
      return (
        <svg {...common}>
          <path d="M32 56S6 40 6 22c0-8 6-14 14-14 5 0 9 3 12 7 3-4 7-7 12-7 8 0 14 6 14 14 0 18-26 34-26 34z" fill="currentColor" />
        </svg>
      )
  }
}

/** Circle-and-double-check used in the "Automatically" list. */
export function DoubleCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-8", className)} aria-hidden>
      <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 16.5l4.5 4.5L22 11M13 17l4 4 9.5-10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Small square check used in before/after and pricing tables. */
export function BoxCheck({ tone = "dark", className }: { tone?: "dark" | "light" | "green"; className?: string }) {
  const box = tone === "dark" ? "#0f0f0f" : tone === "light" ? "#ffffff" : "none"
  const tick = tone === "dark" ? "#ffffff" : "#007257"
  return (
    <svg viewBox="0 0 20 20" className={cn("size-5", className)} aria-hidden>
      <rect x="1" y="1" width="18" height="18" rx="4.5" fill={box} stroke={tone === "green" ? "#007257" : box} strokeWidth="1.4" />
      <path d="M6 10.2l2.6 2.6L14.2 7" fill="none" stroke={tick} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function BoxCross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={cn("size-5", className)} aria-hidden>
      <rect x="1" y="1" width="18" height="18" rx="4.5" fill="none" stroke="#ff4c00" strokeWidth="1.4" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#ff4c00" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

/*
 * Instagram and Messenger are drawn as their official marks: the Instagram
 * camera on its corner-to-corner gradient, and the Messenger bubble with the
 * white lightning. Do not recolour them: both are trademarks and both are
 * recognised by the shape and the gradient together.
 */

/**
 * Monochrome marks: no background, drawn in `currentColor`, so they come out
 * white on the dark hero. Use these wherever the full-colour logo would fight
 * with a photograph; use the logos themselves everywhere else.
 */
export function InstagramMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-7", className)} aria-hidden>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.6" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.6" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.3" cy="6.7" r="1.3" fill="currentColor" />
    </svg>
  )
}

export function MessengerMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-7", className)} aria-hidden>
      {/* One path, even-odd filled, so the lightning is a hole and whatever is
          behind the mark shows through it. */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M12 1.4C5.85 1.4 1.05 5.9 1.05 11.98c0 3.18 1.31 5.94 3.44 7.84.18.16.29.39.29.63l.06 1.95c.02.62.66 1.02 1.22.78l2.17-.96c.19-.08.39-.1.59-.04 1 .28 2.07.42 3.18.42 6.15 0 10.95-4.5 10.95-10.62S18.15 1.4 12 1.4zM5.42 15.14l3.22-5.1c.51-.81 1.61-1.01 2.38-.44l2.56 1.92c.23.17.55.17.79 0l3.45-2.62c.46-.35 1.06.2.75.69l-3.21 5.1c-.51.81-1.61 1.01-2.38.44l-2.56-1.92a.66.66 0 00-.79 0l-3.46 2.62c-.46.35-1.06-.2-.75-.69z"
      />
    </svg>
  )
}

/**
 * The brand gradients, defined once for the whole document. Rendered by the
 * root layout; the glyphs below reference these ids. Keep this mounted, and
 * outside any hidden container, or the logos lose their fill.
 */
export function BrandGradients() {
  return (
    <svg aria-hidden focusable="false" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
      <defs>
        <radialGradient id="ig-warm" cx="0.28" cy="1.02" r="1.06">
          <stop offset="0" stopColor="#ffdd55" />
          <stop offset="0.1" stopColor="#ffdd55" />
          <stop offset="0.5" stopColor="#ff543e" />
          <stop offset="1" stopColor="#c837ab" />
        </radialGradient>
        <radialGradient id="ig-cool" cx="-0.06" cy="0.06" r="0.74">
          <stop offset="0" stopColor="#3771c8" />
          <stop offset="0.6" stopColor="#6600ff" stopOpacity="0" />
          <stop offset="1" stopColor="#6600ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ms-grad" cx="0.19" cy="0.99" r="1.12">
          <stop offset="0" stopColor="#0099ff" />
          <stop offset="0.6" stopColor="#a033ff" />
          <stop offset="0.9" stopColor="#ff5280" />
          <stop offset="1" stopColor="#ff7061" />
        </radialGradient>
      </defs>
    </svg>
  )
}

/** The Instagram glyph. */
export function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-7", className)} aria-hidden>
      <rect x="1" y="1" width="22" height="22" rx="6.6" fill="url(#ig-warm)" />
      <rect x="1" y="1" width="22" height="22" rx="6.6" fill="url(#ig-cool)" />
      <rect x="5.4" y="5.4" width="13.2" height="13.2" rx="4" fill="none" stroke="#fff" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="#fff" strokeWidth="1.75" />
      <circle cx="16.45" cy="7.65" r="1.05" fill="#fff" />
    </svg>
  )
}

/** The same Instagram glyph, kept under the name the nav uses. */
export function InstagramTile({ className }: { className?: string }) {
  return <InstagramGlyph className={className} />
}

/**
 * The AI product tile. Instagram and Messenger are trademarks, so they keep
 * their own logos; this one is ours, drawn in the site's own colours.
 */
export function AiTile({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-7", className)} aria-hidden>
      <rect x="1" y="1" width="22" height="22" rx="6.6" fill="#007257" />
      <path d="M12.6 5.4l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z" fill="#fff" />
      <path d="M6.6 15.4l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" fill="#fff" fillOpacity="0.75" />
    </svg>
  )
}

/** The Messenger glyph. */
export function MessengerGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-7", className)} aria-hidden>
      <path
        d="M12 1.4C5.85 1.4 1.05 5.9 1.05 11.98c0 3.18 1.31 5.94 3.44 7.84.18.16.29.39.29.63l.06 1.95c.02.62.66 1.02 1.22.78l2.17-.96c.19-.08.39-.1.59-.04 1 .28 2.07.42 3.18.42 6.15 0 10.95-4.5 10.95-10.62S18.15 1.4 12 1.4z"
        fill="url(#ms-grad)"
      />
      <path
        d="M5.42 15.14l3.22-5.1c.51-.81 1.61-1.01 2.38-.44l2.56 1.92c.23.17.55.17.79 0l3.45-2.62c.46-.35 1.06.2.75.69l-3.21 5.1c-.51.81-1.61 1.01-2.38.44l-2.56-1.92a.66.66 0 00-.79 0l-3.46 2.62c-.46.35-1.06-.2-.75-.69z"
        fill="#fff"
      />
    </svg>
  )
}
