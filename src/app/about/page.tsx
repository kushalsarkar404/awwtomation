import { sharedMetadata } from "../services/_shared/metadata"

export const metadata = sharedMetadata["about"]

import AboutPage from "./UI"

export default function Page() {
  return <AboutPage />
}
