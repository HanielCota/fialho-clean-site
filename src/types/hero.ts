import { z } from "astro/zod";

export const CtaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export const StatSchema = z.object({
  value: z.string().min(1),
  suffix: z.string(),
  label: z.string().min(1),
});

export const AuthorSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  github: z.url(),
});

export const HeroSchema = z.object({
  author: AuthorSchema,
  authorNote: z.string().optional(),
  badge: z.string().min(1),
  headline: z.object({
    top: z.string().min(1),
    accent: z.string().min(1),
    bottom: z.string().min(1),
  }),
  subheadline: z.string().min(1),
  cta: z.object({
    primary: CtaSchema,
    secondary: CtaSchema,
  }),
  stats: z.array(StatSchema).min(1),
});

export type HeroData = z.infer<typeof HeroSchema>;
