import Link from "next/link"
import Image from "next/image"
import { CATEGORIAS } from "../dados"

const ICON_VERSION = "1" // se trocar ícone, altere para "2", "3", etc.

export default function PortfolioIndex() {
  const categoriasAjustadas = CATEGORIAS
    .filter((cat) => cat.slug !== "marquises" && cat.slug !== "corte-laser")
    .map((cat) => {
      if (cat.slug === "corte-cnc-router") {
        return {
          ...cat,
          nome: "Corte CNC e Laser",
          slug: "corte-cnc-laser",
        }
      }
      return cat
    })

  return (
    <main style={{ background: "#eef2f7", minHeight: "100vh" }}>
      <style>{`
        .sectionTitle{
          text-align:center;
          font-size:34px;
          font-weight:800;
          color:#0f172a;
          margin-bottom:10px;
          letter-spacing:-0.5px;
        }

        .sectionSub{
          text-align:center;
          max-width:980px;
          margin: 0 auto 56px;
          font-size:15px;
          line-height:1.65;
          color:#64748b;
          font-weight:600;
          padding: 0 8px;
        }

        .gridWrap{
          max-width:1200px;
          margin:0 auto;
          padding:80px 20px;
        }

        .servicesGrid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(230px,1fr));
          gap:30px;
        }

        .serviceCard{
          background:white;
          border-radius:16px;
          padding:35px 20px;
          text-align:center;
          box-shadow:0 8px 25px rgba(15,23,42,.08);
          transition:all .3s ease;
          cursor:pointer;
          border:1px solid rgba(15,23,42,.05);
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
        }

        .serviceCard:hover{
          transform:translateY(-6px);
          box-shadow:0 20px 45px rgba(15,23,42,.15);
        }

        .iconBox{
          width:110px;
          height:110px;
          display:flex;
          align-items:center;
          justify-content:center;
          margin-bottom:20px;
        }

        .iconImg{
          width:80px !important;
          height:80px !important;
          object-fit:contain;
        }

        .serviceTitle{
          font-size:16px;
          font-weight:600;
          color:#0f172a;
        }
      `}</style>

      <div className="gridWrap">
        <h1 className="sectionTitle">Portfólio</h1>

        <p className="sectionSub">
          Comunicação Visual • Revestimento em ACM • Letras Caixa • Coberturas •
          Policarbonatos • Luminosos • Fachadas em ACM • Totens • Impressão 3D •
          Toldos • Brises • Banners • Adesivos • Serviços Gráficos • DTF • Brindes
          <br />
          <span style={{ fontWeight: 700 }}>
            Atendimento em todo o Estado de São Paulo • foco no Vale do Paraíba.
          </span>
        </p>

        <div className="servicesGrid">
          {categoriasAjustadas.map((cat) => {
            const base = cat.icon?.startsWith("/") ? cat.icon : `/${cat.icon}`
            const iconSrc = `${base}?v=${ICON_VERSION}`

            return (
              <Link
                key={cat.slug}
                href={`/portfolio/${cat.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div className="serviceCard">
                  <div className="iconBox">
                    <Image
                      key={iconSrc}
                      src={iconSrc}
                      alt={cat.nome}
                      width={80}
                      height={80}
                      className="iconImg"
                      unoptimized
                    />
                  </div>

                  <div className="serviceTitle">{cat.nome}</div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}