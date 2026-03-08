'use client'

import { useMemo, useState, type FormEvent } from "react"

const CONFIG = {
  empresa: "Vale Designer",
  whatsapp: "5512988075372",
  telefone1: "(12) 98807-5372",
  telefone2: "(12) 99663-8696",
  email: "valedesignersp@gmail.com",
  instagram: "valedesignersp",
  facebook: "valedesignersp",

  enderecoLinha1: "Jacareí • SP",
  enderecoLinha2: "Rua Paraguai, 58 • Jd. Colônia • CEP 12315-180",

  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Rua+Paraguai+58+Jd+Col%C3%B4nia+Jacare%C3%AD+SP+12315-180",

  mapsEmbedSrc:
    "https://www.google.com/maps?q=Rua+Paraguai+58+Jd+Col%C3%B4nia+Jacare%C3%AD+SP+12315-180&output=embed",
}

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "")
}

function normalizePhoneBR(v: string) {
  const d = onlyDigits(v).slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export default function ContatosPage() {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [assunto, setAssunto] = useState("Orçamento")
  const [mensagem, setMensagem] = useState("")

  const telMasked = useMemo(() => normalizePhoneBR(telefone), [telefone])

  function isFormValid() {
    if (!nome.trim()) {
      alert("Preencha seu nome.")
      return false
    }
    if (onlyDigits(telefone).length < 10) {
      alert("Informe um telefone válido (com DDD).")
      return false
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Informe um e-mail válido.")
      return false
    }
    if (!mensagem.trim()) {
      alert("Escreva sua mensagem.")
      return false
    }
    return true
  }

  function buildWhatsAppText() {
    const text = `*CONTATO — SITE (${CONFIG.empresa})*
*Nome:* ${nome || "-"}
*Telefone:* ${telMasked || "-"}
*E-mail:* ${email || "-"}
*Assunto:* ${assunto || "-"}

*Mensagem:*
${mensagem || "-"}

Enviado pelo formulário do site.`
    return encodeURIComponent(text)
  }

  function buildMailSubject() {
    return encodeURIComponent(`${assunto} - Contato pelo site - ${CONFIG.empresa}`)
  }

  function buildMailBody() {
    const body = `Novo contato enviado pelo site.

Nome: ${nome || "-"}
Telefone: ${telMasked || "-"}
E-mail: ${email || "-"}
Assunto: ${assunto || "-"}

Mensagem:
${mensagem || "-"}

---
Enviado pelo formulário do site ${CONFIG.empresa}.`

    return encodeURIComponent(body)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!isFormValid()) return

    const wa = `https://wa.me/${CONFIG.whatsapp}?text=${buildWhatsAppText()}`
    window.open(wa, "_blank", "noopener,noreferrer")
  }

  function handleEmailClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!isFormValid()) {
      e.preventDefault()
    }
  }

  const mailtoHref = `mailto:${CONFIG.email}?subject=${buildMailSubject()}&body=${buildMailBody()}`

  return (
    <main>
      <style>{`
        .ct{ padding: 34px 0 70px; }

        .ct-head{
          max-width: 900px;
          margin: 0 auto 18px;
        }
        .ct-title{
          margin: 0 0 8px;
          color: var(--foreground);
          letter-spacing: -0.02em;
        }
        .ct-sub{
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .ct-grid{
          display:grid;
          grid-template-columns: 1fr .78fr;
          gap: 18px;
          margin-top: 16px;
          align-items:start;
        }
        @media (max-width: 980px){
          .ct-grid{ grid-template-columns: 1fr; }
        }

        .ct-card{
          background: rgba(255,255,255,.88);
          border: 1px solid rgba(2,6,23,.08);
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          overflow:hidden;
        }
        .ct-cardHead{
          padding: 18px 18px 14px;
          border-bottom: 1px solid rgba(2,6,23,.06);
          background: linear-gradient(180deg, rgba(255,255,255,.95), rgba(255,255,255,.86));
        }
        .ct-cardTitle{
          margin:0;
          font-size: 16px;
          font-weight: 950;
          letter-spacing: -0.02em;
          color:#0f172a;
        }
        .ct-cardSub{
          margin: 6px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
        }
        .ct-cardBody{ padding: 18px; }

        .ct-formGrid{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 640px){
          .ct-formGrid{ grid-template-columns: 1fr; }
        }

        .ct-label{
          display:block;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .10em;
          text-transform: uppercase;
          color: rgba(15,23,42,.92);
          margin: 0 0 8px;
        }

        .ct-input, .ct-select, .ct-textarea{
          width: 100%;
          height: 46px;
          border-radius: 14px;
          border: 1px solid rgba(2,6,23,.12);
          background: rgba(255,255,255,.96);
          padding: 0 14px;
          outline: none;
          font-size: 14px;
          color: #0f172a;
          transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease, background .15s ease;
          box-shadow: var(--shadow-sm);
        }
        .ct-input::placeholder, .ct-textarea::placeholder{ color: rgba(100,116,139,.75); }

        .ct-textarea{
          height: 150px;
          padding: 12px 14px;
          resize: vertical;
        }
        .ct-input:focus, .ct-select:focus, .ct-textarea:focus{
          border-color: rgba(181,214,0,.85);
          box-shadow: 0 0 0 4px rgba(181,214,0,.14);
          transform: translateY(-1px);
          background: #fff;
        }

        .ct-formActions{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          margin-top: 14px;
          align-items:center;
        }

        .ct-side{
          display:flex;
          flex-direction:column;
          gap: 12px;
        }
        .ct-sideBox{
          padding: 16px;
          border-radius: 20px;
          border: 1px solid rgba(2,6,23,.08);
          background: rgba(255,255,255,.88);
          box-shadow: var(--shadow-md);
        }
        .ct-sideTitle{
          margin:0 0 8px;
          font-weight: 950;
          letter-spacing: -0.01em;
          color:#0f172a;
          font-size: 14px;
        }
        .ct-sideText{
          margin:0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .ct-links{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          margin-top: 12px;
        }
        .ct-btnOutline{
          height: 42px;
          padding: 0 14px;
          border-radius: 14px;
          border: 1px solid rgba(2,6,23,.12);
          background: rgba(255,255,255,.92);
          color: #0f172a;
          font-weight: 900;
          font-size: 12px;
          letter-spacing: .04em;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          text-decoration:none;
          white-space:nowrap;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease, background .18s ease;
          box-shadow: var(--shadow-sm);
        }
        .ct-btnOutline:hover{
          transform: translateY(-2px);
          border-color: rgba(181,214,0,.25);
          box-shadow: var(--shadow-md);
          background: #fff;
        }

        .ct-mapWrap{
          border-radius: 20px;
          overflow:hidden;
          border: 1px solid rgba(2,6,23,.08);
          box-shadow: var(--shadow-md);
          background: #fff;
        }
        .ct-map{
          width: 100%;
          height: 320px;
          border: 0;
          display:block;
        }
      `}</style>

      <div className="wrap ct">
        <header className="ct-head">
          <h1 className="h2 ct-title">Contatos</h1>
          <p className="ct-sub">
            Preencha o formulário para enviar sua mensagem. Você pode escolher enviar pelo WhatsApp ou por e-mail.
          </p>
        </header>

        <section className="ct-grid">
          <div className="ct-card">
            <div className="ct-cardHead">
              <h2 className="ct-cardTitle">Enviar mensagem</h2>
              <p className="ct-cardSub">
                Preencha seus dados para contato.
              </p>
            </div>

            <div className="ct-cardBody">
              <form onSubmit={handleSubmit}>
                <div className="ct-formGrid">
                  <div>
                    <span className="ct-label">Nome</span>
                    <input
                      className="ct-input"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <span className="ct-label">Telefone (WhatsApp)</span>
                    <input
                      className="ct-input"
                      value={telMasked}
                      onChange={(e) => setTelefone(e.target.value)}
                      placeholder="(12) 99999-9999"
                      inputMode="tel"
                      autoComplete="tel"
                    />
                  </div>

                  <div>
                    <span className="ct-label">E-mail (opcional)</span>
                    <input
                      className="ct-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@dominio.com"
                      inputMode="email"
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <span className="ct-label">Assunto</span>
                    <select
                      className="ct-select"
                      value={assunto}
                      onChange={(e) => setAssunto(e.target.value)}
                    >
                      <option>Orçamento</option>
                      <option>Letra Caixa / Luminoso</option>
                      <option>Fachada em ACM</option>
                      <option>Tótem / Letreiro</option>
                      <option>Adesivos / Impressos</option>
                      <option>Estrutura Metálica</option>
                      <option>Suporte / Dúvidas</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: 12 }}>
                  <span className="ct-label">Mensagem</span>
                  <textarea
                    className="ct-textarea"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Escreva o que você precisa (medidas, cidade, prazo, fotos, etc.)"
                  />
                </div>

                <div className="ct-formActions">
                  <button className="btn-green" type="submit">
                    Enviar no WhatsApp
                  </button>

                  <a
                    className="ct-btnOutline"
                    href={mailtoHref}
                    onClick={handleEmailClick}
                  >
                    Enviar por e-mail
                  </a>
                </div>
              </form>
            </div>
          </div>

          <aside className="ct-side">
            <div className="ct-sideBox">
              <div className="ct-sideTitle">Contato rápido</div>
              <p className="ct-sideText">
                <b>WhatsApp:</b> {CONFIG.telefone1}<br />
                <b>Telefone:</b> {CONFIG.telefone2}<br />
                <b>E-mail:</b> {CONFIG.email}
              </p>

              <div className="ct-links">
                <a
                  className="btn-green"
                  href={`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Quero solicitar um orçamento.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>

                <a className="ct-btnOutline" href={`tel:${onlyDigits(CONFIG.telefone1)}`}>
                  Ligar 1
                </a>

                <a
                  className="ct-btnOutline"
                  href={CONFIG.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir no Maps
                </a>
              </div>
            </div>

            <div className="ct-mapWrap">
              <iframe
                className="ct-map"
                src={CONFIG.mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Mapa - Como chegar"
              />
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}