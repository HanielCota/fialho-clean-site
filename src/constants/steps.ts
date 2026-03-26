import { z } from "astro/zod";
import { StepSchema } from "@/types/step";

export const STEPS = z.array(StepSchema).parse([
  {
    number: "01",
    title: "Baixe e execute",
    description: "Baixa pelo GitHub. É um .exe portátil, não precisa instalar nada.",
  },
  {
    number: "02",
    title: "Escaneie seu sistema",
    description:
      "Um clique e ele analisa bloatware, registro, serviços e o que abre junto com o Windows.",
  },
  {
    number: "03",
    title: "Revise e limpe",
    description: "Ele mostra tudo que vai remover antes de tocar em qualquer coisa. Você escolhe.",
  },
]);
