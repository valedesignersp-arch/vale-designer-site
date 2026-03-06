import type { Metadata } from "next"
import HomeClient from "./components/HomeClient"

const DOMAIN = "https://www.valedesigner.com.br" // ✅ troque se necessário
const SITE = "Vale Designer"

export const metadata: Metadata = {
  title: `${SITE} | Comunicação Visual em Jacareí, São José dos Campos e Taubaté`,
  description:
    "Comunicação Visual no Vale do Paraíba: fachadas em ACM, letras caixa, luminosos, totens, corte CNC Router, corte laser, impressão 3D, adesivagem e serviços gráficos. Atendimento em Jacareí, São José dos Campos e Taubaté.",
  alternates: { canonical: "/" },
  keywords: [
    "comunicação visual jacareí",
    "comunicação visual são josé dos campos",
    "comunicação visual taubaté",
    "fachada acm jacareí",
    "fachada acm são josé dos campos",
    "fachada acm taubaté",
    "letras caixa jacareí",
    "luminosos",
    "totens",
    "corte cnc router",
    "corte laser",
    "adesivagem",
    "impressão 3d",
    "vale do paraíba",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${SITE} | Comunicação Visual no Vale do Paraíba`,
    description:
      "Fachadas em ACM, letras caixa, luminosos, totens, CNC Router, corte laser, impressão 3D, adesivagem e serviços gráficos. Atendemos Jacareí, São José dos Campos e Taubaté.",
    url: DOMAIN,
    siteName: SITE,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${DOMAIN}/og.jpg`, // ✅ crie /public/og.jpg (1200x630)
        width: 1200,
        height: 630,
        alt: `${SITE} - Comunicação Visual`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE} | Comunicação Visual em Jacareí e Região`,
    description:
      "Fachadas em ACM, letras caixa, luminosos, totens, CNC Router, corte laser, impressão 3D e adesivagem no Vale do Paraíba.",
    images: [`${DOMAIN}/og.jpg`],
  },
}

export default function Page() {
  return <HomeClient />
}