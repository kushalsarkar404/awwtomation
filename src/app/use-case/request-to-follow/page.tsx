import { UseCasePageView, landingPageMetadata } from "@/components/templates/use-case-page"
import { requestToFollowPage } from "@/content/use-case-pages"

export const metadata = landingPageMetadata(requestToFollowPage)

export default function Page() {
  return <UseCasePageView page={requestToFollowPage} />
}
