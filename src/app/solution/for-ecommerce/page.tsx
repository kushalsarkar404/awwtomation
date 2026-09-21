import { MarketingPageView, marketingMetadata } from "@/components/templates/marketing-page"
import { ecommercePage } from "@/content/marketing"

export const metadata = marketingMetadata(ecommercePage)

export default function Page() {
  return <MarketingPageView page={ecommercePage} />
}
