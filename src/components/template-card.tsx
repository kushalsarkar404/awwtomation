"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Star } from "lucide-react"
import { getDifficultyStars } from "@/lib/template-utils"
import type { Template } from "@/data/automation-templates" // Corrected import
import { cn } from "@/lib/utils"

interface TemplateCardProps {
  template: Template
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const difficultyStars = getDifficultyStars(template.difficulty)

  return (
    <Link href={`/templates/${template.slug}`} className="block h-full">
      <Card className="h-full flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        <CardHeader className="p-0">
          <div className="relative w-full h-48 bg-muted flex items-center justify-center">
            <Image
              src={template.thumbnail || "/placeholder.svg"}
              alt={template.title}
              width={300}
              height={200}
              className="object-contain w-full h-full"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-1 flex flex-col">
          <CardTitle className="text-lg font-semibold mb-2">{template.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-3 flex-1">
            {template.excerpt}
          </CardDescription>
          <div className="flex items-center justify-between text-sm mb-3">
            <div className="flex items-center gap-1">
              <span className="line-through text-gray-500">${template.originalPrice.toFixed(2)}</span>
              <span className="font-bold text-green-600 text-lg">${template.currentPrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn("h-4 w-4", i < difficultyStars ? "text-red-500 fill-red-500" : "text-gray-300")}
                />
              ))}
              <span className="text-muted-foreground text-xs ml-1">{template.difficulty}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Image
              src={template.creator.avatar || "/placeholder.svg"}
              alt={template.creator.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>{template.creator.name}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>{template.downloads.toLocaleString()} downloads</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>
                {template.rating.toFixed(1)} ★ ({template.reviews} reviews)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Image
              src={template.availability.logo || "/placeholder.svg"}
              alt={`${template.availability.platform} logo`}
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Available on {template.availability.platform}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
          {template.tags.map((tag) => (
            <Link
              key={tag}
              href={`/templates?tag=${encodeURIComponent(tag)}`}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-muted-foreground/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {tag}
            </Link>
          ))}
        </CardFooter>
      </Card>
    </Link>
  )
}
