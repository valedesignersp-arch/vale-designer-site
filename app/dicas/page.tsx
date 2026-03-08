import type { Metadata } from "next"
import Image from "next/image"
import styles from "./dicas.module.css"

export const metadata: Metadata = {
  title: "Dicas para escolher a fachada ideal | Vale Designer",
  description:
    "Guia premium para escolher a melhor fachada comercial: ACM 3mm ou 4mm, lona, iluminação, cores, letreiros, logos e cuidados para manter sua empresa valorizada.",
}

const CONFIG = {
  whatsapp: "5512988075372",
}

const WA = `https://wa.me/${CONFIG.whatsapp}`
const waMsg = (t: string) => `${WA}?text=${encodeURIComponent(t)}`

const heroImage = "/dicas/fachada-acm-premium.jpg"

const cards = [
  {
    title: "Como escolher a fachada certa",
    text: "A melhor fachada depende do tipo de negócio, da distância de leitura, do orçamento, da necessidade de iluminação e do padrão visual que sua marca deseja transmitir.",
  },
  {
    title: "Materiais e acabamento",
    text: "ACM, lona, letra caixa, adesivação e painéis têm funções diferentes. A escolha correta melhora a estética, a durabilidade e a percepção de valor da empresa.",
  },
  {
    title: "Projeto com leitura e impacto",
    text: "Uma boa fachada precisa ser bonita, legível e bem proporcionada. Menos poluição visual e mais hierarquia criam um resultado mais forte e profissional.",
  },
]

const tiposFachada = [
  {
    title: "Fachada em ACM",
    text: "Ideal para quem busca visual sofisticado, acabamento limpo e aparência premium. Ótima opção para lojas, clínicas, escritórios e empresas que querem elevar a percepção da marca.",
  },
  {
    title: "Fachada em lona",
    text: "Boa solução para comunicação de grande formato, promoções, fachadas provisórias ou projetos com orçamento mais enxuto. Entrega impacto visual com custo inicial menor.",
  },
  {
    title: "Letras caixa",
    text: "Excelente para reforçar a marca e criar presença visual. Pode ser iluminada ou sem iluminação, dependendo da proposta estética e da necessidade de destaque noturno.",
  },
  {
    title: "Painel com logo aplicado",
    text: "Solução versátil para criar identidade visual organizada. Funciona bem quando o objetivo é unir custo-benefício e apresentação profissional.",
  },
]

const comparativoAcm = [
  {
    title: "ACM 3 mm",
    bullets: [
      "Boa opção para aplicações mais leves",
      "Pode atender projetos com orçamento mais controlado",
      "Funciona bem em peças menores e composições mais simples",
    ],
  },
  {
    title: "ACM 4 mm",
    bullets: [
      "Mais robusto e com percepção mais premium",
      "Melhor rigidez e estabilidade visual",
      "Muito indicado para fachadas com acabamento superior",
    ],
  },
]

const lona = {
  vantagens: [
    "Custo inicial mais baixo",
    "Troca rápida de comunicação",
    "Boa área visual para campanhas e promoções",
    "Ótima solução para fachadas provisórias ou comerciais de giro rápido",
  ],
  desvantagens: [
    "Percepção visual menos premium que ACM",
    "Pode sofrer mais com desgaste estético ao longo do tempo",
    "Depende muito da estrutura e da tensão correta",
    "Nem sempre transmite o mesmo nível de sofisticação de uma fachada rígida",
  ],
}

const dicasProjeto = [
  "Escolha cores com bom contraste entre fundo e marca",
  "Pense na fachada de dia e de noite",
  "Evite excesso de informação e muitas fontes",
  "Priorize leitura à distância",
  "Defina se o logo precisa de destaque com iluminação",
  "Considere o entorno e o perfil do seu público",
]

