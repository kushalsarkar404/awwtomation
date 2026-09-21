import { UseCasePageView, landingPageMetadata } from "@/components/templates/use-case-page"
import { followToDmPage } from "@/content/use-case-pages"

export const metadata = landingPageMetadata(followToDmPage)

export default function Page() {
  return <UseCasePageView page={followToDmPage} />
}
