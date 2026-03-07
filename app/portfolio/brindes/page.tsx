"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type Midia = { src: string; type: "image" | "video"; label: string }

const MIDIAS: Midia[] = [
  { src: "/portfolio/brindes/4-calendarios.png", type: "image", label: "Calendários" },
  { src: "/portfolio/brindes/4-complementares-brindes-copos-e-garrafa-termica.png", type: "image", label: "Copos e Garrafa Térmica" },
  { src: "/portfolio/brindes/6-complementares-bone.png", type: "image", label: "Boné" },
  { src: "/portfolio/brindes/7-mousepad.png", type: "image", label: "Mousepad" },
  { src: "/portfolio/brindes/8-lixeira-para-carro.png", type: "image", label: "Lixeira para Carro" },
  { src: "/portfolio/brindes/14-chaveiro-de-metal.png", type: "image", label: "Chaveiro de Metal" },
  { src: "/portfolio/brindes/agendas-2025.png", type: "image", label: "Agendas 2025" },
  { src: "/portfolio/brindes/brindes.png", type: "image", label: "Brindes" },
  { src: "/portfolio/brindes/caneca.png", type: "image", label: "Caneca" },
  { src: "/portfolio/brindes/canetas.png", type: "image", label: "Canetas" },
  { src: "/portfolio/brindes/copos-e-tacas-banner.png", type: "image", label: "Copos e Taças" },
  { src: "/portfolio/brindes/landing-page-peq-dezembro-2025-bottons.png", type: "image", label: "Bottons" },
]

export default function Page() {
  const router = useRouter()
  const [midias, setMidias] = useState<Midia[]>([])
  const [active, setActive] = useState<Midia | null>(null)

  useEffect(() => {
    setMidias(MIDIAS)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <main style={{ background: "#eef2f7", minHeight: "100vh" }}>
      <style>{`
        .wrap{ max-width:1200px; margin:0 auto; padding:60px 20px; }

        .topBar{
          display:flex;
          justify-content:flex-start;
          margin-bottom:18px;
        }

        .btnVoltar{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:10px 16px;
          background:#ffffff;
          border:1px solid rgba(15,23,42,.10);
          border-radius:12px;
          font-weight:800;
          font-size:14px;
          color:#0f172a;
          cursor:pointer;
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
          box-shadow:0 8px 20px rgba(15,23,42,.06);
        }
        .btnVoltar:hover{
          background:#f8fafc;
          transform:translateY(-2px);
          box-shadow:0 14px 28px rgba(15,23,42,.10);
        }

        .title{ text-align:center; font-size:34px; font-weight:900; color:#0f172a; margin-bottom:8px; }
        .sub{ text-align:center; color:#64748b; margin-bottom:28px; }

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:18px;
        }

        .card{
          background:#fff;
          border-radius:18px;
          overflow:hidden;
          border:1px solid rgba(15,23,42,.06);
          box-shadow:0 10px 28px rgba(15,23,42,.10);
          cursor:pointer;
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .card:hover{
          transform: translateY(-4px);
          box-shadow:0 18px 50px rgba(15,23,42,.16);
        }

        .thumb{
          position:relative;
          width:100%;
          height:320px;
          background:#0b1220;
        }
        @media (max-width: 900px){ .thumb{ height: 280px; } }
        @media (max-width: 520px){ .thumb{ height: 240px; } }

        .thumb img{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit: cover;
          display:block;
        }

        .cap{
          padding: 12px 12px 14px;
          font-weight: 900;
          color:#0f172a;
          font-size: 13px;
          letter-spacing: .02em;
        }

        .lb{
          position:fixed; inset:0;
          z-index:99999;
          background: rgba(0,0,0,.72);
          backdrop-filter: blur(8px);
          display:flex;
          align-items:center;
          justify-content:center;
          padding: 18px;
        }
        .lbBox{
          width: min(980px, 96vw);
          max-height: 90vh;
          background:#0b1220;
          border-radius: 18px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,.10);
          box-shadow: 0 30px 90px rgba(0,0,0,.50);
          position:relative;
        }

        .lbTitle{
          position:absolute;
          left: 14px;
          top: 14px;
          padding: 10px 12px;
          border-radius: 14px;
          background: rgba(0,0,0,.55);
          border: 1px solid rgba(255,255,255,.14);
          color:#fff;
          font-weight: 900;
          font-size: 13px;
          backdrop-filter: blur(8px);
          z-index:2;
        }

        .lbMedia{
          width:100%;
          height: 90vh;
          max-height: 90vh;
          display:block;
          object-fit: contain;
          background:#0b1220;
        }
        .lbClose{
          position:absolute;
          right: 12px;
          top: 12px;
          height: 42px;
          width: 42px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(255,255,255,.08);
          color:#fff;
          cursor:pointer;
          font-weight: 900;
          z-index:2;
        }
      `}</style>

      <div className="wrap">
        <div className="topBar">
          <button
            onClick={() => router.back()}
            className="btnVoltar"
            type="button"
          >
            ← Voltar
          </button>
        </div>

        <div className="title">Brindes</div>
        <div className="sub">
          Brindes personalizados • Canecas • Squeezes • Chaveiros • Produtos promocionais
        </div>

        <div className="grid">
          {midias.map((m) => (
            <div
              key={m.src}
              className="card"
              onClick={() => setActive(m)}
              role="button"
              title={m.label}
            >
              <div className="thumb">
                <img src={m.src} alt={m.label || "Brindes"} loading="lazy" />
              </div>

              <div className="cap">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="lb" onClick={() => setActive(null)} aria-modal="true" role="dialog">
          <div className="lbBox" onClick={(e) => e.stopPropagation()}>
            <button className="lbClose" onClick={() => setActive(null)} type="button">
              ✕
            </button>

            <div className="lbTitle">{active.label}</div>

            <img className="lbMedia" src={active.src} alt={active.label} />
          </div>
        </div>
      )}
    </main>
  )
}