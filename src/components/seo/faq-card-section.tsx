import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { FaqItem } from "@/lib/seo"

interface FaqCardSectionProps {
  title: string
  description: string
  faqs: FaqItem[]
  className?: string
}

export function FaqCardSection({ title, description, faqs, className = "" }: FaqCardSectionProps) {
  if (!faqs.length) {
    return null
  }

  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 bg-muted/20 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <div className="absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
          <div className="absolute bottom-1/3 -right-20 h-80 w-80 rounded-full bg-green-200/20 blur-3xl" />
        </div>
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">{description}</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 py-12">
          {faqs.map((faq) => (
            <Card key={faq.question} className="text-left">
              <CardHeader>
                <CardTitle className="text-xl">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
