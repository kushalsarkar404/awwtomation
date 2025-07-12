import { unified } from "unified"
import remarkParse from "remark-parse"
import { visit } from "unist-util-visit"
import { slugify } from "@/lib/slugify"

export function extractHeadings(markdown: string) {
  const tree = unified().use(remarkParse).parse(markdown)
  const headings: { text: string; level: number; id: string }[] = []

  visit(tree, "heading", (node: any) => {
    const text = node.children?.map((child: any) => child.value).join("") ?? ""
    const level = node.depth
    const id = slugify(text)
    if (level === 2 || level === 3) {
      headings.push({ text, level, id })
    }
  })

  return headings
}
