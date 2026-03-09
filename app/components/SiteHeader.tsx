'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

const NAV = [
  { label: "HOME", href: "/" },
  { label: "QUEM SOMOS", href: "/quem-somos" },
  { label: "SERVIÇOS", href: "/servicos" },
  { label: "CLIENTES", href: "/clientes" },
  { label: "TRABALHE CONOSCO", href: "/trabalhe-conosco" },
  { label: "DICAS", href: "/dicas" },
  { label: "CONTATOS", href: "/contatos" },
  { label: "CRIAÇÃO DE SITE", href: "/criacao-de-site" },
  { label: "PORTFÓLIO", href: "/portfolio" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

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
        .burger{
          display:none;
          background:transparent;
          border:0;
          padding:0;
        }

        .topbar-inner-desktop{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:18px;
          width:100%;
        }

        .desktop-center{
          display:flex;
          align-items:center;
          justify-content:center;
          flex:1;
          min-width:0;
        }

        .menu{
          display:flex;
          align-items:center;
          gap:16px;
          flex-wrap:nowrap;
          white-space:nowrap;
        }

        .menu a{
          font-size:12px;
          font-weight:800;
          letter-spacing:.03em;
        }

        @media (max-width: 1180px){
          .menu{
            gap:12px;
          }

          .menu a{
            font-size:11px;
          }
        }

        @media (max-width: 900px){
          .topbar{ position: relative; z-index: 50; }

          .topbar-inner-desktop{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:10px;
          }

          .desktop-center{
            display:none !important;
          }

          .topbar-in{
            height:auto !important;
            padding:14px 0 !important;
            gap:10px !important;
          }

          .brand img{ height:38px !important; }

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

          .mOverlay{
            position:fixed; inset:0;
            z-index:99999;
            background: rgba(0,0,0,.60);
            backdrop-filter: blur(8px);
            display:flex;
            justify-content:flex-end;
          }

          .mPanel{
            width:min(360px, 88vw);
            height:100dvh;
            background: linear-gradient(180deg,var(--nav),var(--nav2));
            border-left: 1px solid rgba(255,255,255,.10);
            padding: 16px;
            display:flex;
            flex-direction:column;
            gap: 12px;
            overflow:hidden;
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
            height:38px;
            width:38px;
            border-radius:12px;
            background: rgba(255,255,255,.06);
            border: 1px solid rgba(255,255,255,.10);
            color:#fff;
            cursor:pointer;
            display:flex;
            align-items:center;
            justify-content:center;
            font-weight:900;
          }

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
        }
      `}</style>

      <div className="wrap topbar-in">
        <div className="topbar-inner-desktop">
          <div className="brand">
            <Link href="/" aria-label="Ir para Home" onClick={handleNavClick}>
              <img src="/logo.png" alt="Vale Designer" />
            </Link>
          </div>

          <div className="desktop-center">
            <nav className="menu" aria-label="Menu principal">
              {NAV.map((n) => (
                <Link key={`${n.label}-${n.href}`} href={n.href}>
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>

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
      </div>

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
          </div>
        </div>
      )}
    </header>
  )
}