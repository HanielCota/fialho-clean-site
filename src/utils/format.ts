export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(n);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const BULLET_PREFIX = /^[-*•]\s*/;
const BOLD_MARKDOWN = /\*\*(.*?)\*\*/g;

export function extractBullets(body: string, max = 4): string[] {
  return body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => BULLET_PREFIX.test(line))
    .slice(0, max)
    .map((line) => line.replace(BULLET_PREFIX, ""))
    .map((line) => line.replace(BOLD_MARKDOWN, "$1"));
}
