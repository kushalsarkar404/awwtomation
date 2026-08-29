"use client"

import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from "@/components/ui/card"
import type { Template } from "@/data/automation-templates"; // Corrected import
import { getDifficultyStars } from "@/lib/template-utils"
import { cn } from "@/lib/utils"
import { Download,Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TemplateCardProps {
  template: Template
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const difficultyStars = getDifficultyStars(template.difficulty)

  return (
    <Card className="h-full flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <Link href={`/templates/${template.slug}`} className="block h-full">
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
      </Link>
      <CardFooter className="border-t border-white/10 p-4 text-xs text-muted-foreground">
        {template.tags.slice(0, 3).join(" · ")}
      </CardFooter>
    </Card>
  )
}
