import { z } from "astro/zod";

export const FeatureIconEnum = z.enum(["dashboard", "trash", "zap", "apps", "fix", "shield"]);

export const FeatureSchema = z.object({
  icon: FeatureIconEnum,
  title: z.string().min(1),
  description: z.string().min(1),
});

export type FeatureIcon = z.infer<typeof FeatureIconEnum>;
export type Feature = z.infer<typeof FeatureSchema>;
