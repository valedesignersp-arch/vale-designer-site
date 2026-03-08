import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const PARA_EMAIL = "valedesignersp@gmail.com"
const DE_EMAIL = "Vale Designer <onboarding@resend.dev>"

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const nome = String(body?.nome || "").trim()
    const telefone = String(body?.telefone || "").trim()
    const email = String(body?.email || "").trim()
    const assunto = String(body?.assunto || "").trim()
    const mensagem = String(body?.mensagem || "").trim()

    if (!nome) {
      return NextResponse.json(
        { ok: false, error: "Preencha seu nome." },
        { status: 400 }
      )
    }

    if (!telefone) {
      return NextResponse.json(
        { ok: false, error: "Preencha seu telefone." },
        { status: 400 }
      )
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Informe um e-mail válido." },
        { status: 400 }
      )
    }

    if (!mensagem) {
      return NextResponse.json(
        { ok: false, error: "Escreva sua mensagem." },
        { status: 400 }
      )
    }

    const subject = `${assunto || "Contato"} - Site Vale Designer`

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 16px;">Novo contato pelo site</h2>

        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>E-mail:</strong> ${email || "-"}</p>
        <p><strong>Assunto:</strong> ${assunto || "-"}</p>

        <div style="margin-top:20px;">
          <strong>Mensagem:</strong>
          <div style="margin-top:8px;padding:14px;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;white-space:pre-wrap;">${mensagem}</div>
        </div>
      </div>
    `

    const text = `
Novo contato pelo site

Nome: ${nome}
Telefone: ${telefone}
E-mail: ${email || "-"}
Assunto: ${assunto || "-"}

Mensagem:
${mensagem}
    `.trim()

    const data = await resend.emails.send({
      from: DE_EMAIL,
      to: [PARA_EMAIL],
      replyTo: email || undefined,
      subject,
      html,
      text,
    })

    return NextResponse.json({ ok: true, data })
  } catch (error) {
    console.error("Erro ao enviar contato:", error)
    return NextResponse.json(
      { ok: false, error: "Não foi possível enviar sua mensagem agora." },
      { status: 500 }
    )
  }
}