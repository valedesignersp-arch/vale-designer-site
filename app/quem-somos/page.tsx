// app/quem-somos/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quem Somos | Vale Designer Comunicação Visual",
  description:
    "Vale Designer Comunicação Visual: fachadas em ACM, letras caixa iluminadas, impressão 3D aplicada à comunicação visual, corte CNC Router, corte a laser, impressão digital, adesivos e lonas. Qualidade premium há mais de 16 anos.",
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

export default function QuemSomosPage() {
  return (
    <main className="page">
      <style>{`
        *{box-sizing:border-box}
        .page{ background: var(--background); color: var(--foreground); }
        a{text-decoration:none;color:inherit}
        .wrap{width:min(1180px, 92vw);margin:0 auto}

        .afterHero{ padding: 26px 0 18px; position:relative; }

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
          height:1px;
          background: rgba(15,31,58,.12);
          margin: 16px auto 18px;
          width:min(1100px, 92vw);
        }

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
          display:inline-flex;
          align-items:center;
          gap:10px;
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
          padding: 14px;
        }

        .stat.highlight{
          background:
            radial-gradient(200px 80px at 20% 0%, rgba(181,214,0,.12), transparent 70%),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid rgba(181,214,0,.24);
        }

        .stat b{
          display:block;
          font-size:18px;
          font-weight:950;
          color:#0f1f3a;
          margin-bottom:4px;
          letter-spacing:-0.02em;
        }

        .stat span{
          display:block;
          font-size:12px;
          font-weight:700;
          color: var(--muted);
          line-height:1.25;
        }

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
          width:10px;
          height:10px;
          border-radius:50%;
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
          width:8px;
          height:8px;
          border-radius:50%;
          background: var(--green);
          display:inline-block;
        }

        .photoHead{
          padding: 16px 16px 14px;
          border-bottom:1px solid rgba(2,6,23,.08);
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap:12px;
          background: linear-gradient(180deg, rgba(15,31,58,.03), rgba(255,255,255,0));
        }

        .photoHead strong{
          font-weight:900;
          color:#0f1f3a
        }

        .photoHead small{
          display:block;
          margin-top:4px;
          color: var(--muted);
          font-weight:700;
          font-size:12px
        }

        .pill{
          font-size:11px;
          font-weight:900;
          color:#20310a;
          background: linear-gradient(180deg, #c8ea1f, #a9cc00);
          padding: 7px 10px;
          border-radius: 999px;
          border:1px solid rgba(0,0,0,.18);
          white-space:nowrap;
          box-shadow: 0 12px 28px rgba(181,214,0,.22);
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

        .miniLine{
          font-size:12px;
          font-weight:900;
          color:#0f1f3a
        }

        .miniSub{
          font-size:12px;
          font-weight:700;
          color: var(--muted)
        }

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

        .institutionalCard{
          background:
            radial-gradient(500px 180px at 10% 0%, rgba(181,214,0,.10), transparent 60%),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }

        .instBody{
          padding: 18px 16px 16px;
        }

        .instHero{
          padding: 4px 2px 16px;
          border-bottom: 1px solid rgba(2,6,23,.08);
        }

        .instKicker{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding: 8px 12px;
          border-radius:999px;
          background: rgba(15,31,58,.05);
          border:1px solid rgba(15,31,58,.10);
          color:#0f1f3a;
          font-size:11px;
          font-weight:900;
          letter-spacing:.08em;
          text-transform:uppercase;
          margin-bottom:12px;
        }

        .instTitle{
          margin:0 0 10px;
          color:#0f1f3a;
          font-size: clamp(24px, 2.2vw, 32px);
          line-height:1.02;
          font-weight:950;
          letter-spacing:-0.03em;
        }

        .instText{
          margin:0;
          color: var(--muted);
          font-size:13.5px;
          line-height:1.75;
          font-weight:700;
        }

        .instMetrics{
          display:grid;
          gap:10px;
          margin-top:16px;
        }

        .instMetric{
          padding:14px;
          border-radius:16px;
          border:1px solid rgba(2,6,23,.08);
          background:#fff;
          box-shadow: var(--shadow-sm);
        }

        .instMetric b{
          display:block;
          color:#0f1f3a;
          font-size:14px;
          font-weight:950;
          margin-bottom:4px;
        }

        .instMetric span{
          display:block;
          color: var(--muted);
          font-size:12.8px;
          line-height:1.55;
          font-weight:700;
        }

        .instNumbers{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap:10px;
          margin-top:16px;
        }

        .instNumber{
          padding:16px;
          border-radius:18px;
          border:1px solid rgba(181,214,0,.22);
          background:
            radial-gradient(180px 70px at 15% 0%, rgba(181,214,0,.14), transparent 70%),
            linear-gradient(180deg,#ffffff 0%, #f8fafc 100%);
          box-shadow: var(--shadow-sm);
        }

        .instNumber b{
          display:block;
          color:#0f1f3a;
          font-size:28px;
          font-weight:1000;
          line-height:1;
          letter-spacing:-0.04em;
          margin-bottom:6px;
        }

        .instNumber span{
          display:block;
          color: var(--muted);
          font-size:12px;
          font-weight:800;
          line-height:1.35;
          text-transform:uppercase;
          letter-spacing:.04em;
        }

        .instBadges{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:16px;
        }

        .instBadge{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:10px 12px;
          border-radius:999px;
          border:1px solid rgba(2,6,23,.10);
          background:#fff;
          color:#0f1f3a;
          font-size:11px;
          font-weight:900;
          letter-spacing:.05em;
          text-transform:uppercase;
          box-shadow: var(--shadow-sm);
        }

        .badgeDot{
          width:7px;
          height:7px;
          border-radius:999px;
          background: var(--green);
          box-shadow: 0 10px 20px rgba(181,214,0,.25);
        }

        @media(max-width: 1000px){
          .aboutGrid{grid-template-columns:1fr}
        }

        @media(max-width: 700px){
          .stats{grid-template-columns:1fr}
          .mvvGrid{grid-template-columns:1fr}
          .instNumbers{grid-template-columns:1fr}
        }
      `}</style>

      <section className="afterHero">
        <div className="sectionTitle">Quem Somos</div>
        <div className="sectionSub">Comunicação Visual Premium com controle total de qualidade</div>
        <div className="divider" />

        <div className="wrap aboutGrid">
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
              <div className="stat highlight">
                <b>16+ anos</b>
                <span>Experiência consolidada no mercado</span>
              </div>
              <div className="stat highlight">
                <b>1000+ trabalhos</b>
                <span>Projetos executados com padrão profissional</span>
              </div>
              <div className="stat">
                <b>Fabricação própria</b>
                <span>Controle interno de qualidade e acabamento</span>
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

          <div className="card institutionalCard">
            <div className="photoHead">
              <div>
                <strong>Padrão de entrega</strong>
                <small>Acabamento • Durabilidade • Precisão</small>
              </div>
              <div className="pill">Premium</div>
            </div>

            <div className="instBody">
              <div className="instHero">
                <div className="instKicker">Vale Designer</div>
                <h3 className="instTitle">
                  Comunicação visual com padrão técnico, organização e acabamento superior
                </h3>
                <p className="instText">
                  Desenvolvemos projetos completos para empresas que buscam uma apresentação
                  mais forte, profissional e valorizada no ponto comercial.
                </p>
              </div>

              <div className="instNumbers">
                <div className="instNumber">
                  <b>16+</b>
                  <span>Anos de experiência</span>
                </div>

                <div className="instNumber">
                  <b>1000+</b>
                  <span>Trabalhos realizados</span>
                </div>
              </div>

              <div className="instMetrics">
                <div className="instMetric">
                  <b>Projeto</b>
                  <span>Planejamento visual com leitura, proporção e presença de marca.</span>
                </div>

                <div className="instMetric">
                  <b>Produção</b>
                  <span>Fabricação com foco em precisão, padronização e acabamento limpo.</span>
                </div>

                <div className="instMetric">
                  <b>Instalação</b>
                  <span>Execução técnica para entregar segurança, durabilidade e impacto visual.</span>
                </div>
              </div>

              <div className="instBadges">
                <div className="instBadge"><span className="badgeDot" /> Produção interna</div>
                <div className="instBadge"><span className="badgeDot" /> Instalação técnica</div>
                <div className="instBadge"><span className="badgeDot" /> Acabamento premium</div>
                <div className="instBadge"><span className="badgeDot" /> Atendimento consultivo</div>
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