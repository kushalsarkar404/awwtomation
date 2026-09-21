import { UseCasePageView, landingPageMetadata } from "@/components/templates/use-case-page"
import { manychatAlternativePage } from "@/content/seo-landing-pages"

export const metadata = landingPageMetadata(manychatAlternativePage)

export default function Page() {
  return <UseCasePageView page={manychatAlternativePage} />
}
