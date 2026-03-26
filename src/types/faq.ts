import { z } from "astro/zod";

export const FaqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

export type FaqItem = z.infer<typeof FaqItemSchema>;
