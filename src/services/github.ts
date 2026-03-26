import { z } from "astro/zod";
import { GitHubRepoSchema, GitHubReleaseSchema } from "@/types/github";
import type { GitHubRepo, GitHubRelease } from "@/types/github";
import { SITE } from "@/config/site";

const REPO = SITE.repo;
const BASE = "https://api.github.com/repos";
const HEADERS = { Accept: "application/vnd.github+json" };

let repoCache: GitHubRepo | null | undefined;
let releasesCache: GitHubRelease[] | undefined;

export async function getRepoStats(): Promise<GitHubRepo | null> {
  if (repoCache !== undefined) return repoCache;
  try {
    const res = await fetch(`${BASE}/${REPO}`, { headers: HEADERS });
    if (!res.ok) {
      repoCache = null;
      return null;
    }
    repoCache = GitHubRepoSchema.parse(await res.json());
    return repoCache;
  } catch {
    repoCache = null;
    return null;
  }
}

export async function getReleases(): Promise<GitHubRelease[]> {
  if (releasesCache !== undefined) return releasesCache;
  try {
    const res = await fetch(`${BASE}/${REPO}/releases?per_page=5`, { headers: HEADERS });
    if (!res.ok) {
      releasesCache = [];
      return [];
    }
    releasesCache = z.array(GitHubReleaseSchema).parse(await res.json());
    return releasesCache;
  } catch {
    releasesCache = [];
    return [];
  }
}

export function sumDownloads(releases: GitHubRelease[]): number {
  return releases
    .flatMap((release) => release.assets)
    .reduce((sum, asset) => sum + asset.download_count, 0);
}
