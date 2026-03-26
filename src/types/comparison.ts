import { z } from "astro/zod";

const ComparisonValueSchema = z.union([z.literal(true), z.literal(false), z.literal("partial")]);

export const ComparisonIconEnum = z.enum([
  "Banknote",
  "SquareCode",
  "EyeOff",
  "BellOff",
  "Package",
  "Trash2",
  "Gauge",
  "Wrench",
  "UserX",
]);

export const ComparisonRowSchema = z.object({
  feature: z.string().min(1),
  icon: ComparisonIconEnum,
  fialho: ComparisonValueSchema,
  ccleaner: ComparisonValueSchema,
  windows: ComparisonValueSchema,
});

export type ComparisonIcon = z.infer<typeof ComparisonIconEnum>;
export type ComparisonValue = z.infer<typeof ComparisonValueSchema>;
export type ComparisonRow = z.infer<typeof ComparisonRowSchema>;
