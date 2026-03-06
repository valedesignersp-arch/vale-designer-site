import type { Metadata } from "next"
import HomeClient from "../components/HomeClient"

export const metadata: Metadata = {
  title: "Serviços | Vale Designer",
  description:
    "Fachadas em ACM, Letras Caixa, Impressão Digital, Adesivagem e muito mais. Atendimento em Jacareí, São José dos Campos e Taubaté.",
  alternates: { canonical: "/servicos" },
}

export default function Page() {
  return <HomeClient scrollToId="servicos" />
}
