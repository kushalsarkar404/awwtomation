"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface MessageModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MessageModal({ open, onOpenChange }: MessageModalProps) {
  const [notification, setNotification] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    // Load the CRM form script only once
    if (!scriptLoadedRef.current) {
      const script = document.createElement("script")
      script.src = "https://links.tdacrm.com.au/js/form_embed.js"
      script.async = true
      document.body.appendChild(script)
      scriptLoadedRef.current = true
    }

    // Listen for form submission messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Verify the message is from the CRM domain
      if (event.origin !== "https://links.tdacrm.com.au") return

      // Check for form submission success
      if (event.data?.type === "form-submitted" || event.data?.formSubmitted) {
        setNotification({
          type: "success",
          message: "Message sent successfully! We'll get back to you ASAP!",
        })

        // Close the modal after a short delay on success
        setTimeout(() => {
          onOpenChange(false)
          // Clear notification after modal closes
          setTimeout(() => {
            setNotification({ type: null, message: "" })
          }, 500)
        }, 2000)
      }

      // Check for form submission error
      if (event.data?.type === "form-error" || event.data?.error) {
        setNotification({
          type: "error",
          message: "Failed to send message. Please try again later.",
        })
      }
    }

    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [onOpenChange])

  // Reset notification when modal opens
  useEffect(() => {
    if (open) {
      setNotification({ type: null, message: "" })
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Send us a message</DialogTitle>
          <DialogDescription>
            Fill out the form below and we&apos;ll get back to you ASAP!
          </DialogDescription>
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

        <div className="w-full" style={{ height: "492px", overflow: "auto" }}>
          <iframe
            ref={iframeRef}
            src="https://links.tdacrm.com.au/widget/form/b3ctc99O4nSRrG07QMTy"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "3px",
            }}
            id="inline-b3ctc99O4nSRrG07QMTy"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact Form"
            data-height="492"
            data-layout-iframe-id="inline-b3ctc99O4nSRrG07QMTy"
            data-form-id="b3ctc99O4nSRrG07QMTy"
            title="Contact Form"
          />
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}