import { HeroSchema } from "@/types/hero";
import type { HeroData } from "@/types/hero";
import { SITE } from "@/config/site";

export const HERO: HeroData = HeroSchema.parse({
  author: {
    name: SITE.author.name,
    role: "Criador do FialhoClean",
    github: SITE.author.github,
  },
  authorNote:
    "Criado por quem entende a dor de ter um PC travando. Nascido da necessidade de ter que jogar nos gráficos mínimos para rodar a 30 FPS.",
  badge: "Open Source · Gratuito · Windows",
  headline: {
    top: "Limpe o seu",
    accent: "Windows",
    bottom: "de verdade.",
  },
  subheadline:
    "Remove bloatware, limpa registro e otimiza a inicialização do Windows. Sem conta, sem telemetria. Você baixa, roda e pronto.",
  cta: {
    primary: { label: "Baixar grátis", href: "#download" },
    secondary: {
      label: "Ver no GitHub",
      href: SITE.github.repo,
    },
  },
  stats: [
    { value: "0", suffix: "KB", label: "de telemetria" },
    { value: "100", suffix: "%", label: "open source" },
    { value: "< 2s", suffix: "", label: "tempo de scan" },
  ],
});
