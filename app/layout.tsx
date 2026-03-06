import "./globals.css"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Vale Designer",
  description: "Comunicação Visual em Jacareí e Vale do Paraíba",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={fontSans.variable}>
      <body className={fontSans.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}