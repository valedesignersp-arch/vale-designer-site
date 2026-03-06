'use client'

import { useMemo, useState, type FormEvent, type ChangeEvent } from "react"

const CONFIG = {
  whatsapp: '5512988075372',
  telefone1: '(12) 98807-5372',
  telefone2: '(12) 99663-8696',
  instagram: 'valedesignersp',
  email: 'valedesignersp@gmail.com',
}

function onlyDigits(v: string) {
  return (v || '').replace(/\D+/g, '')
}

function normalizePhoneBR(v: string) {
  const d = onlyDigits(v).slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export default function TrabalheConoscoPage() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [cidade, setCidade] = useState('')
  const [vaga, setVaga] = useState('Instalador')
  const [experiencia, setExperiencia] = useState('1-3 anos')
  const [mensagem, setMensagem] = useState('')
  const [arquivo, setArquivo] = useState<File | null>(null)

  const telMasked = useMemo(() => normalizePhoneBR(telefone), [telefone])

  const vagas = [
    'Instalador',
    'Serralheiro / Estrutura Metálica',
    'Comunicação Visual (Produção)',
    'Adesivador',
    'Atendimento / Comercial',
    'Designer',
    'Auxiliar Geral',
    'Freelancer / Prestador',
  ]
  const expList = ['Sem experiência', 'Até 1 ano', '1-3 anos', '3-5 anos', '5+ anos']

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    setArquivo(e.target.files?.[0] ?? null)
  }

  function buildWhatsAppText() {
    const fileInfo = arquivo ? `${arquivo.name} (${Math.round(arquivo.size / 1024)} KB)` : 'Não anexado'
    const text =
`*CANDIDATURA — TRABALHE CONOSCO*
*Nome:* ${nome || '-'}
*Telefone:* ${telMasked || '-'}
*E-mail:* ${email || '-'}
*Cidade:* ${cidade || '-'}
*Vaga:* ${vaga}
*Experiência:* ${experiencia}

*Mensagem:*
${mensagem || '-'}

*Currículo/Arquivo:* ${fileInfo}

Obs: se tiver link do currículo (Drive/Dropbox), pode enviar aqui também.`
    return encodeURIComponent(text)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!nome.trim()) return alert('Preencha seu nome.')
    if (onlyDigits(telefone).length < 10) return alert('Informe um telefone válido (com DDD).')
    if (email && !/^\S+@\S+\.\S+$/.test(email)) return alert('Informe um e-mail válido.')

    const wa = `https://wa.me/${CONFIG.whatsapp}?text=${buildWhatsAppText()}`
    window.open(wa, '_blank', 'noopener,noreferrer')
  }

  return (
    <main>
      <style>{`
        .tc{ padding: 28px 0 70px; }

        /* topo */
        .tc-title{
          margin: 0 0 6px;
          color: var(--foreground);
          text-align:left;
        }
        .tc-sub{
          margin: 0 0 16px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
          max-width: 70ch;
        }

        /* layout */
        .tc-grid{
          display:grid;
          grid-template-columns: 1fr .55fr;
          gap: 18px;
        }
        @media (max-width: 920px){
          .tc-grid{ grid-template-columns: 1fr; }
        }

        /* cards */
        .tc-card{
          background: rgba(255,255,255,.92);
          border: 1px solid rgba(2,6,23,.10);
          border-radius: 18px;
          box-shadow: var(--shadow-md);
          overflow:hidden;
        }
        .tc-cardHead{
          padding: 18px;
          border-bottom: 1px solid rgba(2,6,23,.08);
          background: linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.86));
        }
        .tc-cardTitle{
          margin:0;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.01em;
          color:#0f172a;
        }
        .tc-cardSub{
          margin: 6px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.6;
        }
        .tc-cardBody{ padding: 18px; }

        /* form */
        .tc-formGrid{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 640px){
          .tc-formGrid{ grid-template-columns: 1fr; }
        }

        .tc-label{
          display:block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .09em;
          text-transform: uppercase;
          color: #0f172a;
          margin: 0 0 8px;
        }

        .tc-input, .tc-select, .tc-textarea{
          width: 100%;
          height: 46px;
          border-radius: 14px;
          border: 1px solid rgba(2,6,23,.14);
          background: rgba(255,255,255,.96);
          padding: 0 14px;
          outline: none;
          font-size: 14px;
          color: #0f172a;
          transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
          box-shadow: var(--shadow-sm);
        }
        .tc-input::placeholder, .tc-textarea::placeholder{ color: rgba(100,116,139,.85); }

        .tc-textarea{
          height: 120px;
          padding: 12px 14px;
          resize: vertical;
        }

        .tc-input:focus, .tc-select:focus, .tc-textarea:focus{
          border-color: rgba(181,214,0,.85);
          box-shadow: 0 0 0 4px rgba(181,214,0,.16);
          transform: translateY(-1px);
        }

        /* file */
        .tc-fileRow{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px dashed rgba(2,6,23,.22);
          background: rgba(255,255,255,.70);
        }
        .tc-fileName{
          font-weight: 800;
          font-size: 13px;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          color:#0f172a;
        }
        .tc-fileHint{
          margin-top: 6px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.45;
        }

        /* botões */
        .tc-btnRow{
          display:flex;
          gap: 12px;
          flex-wrap:wrap;
          margin-top: 14px;
        }
        .tc-btnPrimary{
          /* ✅ usa padrão global */
        }
        .tc-btnOutline{
          height: 42px;
          padding: 0 16px;
          border-radius: 14px;
          border: 1px solid rgba(2,6,23,.14);
          background: rgba(255,255,255,.90);
          color: #0f172a;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: .03em;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          text-decoration:none;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
          box-shadow: var(--shadow-sm);
        }
        .tc-btnOutline:hover{
          transform: translateY(-2px);
          border-color: rgba(181,214,0,.25);
          box-shadow: var(--shadow-md);
        }

        /* side */
        .tc-side{ display:flex; flex-direction:column; gap: 12px; }
        .tc-info{
          padding: 16px;
          border-radius: 18px;
          border: 1px solid rgba(2,6,23,.10);
          background: rgba(255,255,255,.92);
          box-shadow: var(--shadow-md);
        }
        .tc-infoTitle{ margin:0 0 8px; font-weight: 800; color:#0f172a; }
        .tc-infoText{ margin:0; color: var(--muted); font-size: 13px; line-height: 1.7; }

        .tc-link{
          display:inline-block;
          margin-top: 10px;
          font-weight: 800;
          text-decoration:none;
          color: #0b1731;
          border-bottom: 2px solid rgba(181,214,0,.8);
          padding-bottom: 2px;
        }
      `}</style>

      <div className="wrap tc">
        <h1 className="h2 tc-title">Trabalhe Conosco</h1>
        <p className="tc-sub">
          Preencha o formulário e envie sua candidatura. Ao enviar, abriremos seu WhatsApp com a mensagem pronta.
        </p>

        <section className="tc-grid">
          <div className="tc-card">
            <div className="tc-cardHead">
              <h2 className="tc-cardTitle">Envie sua candidatura</h2>
              <p className="tc-cardSub">
                Se tiver currículo em PDF, selecione o arquivo (o WhatsApp não anexa automático, mas o nome do arquivo vai na mensagem).
              </p>
            </div>

            <div className="tc-cardBody">
              <form onSubmit={handleSubmit}>
                <div className="tc-formGrid">
                  <div>
                    <span className="tc-label">Nome completo</span>
                    <input
                      className="tc-input"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Ex: Joelson Oliveira"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <span className="tc-label">Telefone (WhatsApp)</span>
                    <input
                      className="tc-input"
                      value={telMasked}
                      onChange={(e) => setTelefone(e.target.value)}
                      placeholder="(12) 99999-9999"
                      inputMode="tel"
                      autoComplete="tel"
                    />
                  </div>

                  <div>
                    <span className="tc-label">E-mail</span>
                    <input
                      className="tc-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@dominio.com"
                      inputMode="email"
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <span className="tc-label">Cidade</span>
                    <input
                      className="tc-input"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      placeholder="Ex: Jacareí / SP"
                      autoComplete="address-level2"
                    />
                  </div>

                  <div>
                    <span className="tc-label">Vaga / Área</span>
                    <select className="tc-select" value={vaga} onChange={(e) => setVaga(e.target.value)}>
                      {vagas.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>

                  <div>
                    <span className="tc-label">Experiência</span>
                    <select className="tc-select" value={experiencia} onChange={(e) => setExperiencia(e.target.value)}>
                      {expList.map(x => <option key={x} value={x}>{x}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: 12 }}>
                  <span className="tc-label">Mensagem</span>
                  <textarea
                    className="tc-textarea"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Conte rapidamente: funções que já fez, disponibilidade, se tem CNH, se aceita viagem, pretensão, etc."
                  />
                </div>

                <div style={{ marginTop: 12 }}>
                  <span className="tc-label">Currículo (opcional)</span>
                  <div className="tc-fileRow">
                    <div style={{ minWidth: 0 }}>
                      <div className="tc-fileName">{arquivo ? arquivo.name : 'Nenhum arquivo selecionado'}</div>
                      <div className="tc-fileHint">Dica: PDF é ideal. Se tiver link do Drive, coloque na mensagem.</div>
                    </div>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={onFileChange} />
                  </div>
                </div>

                <div className="tc-btnRow">
                  <button className="btn-green tc-btnPrimary" type="submit">
                    Enviar pelo WhatsApp
                  </button>
                  <a className="tc-btnOutline" href="/#contatos">
                    Falar com a empresa
                  </a>
                </div>
              </form>
            </div>
          </div>

          <aside className="tc-side">
            <div className="tc-info">
              <h3 className="tc-infoTitle">Contato</h3>
              <p className="tc-infoText">
                {CONFIG.telefone1} • {CONFIG.telefone2}<br />
                {CONFIG.email}<br />
                @{CONFIG.instagram}
              </p>
              <a
                className="tc-link"
                href={`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Olá! Quero enviar meu currículo / candidatura.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp →
              </a>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}