import { z } from "astro/zod";

export const StepSchema = z.object({
  number: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

export type Step = z.infer<typeof StepSchema>;
