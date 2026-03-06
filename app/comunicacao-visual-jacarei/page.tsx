import type { Metadata } from "next"
import Link from "next/link"

const SITE_NAME = "Vale Designer"
const DOMAIN = "https://www.valedesigner.com.br"
const CITY = "Jacareí"
const REGION = "SP"
const PHONE = "+55 12 98807-5372"
const WHATSAPP_NUMBER = "5512988075372"
const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`

const waMsg = (t: string) => `${WHATSAPP}?text=${encodeURIComponent(t)}`
const CTA_TEXT = `Olá! Quero um orçamento premium em ${CITY}.`

// ✅ 12 LOGOS (todos existem no seu /public/clientes segundo o print)
const CLIENT_LOGOS = [
  { src: "/clientes/BAND.png", alt: "Band" },
  { src: "/clientes/BAUDUCO.png", alt: "Bauducco" },
  { src: "/clientes/BB.png", alt: "Banco do Brasil" },
  { src: "/clientes/BOTICARIO.png", alt: "O Boticário" },

  { src: "/clientes/CLARO.png", alt: "Claro" },
  { src: "/clientes/CASADOCELULAR.png", alt: "Casa do Celular" },
  { src: "/clientes/CLICKFIOS.png", alt: "Click Fios" },
  { src: "/clientes/CONSTANCE.png", alt: "Constance" },

  { src: "/clientes/AMBIPAR.png", alt: "Ambipar" },
  { src: "/clientes/ATULIPA.png", alt: "A Tulipa" },
  { src: "/clientes/AUTHENTIC.png", alt: "Authentic" },
  { src: "/clientes/HABIBS.png", alt: "Habib's" },
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
    q: "Vocês atendem toda Jacareí?",
    a: "Sim. Atendemos todas as regiões de Jacareí e também cidades próximas no Vale do Paraíba.",
  },
  {
    q: "Vocês fazem fabricação e instalação?",
    a: "Sim. Projeto, fabricação e instalação com padrão profissional (estrutura, fixação e acabamento).",
  },
  {
    q: "Qual o prazo médio de entrega?",
    a: "Depende do serviço e do tamanho. Em geral, informamos prazo e cronograma na proposta (com opção de prioridade).",
  },
  {
    q: "Quais serviços vocês fazem?",
    a: "Fachadas em ACM, letras caixa, luminosos, adesivagem, placas e sinalização, impressão digital e projetos completos.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Você chama no WhatsApp, envia referência/medidas (ou agendamos visita) e retornamos com proposta completa.",
  },
]

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: `Comunicação Visual em ${CITY} | Fachadas em ACM, Letras Caixa e Luminosos`,
  description: `Comunicação Visual em ${CITY}/${REGION}: fachadas em ACM, letras caixa, luminosos, adesivagem, placas e impressão digital. Atendimento rápido e orçamento no WhatsApp.`,
  alternates: { canonical: "/comunicacao-visual-jacarei" },
  openGraph: {
    type: "website",
    url: `${DOMAIN}/comunicacao-visual-jacarei`,
    siteName: SITE_NAME,
    locale: "pt_BR",
    title: `Comunicação Visual em ${CITY} | ${SITE_NAME}`,
    description: `Fachadas em ACM, letras caixa, luminosos e adesivagem em ${CITY}. Orçamento rápido via WhatsApp.`,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${SITE_NAME} - Comunicação Visual` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Comunicação Visual em ${CITY} | ${SITE_NAME}`,
    description: `Fachadas em ACM, letras caixa, luminosos e adesivagem em ${CITY}.`,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
}

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Comunicação Visual em ${CITY}`,
    serviceType: [
      "Fachada em ACM",
      "Letras Caixa",
      "Luminosos",
      "Adesivagem",
      "Placas e Sinalização",
      "Impressão Digital",
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
          align-items: stretch;
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

        /* ✅ PROVA SOCIAL PREMIUM */
        .trustCard{
          background:#ffffff;
          border: 1px solid rgba(2,6,23,.10);
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 18px 60px rgba(2,6,23,.12);
        }
        .trustTop{
          display:flex;
          justify-content:space-between;
          gap:10px;
          align-items:center;
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
          color:#0f172a;
          background: rgba(2,6,23,.04);
          border: 1px solid rgba(2,6,23,.08);
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 900;
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
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .logoBox:hover{
          transform: translateY(-2px);
          box-shadow: 0 16px 32px rgba(2,6,23,.10);
        }

        /* ✅ NÃO ESTICA (PRO) */
        .logoBox img{
          width: 100%;
          height: 44px;
          max-width: 140px;
          object-fit: contain;
          object-position: center;
          filter: none;
          opacity: 1;
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
        }
        @media(max-width: 520px){
          .logos{grid-template-columns: repeat(2,1fr)}
          .grid4{grid-template-columns:1fr}
          .localList{grid-template-columns:1fr}
          .ph img{height: 160px}
        }
      `}</style>

      {/* HERO */}
      <section className="heroLP">
        <div className="wrap heroGrid">
          <div>
            <div className="kicker">
              <span className="pill">Atendimento local</span>
              <span className="pill">{CITY} • {REGION}</span>
              <span className="pill">Orçamento rápido</span>
            </div>

            <h1 className="h1lp">
              Comunicação Visual em {CITY}
              {"\n"}Fachadas • Letras Caixa • Luminosos
            </h1>

            <p className="sub">
              Projetos profissionais para empresas — do conceito à instalação. Atendimento em <b>{CITY}</b> e região, com padrão
              premium e acabamento impecável.
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

          {/* Prova social */}
          <div className="trustCard">
            <div className="trustTop">
              <div className="trustTitle">Empresas que confiam</div>
              <div className="trustBadges">
                <span className="badge">Instalação</span>
                <span className="badge">Garantia</span>
                <span className="badge">Acabamento</span>
              </div>
            </div>

            <div className="logos" aria-label="Logos de clientes">
              {CLIENT_LOGOS.map((l) => (
                <div key={l.src} className="logoBox">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src} alt={l.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section">
        <div className="wrap">
          <div className="card">
            <h2 className="h2">Soluções de Comunicação Visual para {CITY}</h2>
            <p className="p">
              Aqui o objetivo é simples: <b>transformar sua fachada em vendas</b>. Produção e instalação com padrão profissional,
              materiais premium e entrega alinhada com o que você precisa.
            </p>

            <div style={{ height: 12 }} />

            <div className="grid4">
              <div className="svc">
                <h3>Fachadas em ACM</h3>
                <p>Revestimento premium, alinhamento perfeito e acabamento limpo para destacar sua empresa.</p>
                <a className="btnGreen" href={waMsg(`Quero orçamento de Fachada em ACM em ${CITY}.`)} target="_blank" rel="noreferrer">
                  Pedir orçamento
                </a>
              </div>

              <div className="svc">
                <h3>Letras Caixa</h3>
                <p>Alto-relevo, iluminação opcional, presença forte e leitura perfeita de longe.</p>
                <a className="btnGreen" href={waMsg(`Quero orçamento de Letras Caixa em ${CITY}.`)} target="_blank" rel="noreferrer">
                  Pedir orçamento
                </a>
              </div>

              <div className="svc">
                <h3>Luminosos</h3>
                <p>Alta visibilidade à noite, padrão premium e melhor impacto para rua movimentada.</p>
                <a className="btnGreen" href={waMsg(`Quero orçamento de Luminoso em ${CITY}.`)} target="_blank" rel="noreferrer">
                  Pedir orçamento
                </a>
              </div>

              <div className="svc">
                <h3>Adesivagem & Impressão</h3>
                <p>Vitrine, frota, paredes e placas com impressão nítida e instalação caprichada.</p>
                <a className="btnGreen" href={waMsg(`Quero orçamento de Adesivagem/Impressão em ${CITY}.`)} target="_blank" rel="noreferrer">
                  Pedir orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="section">
        <div className="wrap">
          <div className="card">
            <h2 className="h2">Portfólio — padrão premium (amostras)</h2>
            <p className="p">
              Algumas amostras de projetos. Quer algo igual? Manda referência no WhatsApp que te passo a proposta completa.
            </p>

            <div style={{ height: 12 }} />

            <div className="gallery" aria-label="Galeria de fotos">
              {GALLERY.map((src) => (
                <div key={src} className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Projeto - ${SITE_NAME}`} loading="lazy" />
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
              <a className="btnGreen" href={waMsg(`Olá! Quero orçamento. Estou em ${CITY}. Tenho referência/fotos.`)} target="_blank" rel="noreferrer">
                Enviar referência no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREA ATENDIDA */}
      <section className="section">
        <div className="wrap">
          <div className="card">
            <h2 className="h2">Atendimento em {CITY} (e região)</h2>
            <p className="p">
              Atendimento local com foco em prazo, acabamento e instalação profissional. Se você está em {CITY} ou próximo, chama no WhatsApp.
            </p>

            <div className="localList" aria-label="Regiões atendidas">
              <div className="li">Centro</div>
              <div className="li">Jardim Califórnia</div>
              <div className="li">Villa Branca</div>
              <div className="li">Parque Meia-Lua</div>
              <div className="li">Jardim Emília</div>
              <div className="li">Jardim Santa Maria</div>
              <div className="li">Cidade Salvador</div>
              <div className="li">Parque Santo Antônio</div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
              <a className="btnGreen" href={waMsg(`Olá! Quero orçamento em ${CITY}. Qual o prazo e valor médio?`)} target="_blank" rel="noreferrer">
                Quero orçamento em {CITY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA Sticky */}
      <div className="stickyCTA">
        <div className="stickyInner">
          <div className="stickyText">
            Quer orçamento em <b>{CITY}</b>? Envie foto/medida e eu retorno rápido.
          </div>
          <a className="btnGreen" href={waMsg(CTA_TEXT)} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}