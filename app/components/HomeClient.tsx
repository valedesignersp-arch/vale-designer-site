'use client'

import Link from "next/link"
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react"
import { CATEGORIAS } from "../dados"

type Props = {
  scrollToId?: string
}

const CONFIG = {
  telefone1: '(12) 98807-5372',
  telefone2: '(12) 99663-8696',
  instagram: 'valedesignersp',
  facebook: 'valedesignersp',
  email: 'valedesignersp@gmail.com',
  site: 'www.valedesigner.com.br',
  whatsapp: '5512988075372',
}

const WA = `https://wa.me/${CONFIG.whatsapp}`
const waMsg = (t: string) => `${WA}?text=${encodeURIComponent(t)}`

const CLIENTES = [
  { logo: '/clientes/AMBIPAR.png', nome: 'Ambipar' },
  { logo: '/clientes/ATULIPA.png', nome: 'Atulipa' },
  { logo: '/clientes/AUTHENTIC.png', nome: 'Authentic' },
  { logo: '/clientes/BAND.png', nome: 'Band' },
  { logo: '/clientes/BAUDUCO.png', nome: 'Casa Bauducco' },
  { logo: '/clientes/BB.png', nome: 'Banco do Brasil' },
  { logo: '/clientes/BOTICARIO.png', nome: 'O Boticário' },
  { logo: '/clientes/BRESCIA.png', nome: 'Brescia' },
  { logo: '/clientes/CASADOCELULAR.png', nome: 'Casa do Celular' },
  { logo: '/clientes/CASAHUPE.png', nome: 'Casa Hupe' },
  { logo: '/clientes/CLARO.png', nome: 'Claro' },
  { logo: '/clientes/CLIENTE 2022.png', nome: 'Cliente 2022' },
  { logo: '/clientes/CONSTANCE.png', nome: 'Constance' },
  { logo: '/clientes/CORDEIRO.png', nome: 'Cordeiro' },
  { logo: '/clientes/CYCLEX.png', nome: 'Cyclex' },
  { logo: '/clientes/ESTILUS.png', nome: 'Estilus' },
  { logo: '/clientes/FISIOCARE.png', nome: 'Fisiocare' },
  { logo: '/clientes/FRANGOASSADO.png', nome: 'Frango Assado' },
  { logo: '/clientes/GATES.png', nome: 'Gates' },
  { logo: '/clientes/GOLD.png', nome: 'Gold' },
  { logo: '/clientes/HABIBS.png', nome: "Habib's" },
  { logo: '/clientes/HOSPITAL.png', nome: 'Hospital' },
  { logo: '/clientes/IWATA.png', nome: 'Iwata' },
  { logo: '/clientes/KEK.png', nome: 'KEK' },
  { logo: '/clientes/KIMBERLY.png', nome: 'Kimberly' },
  { logo: '/clientes/KING.png', nome: 'King' },
  { logo: '/clientes/LANZILOTI.png', nome: 'Lanziloti' },
  { logo: '/clientes/LAVANDERIA.png', nome: 'Lavanderia' },
  { logo: '/clientes/LEAR.png', nome: 'Lear' },
  { logo: '/clientes/LEITEMEL.png', nome: 'Leite & Mel' },
  { logo: '/clientes/LOCALIZA.png', nome: 'Localiza' },
  { logo: '/clientes/MAGALU.png', nome: 'Magalu' },
  { logo: '/clientes/MAGICFEET.png', nome: 'Magic Feet' },
  { logo: '/clientes/MARIA.png', nome: 'Maria' },
  { logo: '/clientes/MASTRI.png', nome: 'Mastri' },
  { logo: '/clientes/MC.png', nome: "McDonald's" },
  { logo: '/clientes/MILKY.png', nome: 'Milky' },
  { logo: '/clientes/MUNDO.png', nome: 'Mundo' },
  { logo: '/clientes/NEWERA.png', nome: 'Newera' },
  { logo: '/clientes/NICON.png', nome: 'Nicon' },
  { logo: '/clientes/ONDONTO.png', nome: 'Odonto' },
  { logo: '/clientes/ORTHOPIDE.png', nome: 'Orthopide' },
  { logo: '/clientes/QUADRANGULAR.png', nome: 'Quadrangular' },
  { logo: '/clientes/QUIK.png', nome: 'Quik' },
  { logo: '/clientes/RAINHA.png', nome: 'Rainha' },
  { logo: '/clientes/RESERVA.png', nome: 'Reserva' },
  { logo: '/clientes/RIOVALE.png', nome: 'Rio Vale' },
  { logo: '/clientes/ROASTED.png', nome: 'Roasted' },
  { logo: '/clientes/SABIN.png', nome: 'Sabin' },
  { logo: '/clientes/SANTI.png', nome: 'Santi' },
  { logo: '/clientes/SINCOMERCIO.png', nome: 'Sincomércio' },
  { logo: '/clientes/SOARMAS.png', nome: 'Soarmas' },
  { logo: '/clientes/SORRIX.png', nome: 'Sorrix' },
  { logo: '/clientes/SOUICE.png', nome: 'Souice' },
  { logo: '/clientes/STAR.png', nome: 'Star' },
  { logo: '/clientes/Stihl_Logo.png', nome: 'Stihl' },
  { logo: '/clientes/SUCO.png', nome: 'Suco' },
  { logo: '/clientes/SUZANO.png', nome: 'Suzano' },
  { logo: '/clientes/THEVAL.png', nome: 'Theval' },
  { logo: '/clientes/UNIVAP.png', nome: 'Univap' },
  { logo: '/clientes/VIVO.png', nome: 'Vivo' },
  { logo: '/clientes/W.png', nome: 'W' },
  { logo: '/clientes/houter.png', nome: 'Houter' },
  { logo: '/clientes/hotel.png', nome: 'Hotel' },
  { logo: '/clientes/clickfios.png', nome: 'Clickfios' },
  { logo: '/clientes/sanja.png', nome: 'Sanja' },
  { logo: '/clientes/multifarma.png', nome: 'Multifarma' },
]

