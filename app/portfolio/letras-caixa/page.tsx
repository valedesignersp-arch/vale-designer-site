"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type Midia = { src: string; type: "image" | "video"; label: string }

const MIDIAS: Midia[] = [

  { src: "/portfolio/letras-caixa/acm-letra-caixa-inox.jpg", type: "image", label: "ACM Letra Caixa Inox" },

  { src: "/portfolio/letras-caixa/letra-caixa-com-frente-em-acrilico.jpeg", type: "image", label: "Letra Caixa Frente em Acrílico" },

  { src: "/portfolio/letras-caixa/letra-caixa-em-pvc-acm.jpg", type: "image", label: "Letra Caixa PVC ACM" },

  { src: "/portfolio/letras-caixa/letra-caixa-galvanizada-com-frente-em-acrilico.jpg", type: "image", label: "Letra Caixa Galvanizada Acrílico" },

  { src: "/portfolio/letras-caixa/letra-caixa-galvanizada-gigante.png", type: "image", label: "Letra Caixa Galvanizada Gigante" },

  { src: "/portfolio/letras-caixa/letra-caixa-galvanizada-pvc.jpg", type: "image", label: "Letra Caixa Galvanizada PVC" },

  { src: "/portfolio/letras-caixa/letra-caixa-galvanizada.jpg", type: "image", label: "Letra Caixa Galvanizada" },

  { src: "/portfolio/letras-caixa/letra-caixa-inox-com-acrilico-led.jpg", type: "image", label: "Letra Caixa Inox LED" },

  { src: "/portfolio/letras-caixa/letra-caixa-toda-acrilico-com-led.jpg", type: "image", label: "Letra Caixa Acrílico LED" },

  { src: "/portfolio/letras-caixa/letra-caixa-toda-em-acrilico-com-led.jpg", type: "image", label: "Letra Caixa Acrílico Iluminada" },

  { src: "/portfolio/letras-caixa/letra-com-led-inox.jpg", type: "image", label: "Letra LED Inox" },

  { src: "/portfolio/letras-caixa/letra-galvanizada-com-led.jpg", type: "image", label: "Letra Galvanizada LED" },

  { src: "/portfolio/letras-caixa/letra-mdf.jpg", type: "image", label: "Letra MDF" },

  { src: "/portfolio/letras-caixa/letras-caixa-galvanizada-com-led.png", type: "image", label: "Letras Caixa Galvanizada LED" },

  { src: "/portfolio/letras-caixa/letras-em-inox-com-led.png", type: "image", label: "Letras Inox LED" },

  { src: "/portfolio/letras-caixa/letras-em-pvc.png", type: "image", label: "Letras PVC" },

  { src: "/portfolio/letras-caixa/logo-5mm.jpg", type: "image", label: "Logo PVC 5mm" },

  { src: "/portfolio/letras-caixa/logo-em-acm.jpg", type: "image", label: "Logo em ACM" },

  { src: "/portfolio/letras-caixa/logo-em-letra-caixa-galvanizada-com-led.jpg", type: "image", label: "Logo Letra Caixa LED" },

  { src: "/portfolio/letras-caixa/logo-em-pvc-studio.png", type: "image", label: "Logo PVC Studio" },

  { src: "/portfolio/letras-caixa/logo-em-pvc-adesivado.jpg", type: "image", label: "Logo PVC Adesivado" },

  { src: "/portfolio/letras-caixa/logo-em-pvc-externo.jpg", type: "image", label: "Logo PVC Externo" },

  { src: "/portfolio/letras-caixa/logo-em-pvc-fundo-em-acm.jpeg", type: "image", label: "Logo PVC Fundo ACM" },

  { src: "/portfolio/letras-caixa/logo-em-pvc-fundo-em-acm.jpg", type: "image", label: "Logo PVC Fundo ACM 2" },

  { src: "/portfolio/letras-caixa/logo-em-pvc-king.jpg", type: "image", label: "Logo PVC King" },

  { src: "/portfolio/letras-caixa/logo-em-pvc-neon-led.jpeg", type: "image", label: "Logo PVC Neon LED" },

  { src: "/portfolio/letras-caixa/logo-em-pvc.jpeg", type: "image", label: "Logo PVC" },

  { src: "/portfolio/letras-caixa/logo-em-pvc20.jpeg", type: "image", label: "Logo PVC 20mm" },

  { src: "/portfolio/letras-caixa/logo-pvc-10mm.jpg", type: "image", label: "Logo PVC 10mm" },

  { src: "/portfolio/letras-caixa/logo-pvc-dourado.jpg", type: "image", label: "Logo PVC Dourado" },

  { src: "/portfolio/letras-caixa/logo-pvc-interno-clinica.jpeg", type: "image", label: "Logo Clínica Interno" },

  { src: "/portfolio/letras-caixa/logo-pvc-marcas.jpg", type: "image", label: "Logo PVC Marcas" },

  { src: "/portfolio/letras-caixa/logo-pvc-parede.jpg", type: "image", label: "Logo PVC Parede" },

  { src: "/portfolio/letras-caixa/logo-pvc-pintado.jpg", type: "image", label: "Logo PVC Pintado" },

  { src: "/portfolio/letras-caixa/logo-recepcao.jpg", type: "image", label: "Logo Recepção" },

  { src: "/portfolio/letras-caixa/logopvc-15mm.jpeg", type: "image", label: "Logo PVC 15mm" },

  { src: "/portfolio/letras-caixa/neon-led.mp4", type: "video", label: "Neon LED" }

]

export default function Page() {

  const router = useRouter()
  const [midias, setMidias] = useState<Midia[]>([])
  const [active, setActive] = useState<Midia | null>(null)

  useEffect(() => {
    setMidias(MIDIAS)
  }, [])

  return (
    <main style={{ background:"#eef2f7", minHeight:"100vh" }}>

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
          Letras Caixa
        </h1>

        <p style={{textAlign:"center", color:"#64748b", marginBottom:30}}>
          Letras caixa iluminadas • Fachadas modernas • Comunicação visual premium
        </p>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
            gap:18
          }}
        >

          {midias.map((m)=>(
            <div
              key={m.src}
              style={{
                background:"#fff",
                borderRadius:18,
                overflow:"hidden",
                cursor:"pointer",
                boxShadow:"0 10px 28px rgba(0,0,0,.1)"
              }}
              onClick={()=>setActive(m)}
            >

              <div style={{height:320, background:"#0b1220", position:"relative"}}>

                {m.type==="image" ? (

                  <img
                    src={m.src}
                    alt={m.label}
                    style={{width:"100%",height:"100%",objectFit:"cover"}}
                  />

                ) : (

                  <video
                    src={m.src}
                    muted
                    playsInline
                    preload="metadata"
                    style={{width:"100%",height:"100%",objectFit:"cover"}}
                  />

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
          onClick={()=>setActive(null)}
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

          <div onClick={(e)=>e.stopPropagation()}>

            {active.type==="image" ? (

              <img src={active.src} style={{maxHeight:"90vh"}}/>

            ) : (

              <video src={active.src} controls autoPlay style={{maxHeight:"90vh"}}/>

            )}

          </div>

        </div>

      )}

    </main>
  )
}