"use client";

import Image from "next/image";
import {
  memo,
  useRef,
  useState,
  useEffect,
  type CSSProperties,
  type ReactNode,
} from "react";

import { useInView } from "@/components/mc/use-in-view";
import { cn } from "@/lib/utils";

/*
 * Phone mock-ups in the style of ManyChat's product shots. Every scene is drawn
 * in units of a 428px-wide phone screen (ManyChat's feature phone at 1800px)
 * and scales with its container through `cqw`, so one scene works in the big
 * feature phone, the "See it in action" iPhone and on top of a photo.
 *
 * Scenes: a DM conversation, an Instagram post with its comments sheet sliding
 * up, a comments sheet on its own, and a Facebook post with a comment being
 * typed. Screens are light, the way Instagram and Messenger look by default;
 * only bubbles laid straight over a photograph go dark so they stay readable.
 *
 * Nothing plays until the scene scrolls into the middle of the viewport, and
 * lines land about a second and a half apart so a reader can follow along.
 */

export type Channel = "instagram" | "messenger";

export interface Comment {
  name: string;
  text: string;
  avatar?: string;
  time?: string;
  likes?: string;
  /** Blue "@name.." mention in front of the text. */
  mention?: string;
  faded?: boolean;
}

export type ChatLine =
  | { from: "user"; text: string; avatar?: string }
  | { from: "bot"; text: string }
  | {
      kind: "story";
      label: string;
      image: string;
      avatar?: string;
      reaction?: string;
    }
  | {
      kind: "link";
      url: string;
      title: string;
      domain: string;
      avatar?: string;
    }
  | { kind: "note"; text: string };

interface Shared {
  /** Instagram or Messenger. Set per scene so one section can show both. */
  channel?: Channel;
}

export type ChatScript =
  | (Shared & {
      kind?: "chat";
      header?: { name: string; username?: string; avatar?: string };
      lines: ChatLine[];
    })
  | (Shared & {
      kind: "post";
      account: { name: string; avatar?: string };
      image: string;
      caption: string;
      comments: Comment[];
    })
  | (Shared & { kind: "comments"; comments: Comment[] })
  | (Shared & {
      kind: "fbpost";
      image: string;
      reactions: string;
      comment: Comment;
      lines: ChatLine[];
    });

/** A length in scene units, optionally never smaller than `min` CSS px. */
const u = (n: number, min?: number) =>
  min ? `max(${min}px, calc(var(--u) * ${n}))` : `calc(var(--u) * ${n})`;

/* Sent messages: Instagram's purple gradient, Messenger's flat blue. */
const BUBBLE: Record<Channel, string> = {
  instagram: "linear-gradient(135deg,#4f5bd5 0%,#7b3fc9 55%,#9c33b8 100%)",
  messenger: "#0084ff",
};

/** How long a scene waits between lines when it plays itself. */
export const STEP_MS = 1500;

function useSteps(
  total: number,
  interval: number,
  replayKey: unknown,
  active: boolean,
) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(total);
      return;
    }
    if (!active) {
      setShown(0);
      return;
    }
    // The first line lands straight away; the rest follow one at a time.
    let count = 1;
    setShown(1);
    const timer = setInterval(() => {
      count += 1;
      setShown(count);
      if (count >= total) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [total, interval, replayKey, active]);
  return shown;
}

/** Types `text` out when `active` turns on; the untyped part keeps its space so bubbles never resize. */
function Typed({ text, active }: { text: string; active: boolean }) {
  const [count, setCount] = useState(active ? 0 : text.length);
  useEffect(() => {
    if (!active) {
      setCount(text.length);
      return;
    }
    setCount(0);
    const step = Math.max(1, Math.round(text.length / 34));
    const timer = setInterval(() => {
      setCount((value) => {
        const next = Math.min(text.length, value + step);
        if (next >= text.length) clearInterval(timer);
        return next;
      });
    }, 34);
    return () => clearInterval(timer);
  }, [text, active]);
  return (
    <>
      {text.slice(0, count)}
      <span className="opacity-0">{text.slice(count)}</span>
    </>
  );
}

