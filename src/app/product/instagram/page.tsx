import { MarketingPageView, marketingMetadata } from "@/components/templates/marketing-page"
import { instagramPage } from "@/content/marketing"

export const metadata = marketingMetadata(instagramPage)

export default function Page() {
  return <MarketingPageView page={instagramPage} />
}
