import { UseCasePageView, landingPageMetadata } from "@/components/templates/use-case-page"
import { respondToCommentsPage } from "@/content/use-case-pages"

export const metadata = landingPageMetadata(respondToCommentsPage)

export default function Page() {
  return <UseCasePageView page={respondToCommentsPage} />
}