function Avatar({
  src,
  size,
  min,
  className,
}: {
  src?: string;
  size: number;
  min?: number;
  className?: string;
}) {
  const style: CSSProperties = { width: u(size, min), height: u(size, min) };
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-block shrink-0 overflow-hidden rounded-full bg-[linear-gradient(135deg,#e8c4a8,#8b6a55)]",
        className,
      )}
      style={style}
    >
      {src ? (
        <Image src={src} alt="" fill sizes="64px" className="object-cover" />
      ) : null}
    </span>
  );
}

function Appear({
  on,
  children,
  className,
}: {
  on: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        on
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Heart({ size = 26 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      style={{ width: u(size, 12), height: u(size, 12) }}
    >
      <path
        d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

/* ------------------------------------------------------------ Lines */

/**
 * `light` is a white phone screen: an incoming message is the grey bubble
 * Instagram and Messenger draw by default. `onPhoto` puts the same lines
 * straight over a photograph, where incoming goes dark to stay readable.
 */
export type SceneTone = "light" | "onPhoto";

function Line({
  line,
  channel,
  tone,
  typing,
  wide,
}: {
  line: ChatLine;
  channel: Channel;
  tone: SceneTone;
  typing: boolean;
  wide: boolean;
}) {
  const text = { fontSize: u(19, 12.5), lineHeight: 1.3 };
  const dark = tone === "onPhoto";
  if ("from" in line && line.from === "user") {
    return (
      <div className="flex items-end" style={{ gap: u(10) }}>
        <Avatar src={line.avatar} size={30} min={18} />
        <p
          className={cn(
            "max-w-[74%]",
            dark ? "bg-[#262626] text-white" : "bg-[#efefef] text-ink",
          )}
          style={{
            ...text,
            borderRadius: u(22, 14),
            padding: `${u(13, 7)} ${u(20, 12)}`,
          }}
        >
          {line.text}
        </p>
      </div>
    );
  }
  if ("from" in line && line.from === "bot") {
    return (
      <div className="flex justify-end">
        <div
          className={cn("text-white", wide ? "max-w-[88%]" : "max-w-[76%]")}
          style={{
            background: BUBBLE[channel],
            borderRadius: u(22, 14),
            padding: `${u(14, 8)} ${u(20, 12)}`,
          }}
        >
          <p style={text}>
            <Typed text={line.text} active={typing} />
          </p>
        </div>
      </div>
    );
  }
  if (line.kind === "story") {
    return (
      <div className="flex items-end" style={{ gap: u(10), paddingLeft: u(4) }}>
        <Avatar src={line.avatar} size={30} min={18} />
        <div>
          <p
            className={dark ? "text-white/70" : "text-black/45"}
            style={{ fontSize: u(17, 11), marginBottom: u(10) }}
          >
            {line.label}
          </p>
          <div
            className={cn(
              "relative border-l-2",
              dark ? "border-white/30" : "border-black/15",
            )}
            style={{ paddingLeft: u(12) }}
          >
            <div
              className="relative overflow-hidden bg-[#efefef]"
              style={{
                width: u(150, 80),
                height: u(265, 142),
                borderRadius: u(14, 8),
              }}
            >
              <Image
                src={line.image}
                alt=""
                fill
                sizes="(min-width:1024px) 12vw, 30vw"
                className="object-cover"
              />
            </div>
            {line.reaction ? (
              <span
                className="absolute"
                style={{ right: u(-22), bottom: u(-10), fontSize: u(46, 24) }}
              >
                {line.reaction}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
  if (line.kind === "link") {
    return (
      <div className="flex items-end" style={{ gap: u(10) }}>
        <Avatar src={line.avatar} size={30} min={18} />
        <div
          className={cn(
            "w-[64%] overflow-hidden",
            dark
              ? "bg-[#262626] text-white"
              : "border border-black/10 bg-white text-ink",
          )}
          style={{ borderRadius: u(20, 12) }}
        >
          <p
            className="truncate underline underline-offset-2"
            style={{ fontSize: u(17, 11), padding: `${u(14, 8)} ${u(16, 10)}` }}
          >
            {line.url}
          </p>
          <div className="relative flex aspect-[4/3] items-center justify-center bg-[linear-gradient(160deg,#f1eeea,#cfc6bc)]">
            <svg
              viewBox="0 0 64 48"
              className="w-[46%] text-[#3a3a3a]"
              aria-hidden
            >
              <path d="M10 14h44l-4 30H14z" fill="currentColor" />
              <path
                d="M22 14c0-8 4-12 10-12s10 4 10 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div style={{ padding: `${u(12, 7)} ${u(16, 10)} ${u(14, 8)}` }}>
            <p className="font-semibold" style={{ fontSize: u(17, 11) }}>
              {line.title}
            </p>
            <p
              className={dark ? "text-white/45" : "text-black/45"}
              style={{ fontSize: u(15, 10) }}
            >
              {line.domain}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <p
      className={cn(
        "text-center uppercase tracking-wider",
        dark ? "text-white/60" : "text-black/40",
      )}
      style={{ fontSize: u(14, 10) }}
    >
      {line.text}
    </p>
  );
}

function Lines({
  lines,
  shown,
  channel,
  tone,
  offset = 0,
  wide = false,
}: {
  lines: ChatLine[];
  shown: number;
  channel: Channel;
  tone: SceneTone;
  offset?: number;
  wide?: boolean;
}) {
  return (
    <>
      {lines.map((line, index) => {
        const step = index + offset;
        const isBot = "from" in line && line.from === "bot";
        return (
          <Appear key={index} on={step < shown}>
            <Line
              line={line}
              channel={channel}
              tone={tone}
              typing={isBot && step === shown - 1}
              wide={wide}
            />
          </Appear>
        );
      })}
    </>
  );
}

/* ------------------------------------------------------------ Comments */

function CommentRow({ comment }: { comment: Comment }) {
  return (
    <div
      className={cn("flex text-ink", comment.faded && "opacity-45")}
      style={{ gap: u(14) }}
    >
      <Avatar src={comment.avatar} size={50} min={24} />
      <div
        className="min-w-0 flex-1"
        style={{ fontSize: u(22, 12), lineHeight: 1.25 }}
      >
        <p>
          <span className="font-semibold">{comment.name}</span>
          {comment.time ? (
            <span className="text-black/45" style={{ marginLeft: u(10) }}>
              {comment.time}
            </span>
          ) : null}
        </p>
        <p>
          {comment.mention ? (
            <span className="text-[#1d6fe8]">{comment.mention} </span>
          ) : null}
          {comment.text}
        </p>
        <p
          className="text-black/45"
          style={{ fontSize: u(20, 11), marginTop: u(2) }}
        >
          Reply
        </p>
      </div>
      <div
        className="flex flex-col items-center text-black/45"
        style={{ gap: u(4), fontSize: u(20, 11) }}
      >
        <Heart />
        {comment.likes ? <span>{comment.likes}</span> : null}
      </div>
    </div>
  );
}

function CommentsSheet({
  comments,
  shown,
  offset,
  title,
}: {
  comments: Comment[];
  shown: number;
  offset: number;
  title?: boolean;
}) {
  return (
    <div className="flex flex-col" style={{ gap: u(24) }}>
      {title ? (
        <div
          className="border-b border-black/10 text-center text-ink"
          style={{ paddingBottom: u(18) }}
        >
          <p className="font-semibold" style={{ fontSize: u(22, 12) }}>
            Comments
          </p>
        </div>
      ) : null}
      {comments.map((comment, index) => (
        <Appear key={index} on={index + offset < shown}>
          <CommentRow comment={comment} />
        </Appear>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ Scenes */

export type SceneFrame = "phone" | "device" | "overlay";

/**
 * The soft translucent circle that shows where a finger went. Every scene gets
 * one so the mock-ups read as something being used rather than a still.
 */
function Gesture({
  kind,
  className,
  style,
}: {
  kind: "tap" | "swipe";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-20 rounded-full bg-black/[0.14] ring-1 ring-inset ring-black/10",
        kind === "tap" ? "scene-tap" : "scene-swipe",
        className,
      )}
      style={{ width: u(58, 26), height: u(58, 26), ...style }}
    />
  );
}

/* Icons drawn at the weight Instagram and Messenger use in their chat chrome. */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Chevron({ style }: { style: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" style={style} aria-hidden>
      <path d="M14.5 5l-7 7 7 7" {...stroke} strokeWidth={2.2} />
    </svg>
  );
}

function VideoIcon({ style }: { style: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" style={style} aria-hidden>
      <rect x="2.5" y="6.5" width="13" height="11" rx="3" {...stroke} />
      <path d="M15.5 10.5l6-3v9l-6-3z" {...stroke} />
    </svg>
  );
}

function InfoIcon({ style }: { style: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" style={style} aria-hidden>
      <circle cx="12" cy="12" r="9" {...stroke} />
      <path d="M12 11v5.5M12 7.6v.2" {...stroke} strokeWidth={2} />
    </svg>
  );
}

function PhoneIcon({ style }: { style: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" style={style} aria-hidden>
      <path
        d="M6.6 3.5l2.8 3.3-1.6 2.4a12 12 0 006.9 6.9l2.4-1.6 3.3 2.8-1.7 2.6c-8.6.4-15.6-6.6-15.2-15.2z"
        {...stroke}
      />
    </svg>
  );
}

function CameraIcon({ style }: { style: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" style={style} aria-hidden>
      <path d="M3 8.5h3.2l1.4-2h8.8l1.4 2H21v10H3z" {...stroke} />
      <circle cx="12" cy="13" r="3.2" {...stroke} />
    </svg>
  );
}

function MicIcon({ style }: { style: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" style={style} aria-hidden>
      <rect x="9" y="3" width="6" height="11" rx="3" {...stroke} />
      <path d="M5.5 11.5a6.5 6.5 0 0013 0M12 18v3" {...stroke} />
    </svg>
  );
}

function GalleryIcon({ style }: { style: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" style={style} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="3" {...stroke} />
      <path d="M3.5 16l4.5-4 4 3.5 3.5-3 5 4.5" {...stroke} />
      <circle cx="8.6" cy="9.4" r="1.4" {...stroke} />
    </svg>
  );
}

function StickerIcon({ style }: { style: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" style={style} aria-hidden>
      <path d="M21 12a9 9 0 10-9 9c1.6-3.4 5.6-7.4 9-9z" {...stroke} />
      <path
        d="M8.6 9.5v.2M15.2 9.5v.2M8.8 14.4c1.6 1.6 4 1.4 5.4-.4"
        {...stroke}
        strokeWidth={2}
      />
    </svg>
  );
}

function PlusIcon({ style }: { style: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" style={style} aria-hidden>
      <circle cx="12" cy="12" r="9" {...stroke} />
      <path d="M12 8v8M8 12h8" {...stroke} strokeWidth={2} />
    </svg>
  );
}

/**
 * The conversation header, drawn the way each app draws it: Instagram puts the
 * name over the handle with a video-call and info button, Messenger puts an
 * "Active now" line under the name and tints its controls blue.
 */
function PhoneHeader({
  name,
  username,
  avatar,
  channel,
}: {
  name: string;
  username?: string;
  avatar?: string;
  channel: Channel;
}) {
  const messenger = channel === "messenger";
  const icon = { width: u(24, 13), height: u(24, 13) };
  const handle = username ?? name.toLowerCase().replace(/[^a-z]+/g, ".");
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center border-b border-black/[0.08]",
        messenger ? "text-[#0084ff]" : "text-ink",
      )}
      style={{ gap: u(10), height: u(96, 52), padding: `0 ${u(13, 7)}` }}
    >
      <Chevron style={{ width: u(22, 12), height: u(22, 12) }} />
      <span className="relative">
        <Avatar src={avatar} size={52} min={26} />
        {messenger ? (
          <span
            className="absolute rounded-full border-2 border-white bg-[#31a24c]"
            style={{
              right: u(-1),
              bottom: u(-1),
              width: u(16, 8),
              height: u(16, 8),
            }}
          />
        ) : null}
      </span>
      <span className="min-w-0 flex-1 leading-tight text-ink">
        <span
          className="block truncate font-semibold"
          style={{ fontSize: u(20, 12) }}
        >
          {name}
        </span>
        <span
          className="block truncate text-black/45"
          style={{ fontSize: u(16, 10) }}
        >
          {messenger ? "Active now" : handle}
        </span>
      </span>
      <span
        className="flex shrink-0 items-center"
        style={{ gap: u(12, 7) }}
        aria-hidden
      >
        {messenger ? <PhoneIcon style={icon} /> : null}
        <VideoIcon style={icon} />
        {messenger ? null : <InfoIcon style={icon} />}
      </span>
    </div>
  );
}

/** The message bar along the bottom of the thread. */
function Composer({ channel }: { channel: Channel }) {
  const messenger = channel === "messenger";
  const icon = { width: u(28, 14), height: u(28, 14) };
  const field = {
    height: u(60, 30),
    borderRadius: u(30, 15),
    fontSize: u(19, 12),
  };

  if (messenger) {
    return (
      <div
        className="flex shrink-0 items-center text-[#0084ff]"
        style={{
          gap: u(14, 7),
          padding: `${u(10, 5)} ${u(16, 8)} ${u(16, 8)}`,
        }}
        aria-hidden
      >
        <PlusIcon style={icon} />
        <CameraIcon style={icon} />
        <GalleryIcon style={icon} />
        <div
          className="flex flex-1 items-center bg-[#f0f0f3] text-black/40"
          style={{ ...field, padding: `0 ${u(18, 9)}` }}
        >
          <span style={{ fontSize: field.fontSize }}>Aa</span>
        </div>
        <MicIcon style={icon} />
      </div>
    );
  }

  return (
    <div
      className="flex shrink-0 items-center"
      style={{ gap: u(12, 6), padding: `${u(10, 5)} ${u(16, 8)} ${u(16, 8)}` }}
      aria-hidden
    >
      <span
        className="flex shrink-0 items-center justify-center rounded-full text-white"
        style={{
          width: u(60, 30),
          height: u(60, 30),
          background: BUBBLE.instagram,
        }}
      >
        <CameraIcon style={{ width: u(30, 15), height: u(30, 15) }} />
      </span>
      <div
        className="flex flex-1 items-center border border-black/[0.12] text-black/40"
        style={{ ...field, padding: `0 ${u(18, 9)}`, gap: u(14, 7) }}
      >
        <span className="flex-1 truncate" style={{ fontSize: field.fontSize }}>
          Message...
        </span>
        <MicIcon style={icon} />
        <GalleryIcon style={icon} />
        <StickerIcon style={icon} />
      </div>
    </div>
  );
}

type ChatOnly = Exclude<ChatScript, { kind: "post" | "comments" | "fbpost" }>;

function ChatView({
  script,
  shown,
  channel,
  tone,
  frame,
}: {
  script: ChatOnly;
  shown: number;
  channel: Channel;
  tone: SceneTone;
  frame: SceneFrame;
}) {
  const overlay = frame === "overlay";
  if (overlay) {
    return (
      <div
        className="relative flex h-full flex-col justify-end"
        style={{ gap: u(12, 6) }}
      >
        <Lines
          lines={script.lines}
          shown={shown}
          channel={channel}
          tone={tone}
          wide
        />
      </div>
    );
  }
  return (
    <div className="relative flex h-full flex-col bg-white">
      {script.header ? (
        <PhoneHeader
          name={script.header.name}
          username={script.header.username}
          avatar={script.header.avatar}
          channel={channel}
        />
      ) : null}
      <div
        className="relative flex flex-1 flex-col justify-end overflow-hidden"
        style={{ gap: u(12, 6), padding: `${u(20)} ${u(18, 9)} ${u(14, 7)}` }}
      >
        <Lines
          lines={script.lines}
          shown={shown}
          channel={channel}
          tone={tone}
        />
        {/* A thumb scrolling the thread as the newest reply lands. */}
        {shown === 2 ? (
          <Gesture
            kind="swipe"
            style={{ left: "50%", bottom: u(30), translate: "-50% 0" }}
          />
        ) : null}
      </div>
      <Composer channel={channel} />
    </div>
  );
}

function PostView({
  script,
  shown,
}: {
  script: Extract<ChatScript, { kind: "post" }>;
  shown: number;
}) {
  const sheetUp = shown >= 2;
  return (
    <div className="relative h-full overflow-hidden bg-white text-ink">
      <div
        className="flex items-center"
        style={{ height: u(100, 44), gap: u(14), padding: `0 ${u(24, 12)}` }}
      >
        <Avatar src={script.account.avatar} size={50} min={24} />
        <span className="font-semibold" style={{ fontSize: u(22, 12) }}>
          {script.account.name}
        </span>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 bg-[#efefef]"
        style={{ top: u(100, 44) }}
      >
        <Image
          src={script.image}
          alt=""
          fill
          sizes="(min-width:1024px) 24vw, 60vw"
          className="object-cover object-top"
        />
      </div>
      <p
        className={cn(
          "absolute left-1/2 z-10 w-max max-w-[82%] -translate-x-1/2 rounded-full bg-magenta text-center font-semibold leading-tight text-white transition-[top,opacity,scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          shown >= 1 ? "opacity-100" : "scale-90 opacity-0",
        )}
        style={{
          top: sheetUp ? `calc(45% - ${u(40, 22)})` : "74%",
          fontSize: u(20, 11),
          padding: `${u(9, 5)} ${u(22, 12)}`,
        }}
      >
        {script.caption}
      </p>
      <div
        className="absolute inset-x-0 bottom-0 bg-white shadow-[0_-12px_30px_-12px_rgba(0,0,0,0.35)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          top: "45%",
          borderRadius: `${u(36, 18)} ${u(36, 18)} 0 0`,
          padding: `${u(52, 26)} ${u(26, 12)} 0`,
          transform: sheetUp ? "none" : "translateY(101%)",
        }}
      >
        <span
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black/20"
          style={{ top: u(16, 8), width: u(44, 22), height: u(5, 3) }}
        />
        {shown === 2 ? (
          <Gesture
            kind="swipe"
            style={{ left: "50%", top: u(-26, -13), translate: "-50% 0" }}
          />
        ) : null}
        <CommentsSheet comments={script.comments} shown={shown} offset={1} />
      </div>
    </div>
  );
}

function CommentsView({
  script,
  shown,
  frame,
}: {
  script: Extract<ChatScript, { kind: "comments" }>;
  shown: number;
  frame: SceneFrame;
}) {
  const overlay = frame === "overlay";
  const card = (
    <div
      className={cn(
        "relative bg-white",
        overlay && "shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]",
      )}
      style={{
        borderRadius: overlay ? u(34, 16) : `${u(36, 18)} ${u(36, 18)} 0 0`,
        padding: `${u(34, 18)} ${u(24, 12)} ${u(30, 14)}`,
      }}
    >
      <span
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black/20"
        style={{ top: u(12, 6), width: u(44, 22), height: u(5, 3) }}
      />
      {shown === 1 && !overlay ? (
        <Gesture
          kind="swipe"
          style={{ left: "50%", top: u(-20, -10), translate: "-50% 0" }}
        />
      ) : null}
      <CommentsSheet
        comments={script.comments}
        shown={shown}
        offset={0}
        title
      />
    </div>
  );
  if (overlay) return card;
  return (
    <div className="flex h-full flex-col justify-end bg-white">{card}</div>
  );
}

function FbPostView({
  script,
  shown,
  channel,
  tone,
  frame,
}: {
  script: Extract<ChatScript, { kind: "fbpost" }>;
  shown: number;
  channel: Channel;
  tone: SceneTone;
  frame: SceneFrame;
}) {
  const full = frame !== "overlay";
  return (
    <div
      className={cn(
        "relative flex h-full flex-col",
        full ? "justify-center bg-white" : "justify-end",
      )}
      style={{ gap: u(14, 8), padding: full ? `${u(24)} ${u(18, 9)}` : 0 }}
    >
      <div
        className={cn(
          "overflow-hidden bg-white text-ink",
          full
            ? "border border-black/10"
            : "shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]",
        )}
        style={{ borderRadius: u(24, 12) }}
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={script.image}
            alt=""
            fill
            sizes="(min-width:1024px) 22vw, 60vw"
            className="object-cover object-[center_25%]"
          />
        </div>
        <div style={{ padding: `${u(14, 8)} ${u(16, 9)} ${u(16, 9)}` }}>
          <p
            className="flex items-center text-mute"
            style={{ fontSize: u(17, 10), gap: u(8) }}
          >
            <span className="flex" aria-hidden>
              <span
                className="inline-flex items-center justify-center rounded-full bg-[#0084ff] text-white"
                style={{
                  width: u(22, 12),
                  height: u(22, 12),
                  fontSize: u(12, 7),
                }}
              >
                👍
              </span>
              <span
                className="-ml-1 inline-flex items-center justify-center rounded-full bg-[#f23f5c] text-white"
                style={{
                  width: u(22, 12),
                  height: u(22, 12),
                  fontSize: u(12, 7),
                }}
              >
                ♥
              </span>
            </span>
            {script.reactions}
          </p>
          <div
            className="relative flex items-start"
            style={{ gap: u(10), marginTop: u(12, 6) }}
          >
            <Avatar src={script.comment.avatar} size={42} min={20} />
            <div className="min-w-0 flex-1">
              <div
                className="w-fit bg-[#f0f2f5]"
                style={{
                  borderRadius: u(18, 10),
                  padding: `${u(10, 5)} ${u(16, 9)}`,
                }}
              >
                <p className="font-semibold" style={{ fontSize: u(18, 11) }}>
                  {script.comment.name}
                </p>
                <p style={{ fontSize: u(18, 11) }}>
                  {shown >= 1 ? (
                    <Typed text={script.comment.text} active={shown === 1} />
                  ) : (
                    <span className="scene-caret" />
                  )}
                </p>
              </div>
              <p
                className="text-mute"
                style={{
                  fontSize: u(15, 9),
                  marginTop: u(6),
                  marginLeft: u(12),
                }}
              >
                {script.comment.time ?? "1h"} &nbsp;Like &nbsp;Reply
              </p>
            </div>
            {shown === 1 ? (
              <Gesture kind="tap" style={{ left: "24%", top: u(6) }} />
            ) : null}
          </div>
        </div>
      </div>
      <Lines
        lines={script.lines}
        shown={shown}
        channel={channel}
        tone={tone}
        offset={2}
        wide={!full}
      />
    </div>
  );
}

export function sceneSteps(script: ChatScript) {
  if (script.kind === "post") return 1 + script.comments.length;
  if (script.kind === "comments") return script.comments.length;
  if (script.kind === "fbpost") return 2 + script.lines.length;
  return script.lines.length;
}

/**
 * Renders a scene into whatever box it is given. `scale` lets a smaller frame
 * (the "See it in action" iPhone, a photo overlay) keep ManyChat's larger text.
 * The scene stays still until it scrolls into view, then plays once per
 * `replayKey`.
 */
export const ChatScene = memo(function ChatScene({
  script,
  replayKey,
  channel: channelProp,
  frame = "phone",
  tone,
  scale = 1,
  interval = STEP_MS,
  className,
}: {
  script: ChatScript;
  replayKey?: string | number;
  channel?: Channel;
  frame?: SceneFrame;
  tone?: SceneTone;
  scale?: number;
  interval?: number;
  className?: string;
}) {
  // A scene that names its own channel wins, so one section can mix Instagram
  // and Messenger conversations.
  const channel = script.channel ?? channelProp ?? "instagram";
  const sceneTone = tone ?? (frame === "overlay" ? "onPhoto" : "light");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const shown = useSteps(sceneSteps(script), interval, replayKey, inView);
  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "relative h-full w-full [container-type:inline-size]",
        frame !== "overlay" && "overflow-hidden bg-white",
        className,
      )}
      style={{ ["--u" as string]: `calc(100cqw / 428 * ${scale})` }}
    >
      {script.kind === "post" ? (
        <PostView script={script} shown={shown} />
      ) : null}
      {script.kind === "comments" ? (
        <CommentsView script={script} shown={shown} frame={frame} />
      ) : null}
      {script.kind === "fbpost" ? (
        <FbPostView
          script={script}
          shown={shown}
          channel={channel}
          tone={sceneTone}
          frame={frame}
        />
      ) : null}
      {script.kind === undefined || script.kind === "chat" ? (
        <ChatView
          script={script}
          shown={shown}
          channel={channel}
          tone={sceneTone}
          frame={frame}
        />
      ) : null}
    </div>
  );
});

/* ------------------------------------------------------------ iPhone */

/*
 * Proportions come from the phone mock-up the site is drawn against: a
 * 393 x 763 body with a slim frame, and a Dynamic Island 36.5% of the screen
 * wide sitting just under the top edge.
 */
const ISLAND = { width: "36.5%", height: "4.9%", top: "1.9%" };

/** The Dynamic Island, the status bar and the home indicator. */
export function ScreenChrome() {
  const icon = "h-[0.8em] w-auto";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-30">
      {/* Time on the left, signal, wifi and battery on the right, level with the island. */}
      <div
        className="absolute inset-x-0 flex items-center justify-between px-[7.4%] font-semibold text-ink"
        style={{
          top: ISLAND.top,
          height: ISLAND.height,
          fontSize: "max(7px, 4.4cqw)",
        }}
      >
        <span className="tabular-nums tracking-tight">9:41</span>
        <span className="flex items-center gap-[0.32em]">
          <svg viewBox="0 0 18 12" className={icon} fill="currentColor">
            <rect x="0" y="8.5" width="3" height="3.5" rx="1" />
            <rect x="4.6" y="6" width="3" height="6" rx="1" />
            <rect x="9.2" y="3.2" width="3" height="8.8" rx="1" />
            <rect x="13.8" y="0" width="3" height="12" rx="1" />
          </svg>
          <svg viewBox="0 0 16 12" className={icon} fill="currentColor">
            <path d="M8 11.4l2.4-3a3.1 3.1 0 00-4.8 0z" />
            <path d="M8 5.1c1.5 0 2.9.5 4 1.5l1.5-1.9A9 9 0 008 2.4a9 9 0 00-5.5 2.3L4 6.6A6.1 6.1 0 018 5.1z" />
          </svg>
          <svg viewBox="0 0 26 12" className={icon}>
            <rect
              x="0.6"
              y="0.6"
              width="21"
              height="10.8"
              rx="3.4"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.4"
              strokeWidth="1.2"
            />
            <rect
              x="2.4"
              y="2.4"
              width="15"
              height="7.2"
              rx="2"
              fill="currentColor"
            />
            <path
              d="M23.4 4.2c1.3.4 1.3 3.2 0 3.6z"
              fill="currentColor"
              fillOpacity="0.4"
            />
          </svg>
        </span>
      </div>
      <span
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-[#1b1b1f]"
        style={{
          top: ISLAND.top,
          width: ISLAND.width,
          height: ISLAND.height,
          minHeight: "13px",
        }}
      />
      <span className="absolute bottom-[0.9%] left-1/2 h-[0.5%] w-[34%] -translate-x-1/2 rounded-full bg-black/70" />
    </div>
  );
}

/**
 * The phone body: a slim dark frame with rounded corners, the volume buttons
 * on the left and the side button on the right.
 */
export function IPhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const button = "absolute w-[1.5%] bg-[#3a3a41]";
  return (
    <div className={cn("relative", className)}>
      <span
        aria-hidden
        className={cn(
          button,
          "-left-[1.2%] top-[25.5%] h-[12%] rounded-l-[3px]",
        )}
      />
      <span
        aria-hidden
        className={cn(
          button,
          "-left-[1.2%] top-[41.5%] h-[12%] rounded-l-[3px]",
        )}
      />
      <span
        aria-hidden
        className={cn(
          button,
          "-right-[1.2%] top-[34.5%] h-[17%] rounded-r-[3px]",
        )}
      />

      <div className="relative aspect-[393/763] rounded-[10%/5.15%] bg-[#22222a] p-[1.9%] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)]">
        <div className="relative h-full overflow-hidden rounded-[8.4%/4.5%] bg-white [container-type:inline-size]">
          {children}
          <ScreenChrome />
        </div>
      </div>
    </div>
  );
}

/**
 * The phone used in "See it in action" and in the pinned feature section. The
 * scene starts below the Dynamic Island and ends above the home indicator.
 */
export function PhoneDevice({
  script,
  channel,
  replayKey,
  interval,
  className,
}: {
  script: ChatScript;
  channel?: Channel;
  replayKey?: string | number;
  interval?: number;
  className?: string;
}) {
  return (
    <IPhoneFrame className={className}>
      <div className="h-full pb-[2.6%] pt-[8%]">
        <ChatScene
          script={script}
          channel={channel}
          replayKey={replayKey}
          interval={interval}
          frame="device"
          scale={1.24}
        />
      </div>
    </IPhoneFrame>
  );
}
