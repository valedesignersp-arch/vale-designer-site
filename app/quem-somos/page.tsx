// app/quem-somos/page.tsx
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Quem Somos | Vale Designer Comunicação Visual",
  description:
    "Vale Designer Comunicação Visual: fachadas em ACM, letras caixa iluminadas, impressão 3D aplicada à comunicação visual, corte CNC Router, corte a laser, impressão digital, adesivos e lonas. Qualidade premium há mais de 15 anos.",
}

const CONFIG = {
  telefone1: "(12) 98807-5372",
  telefone2: "(12) 99663-8696",
  instagram: "valedesignersp",
  facebook: "valedesignersp",
  email: "valedesignersp@gmail.com",
  site: "www.valedesigner.com.br",
  whatsapp: "5512988075372",
}

const WA = `https://wa.me/${CONFIG.whatsapp}`
const waMsg = (t: string) => `${WA}?text=${encodeURIComponent(t)}`

// ✅ Troque para: "/institucional/quem-somos.jpg" quando você colocar a foto nessa pasta
const ABOUT_IMAGE = "/hero/banner2.jpg"

export default function QuemSomosPage() {
  return (
    <main className="page">
      <style>{`
        *{box-sizing:border-box}
        .page{ background: var(--background); color: var(--foreground); }
        a{text-decoration:none;color:inherit}
        .wrap{width:min(1180px, 92vw);margin:0 auto}

        /* Espaço abaixo do HERO global (layout) */
        .afterHero{ padding: 26px 0 18px; position:relative; }

        /* fundo “premium” leve */
        .afterHero::before{
          content:"";
          position:absolute;
          inset:-60px 0 auto 0;
          height:220px;
          background:
            radial-gradient(700px 220px at 15% 20%, rgba(181,214,0,.10), transparent 60%),
            radial-gradient(700px 220px at 80% 15%, rgba(59,130,246,.08), transparent 60%);
          pointer-events:none;
        }

        .sectionTitle{
          position:relative;
          margin: 6px auto 8px;
          text-align:center;
          color: var(--foreground);
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 950;
          letter-spacing: -0.02em;
        }
        .sectionSub{
          position:relative;
          text-align:center;
          color: var(--muted);
          font-weight: 700;
          font-size: 13px;
          margin-top: -2px;
          letter-spacing: .01em;
        }
        .divider{
          height:1px;background: rgba(15,31,58,.12);
          margin: 16px auto 18px;
          width:min(1100px, 92vw);
        }

        /* layout premium em 2 colunas */
        .aboutGrid{
          position:relative;
          display:grid;
          grid-template-columns: 1.08fr .92fr;
          gap: 18px;
          align-items:start;
        }

        .card{
          background: #fff;
          border: 1px solid rgba(2,6,23,.08);
          border-radius: 18px;
          box-shadow: var(--shadow-md);
          overflow:hidden;
        }

        .pad{padding: 20px;}

        .tag{
          display:inline-flex;align-items:center;gap:10px;
          background: rgba(15,31,58,.05);
          border:1px solid rgba(15,31,58,.10);
          color:#0f1f3a;
          font-weight:800;
          letter-spacing:.08em;
          font-size:11px;
          text-transform:uppercase;
          padding: 8px 12px;
          border-radius: 999px;
          margin-bottom: 14px;
        }
        .tag b{color:#0f1f3a}

        .lead{
          color: var(--muted);
          font-size: 15px;
          line-height: 1.78;
          margin-bottom: 12px;
        }
        .lead strong{color:#0f1f3a}

        /* stats (cara de empresa grande) */
        .stats{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 12px;
        }
        .stat{
          background: #fff;
          border: 1px solid rgba(2,6,23,.10);
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
          padding: 12px;
        }
        .stat b{
          display:block;
          font-size:16px;
          font-weight:900;
          color:#0f1f3a;
          margin-bottom:4px;
        }
        .stat span{
          display:block;
          font-size:12px;
          font-weight:700;
          color: var(--muted);
          line-height:1.2;
        }

        /* blocos de diferencial */
        .list{
          display:flex;
          flex-direction:column;
          gap: 12px;
          margin-top: 14px;
        }
        .item{
          display:flex;
          gap: 12px;
          align-items:flex-start;
          padding: 14px;
          border-radius: 16px;
          border: 1px solid rgba(2,6,23,.08);
          background: linear-gradient(180deg, rgba(181,214,0,.08), rgba(255,255,255,0));
        }
        .dot{
          width:10px;height:10px;border-radius:50%;
          background: var(--green);
          margin-top: 6px;
          box-shadow: 0 12px 26px rgba(181,214,0,.20);
          flex: 0 0 auto;
        }
        .item strong{
          display:block;
          color:#0f1f3a;
          font-weight:900;
          font-size:13.5px;
          margin-bottom:4px
        }
        .item span{
          display:block;
          color: var(--muted);
          font-weight:700;
          font-size:12.8px;
          line-height:1.35
        }

        /* chips (serviços) */
        .chips{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top: 16px;
        }
        .chip{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding: 10px 12px;
          border-radius: 999px;
          border:1px solid rgba(2,6,23,.10);
          background: #fff;
          box-shadow: var(--shadow-sm);
          font-weight:800;
          font-size:12px;
          color:#0f1f3a;
          white-space:nowrap;
        }
        .chip i{
          width:8px;height:8px;border-radius:50%;
          background: var(--green);
          display:inline-block;
        }

        /* ====== CARD DA FOTO PREMIUM ====== */
        .photoHead{
          padding: 16px 16px 14px;
          border-bottom:1px solid rgba(2,6,23,.08);
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap:12px;
          background: linear-gradient(180deg, rgba(15,31,58,.03), rgba(255,255,255,0));
        }
        .photoHead strong{font-weight:900;color:#0f1f3a}
        .photoHead small{display:block;margin-top:4px;color: var(--muted);font-weight:700;font-size:12px}

        .pill{
          font-size:11px;font-weight:900;
          color:#20310a;
          background: linear-gradient(180deg, #c8ea1f, #a9cc00);
          padding: 7px 10px;
          border-radius: 999px;
          border:1px solid rgba(0,0,0,.18);
          white-space:nowrap;
          box-shadow: 0 12px 28px rgba(181,214,0,.22);
        }

        .imgWrap{
          position:relative;
          height: 320px;
          background:#0b1731;
        }
        .imgOverlay{
          position:absolute;
          inset:0;
          background:
            linear-gradient(180deg, rgba(2,6,23,.10) 0%, rgba(2,6,23,.55) 100%),
            radial-gradient(600px 220px at 20% 10%, rgba(181,214,0,.18), transparent 60%);
          pointer-events:none;
        }

        .imgBadge{
          position:absolute;
          left:14px;
          bottom:14px;
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          z-index:3;
        }
        .badge{
          background: rgba(255,255,255,.10);
          border: 1px solid rgba(255,255,255,.16);
          backdrop-filter: blur(10px);
          color:#fff;
          font-weight:900;
          font-size:11px;
          letter-spacing:.06em;
          text-transform:uppercase;
          padding: 9px 10px;
          border-radius: 999px;
          display:inline-flex;
          align-items:center;
          gap:8px;
        }
        .badgeDot{
          width:7px;height:7px;border-radius:999px;background: var(--green);
          box-shadow: 0 10px 20px rgba(181,214,0,.25);
        }

        .photoFooter{
          padding: 14px 16px;
          display:flex;
          gap: 12px;
          align-items:center;
          justify-content:space-between;
          flex-wrap:wrap;
          border-top:1px solid rgba(2,6,23,.08);
        }
        .miniLine{font-size:12px;font-weight:900;color:#0f1f3a}
        .miniSub{font-size:12px;font-weight:700;color: var(--muted)}

        .btnGreen{
          height: 40px;
          padding: 0 14px;
          border-radius: 14px;
          background: linear-gradient(180deg,#c8ea1f,#a9cc00);
          border: 1px solid rgba(0,0,0,.18);
          color: #20310a;
          font-weight: 900;
          font-size: 12px;
          letter-spacing: .06em;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          box-shadow: 0 12px 28px rgba(181,214,0,.22);
        }

        /* ====== MISSÃO • VISÃO • VALORES ====== */
        .mvv{
          margin-top: 16px;
        }
        .mvvHead{
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap: 12px;
          flex-wrap:wrap;
          margin-bottom: 10px;
        }
        .mvvTitle{
          font-weight: 950;
          color:#0f1f3a;
          letter-spacing:-0.02em;
          font-size: 18px;
        }
        .mvvSub{
          color: var(--muted);
          font-weight: 700;
          font-size: 12px;
        }
        .mvvGrid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .mvvCard{
          background:#fff;
          border: 1px solid rgba(2,6,23,.10);
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
          padding: 14px;
        }
        .mvvKicker{
          display:inline-flex;
          align-items:center;
          gap: 8px;
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid rgba(2,6,23,.10);
          background: rgba(181,214,0,.08);
          font-weight: 900;
          font-size: 11px;
          letter-spacing: .06em;
          text-transform: uppercase;
          color:#0f1f3a;
          margin-bottom: 10px;
        }
        .mvvKicker i{
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
          display:inline-block;
          box-shadow: 0 10px 20px rgba(181,214,0,.25);
        }
        .mvvCard h3{
          margin: 0 0 6px;
          font-size: 14px;
          font-weight: 950;
          color:#0f1f3a;
          letter-spacing: -0.01em;
        }
        .mvvCard p{
          margin: 0;
          color: var(--muted);
          font-weight: 700;
          font-size: 12.8px;
          line-height: 1.55;
        }

        /* RESPONSIVO */
        @media(max-width: 1000px){
          .aboutGrid{grid-template-columns:1fr}
          .imgWrap{height:300px}
        }
        @media(max-width: 700px){
          .imgWrap{height:240px}
          .stats{grid-template-columns:1fr}
          .mvvGrid{grid-template-columns:1fr}
        }
      `}</style>

      {/* ✅ SEM HEADER/HERO (vem do layout global) */}
      <section className="afterHero">
        <div className="sectionTitle">Quem Somos</div>
        <div className="sectionSub">Comunicação Visual Premium com controle total de qualidade</div>
        <div className="divider" />

        <div className="wrap aboutGrid">
          {/* TEXTO + DIFERENCIAIS */}
          <div className="card pad">
            <div className="tag">
              <b>Vale Designer</b> • Comunicação Visual
            </div>

            <p className="lead">
              A <strong>Vale Designer Comunicação Visual</strong> entrega soluções premium em{" "}
              <strong>fachadas em ACM</strong>, <strong>letras caixa iluminadas</strong>,{" "}
              <strong>impressão 3D aplicada à comunicação visual</strong>, <strong>corte CNC Router</strong>,{" "}
              <strong>corte a laser</strong>, <strong>impressão digital</strong>, <strong>adesivos</strong> e{" "}
              <strong>lonas</strong> — com foco em durabilidade, estética e padronização.
            </p>

            <p className="lead">
              Atuamos no modelo <strong>turnkey (projeto completo)</strong>, assumindo todas as etapas: planejamento,
              layout, detalhamento técnico, fabricação, montagem e instalação final — garantindo previsibilidade,
              execução limpa e acabamento superior.
            </p>

            <div className="stats" aria-label="Indicadores">
              <div className="stat">
                <b>15+ anos</b>
                <span>Experiência e padrão técnico</span>
              </div>
              <div className="stat">
                <b>Fabricação</b>
                <span>Controle total interno</span>
              </div>
              <div className="stat">
                <b>Instalação</b>
                <span>Execução segura e limpa</span>
              </div>
            </div>

            <div className="list">
              <div className="item">
                <div className="dot" />
                <div>
                  <strong>Impressão 3D para comunicação visual</strong>
                  <span>Peças sob medida, logotipos e soluções especiais com precisão.</span>
                </div>
              </div>

              <div className="item">
                <div className="dot" />
                <div>
                  <strong>Letras caixa iluminadas (LED)</strong>
                  <span>Iluminação uniforme, montagem técnica e acabamento premium.</span>
                </div>
              </div>

              <div className="item">
                <div className="dot" />
                <div>
                  <strong>CNC Router e corte a laser</strong>
                  <span>Recortes precisos em ACM, acrílico, MDF e materiais técnicos.</span>
                </div>
              </div>

              <div className="item">
                <div className="dot" />
                <div>
                  <strong>Impressão digital, adesivos e lonas</strong>
                  <span>Alta definição e durabilidade para comunicação interna e externa.</span>
                </div>
              </div>
            </div>

            <div className="chips" aria-label="Principais serviços">
              <div className="chip"><i /> Fachadas em ACM</div>
              <div className="chip"><i /> Letras Caixa Iluminadas</div>
              <div className="chip"><i /> Impressão 3D</div>
              <div className="chip"><i /> CNC Router</div>
              <div className="chip"><i /> Corte a Laser</div>
              <div className="chip"><i /> Impressão Digital</div>
              <div className="chip"><i /> Adesivos</div>
              <div className="chip"><i /> Lonas</div>
            </div>

            {/* ✅ MISSÃO • VISÃO • VALORES */}
            <div className="mvv" aria-label="Missão, Visão e Valores">
              <div className="mvvHead">
                <div className="mvvTitle">Missão, Visão e Valores</div>
                <div className="mvvSub">Base estratégica com linguagem corporativa e clean</div>
              </div>

              <div className="mvvGrid">
                <div className="mvvCard">
                  <div className="mvvKicker"><i /> Missão</div>
                  <h3>Entregar comunicação visual de alto padrão</h3>
                  <p>
                    Desenvolver projetos completos com qualidade, precisão técnica e acabamento superior,
                    fortalecendo a presença e a identidade das marcas.
                  </p>
                </div>

                <div className="mvvCard">
                  <div className="mvvKicker"><i /> Visão</div>
                  <h3>Ser referência regional em soluções premium</h3>
                  <p>
                    Consolidar a Vale Designer como empresa reconhecida por confiabilidade,
                    estrutura própria, organização e excelência em execução.
                  </p>
                </div>

                <div className="mvvCard">
                  <div className="mvvKicker"><i /> Valores</div>
                  <h3>Excelência, responsabilidade e compromisso</h3>
                  <p>
                    Ética, transparência, atenção aos detalhes e foco em prazo, segurança e padronização
                    — do projeto à instalação final.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOTO PREMIUM */}
          <div className="card">
            <div className="photoHead">
              <div>
                <strong>Padrão de entrega</strong>
                <small>Acabamento • Durabilidade • Precisão</small>
              </div>
              <div className="pill">Premium</div>
            </div>

            <div className="imgWrap">
              <Image
                src={ABOUT_IMAGE}
                alt="Produção e instalação Vale Designer"
                fill
                priority={false}
                sizes="(max-width: 1000px) 92vw, 520px"
                style={{ objectFit: "cover" }}
              />
              <div className="imgOverlay" />
              <div className="imgBadge">
                <div className="badge"><span className="badgeDot" /> Produção interna</div>
                <div className="badge"><span className="badgeDot" /> Instalação técnica</div>
                <div className="badge"><span className="badgeDot" /> Acabamento premium</div>
              </div>
            </div>

            <div className="photoFooter">
              <div>
                <div className="miniLine">Do projeto à instalação final</div>
                <div className="miniSub">Soluções completas em comunicação visual</div>
              </div>

              <a
                className="btnGreen"
                href={waMsg("Olá! Quero um orçamento premium. Pode me atender?")}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}