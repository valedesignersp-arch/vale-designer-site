"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

type Slide = {
  bg: string
  title1: string
  title2: string
  sub: string
  cta: { label: string; href: string }
}

const SLIDES: Slide[] = [
  {
    bg: "/hero/banner1.jpg",
    title1: "SOLUÇÕES EM",
    title2: "COMUNICAÇÃO\nVISUAL",
    sub: "Projetos personalizados para destacar sua marca.",
    cta: { label: "Ver Portfólio", href: "/portfolio" },
  },
  {
    bg: "/hero/banner2.jpg",
    title1: "ESTRUTURAS",
    title2: "SERRALHERIA\nMETÁLICA",
    sub: "Marquises, coberturas e estruturas com acabamento profissional.",
    cta: { label: "Ver Trabalhos", href: "/portfolio" },
  },
  {
    bg: "/hero/banner3.jpg",
    title1: "CORTE",
    title2: "A\nLASER",
    sub: "Recortes precisos para acrílico, MDF e materiais técnicos.",
    cta: { label: "Solicitar Orçamento", href: "/#contatos" },
  },
  {
    bg: "/hero/banner4.png",
    title1: "LETRAS CAIXA",
    title2: "ILUMINADAS\nLED",
    sub: "Brilho uniforme, alto impacto e acabamento premium.",
    cta: { label: "Solicitar Orçamento", href: "/#contatos" },
  },
  {
    bg: "/hero/banner05.png",
    title1: "CORTE",
    title2: "CNC\nROUTER",
    sub: "Precisão absoluta para ACM, MDF e acrílico.",
    cta: { label: "Ver Trabalhos", href: "/portfolio" },
  },
  {
    bg: "/hero/banner06.png",
    title1: "FACHADAS EM",
    title2: "ACM\nPREMIUM",
    sub: "Revestimento moderno com visual limpo e durabilidade superior.",
    cta: { label: "Ver Trabalhos", href: "/portfolio" },
  },
  {
    bg: "/hero/banner07.png",
    title1: "CRIAÇÃO DE",
    title2: "SITE E\nSISTEMA WEB",
    sub: "Sites modernos, rápidos e otimizados para Google para empresas que querem gerar mais clientes.",
    cta: { label: "Ver Projetos", href: "/criacao-de-site" },
  },
]

export default function HeroCarousel() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  const slide = useMemo(() => SLIDES[i] ?? SLIDES[0], [i])
  const bgUrl = useMemo(() => encodeURI(slide.bg), [slide.bg])

  useEffect(() => {
    if (paused) return

    const total = SLIDES.length
    const t = window.setInterval(() => {
      setI((x) => (x + 1) % total)
    }, 6000)

    return () => window.clearInterval(t)
  }, [paused])

  return (
    <section
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        .hero{
          position: relative;
          z-index: 0;
          overflow: hidden;
        }

        .hero-bg{
          position: absolute;
          inset: 0;
          z-index: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transform: translateZ(0);
        }

        .hero-overlay{
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              90deg,
              rgba(6, 15, 33, 0.88) 0%,
              rgba(6, 15, 33, 0.78) 20%,
              rgba(6, 15, 33, 0.58) 38%,
              rgba(6, 15, 33, 0.22) 62%,
              rgba(6, 15, 33, 0.06) 100%
            );
        }

        .hero-in{
          position: relative;
          z-index: 2;
        }

        .hero-dots{
          position: relative;
          z-index: 2;
        }

        .hero-left{
          max-width: 560px;
        }

        .kicker{
          text-shadow: 0 4px 18px rgba(0,0,0,.35);
        }

        .hero-title{
          text-shadow: 0 8px 26px rgba(0,0,0,.48);
        }

        .hero-sub{
          max-width: 540px;
          color: rgba(255,255,255,.92);
          text-shadow: 0 4px 16px rgba(0,0,0,.38);
        }

        @media (max-width: 760px){
          .hero-left{
            max-width: 92%;
          }

          .hero-overlay{
            background:
              linear-gradient(
                90deg,
                rgba(6, 15, 33, 0.88) 0%,
                rgba(6, 15, 33, 0.72) 45%,
                rgba(6, 15, 33, 0.30) 100%
              );
          }

          .hero-sub{
            max-width: 100%;
          }
        }
      `}</style>

      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${bgUrl})` }}
      />

      <div className="hero-overlay" />

      <div className="wrap hero-in">
        <div className="hero-left">
          <div className="kicker">{slide.title1}</div>
          <div className="hero-title">{slide.title2}</div>
          <div className="hero-sub">{slide.sub}</div>

          <Link className="btn-green" href={slide.cta.href}>
            {slide.cta.label}
          </Link>
        </div>
      </div>

      <div className="hero-dots" aria-label="Banners">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`dot ${idx === i ? "on" : ""}`}
            aria-label={`Ir para banner ${idx + 1}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  )
}