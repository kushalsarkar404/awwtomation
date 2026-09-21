import { UseCasePageView, landingPageMetadata } from "@/components/templates/use-case-page"
import { nepalLandingPage } from "@/content/seo-landing-pages"

export const metadata = landingPageMetadata(nepalLandingPage)

export default function Page() {
  return <UseCasePageView page={nepalLandingPage} />
}
