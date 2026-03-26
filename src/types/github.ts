import { z } from "astro/zod";

export const GitHubRepoSchema = z.object({
  stargazers_count: z.number().int().min(0),
  forks_count: z.number().int().min(0),
  open_issues_count: z.number().int().min(0),
});

export const GitHubReleaseAssetSchema = z.object({
  name: z.string().min(1),
  download_count: z.number().int().min(0),
  browser_download_url: z.url(),
});

export const GitHubReleaseSchema = z.object({
  tag_name: z.string().min(1),
  name: z.string().min(1),
  published_at: z.iso.datetime(),
  body: z
    .string()
    .nullable()
    .transform((v) => v ?? ""),
  html_url: z.url(),
  assets: z.array(GitHubReleaseAssetSchema).default([]),
});

export const GitHubReleasesSchema = z.array(GitHubReleaseSchema);

export type GitHubRepo = z.infer<typeof GitHubRepoSchema>;
export type GitHubRelease = z.infer<typeof GitHubReleaseSchema>;
