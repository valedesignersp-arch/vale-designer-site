"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type Midia = {
  src: string
  type: "image" | "video"
  label: string
}

export default function Page() {
  const router = useRouter()
  const [midias, setMidias] = useState<Midia[]>([])
  const [active, setActive] = useState<Midia | null>(null)

  useEffect(() => {
    ;(async () => {
      const res = await fetch(
        "/api/list-media?folder=" + encodeURIComponent("portfolio/coberturas"),
        { cache: "no-store" }
      )

      const data = await res.json()
      setMidias(Array.isArray(data.midias) ? data.midias : [])
    })()
  }, [])

  return (
    <main style={{ background: "#eef2f7", minHeight: "100vh" }}>
      <style>{`
        .wrap{
          max-width:1200px;
          margin:0 auto;
          padding:70px 20px;
        }

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

        .title{
          text-align:center;
          font-size:34px;
          font-weight:900;
          color:#0f172a;
          margin-bottom:10px;
        }

        .sub{
          text-align:center;
          color:#64748b;
          margin-bottom:40px;
          max-width:800px;
          margin-left:auto;
          margin-right:auto;
          line-height:1.6;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
          gap:20px;
        }

        .card{
          background:#fff;
          border-radius:16px;
          overflow:hidden;
          box-shadow:0 10px 30px rgba(0,0,0,.08);
          cursor:pointer;
          transition:.25s;
        }

        .card:hover{
          transform:translateY(-6px);
          box-shadow:0 20px 45px rgba(0,0,0,.12);
        }

        .thumb{
          height:260px;
          background:#111;
        }

        .thumb img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .cap{
          padding:12px;
          font-weight:700;
          font-size:14px;
          color:#0f172a;
        }

        .empty{
          text-align:center;
          background:#fff;
          padding:30px;
          border-radius:14px;
          border:1px solid #e5e7eb;
        }

        .lb{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,.8);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:9999;
          padding:18px;
        }

        .lb img{
          max-width:90%;
          max-height:90%;
          border-radius:12px;
          display:block;
        }

        .close{
          position:absolute;
          top:20px;
          right:20px;
          color:white;
          font-size:28px;
          cursor:pointer;
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

        <div className="title">
          Coberturas
        </div>

        <div className="sub">
          Projetos de coberturas metálicas, policarbonato, estruturas para áreas externas,
          garagens, fachadas e proteção de entrada comercial. Soluções modernas,
          resistentes e com acabamento profissional.
        </div>

        {midias.length === 0 ? (
          <div className="empty">
            Nenhuma mídia encontrada em <b>public/portfolio/coberturas</b>
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.src} alt={m.label} />
                </div>

                <div className="cap">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {active && (
        <div className="lb" onClick={() => setActive(null)}>
          <span className="close">✕</span>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={active.src} alt={active.label} />
        </div>
      )}
    </main>
  )
}