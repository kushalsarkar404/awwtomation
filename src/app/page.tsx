import { MarketingPageView, marketingMetadata } from "@/components/templates/marketing-page"
import { homePage } from "@/content/marketing"

export const metadata = marketingMetadata(homePage)

export default function Page() {
  return <MarketingPageView page={homePage} />
}
