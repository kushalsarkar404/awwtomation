"use client"

import Hyperspeed from "@/components/Hyperspeed"
import { hyperspeedPresets } from "@/components/HyperSpeedPresets"

export function HyperspeedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black" aria-hidden="true">
      <Hyperspeed effectOptions={hyperspeedPresets.one} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.06)_48%,#050505_100%)]" />
    </div>
  )
}
