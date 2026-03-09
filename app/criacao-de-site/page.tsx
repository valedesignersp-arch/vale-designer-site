import type { Metadata } from "next"
import Link from "next/link"

const SITE_NAME = "Vale Designer"
const DOMAIN = "https://www.valedesigner.com.br"
const PAGE_URL = `${DOMAIN}/criacao-de-site`
const WHATSAPP_NUMBER = "5512988075372"
const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`

const waMsg = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`

export const metadata: Metadata = {
  title: "Criação de Site e Sistema Web | Vale Designer",
  description:
    "Criação de sites profissionais e sistemas web para empresas em Jacareí e São José dos Campos. Landing pages, automação e presença forte no Google.",
  alternates: {
    canonical: "/criacao-de-site",
  },
  keywords: [
    "criação de site jacareí",
    "criação de site são josé dos campos",
    "desenvolvimento web",
    "sistema web empresarial",
    "landing page jacareí",
    "site profissional vale do paraíba",
  ],
  openGraph: {
    title: "Criação de Site e Sistema Web | Vale Designer",
    description:
      "Sites profissionais, sistemas web e landing pages para empresas.",
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${DOMAIN}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Criação de Site Vale Designer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Page() {
  return (
    <>
      <main className="site-page">
        <section className="site-hero">
          <div className="hero-bg-glow hero-bg-glow-1" />
          <div className="hero-bg-glow hero-bg-glow-2" />

          <div className="site-wrap site-hero-grid">
            <div className="hero-left">
              <div className="site-kicker">CRIAÇÃO DE SITES PROFISSIONAIS</div>

              <h1 className="site-hero-title">
                Criação de Site e
                <br />
                Sistema Web
              </h1>

              <p className="site-hero-text">
                Desenvolvemos sites profissionais e sistemas web modernos,
                rápidos e estratégicos para empresas que querem vender mais,
                transmitir credibilidade e fortalecer sua presença digital.
              </p>

              <div className="site-hero-actions">
                <Link
                  href={waMsg(
                    "Olá! Quero um orçamento para criação de site e sistema web."
                  )}
                  className="site-btn-primary"
                >
                  Solicitar Orçamento
                </Link>

                <Link href="/portfolio" className="site-btn-secondary">
                  Ver Portfólio
                </Link>
              </div>

              <div className="site-benefits-grid">
                <div className="benefit-item">✔ Site profissional moderno</div>
                <div className="benefit-item">✔ SEO para Google</div>
                <div className="benefit-item">✔ WhatsApp integrado</div>
                <div className="benefit-item">✔ Site rápido e seguro</div>
              </div>
            </div>

            <div className="hero-right">
              <div className="premium-card">
                <div className="premium-card-top">
                  <div className="premium-badge">ENTREGA PREMIUM</div>

                  <h2 className="premium-card-title">
                    Site pensado para gerar clientes e valorizar sua marca
                  </h2>

                  <p className="premium-card-text">
                    Estrutura profissional para empresas que precisam de presença
                    forte, conversão e posicionamento digital.
                  </p>
                </div>

                <div className="premium-list">
                  <div className="premium-list-item">
                    <span className="premium-dot" />
                    Design profissional alinhado à sua marca
                  </div>
                  <div className="premium-list-item">
                    <span className="premium-dot" />
                    SEO para Google e estrutura local
                  </div>
                  <div className="premium-list-item">
                    <span className="premium-dot" />
                    Integração com WhatsApp e conversão
                  </div>
                  <div className="premium-list-item">
                    <span className="premium-dot" />
                    Estrutura para anúncios e campanhas
                  </div>
                  <div className="premium-list-item">
                    <span className="premium-dot" />
                    Alta performance e carregamento rápido
                  </div>
                </div>

                <div className="premium-mini-stats">
                  <div className="mini-stat">
                    <strong>100%</strong>
                    <span>Responsivo</span>
                  </div>
                  <div className="mini-stat">
                    <strong>SEO</strong>
                    <span>Otimizado</span>
                  </div>
                  <div className="mini-stat">
                    <strong>CTA</strong>
                    <span>Conversão</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section light">
          <div className="site-wrap">
            <div className="section-head">
              <div className="section-kicker">SOLUÇÕES DIGITAIS</div>
              <h2 className="section-title">
                O que podemos criar para sua empresa
              </h2>
              <p className="section-text">
                Desenvolvemos páginas e sistemas com foco em presença digital,
                posicionamento de marca e geração de oportunidades comerciais.
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>Landing Page</h3>
                <p>
                  Página estratégica para campanhas, anúncios e geração de
                  leads com foco em resultado.
                </p>
              </div>

              <div className="service-card">
                <h3>Site Institucional</h3>
                <p>
                  Ideal para apresentar a empresa, serviços, diferenciais e
                  canais de contato com visual profissional.
                </p>
              </div>

              <div className="service-card">
                <h3>Sistema Web</h3>
                <p>
                  Plataformas e áreas internas para organizar processos,
                  pedidos, atendimento e automações.
                </p>
              </div>

              <div className="service-card">
                <h3>SEO Local</h3>
                <p>
                  Estrutura preparada para ajudar sua empresa a aparecer no
                  Google em Jacareí, São José e região.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section dark-band">
          <div className="site-wrap split-grid">
            <div className="glass-box">
              <div className="section-kicker light">DIFERENCIAL</div>
              <h2 className="section-title light">
                Seu site precisa vender, não só existir
              </h2>
              <p className="section-text light">
                Um projeto profissional precisa unir design, estratégia, SEO,
                velocidade e comunicação clara. É isso que transforma visitantes
                em contatos.
              </p>
            </div>

            <div className="glass-box">
              <div className="check-list">
                <div>✔ Visual premium e moderno</div>
                <div>✔ Estrutura pensada para conversão</div>
                <div>✔ Integração com WhatsApp</div>
                <div>✔ Textos estratégicos para Google</div>
                <div>✔ Experiência forte no celular</div>
                <div>✔ Base ideal para anúncios</div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section light bottom-space">
          <div className="site-wrap cta-box">
            <div>
              <div className="section-kicker">ORÇAMENTO RÁPIDO</div>
              <h2 className="section-title">Quer criar seu site com nível profissional?</h2>
              <p className="section-text">
                Fale agora pelo WhatsApp e solicite um orçamento para criação de
                site ou sistema web para sua empresa.
              </p>
            </div>

            <div className="cta-actions">
              <Link
                href={waMsg(
                  "Olá! Quero solicitar um orçamento para criação de site e sistema web."
                )}
                className="site-btn-primary"
              >
                Falar no WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .site-page {
          background: #f4f6f8;
          color: #0f172a;
        }

        .site-wrap {
          width: min(1180px, 92vw);
          margin: 0 auto;
        }

        .site-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(181,214,0,0.10), transparent 28%),
            radial-gradient(circle at bottom right, rgba(15,31,58,0.10), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%);
          padding: 78px 0 70px;
        }

        .hero-bg-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(60px);
          opacity: 0.35;
          pointer-events: none;
        }

        .hero-bg-glow-1 {
          width: 260px;
          height: 260px;
          top: -60px;
          left: -40px;
          background: rgba(181, 214, 0, 0.35);
        }

        .hero-bg-glow-2 {
          width: 340px;
          height: 340px;
          right: -80px;
          bottom: -120px;
          background: rgba(15, 31, 58, 0.22);
        }

        .site-hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 34px;
          align-items: center;
        }

        .site-kicker {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          padding: 0 16px;
          border-radius: 999px;
          background: linear-gradient(180deg, #d6f53a 0%, #b5d600 100%);
          color: #213108;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.03em;
          box-shadow: 0 10px 24px rgba(181,214,0,.22);
          margin-bottom: 20px;
        }

        .site-hero-title {
          margin: 0 0 18px;
          font-size: clamp(42px, 5.5vw, 76px);
          line-height: 0.98;
          font-weight: 900;
          letter-spacing: -0.055em;
          color: #0d2345;
        }

        .site-hero-text {
          margin: 0 0 24px;
          max-width: 720px;
          font-size: 20px;
          line-height: 1.7;
          color: #405066;
        }

        .site-hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .site-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 24px;
          border-radius: 14px;
          background: linear-gradient(180deg, #d1f136 0%, #b5d600 100%);
          color: #1e2a08;
          text-decoration: none;
          font-weight: 900;
          box-shadow: 0 18px 34px rgba(181,214,0,.24);
          transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
        }

        .site-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 42px rgba(181,214,0,.28);
          filter: saturate(1.02);
        }

        .site-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 24px;
          border-radius: 14px;
          border: 1px solid rgba(15,31,58,.16);
          background: rgba(255,255,255,.58);
          backdrop-filter: blur(8px);
          color: #0f1f3a;
          text-decoration: none;
          font-weight: 800;
          transition: transform .18s ease, border-color .18s ease;
        }

        .site-btn-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(15,31,58,.28);
        }

        .site-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 20px;
          max-width: 760px;
        }

        .benefit-item {
          color: #20324c;
          font-size: 16px;
          line-height: 1.5;
          font-weight: 600;
        }

        .premium-card {
          background: rgba(255,255,255,.72);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,.65);
          border-radius: 28px;
          padding: 28px;
          box-shadow:
            0 20px 50px rgba(15,31,58,.10),
            inset 0 1px 0 rgba(255,255,255,.65);
        }

        .premium-card-top {
          margin-bottom: 18px;
        }

        .premium-badge {
          display: inline-flex;
          align-items: center;
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(15,31,58,.08);
          color: #456;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .06em;
          margin-bottom: 14px;
        }

        .premium-card-title {
          margin: 0 0 10px;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #0d2345;
        }

        .premium-card-text {
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
          color: #617085;
        }

        .premium-list {
          display: grid;
          gap: 12px;
          margin-bottom: 22px;
        }

        .premium-list-item {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 56px;
          padding: 0 16px;
          border-radius: 16px;
          background: rgba(255,255,255,.7);
          border: 1px solid rgba(15,31,58,.06);
          font-weight: 700;
          color: #102344;
        }

        .premium-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #b5d600;
          box-shadow: 0 0 0 6px rgba(181,214,0,.14);
          flex: 0 0 auto;
        }

        .premium-mini-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .mini-stat {
          background: linear-gradient(180deg, rgba(15,31,58,.04), rgba(15,31,58,.02));
          border: 1px solid rgba(15,31,58,.06);
          border-radius: 16px;
          padding: 14px 12px;
          text-align: center;
        }

        .mini-stat strong {
          display: block;
          font-size: 22px;
          color: #0d2345;
          margin-bottom: 4px;
        }

        .mini-stat span {
          display: block;
          font-size: 13px;
          color: #6a7890;
          font-weight: 700;
        }

        .site-section {
          padding: 70px 0;
        }

        .site-section.light {
          background: #f7f8fa;
        }

        .site-section.bottom-space {
          padding-bottom: 90px;
        }

        .section-head {
          text-align: center;
          margin-bottom: 28px;
        }

        .section-kicker {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(15,31,58,.06);
          color: #526277;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .08em;
          margin-bottom: 14px;
        }

        .section-kicker.light {
          background: rgba(255,255,255,.10);
          color: rgba(255,255,255,.78);
        }

        .section-title {
          margin: 0 0 12px;
          font-size: clamp(34px, 4.2vw, 54px);
          line-height: 1.03;
          font-weight: 900;
          letter-spacing: -0.05em;
          color: #102344;
        }

        .section-title.light {
          color: #fff;
        }

        .section-text {
          margin: 0 auto;
          max-width: 820px;
          font-size: 17px;
          line-height: 1.75;
          color: #627287;
        }

        .section-text.light {
          color: rgba(255,255,255,.8);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .service-card {
          background: #fff;
          border: 1px solid rgba(15,31,58,.06);
          border-radius: 22px;
          padding: 24px;
          box-shadow: 0 14px 32px rgba(15,31,58,.05);
          transition: transform .18s ease, box-shadow .18s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(15,31,58,.08);
        }

        .service-card h3 {
          margin: 0 0 10px;
          font-size: 24px;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #102344;
        }

        .service-card p {
          margin: 0;
          font-size: 15px;
          line-height: 1.75;
          color: #66768b;
        }

        .dark-band {
          background: linear-gradient(180deg, #102344 0%, #0c1a34 100%);
        }

        .split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .glass-box {
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 24px;
          padding: 28px;
          backdrop-filter: blur(10px);
          box-shadow: 0 18px 34px rgba(0,0,0,.12);
        }

        .check-list {
          display: grid;
          gap: 14px;
          color: rgba(255,255,255,.9);
          font-size: 16px;
          font-weight: 700;
          line-height: 1.55;
        }

        .cta-box {
          background: linear-gradient(180deg, #ffffff 0%, #f4f7fa 100%);
          border: 1px solid rgba(15,31,58,.06);
          border-radius: 28px;
          padding: 32px;
          box-shadow: 0 20px 44px rgba(15,31,58,.07);
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 18px;
          align-items: center;
        }

        .cta-actions {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        @media (max-width: 1100px) {
          .site-hero-grid,
          .split-grid,
          .cta-box {
            grid-template-columns: 1fr;
          }

          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cta-actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 720px) {
          .site-hero {
            padding: 56px 0 52px;
          }

          .site-benefits-grid,
          .services-grid,
          .premium-mini-stats {
            grid-template-columns: 1fr;
          }

          .premium-card,
          .glass-box,
          .cta-box,
          .service-card {
            padding: 22px;
          }

          .site-hero-text {
            font-size: 17px;
          }
        }
      `}</style>
    </>
  )
}