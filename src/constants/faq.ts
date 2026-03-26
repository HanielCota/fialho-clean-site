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
      "É um aviso padrão do Windows para executáveis sem assinatura de código paga. O código-fonte está 100% aberto no GitHub para auditoria. Você também pode verificar o arquivo no VirusTotal antes de rodar. Na tela do SmartScreen, clique em 'Mais informações' e depois 'Executar mesmo assim'.",
  },
  {
    question: "Como faço backup antes de limpar?",
    answer:
      "O Fialho Optimizer cria automaticamente um Ponto de Restauração do Sistema antes de qualquer operação destrutiva. Se algo der errado, você pode restaurar pelo Painel de Controle do Windows em menos de 5 minutos.",
  },
]);
