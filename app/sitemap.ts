import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://www.valedesigner.com.br"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/comunicacao-visual-sao-jose-dos-campos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/comunicacao-visual-jacarei`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/adesivos-impressao-digital-corte-cnc-sao-jose-dos-campos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contatos`,
      lastModified: new Date(),
    }
  ]
}