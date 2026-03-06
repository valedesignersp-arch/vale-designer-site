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
]

export default function HeroCarousel() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  const slide = useMemo(() => SLIDES[i] ?? SLIDES[0], [i])
  const bgUrl = useMemo(() => encodeURI(slide.bg), [slide.bg])

  // ✅ FIX: dependências constantes (evita erro do React/Turbopack)
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
        /* ✅ IMPORTANTÍSSIMO: o hero NÃO pode ficar acima do menu mobile */
        .hero{
          position: relative;
          z-index: 0; /* deixa qualquer overlay do header passar por cima */
          overflow: hidden;
        }

        /* Camadas do fundo do hero sempre abaixo */
        .hero-bg{
          position:absolute;
          inset:0;
          z-index: 0;
          background-size: cover;
          background-position: center;
          transform: translateZ(0);
        }
        .hero-overlay{
          position:absolute;
          inset:0;
          z-index: 1;
        }

        /* Conteúdo do hero acima do overlay interno (mas ainda abaixo do menu) */
        .hero-in{ position: relative; z-index: 2; }
        .hero-dots{ position: relative; z-index: 2; }
      `}</style>

      <div className="hero-bg" style={{ backgroundImage: `url(${bgUrl})` }} />
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