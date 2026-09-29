import fs from "fs"
import path from "path"

export interface ImageSize {
  width: number
  height: number
}

/**
 * Width and height of a WebP or PNG in /public, read from its header so guide
 * screenshots get real dimensions (no layout shift) without an image library.
 * Returns null for anything it can't read.
 */
export function readImageSize(publicPath: string): ImageSize | null {
  if (!publicPath.startsWith("/")) return null
  const file = path.join(process.cwd(), "public", publicPath)
  let buffer: Buffer
  try {
    const handle = fs.openSync(file, "r")
    buffer = Buffer.alloc(32)
    fs.readSync(handle, buffer, 0, 32, 0)
    fs.closeSync(handle)
  } catch {
    return null
  }
  return parseImageSize(buffer)
}

export function parseImageSize(buffer: Buffer): ImageSize | null {
  // PNG: IHDR holds width and height as big-endian 32-bit integers.
  if (buffer.length >= 24 && buffer.readUInt32BE(0) === 0x89504e47) {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) }
  }
  if (buffer.length < 30 || buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WEBP") return null
  const chunk = buffer.toString("ascii", 12, 16)
  if (chunk === "VP8X") {
    return { width: 1 + buffer.readUIntLE(24, 3), height: 1 + buffer.readUIntLE(27, 3) }
  }
  if (chunk === "VP8 ") {
    return { width: buffer.readUInt16LE(26) & 0x3fff, height: buffer.readUInt16LE(28) & 0x3fff }
  }
  if (chunk === "VP8L") {
    const bits = buffer.readUInt32LE(21)
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 }
  }
  return null
}
