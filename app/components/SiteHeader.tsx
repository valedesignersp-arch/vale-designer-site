'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

const CONFIG = {
  whatsapp: "5512988075372",
}

const WA = `https://wa.me/${CONFIG.whatsapp}`
const waMsg = (t: string) => `${WA}?text=${encodeURIComponent(t)}`

const NAV = [
  { label: "HOME", href: "/" },
  { label: "QUEM SOMOS", href: "/quem-somos" },
  { label: "SERVIÇOS", href: "/servicos" }, // ✅ removido o # (agora é página real)
  { label: "CLIENTES", href: "/clientes" },
  { label: "TRABALHE CONOSCO", href: "/trabalhe-conosco" },
  { label: "CONTATOS", href: "/contatos" },
  { label: "PORTFÓLIO", href: "/portfolio" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  // trava scroll quando menu mobile abre
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // fecha no ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  function handleNavClick() {
    setOpen(false)
  }

  return (
    <header className="topbar">
      <style>{`
        /* ====== MOBILE HEADER FIX ====== */
        @media (max-width: 900px){
          .topbar{ position: relative; z-index: 50; } /* header acima do hero */

          .topbar-in{
            height:auto !important;
            padding: 14px 0 !important;
            gap: 10px !important;
          }

          /* esconde menu desktop e mostra burger */
          .menu{ display:none !important; }

          .brand img{ height: 38px !important; }

          .burger{
            display:inline-flex !important;
            align-items:center;
            justify-content:center;
            height:42px;
            width:42px;
            border-radius:12px;
            background: rgba(255,255,255,.06);
            border: 1px solid rgba(255,255,255,.10);
            cursor:pointer;
          }
          .burgerLines{ width:18px;height:12px;position:relative; }
          .burgerLines span{
            position:absolute;left:0;right:0;height:2px;border-radius:999px;
            background: rgba(255,255,255,.92);
            transition: transform .18s ease, top .18s ease, opacity .18s ease;
          }
          .burgerLines span:nth-child(1){ top:0; }
          .burgerLines span:nth-child(2){ top:5px; }
          .burgerLines span:nth-child(3){ top:10px; }

          .burger.open .burgerLines span:nth-child(1){ top:5px; transform: rotate(45deg); }
          .burger.open .burgerLines span:nth-child(2){ opacity:0; }
          .burger.open .burgerLines span:nth-child(3){ top:5px; transform: rotate(-45deg); }

          /* overlay: acima de TUDO e sem “misturar” com o hero */
          .mOverlay{
            position:fixed; inset:0;
            z-index:99999; /* garante acima do hero */
            background: rgba(0,0,0,.60);
            backdrop-filter: blur(8px);
            display:flex;
            justify-content:flex-end;
          }

          /* painel com altura correta no celular (dvh) + scroll interno */
          .mPanel{
            width:min(360px, 88vw);
            height:100dvh;
            background: linear-gradient(180deg,var(--nav),var(--nav2));
            border-left: 1px solid rgba(255,255,255,.10);
            padding: 16px;
            display:flex;
            flex-direction:column;
            gap: 12px;
            overflow:hidden; /* evita “vazar” */
          }

          .mTop{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap: 12px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(255,255,255,.10);
          }
          .mTitle{
            color:#dbe4ff;
            font-weight:900;
            letter-spacing:.10em;
            font-size:12px;
            text-transform:uppercase;
          }
          .mClose{
            height:38px;width:38px;border-radius:12px;
            background: rgba(255,255,255,.06);
            border: 1px solid rgba(255,255,255,.10);
            color:#fff;
            cursor:pointer;
            display:flex;
            align-items:center;
            justify-content:center;
            font-weight:900;
          }

          /* NAV com scroll (se tiver muitos itens) */
          .mNav{
            display:flex;
            flex-direction:column;
            gap: 10px;
            padding-top: 6px;
            overflow-y:auto;
            padding-right: 4px;
          }
          .mNav a{
            padding: 14px 14px;
            border-radius: 14px;
            border: 1px solid rgba(255,255,255,.12);
            background: rgba(255,255,255,.08);
            color:#ffffff;
            font-weight:900;
            font-size:12px;
            letter-spacing:.06em;
            text-transform:uppercase;
          }
          .mNav a:active{ transform: translateY(1px); }

          .mCTA{
            margin-top: 10px;
          }
          .mCTA .btnTop{
            width:100%;
            height:46px !important;
            justify-content:center !important;
          }
        }
      `}</style>

      <div className="wrap topbar-in">
        <div className="brand">
          <Link href="/" aria-label="Ir para Home" onClick={handleNavClick}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Vale Designer" />
          </Link>
        </div>

        {/* MENU DESKTOP (igual ao seu) */}
        <nav className="menu" aria-label="Menu principal">
          {NAV.map((n) => (
            <Link key={`${n.label}-${n.href}`} href={n.href}>
              {n.label}
            </Link>
          ))}

          <a
            href={waMsg("Olá! Quero um orçamento premium.")}
            target="_blank"
            rel="noreferrer"
            className="btnTop"
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* BOTÃO MOBILE (toggle) */}
        <button
          className={`burger ${open ? "open" : ""}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <div className="burgerLines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div
          className="mOverlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div className="mPanel" onClick={(e) => e.stopPropagation()}>
            <div className="mTop">
              <div className="mTitle">Menu</div>
              <button className="mClose" onClick={() => setOpen(false)} type="button">
                ✕
              </button>
            </div>

            <div className="mNav" aria-label="Menu mobile">
              {NAV.map((n) => (
                <Link
                  key={`m-${n.label}-${n.href}`}
                  href={n.href}
                  onClick={handleNavClick}
                >
                  {n.label}
                </Link>
              ))}
            </div>

            <div className="mCTA">
              <a
                href={waMsg("Olá! Quero um orçamento premium.")}
                target="_blank"
                rel="noreferrer"
                className="btnTop"
                onClick={handleNavClick}
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}