import { z } from "astro/zod";

export const StepSchema = z.object({
  number: z.string().regex(/^\d{2}$/, "Must be zero-padded two digits (e.g. '01')"),
  title: z.string().min(1),
  description: z.string().min(1),
});

export type Step = z.infer<typeof StepSchema>;
