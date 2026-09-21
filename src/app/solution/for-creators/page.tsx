import { MarketingPageView, marketingMetadata } from "@/components/templates/marketing-page"
import { creatorsPage } from "@/content/marketing"

export const metadata = marketingMetadata(creatorsPage)

export default function Page() {
  return <MarketingPageView page={creatorsPage} />
}
