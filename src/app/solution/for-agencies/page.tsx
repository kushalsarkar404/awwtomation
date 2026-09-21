import { MarketingPageView, marketingMetadata } from "@/components/templates/marketing-page"
import { agenciesPage } from "@/content/marketing"

export const metadata = marketingMetadata(agenciesPage)

export default function Page() {
  return <MarketingPageView page={agenciesPage} />
}
