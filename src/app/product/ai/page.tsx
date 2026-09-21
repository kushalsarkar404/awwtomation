import { AiPageView } from "@/components/templates/ai-page"
import { marketingMetadata } from "@/components/templates/marketing-page"
import { aiPage } from "@/content/marketing"

export const metadata = marketingMetadata(aiPage)

export default function Page() {
  return <AiPageView page={aiPage} />
}
