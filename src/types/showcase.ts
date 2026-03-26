import { z } from "astro/zod";

export const ShowcasePanelIdEnum = z.enum(["inicio", "limpeza", "velocidade", "apps", "consertar"]);

export const ShowcaseTabSchema = z.object({
  id: ShowcasePanelIdEnum,
  label: z.string().min(1),
  active: z.boolean().optional(),
});

export type ShowcasePanelId = z.infer<typeof ShowcasePanelIdEnum>;
export type ShowcaseTab = z.infer<typeof ShowcaseTabSchema>;
