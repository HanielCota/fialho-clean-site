import { z } from "astro/zod";
import { FeatureSchema } from "@/types/feature";

export const FEATURES = z.array(FeatureSchema).parse([
  {
    icon: "dashboard",
    title: "Dashboard Central",
    description: "Status do PC num relance: espaço em disco, memória, CPU. Atualiza em tempo real.",
  },
  {
    icon: "trash",
    title: "Limpeza Profunda",
    description:
      "Temp files, cache de navegador, logs velhos, pacotes do Windows Update. Tudo que o sistema acumula e nunca limpa sozinho.",
  },
  {
    icon: "zap",
    title: "Mais Velocidade",
    description:
      "Plano de energia, efeitos visuais, programas que abrem no boot. Ajusta tudo de uma vez.",
  },
  {
    icon: "apps",
    title: "Gestão de Apps",
    description:
      "Aquele Candy Crush que veio com o PC? Lista tudo que é bloatware e te avisa antes de remover.",
  },
  {
    icon: "fix",
    title: "Consertar Windows",
    description:
      "Cria Ponto de Restauração com um clique. Roda SFC e DISM pra checar arquivos corrompidos do sistema.",
  },
  {
    icon: "shield",
    title: "Zero Telemetria",
    description:
      "Roda 100% offline. Código aberto no GitHub. Nenhum dado sai da sua máquina, ponto.",
  },
]);
