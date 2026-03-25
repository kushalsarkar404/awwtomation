interface SeoJsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>
}

export function SeoJsonLd({ data }: SeoJsonLdProps) {
  const payloads = Array.isArray(data) ? data : [data]

  return (
    <>
      {payloads.map((payload, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
        />
      ))}
    </>
  )
}
