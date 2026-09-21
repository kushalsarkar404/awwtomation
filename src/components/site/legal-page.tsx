import type { ReactNode } from "react"

export function LegalPage({
  title,
  description,
  updated,
  children,
}: {
  title: string
  description?: string
  updated: string
  children: ReactNode
}) {
  return (
    <>
      <header data-nav="dark" className="bg-white px-5 pb-12 pt-32 text-center sm:pt-40">
        <p className="mc-label text-mute">Last updated {updated}</p>
        <h1 className="mc-h2 mx-auto mt-5 max-w-[46rem]">{title}</h1>
        {description ? <p className="mc-sub mx-auto mt-6 max-w-[36rem]">{description}</p> : null}
      </header>
      <div className="prose-content mx-auto max-w-[760px] px-5 pb-32">{children}</div>
    </>
  )
}
