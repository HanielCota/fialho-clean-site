import { z } from "astro/zod";

export const GitHubRepoSchema = z.object({
  stargazers_count: z.number(),
  forks_count: z.number(),
  open_issues_count: z.number(),
});

export const GitHubReleaseAssetSchema = z.object({
  name: z.string(),
  download_count: z.number(),
  browser_download_url: z.url(),
});

export const GitHubReleaseSchema = z.object({
  tag_name: z.string(),
  name: z.string(),
  published_at: z.string(),
  body: z
    .string()
    .nullable()
    .transform((v) => v ?? ""),
  html_url: z.url(),
  assets: z.array(GitHubReleaseAssetSchema).default([]),
});

export type GitHubRepo = z.infer<typeof GitHubRepoSchema>;
export type GitHubRelease = z.infer<typeof GitHubReleaseSchema>;
