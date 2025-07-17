import { sharedMetadata } from "../services/_shared/metadata"

export const metadata = sharedMetadata["blog"]

import BlogPage from "./UI"

export default function Page() {
  return <BlogPage />
}
