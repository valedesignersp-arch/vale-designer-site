import type { Metadata } from "next"
import Link from "next/link"

const SITE_NAME = "Vale Designer"
const DOMAIN = "https://www.valedesigner.com.br"
const CITY = "São José dos Campos"
const REGION = "SP"
const PHONE = "+55 12 98807-5372"
const WHATSAPP_NUMBER = "5512988075372"
const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`

const waMsg = (t: string) => `${WHATSAPP}?text=${encodeURIComponent(t)}`
const CTA_TEXT = `Olá! Quero um orçamento de adesivos, impressão digital, logo em alto relevo e corte CNC/Laser em ${CITY}.`

const CLIENT_LOGOS = [
  { src: "/clientes/BAND.png", alt: "Band" },
  { src: "/clientes/BOTICARIO.png", alt: "O Boticário" },
  { src: "/clientes/MC.png", alt: "McDonald's" },
  { src: "/clientes/VIVO.png", alt: "Vivo" },
  { src: "/clientes/BB.png", alt: "Banco do Brasil" },
  { src: "/clientes/CLARO.png", alt: "Claro" },
  { src: "/clientes/LOCALIZA.png", alt: "Localiza" },
  { src: "/clientes/MAGALU.png", alt: "Magalu" },
]

const GALLERY = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.jpg",
  "/portfolio/6.jpg",
  "/portfolio/7.jpg",
  "/portfolio/8.jpg",
]

const FAQ = [
  {
    q: "Vocês fazem adesivos personalizados em São José dos Campos?",
    a: "Sim. Produzimos e instalamos adesivos personalizados para vitrines, paredes, veículos, placas, campanhas promocionais e sinalização.",
  },
  {
    q: "Vocês fazem impressão digital e instalação?",
    a: "Sim. Cuidamos da produção com impressão de alta qualidade e também da aplicação, quando necessário.",
  },
  {
    q: "Fazem logo em alto relevo para empresas?",
    a: "Sim. Produzimos logos em alto relevo com acabamento profissional, ideais para fachadas, recepções, interiores corporativos e comunicação premium.",
  },
  {
    q: "Vocês trabalham com corte CNC Router e corte Laser?",
    a: "Sim. Fazemos cortes em ACM, MDF, PVC, acrílico e outros materiais, conforme o projeto.",
  },
  {
    q: "Como pedir orçamento?",
    a: "Você chama no WhatsApp, envia foto, medida ou referência, e retornamos com a proposta completa.",
  },
]

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: `Adesivos, Impressão Digital e Corte CNC em ${CITY} | ${SITE_NAME}`,
  description:
    `Adesivos personalizados, impressão digital, logo em alto relevo, corte CNC Router e corte Laser em ${CITY}/${REGION}. Atendimento rápido e orçamento via WhatsApp.`,
  alternates: {
    canonical: "/adesivos-impressao-digital-corte-cnc-sao-jose-dos-campos",
  },
  openGraph: {
    type: "website",
    url: `${DOMAIN}/adesivos-impressao-digital-corte-cnc-sao-jose-dos-campos`,
    siteName: SITE_NAME,
    locale: "pt_BR",
    title: `Adesivos, Impressão Digital e Corte CNC em ${CITY} | ${SITE_NAME}`,
    description:
      `Adesivos personalizados, impressão digital, logo em alto relevo, corte CNC Router e corte Laser em ${CITY}.`,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${SITE_NAME} - Comunicação Visual` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Adesivos, Impressão Digital e Corte CNC em ${CITY} | ${SITE_NAME}`,
    description:
      `Adesivos, impressão digital, logo em alto relevo e corte CNC/Laser em ${CITY}.`,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
}

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Adesivos, Impressão Digital e Corte CNC em ${CITY}`,
    serviceType: [
      "Adesivos Personalizados",
      "Impressão Digital",
      "Logo em Alto Relevo",
      "Corte CNC Router",
      "Corte Laser",
    ],
    areaServed: [
      { "@type": "City", name: CITY },
      { "@type": "AdministrativeArea", name: "Vale do Paraíba" },
      { "@type": "AdministrativeArea", name: REGION },
    ],
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: DOMAIN,
      telephone: PHONE,
      sameAs: [WHATSAPP],
    },
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <JsonLd />

      <style>{`
        :root{
          --nav:#0f1f3a;
          --nav2:#0b1731;
          --green:#b5d600;
          --green2:#a9cc00;
          --bg:#eef2f6;
          --text:#0f172a;
          --muted:#475569;
          --card:#ffffff;
          --r:16px;
          --shadow: 0 10px 28px rgba(2,6,23,.10);
          --shadow2: 0 26px 80px rgba(2,6,23,.16);
        }
        .wrap{width:min(1150px,92vw);margin:0 auto}
        .heroLP{
          position:relative;
          padding: 28px 0 22px;
          background:
            radial-gradient(900px 450px at 25% 20%, rgba(181,214,0,.18), transparent 60%),
            linear-gradient(180deg, rgba(15,31,58,.92), rgba(11,23,49,.96));
          border-bottom: 1px solid rgba(255,255,255,.08);
          overflow:hidden;
        }
        .heroGrid{
          display:grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 18px;
          align-items: start;
        }
        .kicker{
          display:inline-flex;
          gap:10px;
          align-items:center;
          color:rgba(255,255,255,.86);
          font-weight:800;
          letter-spacing:.08em;
          text-transform:uppercase;
          font-size:12px;
          margin-bottom:10px;
          flex-wrap:wrap;
        }
        .pill{
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.10);
          padding: 8px 10px;
          border-radius: 999px;
        }
        .h1lp{
          color:#fff;
          font-size: clamp(30px, 3.2vw, 52px);
          line-height: 1.03;
          letter-spacing: -0.02em;
          font-weight: 900;
          text-transform: uppercase;
          text-shadow: 0 16px 45px rgba(0,0,0,.35);
          margin: 0 0 10px;
          white-space: pre-line;
        }

        .proofGrid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 10px 0 12px;
        }
        .proofCard{
          background: linear-gradient(180deg, rgba(200,234,31,.98), rgba(169,204,0,.98));
          border: 1px solid rgba(0,0,0,.14);
          border-radius: 16px;
          padding: 12px 12px;
          box-shadow: 0 16px 34px rgba(181,214,0,.20);
          color:#132006;
        }
        .proofNum{
          font-weight: 1000;
          font-size: 22px;
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        .proofTxt{
          margin-top: 2px;
          font-weight: 950;
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          opacity: .95;
        }

        .sub{
          color: rgba(255,255,255,.82);
          line-height: 1.6;
          font-size: 15px;
          margin-bottom: 16px;
          max-width: 60ch;
        }
        .ctaRow{display:flex; gap:12px; flex-wrap:wrap; align-items:center}
        .btnGreen{
          height:44px;
          padding:0 18px;
          border-radius: 14px;
          background: linear-gradient(180deg,#c8ea1f,#a9cc00);
          border:1px solid rgba(0,0,0,.18);
          color:#20310a;
          font-weight: 900;
          font-size: 12px;
          letter-spacing: .06em;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          box-shadow: 0 14px 36px rgba(181,214,0,.26);
          white-space:nowrap;
        }
        .btnGhost{
          height:44px;
          padding:0 16px;
          border-radius: 14px;
          background: rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.14);
          color:#fff;
          font-weight: 900;
          font-size: 12px;
          letter-spacing: .06em;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          white-space:nowrap;
        }

        .trustCard{
          background:#ffffff;
          border: 1px solid rgba(2,6,23,.10);
          border-radius: 18px;
          padding: 14px;
          box-shadow: 0 18px 60px rgba(2,6,23,.12);
          align-self: start;
        }
        .trustTop{
          display:flex; justify-content:space-between; gap:10px; align-items:center;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(2,6,23,.08);
          margin-bottom: 12px;
          flex-wrap:wrap;
        }
        .trustTitle{
          color:#0f172a;
          font-weight: 950;
          letter-spacing:.08em;
          text-transform:uppercase;
          font-size:12px;
        }
        .trustBadges{display:flex; gap:8px; flex-wrap:wrap;}
        .badge{
          color:#132006;
          background: rgba(181,214,0,.22);
          border: 1px solid rgba(181,214,0,.35);
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 950;
          font-size: 11px;
          letter-spacing: .04em;
        }

        .logos{
          display:grid;
          grid-template-columns: repeat(4,1fr);
          gap: 12px;
        }
        .logoBox{
          background:#ffffff;
          border: 1px solid rgba(2,6,23,.08);
          border-radius: 14px;
          display:flex;
          align-items:center;
          justify-content:center;
          padding: 12px;
          min-height: 78px;
          box-shadow: 0 10px 22px rgba(2,6,23,.06);
        }
        .logoBox img{
          width: 100%;
          height: 44px;
          max-width: 150px;
          object-fit: contain;
          object-position: center;
        }

        .section{padding: 22px 0;}
        .card{
          background: var(--card);
          border: 1px solid rgba(2,6,23,.08);
          border-radius: var(--r);
          box-shadow: var(--shadow);
          padding: 16px;
        }
        .h2{
          font-size: clamp(22px, 2.2vw, 30px);
          font-weight: 950;
          letter-spacing: -0.02em;
          color: var(--text);
          margin: 0 0 10px;
        }
        .p{color: var(--muted); line-height: 1.65; font-size: 15px}
        .grid4{display:grid; grid-template-columns: repeat(4,1fr); gap: 12px}

        .svc{
          border-radius: 16px;
          border: 1px solid rgba(2,6,23,.08);
          background: linear-gradient(180deg, #fff, #fbfdff);
          box-shadow: 0 10px 24px rgba(2,6,23,.08);
          padding: 14px;
        }
        .svc h3{
          margin:0 0 6px;
          font-size: 14px;
          font-weight: 950;
          letter-spacing: .02em;
          color:#0f172a;
          text-transform:uppercase;
        }
        .svc p{margin:0 0 10px; color:var(--muted); font-size: 14px; line-height: 1.6}
        .svc a{display:inline-flex}

        .gallery{
          display:grid;
          grid-template-columns: repeat(4,1fr);
          gap: 10px;
        }
        .ph{
          border-radius: 14px;
          overflow:hidden;
          border: 1px solid rgba(2,6,23,.08);
          box-shadow: 0 10px 20px rgba(2,6,23,.10);
          background:#e5e7eb;
        }
        .ph img{
          width:100%;
          height: 150px;
          object-fit:cover;
          display:block;
        }

        .localList{
          display:grid;
          grid-template-columns: repeat(2,1fr);
          gap: 10px;
          margin-top: 10px;
        }
        .li{
          border: 1px solid rgba(2,6,23,.08);
          background: #fff;
          border-radius: 14px;
          padding: 10px 12px;
          box-shadow: 0 8px 18px rgba(2,6,23,.06);
          font-weight: 900;
          font-size: 13px;
          color:#0f172a;
        }

        .faq{display:grid; gap:10px}
        details{
          background:#fff;
          border:1px solid rgba(2,6,23,.08);
          border-radius: 16px;
          box-shadow: 0 8px 18px rgba(2,6,23,.06);
          padding: 12px 14px;
        }
        summary{
          cursor:pointer;
          font-weight: 950;
          color:#0f172a;
          letter-spacing: -0.01em;
          list-style:none;
        }
        summary::-webkit-details-marker{display:none}
        details p{margin: 10px 0 0; color: var(--muted); line-height:1.65}

        .stickyCTA{
          position: sticky;
          bottom: 12px;
          z-index: 20;
          display:flex;
          justify-content:center;
          padding: 0 0 12px;
        }
        .stickyInner{
          width:min(1150px,92vw);
          background: rgba(255,255,255,.75);
          border: 1px solid rgba(2,6,23,.10);
          backdrop-filter: blur(10px);
          border-radius: 18px;
          box-shadow: var(--shadow2);
          padding: 10px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 10px;
          flex-wrap:wrap;
        }
        .stickyText{
          font-weight: 950;
          color:#0f172a;
          letter-spacing:-0.01em;
        }

        @media(max-width: 980px){
          .heroGrid{grid-template-columns:1fr}
          .logos{grid-template-columns: repeat(4,1fr)}
          .grid4{grid-template-columns:1fr 1fr}
          .gallery{grid-template-columns: 1fr 1fr}
          .proofGrid{grid-template-columns: 1fr}
        }
        @media(max-width: 520px){
          .logos{grid-template-columns: repeat(2,1fr)}
          .grid4{grid-template-columns:1fr}
          .localList{grid-template-columns:1fr}
          .ph img{height: 160px}
        }
      `}</style>

      <section className="heroLP">
        <div className="wrap heroGrid">
          <div>
            <div className="kicker">
              <span className="pill">Atendimento local</span>
              <span className="pill">{CITY} • {REGION}</span>
              <span className="pill">Orçamento rápido</span>
            </div>

            <h1 className="h1lp">
              Adesivos • Impressão Digital • Logo em Alto Relevo
              {"\n"}Corte CNC Router e Laser em {CITY}
            </h1>

            <div className="proofGrid" aria-label="Provas de confiança">
              <div className="proofCard">
                <div className="proofNum">+1000</div>
                <div className="proofTxt">Projetos realizados</div>
              </div>
              <div className="proofCard">
                <div className="proofNum">16</div>
                <div className="proofTxt">Anos de experiência</div>
              </div>
              <div className="proofCard">
                <div className="proofNum">Rápido</div>
                <div className="proofTxt">Atendimento no WhatsApp</div>
              </div>
            </div>

            <p className="sub">
              Produção profissional para empresas que querem destaque visual, acabamento premium e entrega rápida em <b>{CITY}</b>.
              Adesivos, impressão digital, logos em alto relevo, corte CNC Router e corte Laser com padrão profissional.
            </p>

            <div className="ctaRow">
              <a className="btnGreen" href={waMsg(CTA_TEXT)} target="_blank" rel="noreferrer">
                Solicitar Orçamento no WhatsApp
              </a>
              <Link className="btnGhost" href="/portfolio">
                Ver Portfólio Completo
              </Link>
            </div>
          </div>

          <div className="trustCard">
            <div className="trustTop">
              <div className="trustTitle">Empresas que confiam</div>
              <div className="trustBadges">
                <span className="badge">+1000 projetos</span>
                <span className="badge">16 anos</span>
                <span className="badge">Atendimento rápido</span>
              </div>
            </div>

            <div className="logos" aria-label="Logos de clientes">
              {CLIENT_LOGOS.map((l) => (
                <div key={l.src} className="logoBox">
                  <img src={l.src} alt={l.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="card">
            <h2 className="h2">Serviços mais procurados em {CITY}</h2>
            <p className="p">
              Soluções visuais para valorizar sua marca, melhorar sua fachada e vender mais. Produção sob medida com qualidade,
              leitura visual forte e acabamento profissional.
            </p>

            <div style={{ height: 12 }} />

            <div className="grid4">
              <div className="svc">
                <h3>Adesivos Personalizados</h3>
                <p>Adesivos para vitrine, parede, frota, promoções e comunicação visual com aplicação profissional.</p>
                <a className="btnGreen" href={waMsg(`Quero orçamento de adesivos personalizados em ${CITY}.`)} target="_blank" rel="noreferrer">
                  Pedir orçamento
                </a>
              </div>

              <div className="svc">
                <h3>Impressão Digital</h3>
                <p>Banners, lonas, cartazes, vitrines e materiais impressos com alta definição e excelente acabamento.</p>
                <a className="btnGreen" href={waMsg(`Quero orçamento de impressão digital em ${CITY}.`)} target="_blank" rel="noreferrer">
                  Pedir orçamento
                </a>
              </div>

              <div className="svc">
                <h3>Logo em Alto Relevo</h3>
                <p>Logos corporativos em relevo para fachadas, recepções e ambientes internos com visual premium.</p>
                <a className="btnGreen" href={waMsg(`Quero orçamento de logo em alto relevo em ${CITY}.`)} target="_blank" rel="noreferrer">
                  Pedir orçamento
                </a>
              </div>

              <div className="svc">
                <h3>Corte CNC Router e Laser</h3>
                <p>Cortes em ACM, MDF, PVC e acrílico para letras, painéis, placas, peças promocionais e projetos especiais.</p>
                <a className="btnGreen" href={waMsg(`Quero orçamento de corte CNC Router e Laser em ${CITY}.`)} target="_blank" rel="noreferrer">
                  Pedir orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="card">
            <h2 className="h2">Portfólio — trabalhos de referência</h2>
            <p className="p">
              Veja algumas referências visuais do nosso trabalho. Envie sua ideia no WhatsApp e retornamos com uma proposta profissional.
            </p>

            <div style={{ height: 12 }} />

            <div className="gallery" aria-label="Galeria de fotos">
              {GALLERY.map((src) => (
                <div key={src} className="ph">
                  <img src={src} alt={`Projeto - ${SITE_NAME}`} loading="lazy" />
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
              <a className="btnGreen" href={waMsg(`Olá! Quero orçamento em ${CITY}. Vou enviar referência.`)} target="_blank" rel="noreferrer">
                Enviar referência no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="card">
            <h2 className="h2">Atendimento em {CITY} e região</h2>
            <p className="p">
              Atendimento local para empresas que precisam de agilidade, boa apresentação e padrão profissional em comunicação visual.
            </p>

            <div className="localList" aria-label="Regiões atendidas">
              <div className="li">Centro</div>
              <div className="li">Zona Sul</div>
              <div className="li">Zona Leste</div>
              <div className="li">Zona Norte</div>
              <div className="li">Urbanova</div>
              <div className="li">Aquarius</div>
              <div className="li">Eugênio de Melo</div>
              <div className="li">Chácaras Reunidas</div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
              <a className="btnGreen" href={waMsg(`Olá! Quero orçamento de adesivos, impressão e corte em ${CITY}.`)} target="_blank" rel="noreferrer">
                Solicitar orçamento em {CITY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="card">
            <h2 className="h2">Dúvidas frequentes</h2>
            <div className="faq">
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="stickyCTA">
        <div className="stickyInner">
          <div className="stickyText">
            Quer orçamento em <b>{CITY}</b>? Envie foto, medida ou referência no WhatsApp.
          </div>
          <a className="btnGreen" href={waMsg(CTA_TEXT)} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}