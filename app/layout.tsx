import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"
import { Plus_Jakarta_Sans } from "next/font/google"
import SiteHeader from "./components/SiteHeader"
import HeroCarousel from "./components/HeroCarousel"
import WhatsAppChat from "./components/WhatsAppChat"

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
})

const SITE_NAME = "Vale Designer"
const DOMAIN = "https://www.valedesigner.com.br"
const PHONE = "+55 12 98807-5372"
const WHATSAPP = "https://wa.me/5512988075372"
const INSTAGRAM = "https://instagram.com/valedesignersp"
const FACEBOOK = "https://facebook.com/valedesignersp"
const TIKTOK = "https://www.tiktok.com/@vale.designer"

const ADDRESS = {
  streetAddress: "Rua Paraguai, 58",
  addressLocality: "Jacareí",
  addressRegion: "SP",
  postalCode: "12315-180",
  addressCountry: "BR",
}

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: `${SITE_NAME} | Comunicação Visual em Jacareí e Vale do Paraíba`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Comunicação Visual em Jacareí/SP: fachadas em ACM, letras caixa, impressão digital, adesivagem, placas e projetos completos para empresas no Vale do Paraíba. Atendimento rápido e orçamento.",
  applicationName: SITE_NAME,
  keywords: [
    "comunicação visual jacareí",
    "fachada acm jacareí",
    "letras caixa jacareí",
    "impressão digital jacareí",
    "adesivagem jacareí",
    "placas jacareí",
    "vale do paraíba comunicação visual",
    "são josé dos campos comunicação visual",
    "guararema comunicação visual",
    "jacareí sp",
  ],
  alternates: { canonical: "/" },
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
    type: "website",
    url: DOMAIN,
    siteName: SITE_NAME,
    locale: "pt_BR",
    title: `${SITE_NAME} | Comunicação Visual em Jacareí e Vale do Paraíba`,
    description:
      "Fachadas em ACM, Letras Caixa, Adesivagem, Placas e Impressão Digital. Atendimento em Jacareí e região do Vale do Paraíba.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Comunicação Visual`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Comunicação Visual em Jacareí`,
    description:
      "Fachadas em ACM, Letras Caixa, Placas, Adesivos e Impressão Digital em Jacareí e Vale do Paraíba.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: DOMAIN,
    image: `${DOMAIN}/og.jpg`,
    telephone: PHONE,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
    areaServed: [
      { "@type": "City", name: "Jacareí" },
      { "@type": "AdministrativeArea", name: "Vale do Paraíba" },
      { "@type": "City", name: "São José dos Campos" },
      { "@type": "City", name: "Guararema" },
      { "@type": "City", name: "Santa Branca" },
      { "@type": "City", name: "Igaratá" },
      { "@type": "City", name: "Caçapava" },
      { "@type": "City", name: "Taubaté" },
      { "@type": "City", name: "Caraguatatuba" },
    ],
    sameAs: [WHATSAPP, INSTAGRAM, FACEBOOK, TIKTOK],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    makesOffer: [
      { "@type": "Offer", name: "Fachada em ACM" },
      { "@type": "Offer", name: "Letras Caixa" },
      { "@type": "Offer", name: "Impressão Digital" },
      { "@type": "Offer", name: "Adesivagem" },
      { "@type": "Offer", name: "Placas e Sinalização" },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={fontSans.variable}>
      <body className={fontSans.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZTJ8C0WST4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZTJ8C0WST4');
          `}
        </Script>

        <LocalBusinessJsonLd />

        <SiteHeader />
        <HeroCarousel />

        <main>{children}</main>

        <footer className="footer">
          <div className="wrap footer-in">
            <div className="footer-left">
              <img src="/logo.png" alt={SITE_NAME} className="footer-logo" />
              <div className="footer-copy" suppressHydrationWarning>
                © {new Date().getFullYear()} {SITE_NAME} • Comunicação Visual
              </div>
            </div>

            <div className="social">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <img src="/icons/whatsapp.png" alt="WhatsApp Vale Designer" />
              </a>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <img src="/icons/instagram.png" alt="Instagram Vale Designer" />
              </a>

              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <img src="/icons/facebook.png" alt="Facebook Vale Designer" />
              </a>

              <a
                href={TIKTOK}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                title="TikTok"
              >
                <img src="/icons/tiktok.png" alt="TikTok Vale Designer" />
              </a>
            </div>
          </div>
        </footer>

        <WhatsAppChat />
      </body>
    </html>
  )
}