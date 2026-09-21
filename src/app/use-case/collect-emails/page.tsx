import { UseCasePageView, landingPageMetadata } from "@/components/templates/use-case-page"
import { collectEmailsPage } from "@/content/use-case-pages"

export const metadata = landingPageMetadata(collectEmailsPage)

export default function Page() {
  return <UseCasePageView page={collectEmailsPage} />
}
