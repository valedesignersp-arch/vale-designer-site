'use client'

import React from "react"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

type Cliente = { logo: string; nome: string }

export default function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(() => {
    ;(async () => {
      const res = await fetch("/api/list-clientes", { cache: "no-store" })
      const data = await res.json()
      setClientes(Array.isArray(data.clientes) ? data.clientes : [])
    })()
  }, [])

  const clientesOrdenados = useMemo(
    () => [...clientes].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR")),
    [clientes]
  )

  return (
    <main>
      <style>{`
        :root{
          --bg:#eef2f6;
          --card:#ffffff;
          --text:#0f172a;
          --muted:#64748b;
          --shadow: 0 10px 30px rgba(2,6,23,.08);
          --r: 14px;
          --green:#b5d600;
        }

        *{box-sizing:border-box}
        body{background:var(--bg);color:var(--text);}

        .wrap{width:min(1180px, 92vw);margin:0 auto}
        .head{
          padding: 38px 0 18px;
          text-align:center;
        }
        .mini{
          font-size:12px;
          letter-spacing:.18em;
          font-weight:800;
          color: rgba(15,23,42,.55);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        h1{
          font-size: clamp(26px, 3.2vw, 40px);
          line-height: 1.1;
          margin: 0;
        }
        .sub{
          margin: 10px auto 0;
          max-width: 720px;
          color: var(--muted);
          font-weight: 600;
          line-height: 1.5;
          font-size: 15px;
        }

        .panel{
          background: var(--card);
          border: 1px solid rgba(2,6,23,.08);
          border-radius: var(--r);
          box-shadow: var(--shadow);
          padding: 18px;
          margin: 18px auto 26px;
        }

        .grid{
          display:grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .card{
          background:#fff;
          border: 1px solid rgba(2,6,23,.08);
          border-radius: 14px;
          min-height: 122px;
          display:flex;
          align-items:center;
          justify-content:center;
          padding: 14px 16px;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
          box-shadow: 0 6px 16px rgba(2,6,23,.06);
        }
        .card:hover{
          transform: translateY(-3px);
          box-shadow: 0 16px 38px rgba(2,6,23,.12);
          border-color: rgba(181,214,0,.25);
        }

        .logoBox{
          width: 100%;
          height: 64px;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .logo{
          width: 100%;
          height: 100%;
          max-width: 180px;
          max-height: 58px;
          object-fit: contain;
          display:block;
          filter: grayscale(1);
          opacity: .82;
          transition: filter .18s ease, opacity .18s ease, transform .18s ease;
        }
        .card:hover .logo{
          filter: grayscale(0);
          opacity: 1;
          transform: scale(1.03);
        }

        .footerCta{
          display:flex;
          justify-content:center;
          padding: 4px 0 40px;
        }

        .btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          background: var(--green);
          color:#0b1220;
          font-weight: 900;
          border-radius: 999px;
          padding: 12px 18px;
          box-shadow: 0 10px 30px rgba(181,214,0,.25);
          border: 1px solid rgba(2,6,23,.06);
        }
        .btn:hover{ filter: brightness(0.98); }

        .empty{
          text-align:center;
          color: var(--muted);
          font-weight: 700;
          padding: 18px;
        }

        @media(max-width: 1100px){
          .grid{ grid-template-columns: repeat(3, 1fr); }
        }
        @media(max-width: 560px){
          .grid{ grid-template-columns: repeat(2, 1fr); }
          .card{ min-height: 112px; }
        }
      `}</style>

      <header className="head">
        <div className="wrap">
          <div className="mini">CLIENTES</div>
          <h1>Veja quem confia na Vale Designer</h1>
          <p className="sub">
            Se grandes marcas confiam na Vale Designer,
            <br />
            sua empresa também pode confiar.
          </p>
        </div>
      </header>

      <section className="wrap">
        <div className="panel">
          {clientesOrdenados.length === 0 ? (
            <div className="empty">
              Nenhum logo encontrado em <b>public/clientes/</b>
            </div>
          ) : (
            <div className="grid" aria-label="Lista de clientes">
              {clientesOrdenados.map((c) => (
                <div className="card" key={c.logo} title={c.nome}>
                  <div className="logoBox">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="logo"
                      src={encodeURI(c.logo)}
                      alt={c.nome}
                      loading="lazy"
                      onError={(e) => {
                        ;(e.currentTarget as HTMLImageElement).style.display = "none"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="footerCta">
          <Link className="btn" href="/#contatos">
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </main>
  )
}