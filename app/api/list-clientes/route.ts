import { NextResponse } from "next/server"
import fs from "node:fs/promises"
import path from "node:path"

const IMG_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg"])

function labelFromFile(filename: string) {
  const base = filename.replace(/\.[^.]+$/, "")
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase())
}

export async function GET() {
  try {
    const dir = path.join(process.cwd(), "public", "clientes")
    const entries = await fs.readdir(dir, { withFileTypes: true })

    const clientes = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => IMG_EXT.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, "pt-BR"))
      .map((name) => ({
        logo: `/clientes/${name}`,
        nome: labelFromFile(name),
      }))

    return NextResponse.json({ clientes })
  } catch {
    return NextResponse.json({ clientes: [] })
  }
}