import { automationTemplates, type TemplateDifficulty, type Template } from "@/data/automation-templates"

export function getDifficultyStars(difficulty: TemplateDifficulty): number {
  switch (difficulty) {
    case "Beginner":
      return 1
    case "Intermediate":
      return 3
    case "Advanced":
      return 5
    default:
      return 0
  }
}

export function getTemplateBySlug(slug: string): Template | undefined {
  return automationTemplates.find((template) => template.slug === slug)
}

export { Template }
