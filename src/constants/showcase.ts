import { z } from "astro/zod";
import { ShowcaseTabSchema } from "@/types/showcase";

export const SHOWCASE_TABS = z.array(ShowcaseTabSchema).parse([
  { id: "inicio", label: "Início", active: true },
  { id: "limpeza", label: "Limpeza" },
  { id: "velocidade", label: "Velocidade" },
  { id: "apps", label: "Apps" },
  { id: "consertar", label: "Consertar" },
]);
