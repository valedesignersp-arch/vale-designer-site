"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type Midia = { src: string; type: "image" | "video"; label: string }

export default function Page() {
  const router = useRouter()
  const [midias, setMidias] = useState<Midia[]>([])
  const [active, setActive] = useState<Midia | null>(null)

  useEffect(() => {
    ;(async () => {
      const res = await fetch(
        "/api/list-media?folder=" + encodeURIComponent("portfolio/corte-cnc-laser"),
        { cache: "no-store" }
      )
      const data = await res.json()
      setMidias(Array.isArray(data.midias) ? data.midias : [])
    })()
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

        .thumb img, .thumb video{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit: cover;
          display:block;
        }

        .playBadge{
          position:absolute;
          left:12px;
          top:12px;
          background: rgba(0,0,0,.55);
          color:#fff;
          font-weight:900;
          font-size:12px;
          padding:8px 10px;
          border-radius:999px;
          border:1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(6px);
          z-index:2;
        }

        .cap{
          padding: 12px 12px 14px;
          font-weight: 900;
          color:#0f172a;
          font-size: 13px;
          letter-spacing: .02em;
        }

        .empty{
          background:#fff;
          border-radius:16px;
          padding:18px;
          border:1px solid rgba(15,23,42,.06);
          color:#64748b;
          text-align:center;
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

        <div className="title">Corte CNC e Laser</div>

        <div className="sub">
          Corte em ACM • MDF • PVC • Acrílico • Peças personalizadas
        </div>

        {midias.length === 0 ? (
          <div className="empty">
            Nenhuma mídia encontrada em <b>public/portfolio/corte-cnc-laser/</b>
          </div>
        ) : (
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
                  {m.type === "image" ? (
                    <img src={m.src} alt={m.label || "Corte CNC e Laser"} loading="lazy" />
                  ) : (
                    <>
                      <span className="playBadge">▶ VÍDEO</span>
                      <video src={m.src} muted playsInline preload="metadata" />
                    </>
                  )}
                </div>

                <div className="cap">{m.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {active && (
        <div className="lb" onClick={() => setActive(null)} aria-modal="true" role="dialog">
          <div className="lbBox" onClick={(e) => e.stopPropagation()}>
            <button className="lbClose" onClick={() => setActive(null)} type="button">
              ✕
            </button>

            <div className="lbTitle">{active.label}</div>

            {active.type === "image" ? (
              <img className="lbMedia" src={active.src} alt={active.label} />
            ) : (
              <video className="lbMedia" src={active.src} controls playsInline autoPlay />
            )}
          </div>
        </div>
      )}
    </main>
  )
}