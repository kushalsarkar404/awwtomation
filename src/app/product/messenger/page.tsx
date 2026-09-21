import { MarketingPageView, marketingMetadata } from "@/components/templates/marketing-page"
import { messengerPage } from "@/content/marketing"

export const metadata = marketingMetadata(messengerPage)

export default function Page() {
  return <MarketingPageView page={messengerPage} />
}
