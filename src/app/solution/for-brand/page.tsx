import { MarketingPageView, marketingMetadata } from "@/components/templates/marketing-page"
import { brandsPage } from "@/content/marketing"

export const metadata = marketingMetadata(brandsPage)

export default function Page() {
  return <MarketingPageView page={brandsPage} />
}
