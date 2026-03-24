"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import { Link2, LoaderCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface BlogEmailMarketingSolutionFormProps {
  pageSlug: string
  postTitle: string
  className?: string
}

export function BlogEmailMarketingSolutionForm({
  pageSlug,
  postTitle,
  className,
}: BlogEmailMarketingSolutionFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [feedbackType, setFeedbackType] = useState<"success" | "error" | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email.trim()) {
      setFeedbackType("error")
      setFeedback("Please enter your email address.")
      return
    }

    setIsSubmitting(true)
    setFeedback(null)
    setFeedbackType(null)

    try {
      const response = await fetch("/api/email-marketing-solution", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          pageSlug,
          postTitle,
        }),
      })

      const result = (await response.json()) as { success?: boolean; error?: string }

      if (!response.ok || !result.success) {
        throw new Error(result.error || "We could not submit your request.")
      }

      setEmail("")
      setFeedbackType("success")
      setFeedback("Submitted. We will reach out to you soon.")
    } catch (error) {
      setFeedbackType("error")
      setFeedback(error instanceof Error ? error.message : "We could not submit your request.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      className={cn(
        "rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-950",
        className,
      )}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <a
            href="https://www.awwtomation.com/services/email-marketing-automation"
            className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-300"
          >
            <span>Email Marketing Solution</span>
            <Link2 className="h-4 w-4" aria-hidden="true" />
          </a>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
            <li>Unlimited contacts</li>
            <li>Unlimited email</li>
            <li>Dedicated account manager for $499/month</li>
          </ul>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            autoComplete="email"
            required
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>

        <p
          aria-live="polite"
          className={cn(
            "min-h-5 text-sm",
            feedbackType === "success" && "text-green-600 dark:text-green-400",
            feedbackType === "error" && "text-red-600 dark:text-red-400",
            !feedbackType && "text-transparent",
          )}
        >
          {feedback ?? "\u00A0"}
        </p>
      </div>
    </section>
  )
}
