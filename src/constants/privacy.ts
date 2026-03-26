import { z } from "astro/zod";

const PrivacySectionSchema = z.object({
  title: z.string().min(1),
  items: z.array(z.string().min(1)).optional(),
  paragraphs: z.array(z.string().min(1)).optional(),
});

const PrivacySchema = z.object({
  lastUpdated: z.string().min(1),
  sections: z.array(PrivacySectionSchema).min(1),
});

export const PRIVACY = PrivacySchema.parse({
  lastUpdated: "março de 2026",
  sections: [
    {
      title: "Resumo",
      paragraphs: [
        "O FialhoClean não coleta, armazena ou transmite nenhum dado pessoal. Nem o aplicativo, nem este site.",
      ],
    },
    {
      title: "O aplicativo FialhoClean",
      items: [
        "Roda 100% offline após o download",
        "Não faz conexões com servidores externos",
        "Não coleta telemetria, analytics ou dados de uso",
        "Não cria conta de usuário nem exige cadastro",
        "Não acessa, lê ou transmite arquivos pessoais",
        "Todo o código-fonte está disponível no GitHub para auditoria",
      ],
    },
    {
      title: "Este site (fialho-clean.dev)",
      items: [
        "Não utiliza cookies",
        "Não coleta dados pessoais via formulários",
        "Não utiliza ferramentas de rastreamento (Google Analytics, Meta Pixel, etc.)",
        "As únicas requisições externas são para a API pública do GitHub (para exibir estrelas e releases), feitas no servidor durante o build — nenhuma chamada é feita pelo navegador do visitante",
      ],
    },
    {
      title: "Hospedagem",
      paragraphs: [
        "Este site é hospedado na Netlify. A Netlify pode coletar logs de acesso (endereço IP, user agent) conforme sua própria política de privacidade. Isso está fora do nosso controle.",
      ],
    },
    {
      title: "Contato",
      paragraphs: ["Se tiver dúvidas sobre esta política, abra uma issue no GitHub."],
    },
  ],
});
