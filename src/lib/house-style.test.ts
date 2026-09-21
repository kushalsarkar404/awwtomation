import assert from "node:assert/strict"
import { readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"
import { test } from "node:test"

/*
 * House style, enforced so it survives future edits by anyone (or anything).
 * The site uses no em dashes: a comma, colon, full stop or brackets instead.
 */

const ROOTS = ["src", "content"]
const FILES = ["README.md", "IMAGE-PLAN.txt"]
const EXTENSIONS = [".ts", ".tsx", ".css", ".md", ".mdx", ".json", ".txt"]
const EM_DASH = String.fromCharCode(0x2014)

function walk(dir: string, found: string[] = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) walk(path, found)
    else if (EXTENSIONS.some((extension) => path.endsWith(extension))) found.push(path)
  }
  return found
}

test("nothing on the site uses an em dash", () => {
  const files = [...ROOTS.flatMap((root) => walk(root)), ...FILES]
  const offenders: string[] = []

  for (const file of files) {
    let text: string
    try {
      text = readFileSync(file, "utf8")
    } catch {
      continue // an optional file such as IMAGE-PLAN.txt may not be checked in
    }
    text.split("\n").forEach((line, index) => {
      if (line.includes(EM_DASH)) offenders.push(`${file}:${index + 1}  ${line.trim()}`)
    })
  }

  assert.deepEqual(offenders, [], `Replace the em dash with a comma, colon, full stop or brackets:\n${offenders.join("\n")}`)
})
