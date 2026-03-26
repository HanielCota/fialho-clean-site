import { z } from "astro/zod";
import { ComparisonRowSchema } from "@/types/comparison";

export const COMPARISON = z.array(ComparisonRowSchema).parse([
  { feature: "Gratuito", icon: "Banknote", fialho: true, ccleaner: true, windows: true },
  { feature: "Open Source", icon: "SquareCode", fialho: true, ccleaner: false, windows: false },
  { feature: "Sem telemetria", icon: "EyeOff", fialho: true, ccleaner: false, windows: false },
  { feature: "Sem anúncios", icon: "BellOff", fialho: true, ccleaner: false, windows: true },
  {
    feature: "Portátil (sem instalação)",
    icon: "Package",
    fialho: true,
    ccleaner: false,
    windows: true,
  },
  { feature: "Remove bloatware", icon: "Trash2", fialho: true, ccleaner: false, windows: false },
  {
    feature: "Otimiza inicialização",
    icon: "Gauge",
    fialho: true,
    ccleaner: true,
    windows: "partial",
  },
  {
    feature: "Repara sistema (SFC/DISM)",
    icon: "Wrench",
    fialho: true,
    ccleaner: false,
    windows: true,
  },
  {
    feature: "Sem cadastro obrigatório",
    icon: "UserX",
    fialho: true,
    ccleaner: true,
    windows: true,
  },
]);