const PORTFOLIO = [
  '/portfolio/1.jpg',
  '/portfolio/2.jpg',
  '/portfolio/3.jpg',
  '/portfolio/4.jpg',
  '/portfolio/5.jpg',
  '/portfolio/6.jpg',
  '/portfolio/7.jpg',
  '/portfolio/8.jpg',
]

function CountUp({
  end,
  duration = 1800,
}: {
  end: number
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    let startTime: number | null = null
    let frameId = 0

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.round(end * eased))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate)
      }
    }

    frameId = window.requestAnimationFrame(animate)

    return () => window.cancelAnimationFrame(frameId)
  }, [started, end, duration])

  return <div ref={ref}>+{count}</div>
}

export default function HomeClient({ scrollToId }: Props) {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', servico: '', mensagem: '' })
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!scrollToId) return

    const tryScroll = () => {
      const el = document.getElementById(scrollToId)
      if (!el) return false
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      return true
    }

    if (tryScroll()) return
    const t = setTimeout(() => tryScroll(), 120)
    return () => clearTimeout(t)
  }, [scrollToId])

  function enviar(e: FormEvent) {
    e.preventDefault()
    const msg =
      `Olá Vale Designer!\n\n` +
      `Nome: ${form.nome}\n` +
      `Telefone: ${form.telefone}\n` +
      `E-mail: ${form.email}\n` +
      `Serviço: ${form.servico}\n` +
      `Mensagem: ${form.mensagem}`
    window.open(waMsg(msg), '_blank')
  }

  const CLIENTES_LOOP = useMemo(() => [...CLIENTES, ...CLIENTES], [])

  const clientsDur = useMemo(() => {
    const s = Math.round(Math.max(90, CLIENTES.length * 1.8))
    return `${s}s`
  }, [])

  const openLightbox = (src: string) => {
    setActive(src)
    setOpen(true)
  }

  const closeLightbox = () => {
    setOpen(false)
    setActive(null)
  }

  return (
    <main id="home">
      <style jsx global>{`
        :root{
          --green:#b5d600;
          --text:#0f172a;
          --muted:#64748b;
          --bg:#eef2f6;
          --card:#ffffff;
          --shadow: 0 8px 22px rgba(2,6,23,.10);
          --shadow2: 0 18px 60px rgba(2,6,23,.16);
          --r: 12px;
        }

        *{box-sizing:border-box;margin:0;padding:0}
        body{background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased}
        a{text-decoration:none;color:inherit}

        .wrap{width:min(1150px, 92vw);margin:0 auto}

        .section{padding: 26px 0 0;}
        .section-title{
          margin: 10px auto 12px;
          text-align:center;
          color:var(--text);
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }
        .divider{
          height:1px;background: rgba(15,31,58,.12);
          margin: 0 auto 18px;
          width:min(1100px, 92vw);
        }

        .section-sub{
          text-align:center;
          max-width: 980px;
          margin: -6px auto 16px;
          color: var(--muted);
          font-weight: 600;
          line-height: 1.6;
          font-size: 14px;
          padding: 0 10px;
        }
        .section-sub strong{
          color:#334155;
          font-weight: 800;
        }

        .stats{
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          padding: 28px 0 22px;
          border-bottom: 1px solid rgba(15,31,58,.08);
        }
        .stats-wrap{
          width:min(1100px, 92vw);
          margin:0 auto;
        }
        .stats-box{
          background:#fff;
          border:1px solid rgba(2,6,23,.08);
          border-radius: 18px;
          box-shadow: 0 16px 38px rgba(2,6,23,.08);
          padding: 26px 12px;
        }
        .stats-grid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          align-items:center;
        }
        .stat-item{
          text-align:center;
          padding: 8px 18px;
          position:relative;
        }
        .stat-item:not(:last-child)::after{
          content:"";
          position:absolute;
          right:0;
          top:50%;
          transform:translateY(-50%);
          width:1px;
          height:72px;
          background: rgba(15,31,58,.10);
        }
        .stat-number{
          font-size: clamp(40px, 6vw, 78px);
          line-height: .95;
          font-weight: 900;
          letter-spacing: -0.05em;
          color:#132d66;
          margin-bottom: 10px;
        }
        .stat-label{
          font-size: clamp(13px, 1.4vw, 16px);
          font-weight: 800;
          letter-spacing: 0.03em;
          color:#7a8aa3;
          text-transform: uppercase;
        }

        .services{background: #f3f5f8;padding: 18px 0 10px;}
        .services-grid{
          display:grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
          padding-bottom: 6px;
        }
        .service-link{display:block}
        .service-card{
          background: var(--card);
          border: 1px solid rgba(2,6,23,.08);
          border-radius: var(--r);
          box-shadow: 0 6px 14px rgba(2,6,23,.06);
          padding: 16px 12px;
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          min-height: 118px;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
          cursor:pointer;
        }
        .service-card:hover{
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(2,6,23,.10);
          border-color: rgba(181,214,0,.22);
        }
        .service-card img{height:48px;width:auto;margin-bottom:12px;display:block}
        .service-card span{
          font-size:13px;
          font-weight:800;
          color:#1f2a44;
          text-align:center;
          line-height:1.15;
        }
        .service-card small{
          margin-top:6px;
          font-size:12px;
          color:#6b7280;
          font-weight:700;
        }
        .services-cta{
          display:flex;
          justify-content:center;
          padding: 12px 0 8px;
        }

        .btn-green{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          min-height:46px;
          padding:0 22px;
          border-radius:14px;
          background:var(--green);
          color:#1f2a00;
          font-weight:900;
          font-size:15px;
          box-shadow:0 10px 26px rgba(181,214,0,.28);
          transition:transform .18s ease, box-shadow .18s ease, filter .18s ease;
          cursor:pointer;
        }
        .btn-green:hover{
          transform:translateY(-2px);
          box-shadow:0 16px 38px rgba(181,214,0,.34);
          filter:saturate(1.03);
        }

        .clients{background:#f3f5f8;padding: 10px 0 0;}
        .clients-strip{
          background:#fff;
          border: 1px solid rgba(2,6,23,.08);
          border-radius: var(--r);
          box-shadow: 0 6px 16px rgba(2,6,23,.06);
          overflow:hidden;
          padding: 10px 0;
          position:relative;
        }
        .clients-strip::before,
        .clients-strip::after{
          content:"";
          position:absolute;
          top:0; bottom:0;
          width:70px;
          pointer-events:none;
          z-index:2;
        }
        .clients-strip::before{
          left:0;
          background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0) 100%);
        }
        .clients-strip::after{
          right:0;
          background: linear-gradient(270deg, #fff 0%, rgba(255,255,255,0) 100%);
        }
        .clients-marquee{
          display:flex;
          align-items:center;
          gap: 26px;
          width:max-content;
          padding: 10px 18px;
          animation: clientsScroll var(--clientsDur) linear infinite;
          will-change: transform;
          transform: translate3d(0,0,0);
        }
        .clients-strip:hover .clients-marquee{ animation-play-state: paused; }
        .client-logo{
          height: 36px;
          width: auto;
          display:block;
          opacity: .82;
          transition: opacity .22s ease, transform .22s ease;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
        .client-logo:hover{
          opacity: 1;
          transform: translateY(-2px);
        }
        @keyframes clientsScroll{
          from{ transform: translate3d(0,0,0); }
          to{ transform: translate3d(-50%,0,0); }
        }

        .portfolio{background:#f3f5f8;padding: 14px 0 20px;}
        .portfolio-frame{
          background:#fff;
          border:1px solid rgba(2,6,23,.08);
          border-radius: var(--r);
          box-shadow: var(--shadow);
          padding: 14px;
        }
        .portfolio-grid{
          display:grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .pf{
          border-radius: 10px;
          overflow:hidden;
          border: 1px solid rgba(2,6,23,.08);
          box-shadow: 0 8px 18px rgba(2,6,23,.08);
          background:#e5e7eb;
          cursor:pointer;
        }
        .pf img{width:100%;height:140px;object-fit:cover;display:block}

        .lbBack{
          position:fixed; inset:0;
          background:rgba(0,0,0,.78);
          z-index:9999;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:18px;
        }
        .lbBox{
          width:min(1100px, 96vw);
          max-height:88vh;
          background:#0b1220;
          border-radius:18px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,.10);
          box-shadow:0 30px 80px rgba(0,0,0,.55);
          position:relative;
        }
        .lbClose{
          position:absolute;
          top:10px; right:10px;
          width:42px; height:42px;
          border-radius:999px;
          background:rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.18);
          color:#fff;
          font-size:22px;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          z-index:2;
        }
        .lbClose:hover{ background:rgba(255,255,255,.18); }
        .lbImg{
          width:100%;
          height:min(88vh, 720px);
          display:flex;
          align-items:center;
          justify-content:center;
          background:#0b1220;
        }
        .lbImg img{
          width:100%;
          height:100%;
          object-fit:contain;
          display:block;
        }

        @media(max-width: 1100px){
          .services-grid{grid-template-columns: repeat(3, 1fr)}
          .portfolio-grid{grid-template-columns: repeat(2, 1fr)}
        }

        @media(max-width: 860px){
          .stats-grid{
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .stat-item{
            padding: 10px 8px;
          }
          .stat-item:not(:last-child)::after{
            display:none;
          }
          .stats-box{
            padding: 20px 12px;
          }
        }

        @media(max-width: 520px){
          .services-grid{grid-template-columns: repeat(2, 1fr)}
          .pf img{height:160px}
          .client-logo{height: 32px;}
          .clients-marquee{gap: 22px;}
          .stats{
            padding: 20px 0 14px;
          }
          .stat-number{
            font-size: 48px;
          }
          .stat-label{
            font-size: 13px;
          }
        }
      `}</style>

      <section className="stats" aria-label="Números da Vale Designer">
        <div className="stats-wrap">
          <div className="stats-box">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">
                  <CountUp end={1200} duration={1900} />
                </div>
                <div className="stat-label">Projetos Realizados</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">
                  <CountUp end={15} duration={1400} />
                </div>
                <div className="stat-label">Anos de Experiência</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">
                  <CountUp end={300} duration={1700} />
                </div>
                <div className="stat-label">Empresas Atendidas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="services section">
        <div className="section-title">Nossos Serviços</div>
        <div className="divider" />

        <div className="section-sub">
          Comunicação Visual • Revestimento em ACM • Letras Caixa • Coberturas • Policarbonatos • Luminosos •
          Fachadas em ACM • Totens • Impressão 3D • Toldos • Brises • Banners • Adesivos • Serviços Gráficos • DTF • Brindes
          <br />
          <strong>Atendimento em todo o Estado de São Paulo • foco no Vale do Paraíba.</strong>
        </div>

        <div className="wrap">
          <div className="services-grid">
            {CATEGORIAS
              .filter((cat) => cat.slug !== "marquises" && cat.slug !== "Marquises")
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/portfolio/${cat.slug}`}
                  className="service-link"
                  title={`Ver trabalhos de ${cat.nome}`}
                >
                  <div className="service-card" role="link" aria-label={`Ver trabalhos de ${cat.nome}`}>
                    <img
                      src={cat.icon}
                      alt={cat.nome}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                    />
                    <span>{cat.nome}</span>
                    <small>Ver trabalhos →</small>
                  </div>
                </Link>
              ))}
          </div>

          <div className="services-cta">
            <Link href="/portfolio" className="btn-green" aria-label="Ver todos os álbuns do Portfólio">
              Ver todos os álbuns do Portfólio
            </Link>
          </div>
        </div>
      </section>

      <section id="clientes" className="clients section">
        <div className="section-title">Nossos Clientes</div>
        <div className="divider" />
        <div className="wrap">
          <div className="clients-strip" style={{ ["--clientsDur" as any]: clientsDur }}>
            <div className="clients-marquee" aria-label="Carrossel de clientes">
              {CLIENTES_LOOP.map((c, i) => (
                <img
                  key={`${c.logo}-${i}`}
                  className="client-logo"
                  src={encodeURI(c.logo)}
                  alt={c.nome}
                  loading={i < 8 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio section">
        <div className="section-title">Nosso Portfólio</div>
        <div className="divider" />
        <div className="wrap">
          <div className="portfolio-frame">
            <div className="portfolio-grid">
              {PORTFOLIO.map((p, i) => (
                <div
                  key={i}
                  className="pf"
                  role="button"
                  tabIndex={0}
                  aria-label={`Abrir imagem do portfólio ${i + 1}`}
                  onClick={() => openLightbox(p)}
                  onKeyDown={(e) => { if (e.key === "Enter") openLightbox(p) }}
                >
                  <img
                    src={p}
                    alt={`Portfólio ${i + 1}`}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
              <Link href="/portfolio" className="btn-green">
                Abrir Portfólio por categoria
              </Link>
            </div>
          </div>
        </div>
      </section>

      {open && active && (
        <div className="lbBack" onClick={closeLightbox}>
          <div className="lbBox" onClick={(e) => e.stopPropagation()}>
            <button className="lbClose" onClick={closeLightbox} aria-label="Fechar">×</button>
            <div className="lbImg">
              <img src={active} alt="Visualização do portfólio" />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}