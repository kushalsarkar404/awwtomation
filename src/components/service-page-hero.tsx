"use client"

import RippleGrid from "@/components/RippleGrid"

interface ServicePageHeroProps {
  title: string
  description: string
}

export function ServicePageHero({ title, description }: ServicePageHeroProps) {
  return (
    <section className="service-page-hero relative isolate flex min-h-[68svh] items-center overflow-hidden border-b border-white/10 bg-[#050505] px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 bg-[#050505]" aria-hidden="true">
        <RippleGrid
          gridColor="#7c3aed"
          rippleIntensity={0.035}
          gridSize={10}
          gridThickness={17}
          fadeDistance={1.5}
          vignetteStrength={2}
          glowIntensity={0.12}
          opacity={0.72}
          mouseInteraction
          mouseInteractionRadius={0.8}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,5,5,.06),rgba(5,5,5,.42)_55%,#050505_100%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
        <h1 className="mx-auto max-w-5xl text-balance text-[clamp(2.75rem,7vw,5.75rem)] font-semibold leading-[.98] tracking-[-0.055em] text-white">
          {title}
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-zinc-300 sm:text-xl">
          {description}
        </p>
      </div>
    </section>
  )
}
