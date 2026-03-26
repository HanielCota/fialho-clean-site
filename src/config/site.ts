import { z } from "astro/zod";

const SiteConfigSchema = z.object({
  name: z.string().min(1),
  url: z.url(),
  description: z.string().min(1),
  author: z.object({
    name: z.string().min(1),
    github: z.url(),
    username: z.string().min(1),
  }),
  repo: z.string().regex(/^[\w-]+\/[\w.-]+$/, "Must be owner/repo format"),
  github: z.object({
    repo: z.url(),
    releases: z.url(),
    releasesLatest: z.url(),
    issues: z.url(),
  }),
  virustotal: z.url(),
});

export const SITE = SiteConfigSchema.parse({
  name: "FialhoClean",
  url: "https://fialho-clean.dev",
  description:
    "FialhoClean remove bloatware, limpa registro e otimiza seu Windows. Gratuito, open source, sem telemetria.",
  author: {
    name: "Haniel Fialho",
    github: "https://github.com/HanielCota",
    username: "HanielCota",
  },
  repo: "HanielCota/FialhoClean",
  github: {
    repo: "https://github.com/HanielCota/FialhoClean",
    releases: "https://github.com/HanielCota/FialhoClean/releases",
    releasesLatest: "https://github.com/HanielCota/FialhoClean/releases/latest",
    issues: "https://github.com/HanielCota/FialhoClean/issues",
  },
  virustotal: "https://www.virustotal.com/gui/search/fialho-clean",
});
