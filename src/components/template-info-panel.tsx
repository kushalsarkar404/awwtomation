"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Download, Star } from "lucide-react"
import { getDifficultyStars, type Template } from "@/lib/template-utils"
import { cn } from "@/lib/utils"

interface TemplateInfoPanelProps {
  template: Template
}

export function TemplateInfoPanel({ template }: TemplateInfoPanelProps) {
  const difficultyStars = getDifficultyStars(template.difficulty)

  return (
    <Card className="w-full">
      <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center">
          <Download className="h-8 w-8 text-primary mb-2" />
          <span className="text-2xl font-bold">{template.downloads.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">Downloads</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn("h-6 w-6", i < difficultyStars ? "text-red-500 fill-red-500" : "text-gray-300")}
              />
            ))}
          </div>
          <span className="text-2xl font-bold">{template.difficulty}</span>
          <span className="text-sm text-muted-foreground">Difficulty</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-2xl font-bold mb-2">
            <span className="line-through text-gray-500 mr-2">${template.originalPrice.toFixed(2)}</span>
            <span className="text-green-600">${template.currentPrice.toFixed(2)}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Need customization? {template.customizationPriceRange} for business-specific processes. Contact us!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
