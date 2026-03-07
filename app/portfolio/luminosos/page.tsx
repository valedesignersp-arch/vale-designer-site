"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type Midia = { src: string; type: "image" | "video"; label: string }

const MIDIAS: Midia[] = [
  { src: "/portfolio/luminosos/acm-vazado.jpg", type: "image", label: "ACM Vazado" },
  { src: "/portfolio/luminosos/luminiso-redondo.mp4", type: "video", label: "Luminoso Redondo" },
  { src: "/portfolio/luminosos/luminoso-01.mp4", type: "video", label: "Luminoso 01" },
  { src: "/portfolio/luminosos/luminoso-academia.jpeg", type: "image", label: "Luminoso Academia" },
  { src: "/portfolio/luminosos/luminoso-acm-acrilico-led.jpg", type: "image", label: "Luminoso ACM Acrílico LED" },
  { src: "/portfolio/luminosos/luminoso-acougue.jpg", type: "image", label: "Luminoso Açougue" },
  { src: "/portfolio/luminosos/luminoso-acrilico.jpg", type: "image", label: "Luminoso Acrílico" },
  { src: "/portfolio/luminosos/luminoso-band.png", type: "image", label: "Luminoso Band" },
  { src: "/portfolio/luminosos/luminoso-em-acm.jpeg", type: "image", label: "Luminoso em ACM" },
  { src: "/portfolio/luminosos/luminoso-fisio.jpeg", type: "image", label: "Luminoso Fisio" },
  { src: "/portfolio/luminosos/luminoso-hotel.jpg", type: "image", label: "Luminoso Hotel" },
  { src: "/portfolio/luminosos/luminoso-hungaria.jpg", type: "image", label: "Luminoso Hungária" },
  { src: "/portfolio/luminosos/luminoso-lona.png", type: "image", label: "Luminoso Lona" },
  { src: "/portfolio/luminosos/luminoso-sabin-acm-vazdo.jpg", type: "image", label: "Luminoso Sabin ACM Vazado" },
  { src: "/portfolio/luminosos/luminoso-vivo.jpeg", type: "image", label: "Luminoso Vivo" },
  { src: "/portfolio/luminosos/luminoso.mp4", type: "video", label: "Luminoso" },
  { src: "/portfolio/luminosos/neon-led.mp4", type: "video", label: "Neon LED" },
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
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px" }}>
        <button
          onClick={() => router.back()}
          style={{
            padding: "10px 16px",
            borderRadius: 12,
            border: "1px solid #ddd",
            fontWeight: 700,
            cursor: "pointer",
            marginBottom: 20,
          }}
        >
          ← Voltar
        </button>

        <h1 style={{ textAlign: "center", fontSize: 34, fontWeight: 900 }}>
          Luminosos
        </h1>

        <p style={{ textAlign: "center", color: "#64748b", marginBottom: 30 }}>
          Luminosos em ACM • Letras iluminadas • Painéis LED • Comunicação visual com alto impacto
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 18,
          }}
        >
          {midias.map((m) => (
            <div
              key={m.src}
              style={{
                background: "#fff",
                borderRadius: 18,
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 10px 28px rgba(0,0,0,.1)",
              }}
              onClick={() => setActive(m)}
            >
              <div style={{ height: 320, background: "#0b1220", position: "relative" }}>
                {m.type === "image" ? (
                  <img
                    src={m.src}
                    alt={m.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        background: "rgba(0,0,0,.6)",
                        color: "#fff",
                        padding: "6px 10px",
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 800,
                        zIndex: 2,
                      }}
                    >
                      ▶ VÍDEO
                    </div>
                    <video
                      src={m.src}
                      muted
                      playsInline
                      preload="metadata"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </>
                )}
              </div>

              <div style={{ padding: "12px", fontWeight: 800 }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "90vw" }}>
            {active.type === "image" ? (
              <img
                src={active.src}
                alt={active.label}
                style={{ maxHeight: "90vh", borderRadius: 12 }}
              />
            ) : (
              <video
                src={active.src}
                controls
                autoPlay
                style={{ maxHeight: "90vh" }}
              />
            )}
          </div>
        </div>
      )}
    </main>
  )
}