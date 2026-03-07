"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type Midia = { src: string; type: "image" | "video"; label: string }

const MIDIAS: Midia[] = [
  { src: "/portfolio/impressao-digital/adesivo-freezer-04.jpg", type: "image", label: "Adesivo Freezer 04" },
  { src: "/portfolio/impressao-digital/adesivo-jateado-recorte.jpg", type: "image", label: "Adesivo Jateado Recorte" },
  { src: "/portfolio/impressao-digital/adesivo-parede-03.jpg", type: "image", label: "Adesivo Parede 03" },
  { src: "/portfolio/impressao-digital/adesivo-parede.jpg", type: "image", label: "Adesivo Parede" },
  { src: "/portfolio/impressao-digital/adesivo-perfurado-porta-05.jpg", type: "image", label: "Adesivo Perfurado Porta 05" },
  { src: "/portfolio/impressao-digital/adesivo-perfurado-vidro.jpg", type: "image", label: "Adesivo Perfurado Vidro" },
  { src: "/portfolio/impressao-digital/adesivo-perfurado-vitrine-01.jpg", type: "image", label: "Adesivo Perfurado Vitrine 01" },
  { src: "/portfolio/impressao-digital/adesivo-perfurado-vitrine-02.jpg", type: "image", label: "Adesivo Perfurado Vitrine 02" },
  { src: "/portfolio/impressao-digital/adesivo-recorte-01.jpg", type: "image", label: "Adesivo Recorte 01" },
  { src: "/portfolio/impressao-digital/adesivo-recorte-parede-consultorio.jpg", type: "image", label: "Adesivo Recorte Parede Consultório" },
  { src: "/portfolio/impressao-digital/adesivo-recorte-parede.jpg", type: "image", label: "Adesivo Recorte Parede" },
  { src: "/portfolio/impressao-digital/adesivo-recorte.jpg", type: "image", label: "Adesivo Recorte" },
  { src: "/portfolio/impressao-digital/adesivo-vitrine-03.jpg", type: "image", label: "Adesivo Vitrine 03" },
  { src: "/portfolio/impressao-digital/adesivo-plotagem-recorte-06.jpg", type: "image", label: "Adesivo Plotagem Recorte 06" },

  { src: "/portfolio/impressao-digital/lona-ilhos.jpg", type: "image", label: "Lona com Ilhós" },

  { src: "/portfolio/impressao-digital/placa-lona-440g.jpg", type: "image", label: "Placa Lona 440g" },
  { src: "/portfolio/impressao-digital/placa-ps-adesivada-vivo.jpg", type: "image", label: "Placa PS Adesivada Vivo" },
  { src: "/portfolio/impressao-digital/placa-ps-adesivada-03.jpg", type: "image", label: "Placa PS Adesivada 03" },
  { src: "/portfolio/impressao-digital/placa-ps-adesivado-02.jpg", type: "image", label: "Placa PS Adesivada 02" },
  { src: "/portfolio/impressao-digital/placa-ps-adesivado.jpg", type: "image", label: "Placa PS Adesivado" },

  { src: "/portfolio/impressao-digital/placas-ps-adesivada-video.mp4", type: "video", label: "Placas PS Adesivada" },

  { src: "/portfolio/impressao-digital/plotagem-adesivo-vinil-recorte.jpg", type: "image", label: "Plotagem Adesivo Vinil Recorte" },
  { src: "/portfolio/impressao-digital/plotagen-adesivo-recorte.jpg", type: "image", label: "Plotagem Adesivo Recorte" },

  { src: "/portfolio/impressao-digital/quadro-decorativo-adesivado-com-moldura.jpg", type: "image", label: "Quadro Decorativo Adesivado com Moldura" },
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
      <div style={{maxWidth:1200, margin:"0 auto", padding:"60px 20px"}}>

        <button
          onClick={() => router.back()}
          style={{
            padding:"10px 16px",
            borderRadius:12,
            border:"1px solid #ddd",
            fontWeight:700,
            cursor:"pointer",
            marginBottom:20
          }}
        >
          ← Voltar
        </button>

        <h1 style={{textAlign:"center", fontSize:34, fontWeight:900}}>
          Impressão Digital
        </h1>

        <p style={{textAlign:"center", color:"#64748b", marginBottom:30}}>
          Banners • Adesivos • Lonas • Plotagem e mais
        </p>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
            gap:18
          }}
        >
          {midias.map((m) => (
            <div
              key={m.src}
              style={{
                background:"#fff",
                borderRadius:18,
                overflow:"hidden",
                cursor:"pointer",
                boxShadow:"0 10px 28px rgba(0,0,0,.1)"
              }}
              onClick={() => setActive(m)}
            >
              <div style={{height:320, background:"#0b1220", position:"relative"}}>
                {m.type === "image" ? (
                  <img
                    src={m.src}
                    alt={m.label}
                    style={{width:"100%", height:"100%", objectFit:"cover"}}
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div
                      style={{
                        position:"absolute",
                        top:10,
                        left:10,
                        background:"rgba(0,0,0,.6)",
                        color:"#fff",
                        padding:"6px 10px",
                        borderRadius:20,
                        fontSize:12,
                        fontWeight:800
                      }}
                    >
                      ▶ VÍDEO
                    </div>
                    <video
                      src={m.src}
                      muted
                      playsInline
                      preload="metadata"
                      style={{width:"100%", height:"100%", objectFit:"cover"}}
                    />
                  </>
                )}
              </div>

              <div style={{padding:"12px", fontWeight:800}}>
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
            position:"fixed",
            inset:0,
            background:"rgba(0,0,0,.7)",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            zIndex:9999
          }}
        >
          <div onClick={(e)=>e.stopPropagation()} style={{maxWidth:"90vw"}}>
            {active.type === "image" ? (
              <img
                src={active.src}
                style={{maxHeight:"90vh", borderRadius:12}}
              />
            ) : (
              <video
                src={active.src}
                controls
                autoPlay
                style={{maxHeight:"90vh"}}
              />
            )}
          </div>
        </div>
      )}
    </main>
  )
}