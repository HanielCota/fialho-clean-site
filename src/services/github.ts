import { GitHubRepoSchema, GitHubReleasesSchema } from "@/types/github";
import type { GitHubRepo, GitHubRelease } from "@/types/github";
import { SITE } from "@/config/site";

const BASE = "https://api.github.com/repos";
const HEADERS = { Accept: "application/vnd.github+json" };

let repoCache: GitHubRepo | null | undefined;
let releasesCache: GitHubRelease[] | null | undefined;

export async function getRepoStats(): Promise<GitHubRepo | null> {
  if (repoCache !== undefined) return repoCache;
  try {
    const res = await fetch(`${BASE}/${SITE.repo}`, { headers: HEADERS });
    if (!res.ok) {
      repoCache = null;
      return null;
    }
    const parsed = GitHubRepoSchema.safeParse(await res.json());
    repoCache = parsed.success ? parsed.data : null;
    return repoCache;
  } catch {
    repoCache = null;
    return null;
  }
}

export async function getReleases(): Promise<GitHubRelease[]> {
  if (releasesCache !== undefined) return releasesCache ?? [];
  try {
    const res = await fetch(`${BASE}/${SITE.repo}/releases?per_page=5`, { headers: HEADERS });
    if (!res.ok) {
      releasesCache = null;
      return [];
    }
    const parsed = GitHubReleasesSchema.safeParse(await res.json());
    releasesCache = parsed.success ? parsed.data : null;
    return releasesCache ?? [];
  } catch {
    releasesCache = null;
    return [];
  }
}

export function sumDownloads(releases: GitHubRelease[]): number {
  return releases
    .flatMap((release) => release.assets)
    .reduce((sum, asset) => sum + asset.download_count, 0);
}
