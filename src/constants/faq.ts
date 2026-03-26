import { z } from "astro/zod";
import { FaqItemSchema } from "@/types/faq";

export const FAQS = z.array(FaqItemSchema).parse([
  {
    question: "O Fialho Optimizer é realmente gratuito?",
    answer:
      "Sim. Não tem versão paga, não tem funcionalidade bloqueada. O código tá aberto no GitHub, usa como quiser.",
  },
  {
    question: "É seguro usar? Posso danificar meu Windows?",
    answer:
      "Você vê exatamente o que vai ser removido antes de confirmar qualquer coisa. O Fialho Optimizer não mexe em arquivos críticos do sistema.",
  },
  {
    question: "Precisa de instalação?",
    answer:
      "Não. É um .exe portátil. Baixa, roda, fecha. Não grava nada no registro nem cria pasta em Program Files.",
  },
  {
    question: "Funciona em qual versão do Windows?",
    answer: "Windows 10 e 11, Home e Pro. Só 64 bits.",
  },
  {
    question: "Como posso contribuir?",
    answer: "Abre uma issue, manda um PR ou dá uma estrela no repositório. Qualquer coisa ajuda.",
  },
  {
    question: "O Fialho Optimizer coleta algum dado?",
    answer:
      "Nenhum. Sem telemetria, sem analytics, sem conexão com servidor nenhum. Tudo roda local na sua máquina.",
  },
  {
    question: "O Windows Defender ou SmartScreen bloqueou o .exe. O que faço?",
    answer:
      "É o SmartScreen. Aparece em qualquer .exe sem certificado de código pago — não é exclusivo desse app. Antes de rodar, verifica no VirusTotal se quiser. Na tela do aviso: 'Mais informações' → 'Executar mesmo assim'.",
  },
  {
    question: "Como faço backup antes de limpar?",
    answer:
      "Antes de qualquer limpeza, o app cria um Ponto de Restauração automático. Se algo der errado, restaura pelo Painel de Controle do Windows. Leva uns 5 minutos.",
  },
]);
