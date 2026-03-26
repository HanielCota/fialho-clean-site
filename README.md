# FialhoClean Site

Landing page do [FialhoClean](https://github.com/HanielCota/FialhoClean) — ferramenta open source que remove bloatware, limpa registro e otimiza o Windows.

**[fialho-clean.dev](https://fialho-clean.dev)**

## Stack

- [Astro 6](https://astro.build) — static site generation
- [Tailwind CSS 4](https://tailwindcss.com) — design tokens via `@theme`
- [TypeScript](https://www.typescriptlang.org) — strictest mode, zero `any`
- [Zod](https://zod.dev) — runtime validation em todos os dados

## Rodando localmente

```bash
git clone https://github.com/HanielCota/fialho-clean-site.git
cd fialho-clean-site
npm install
npm run dev
```

Abre em `http://localhost:4321`.

## Scripts

| Script | O que faz |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Build de producao |
| `npm run preview` | Preview do build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npm run check` | Type check |
| `npm test` | Type check + lint |

## Estrutura

```
src/
  config/        # Configuracao do site (URLs, metadata)
  types/         # Schemas Zod + tipos TypeScript
  constants/     # Conteudo estatico validado
  services/      # GitHub API (fetch + cache)
  utils/         # Funcoes de formatacao
  components/
    ui/          # Button, Card, Section, SectionHeader, Icons
    layout/      # Navbar, MobileMenu, Footer
    sections/    # Hero, Stats, Showcase, Features, Comparison,
                 # HowItWorks, Security, Changelog, Faq, Download
    sections/showcase/  # Mock UI do app (panels, sidebar, titlebar)
  layouts/       # BaseLayout (SEO, fonts, JSON-LD)
  pages/         # index, 404, privacidade, og.png
  styles/        # Design tokens + utilitarios globais
```

## Qualidade

- **Seguranca**: CSP, HSTS, X-Frame-Options, sanitizacao de dados externos
- **Acessibilidade**: skip-link, focus indicators, ARIA tabs, `prefers-reduced-motion`, screen reader labels
- **Performance**: 2.2 KB JS, imagens WebP, fontes woff2, cache de API, grain PNG pre-rasterizado
- **CI**: lint + format + typecheck + build em cada push/PR

## Deploy

Configurado para [Netlify](https://www.netlify.com). Security headers em `netlify.toml`.

## Licenca

[MIT](LICENSE)
