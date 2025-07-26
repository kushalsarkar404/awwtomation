"use client"

import Image from "next/image"
import type { Template as TemplateType } from "@/lib/template-utils"
import { useState } from "react"

interface TemplateDetailHeroProps {
  template: TemplateType
}

export function TemplateDetailHero({ template }: TemplateDetailHeroProps) {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const handleImageClick = () => {
    setIsFullScreen(true)
  }

  const handleCloseFullScreen = () => {
    setIsFullScreen(false)
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* Workflow Image */}
      <div className="relative w-full py-8 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="relative group cursor-pointer" onClick={handleImageClick}>
              <Image
                src="/SEO-Reporting-Automation-Template.png"
                alt={`${template.title} workflow diagram`}
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-gray-800 font-medium">View</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {isFullScreen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseFullScreen}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={handleCloseFullScreen}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ×
            </button>
            <Image
              src="/SEO-Reporting-Automation-Template.png"
              alt={`${template.title} workflow diagram`}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Subtitle and Author Section */}
      <div className="relative bg-white/95 backdrop-blur-sm py-8 px-4 md:px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-gray-900">
            {template.title}
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-gray-700 mb-6 mx-auto">
            {template.excerpt}
          </p>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-600">
            <Image
              src={template.creator.avatar || "/placeholder.svg"}
              alt={template.creator.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>By {template.creator.name}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
