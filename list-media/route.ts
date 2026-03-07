import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const IMG_RE = /\.(png|jpg|jpeg|webp)$/i
const VID_RE = /\.(mp4|webm|mov)$/i

function makeLabel(filename: string) {
  // remove extensão
  const base = filename.replace(/\.[^/.]+$/, "")

  // remove sufixo "-01", "_02", " (1)" etc
  const cleaned = base
    .replace(/[-_ ]\d{1,3}$/g, "")
    .replace(/\(\d+\)$/g, "")
    .trim()

  // troca separadores por espaço e capitaliza
  return cleaned
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase())
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const folder = searchParams.get("folder")

  if (!folder) return NextResponse.json({ midias: [] })

  const folderAbs = path.join(process.cwd(), "public", folder)
  if (!fs.existsSync(folderAbs)) return NextResponse.json({ midias: [] })

  const files = fs
    .readdirSync(folderAbs)
    .filter((f) => IMG_RE.test(f) || VID_RE.test(f))
    .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }))

  const midias = files.map((f) => ({
    src: `/${folder}/${encodeURI(f)}`,
    type: VID_RE.test(f) ? "video" : "image",
    label: makeLabel(f),
  }))

  return NextResponse.json({ midias })
}