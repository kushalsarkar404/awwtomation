import { readFile } from "node:fs/promises"
import path from "node:path"

import { ImageResponse } from "next/og"

export const alt = "Awwtomation · Every comment, answered"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * The share card for every page, in the site's home-page style: yellow grid,
 * Archivo Black headline, magenta button and a phone with an automated reply.
 * Nested routes inherit it. Fonts are Archivo (SIL OFL) instances.
 */
export default async function OpengraphImage() {
  const [black, medium, logo] = await Promise.all([
    readFile(path.join(process.cwd(), "src/app/fonts/Archivo-Black.ttf")),
    readFile(path.join(process.cwd(), "src/app/fonts/Archivo-Medium.ttf")),
    readFile(path.join(process.cwd(), "public/full-logo.svg"), "utf8"),
  ])
  const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logo).toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#fff200",
          backgroundImage:
            "linear-gradient(to right, rgba(15,15,15,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,15,15,0.1) 1px, transparent 1px)",
          backgroundSize: "150px 150px",
          color: "#0f0f0f",
          padding: "56px 64px",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "62%" }}>
          <img src={logoSrc} width={232} height={34} alt="" />
          <div style={{ display: "flex", flexDirection: "column", fontWeight: 900, fontSize: 118, lineHeight: 0.84, letterSpacing: "-0.035em" }}>
            <span>Every comment,</span>
            <span>answered.</span>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                backgroundColor: "#fb0df7",
                color: "#ffffff",
                borderRadius: 999,
                padding: "18px 36px",
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: "0.08em",
              }}
            >
              GET STARTED FREE
            </div>
          </div>
        </div>

        <div style={{ display: "flex", width: "38%", justifyContent: "flex-end", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              width: 330,
              height: 500,
              backgroundColor: "#000000",
              borderRadius: 36,
              padding: "28px 22px",
              gap: 14,
              fontWeight: 500,
              fontSize: 21,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: 999, backgroundColor: "#c9a58a" }} />
              <div style={{ display: "flex", backgroundColor: "#2a2a2a", color: "#ffffff", borderRadius: 20, padding: "12px 18px" }}>Price?</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-end",
                width: 240,
                backgroundColor: "#7b34ce",
                color: "#ffffff",
                borderRadius: 22,
                padding: "16px 18px 18px",
                gap: 12,
              }}
            >
              <span>Rs 1,800 with free delivery. Want one?</span>
              <div style={{ display: "flex", justifyContent: "center", backgroundColor: "rgba(255,255,255,0.18)", borderRadius: 10, padding: "12px 0" }}>
                Order now
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: black, weight: 900, style: "normal" },
        { name: "Archivo", data: medium, weight: 500, style: "normal" },
      ],
    },
  )
}
