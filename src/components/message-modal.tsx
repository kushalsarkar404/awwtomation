"use client"

import { useState, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { sendMessageToMake } from "@/app/actions/message-actions"

interface MessageModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MessageModal({ open, onOpenChange }: MessageModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  // Phone validation state
  const [phoneNumber, setPhoneNumber] = useState("")
  const [phoneError, setPhoneError] = useState("")

  // Validate phone number
  const validatePhoneNumber = (value: string) => {
    // Remove all non-digit characters for validation
    const digitsOnly = value.replace(/\D/g, "")

    if (digitsOnly.length < 10) {
      setPhoneError("Phone number must have at least 10 digits")
      return false
    } else {
      setPhoneError("")
      return true
    }
  }

  // Handle phone number input
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value

    // Allow only digits, spaces, dashes, parentheses, and plus sign
    const sanitizedInput = input.replace(/[^\d\s\-+()]/g, "")

    setPhoneNumber(sanitizedInput)
    validatePhoneNumber(sanitizedInput)
  }
  async function handleSubmit(formData: FormData) {
      // Validate phone before submission
      const phoneValue = formData.get("number") as string
      if (!validatePhoneNumber(phoneValue)) {
        setNotification({
          type: "error",
          message: "Please enter a valid phone number.",
        })
        return
      }
    setIsSubmitting(true)
    setNotification({ type: null, message: "" })

    try {
      const result = await sendMessageToMake(formData)

      if (result.success) {
        setNotification({
          type: "success",
          message: "Message sent successfully! We'll get back to you ASAP!",
        })

        // Clear form fields
        setPhoneNumber("")

        // Close the modal after a short delay on success
        setTimeout(() => {
          onOpenChange(false)
          // Clear notification after modal closes
          setTimeout(() => {
            setNotification({ type: null, message: "" })
          }, 500)
        }, 2000)
      } else {
        setNotification({
          type: "error",
          message: result.error || "Failed to send message. Please try again later.",
        })
      }
    } catch (error) {
      setNotification({
        type: "error",
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Send us a message</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you ASAP!</DialogDescription>
        </DialogHeader>

        {notification.type && (
          <div
            className={`p-3 rounded-md mb-4 ${
              notification.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {notification.message}
          </div>
        )}

        <form action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name</Label>
            <Input id="businessName" name="businessName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number">Contact Number</Label>
            <Input
              id="number"
              name="number"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="(123) 456-7890"
              required
            />
            {phoneError && <p className="text-sm text-red-500 mt-1">{phoneError}</p>}
            <p className="text-xs text-muted-foreground mt-1">Enter a valid phone number with at least 10 digits</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Your Query</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us how we can help you..."
              className="min-h-[120px]"
              required
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