const faq = [
  {
    q: "Qual ACM usar: 3 mm ou 4 mm?",
    a: "Em muitos casos, o ACM 4 mm entrega um resultado mais premium e estável visualmente. Já o 3 mm pode funcionar bem em aplicações mais leves e com custo mais controlado. A escolha final depende do projeto, do tamanho das peças e do padrão desejado.",
  },
  {
    q: "Quando vale a pena usar fachada em lona?",
    a: "A lona funciona bem em projetos promocionais, fachadas provisórias, painéis de grande formato e situações em que o custo inicial precisa ser menor. Para percepção premium, o ACM normalmente se destaca mais.",
  },
  {
    q: "Qual tipo de fachada valoriza mais a empresa?",
    a: "Fachadas em ACM com boa composição visual, logo bem aplicado e iluminação correta costumam transmitir mais sofisticação, organização e percepção de valor.",
  },
  {
    q: "Letras caixa iluminadas compensam?",
    a: "Sim. Elas reforçam a marca, melhoram a leitura noturna e criam uma presença visual mais forte, especialmente em comércios de rua, clínicas, lojas e empresas com operação noturna.",
  },
]

export default function DicasPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.kicker}>Vale Designer • Guia Premium</div>
              <h1 className={styles.heroTitle}>
                Guia premium para escolher a <span>fachada ideal</span> da sua empresa
              </h1>
              <p className={styles.heroText}>
                Entenda as diferenças entre ACM, lona, letreiros, iluminação,
                espessuras, cores e acabamentos para criar uma fachada bonita,
                durável e com presença comercial.
              </p>

              <div className={styles.heroActions}>
                <a
                  className={styles.btnPrimary}
                  href={waMsg("Olá! Quero um orçamento para fachada premium.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar orçamento
                </a>

                <a className={styles.btnSecondary} href="#conteudo">
                  Ver guia
                </a>
              </div>
            </div>

            <div className={styles.heroMedia}>
              <div className={styles.imageCard}>
                <Image
                  src={heroImage}
                  alt="Fachada moderna em ACM com acabamento premium"
                  fill
                  priority
                  sizes="(max-width: 1000px) 100vw, 48vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className={styles.topCards}>
            {cards.map((item) => (
              <article key={item.title} className={styles.topCard}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="conteudo" className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionKicker}>Tipos de fachada</span>
            <h2 className={styles.sectionTitle}>As soluções mais usadas no mercado</h2>
            <p className={styles.sectionText}>
              Cada sistema atende uma necessidade diferente. O segredo está em
              escolher o material certo para o perfil da marca, do ponto comercial
              e do objetivo visual.
            </p>
          </div>

          <div className={styles.grid4}>
            {tiposFachada.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.dualGrid}>
            <article className={styles.cardLarge}>
              <span className={styles.sectionKicker}>ACM</span>
              <h2 className={styles.cardTitle}>Quando escolher fachada em ACM</h2>
              <p className={styles.cardText}>
                O ACM é uma das melhores escolhas para empresas que buscam
                acabamento limpo, aparência sofisticada e maior percepção de valor.
                É muito usado em fachadas comerciais, marquises, revestimentos e
                projetos que exigem organização visual e padrão premium.
              </p>

              <div className={styles.points}>
                <div className={styles.point}>Visual mais sofisticado</div>
                <div className={styles.point}>Ótima planicidade</div>
                <div className={styles.point}>Boa durabilidade</div>
                <div className={styles.point}>Variedade de cores e acabamentos</div>
                <div className={styles.point}>Fácil composição com letra caixa e logos</div>
              </div>
            </article>

            <article className={styles.cardLarge}>
              <span className={styles.sectionKicker}>Comparativo</span>
              <h2 className={styles.cardTitle}>ACM 3 mm ou 4 mm?</h2>
              <p className={styles.cardText}>
                A escolha da espessura deve considerar o tipo de estrutura, o
                tamanho da fachada, o padrão de acabamento e a proposta do projeto.
              </p>

              <div className={styles.compareGrid}>
                {comparativoAcm.map((item) => (
                  <div key={item.title} className={styles.compareCard}>
                    <h3>{item.title}</h3>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionKicker}>Lona</span>
            <h2 className={styles.sectionTitle}>Onde usar fachada em lona</h2>
            <p className={styles.sectionText}>
              A lona pode ser uma excelente solução quando o objetivo é ganhar
              área visual, reduzir custo inicial ou criar uma comunicação de
              troca mais rápida.
            </p>
          </div>

          <div className={styles.dualGrid}>
            <article className={styles.cardLarge}>
              <h3 className={styles.subTitle}>Vantagens</h3>
              <ul className={styles.list}>
                {lona.vantagens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.cardLarge}>
              <h3 className={styles.subTitle}>Desvantagens</h3>
              <ul className={styles.list}>
                {lona.desvantagens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionKicker}>Projeto visual</span>
            <h2 className={styles.sectionTitle}>Como escolher um bom layout de fachada</h2>
            <p className={styles.sectionText}>
              Uma fachada bonita não depende só do material. O que realmente faz
              diferença é a combinação entre proporção, contraste, leitura, cor,
              iluminação e aplicação correta do logo.
            </p>
          </div>

          <div className={styles.grid2}>
            <article className={styles.cardLarge}>
              <h3 className={styles.subTitle}>Dicas sobre cores, iluminação e letreiros</h3>
              <ul className={styles.list}>
                <li>Cores escuras costumam transmitir sofisticação e força visual.</li>
                <li>Cores claras passam limpeza, leveza e amplitude.</li>
                <li>O contraste entre fundo e marca é decisivo para a leitura.</li>
                <li>Iluminação pode transformar totalmente a fachada à noite.</li>
                <li>Letra caixa iluminada traz mais presença e valorização da marca.</li>
                <li>Logos recortados e bem aplicados deixam o conjunto mais premium.</li>
              </ul>
            </article>

            <article className={styles.cardLarge}>
              <h3 className={styles.subTitle}>Boas práticas de composição</h3>
              <div className={styles.points}>
                {dicasProjeto.map((item) => (
                  <div key={item} className={styles.point}>
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.dualGrid}>
            <article className={styles.cardLarge}>
              <span className={styles.sectionKicker}>Manutenção</span>
              <h2 className={styles.cardTitle}>Cuidados com fachada em ACM</h2>
              <p className={styles.cardText}>
                Para preservar a aparência da fachada, o ideal é fazer limpeza
                periódica com pano macio, água e detergente neutro. Evite produtos
                abrasivos, solventes fortes e soluções improvisadas que possam
                comprometer o acabamento.
              </p>

              <ul className={styles.list}>
                <li>Faça limpeza regular</li>
                <li>Use produtos suaves</li>
                <li>Evite abrasivos</li>
                <li>Revise iluminação e fixação</li>
                <li>Corrija desgastes antes que aumentem</li>
              </ul>
            </article>

            <article className={styles.cardLarge}>
              <span className={styles.sectionKicker}>FAQ</span>
              <h2 className={styles.cardTitle}>Perguntas frequentes</h2>
              <div className={styles.faqList}>
                {faq.map((item) => (
                  <details key={item.q} className={styles.faqItem}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.wrap}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <span className={styles.sectionKicker}>Vale Designer</span>
              <h2 className={styles.ctaTitle}>
                Precisa de ajuda para escolher a melhor fachada para sua empresa?
              </h2>
              <p className={styles.ctaText}>
                A Vale Designer desenvolve projetos em ACM, lona, letras caixa,
                luminosos, logos, impressão digital e comunicação visual completa,
                sempre com foco em estética, leitura, durabilidade e valorização da marca.
              </p>

              <div className={styles.heroActions}>
                <a
                  className={styles.btnPrimary}
                  href={waMsg("Olá! Quero ajuda para escolher a melhor fachada para minha empresa.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar no WhatsApp
                </a>

                <a className={styles.btnSecondaryDark} href="/contatos">
                  Ir para contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}