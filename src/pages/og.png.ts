import type { APIRoute } from "astro";
import { SITE } from "@/config/site";

const WIDTH = 1200;
const HEIGHT = 630;

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildSvg(): string {
  const cx = WIDTH / 2;

  return `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141414"/>
      <stop offset="100%" stop-color="#1c1c1c"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="320" fill="url(#glow)"/>

  <g transform="translate(${cx - 22}, 150)">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" transform="scale(2)"/>
  </g>

  <text x="${cx}" y="285" text-anchor="middle" fill="#f5f5f5" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="800" letter-spacing="-1.5">${escapeXml(SITE.name)}</text>

  <text x="${cx}" y="340" text-anchor="middle" fill="#b3b3b3" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="400">Limpeza real para o seu Windows.</text>

  <g transform="translate(${cx - 250}, 390)">
    <rect x="0" y="0" width="150" height="38" rx="19" fill="none" stroke="#333333"/>
    <text x="75" y="24" text-anchor="middle" fill="#999999" font-family="Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">OPEN SOURCE</text>

    <rect x="170" y="0" width="150" height="38" rx="19" fill="none" stroke="#333333"/>
    <text x="245" y="24" text-anchor="middle" fill="#999999" font-family="Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">GRATUITO</text>

    <rect x="340" y="0" width="150" height="38" rx="19" fill="none" stroke="#333333"/>
    <text x="415" y="24" text-anchor="middle" fill="#999999" font-family="Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">WINDOWS</text>
  </g>

  <text x="${cx}" y="530" text-anchor="middle" fill="#555555" font-family="Arial, sans-serif" font-size="17" font-weight="500">fialho-clean.dev</text>
</svg>`.trim();
}

export const GET: APIRoute = async () => {
  const svg = buildSvg();

  try {
    const sharp = (await import("sharp")).default;
    const png = await sharp(Buffer.from(svg)).png().toBuffer();

    return new Response(new Uint8Array(png), {
      headers: { "Content-Type": "image/png" },
    });
  } catch {
    return new Response(svg, {
      headers: { "Content-Type": "image/svg+xml" },
    });
  }
};
