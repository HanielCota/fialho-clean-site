<p align="center">
  <img src="public/favicon.svg" width="64" alt="Fialho Optimizer logo" />
</p>

<h1 align="center">Fialho Optimizer — Landing Page</h1>

<p align="center">
  Site oficial do <a href="https://github.com/HanielCota/FialhoClean">Fialho Optimizer</a> — ferramenta open source que remove bloatware, limpa registro e otimiza o Windows.
</p>

<p align="center">
  <a href="https://fialho-clean.dev"><strong>fialho-clean.dev →</strong></a>
</p>

<br />

<p align="center">
  <img src="https://img.shields.io/badge/Astro-6-BC52EE?style=flat-square&logo=astro&logoColor=white" alt="Astro 6" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Zod-runtime_validation-3E67B1?style=flat-square&logo=zod&logoColor=white" alt="Zod" />
  <img src="https://img.shields.io/badge/Netlify-deployed-00C7B7?style=flat-square&logo=netlify&logoColor=white" alt="Netlify" />
  <img src="https://img.shields.io/badge/license-MIT-22c55e?style=flat-square" alt="MIT License" />
</p>

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| [Astro](https://astro.build) | 6 | Static site generation |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Design tokens via `@theme` |
| [TypeScript](https://www.typescriptlang.org) | strictest | Zero `any`, type-safe em todo o projeto |
| [Zod](https://zod.dev) | — | Validação em runtime de todos os dados externos |

---

## Rodando localmente

```bash
git clone https://github.com/HanielCota/fialho-clean-site.git
cd fialho-clean-site
npm install
npm run dev
```

Abre em `http://localhost:4321`.

---

## Scripts

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Preview do build gerado |
| `npm run lint` | Roda o ESLint |
| `npm run format` | Formata com Prettier |
| `npm run check` | Type check via Astro |
| `npm test` | Type check + lint (CI) |

---

## Estrutura

```
src/
├── config/          # URLs, metadata e configurações do site
├── types/           # Schemas Zod + tipos TypeScript
├── constants/       # Conteúdo estático tipado e validado
├── services/        # GitHub API (fetch + cache)
├── utils/           # Funções de formatação
├── components/
│   ├── ui/          # Button, Card, Section, SectionHeader, Icons
│   ├── layout/      # Navbar, MobileMenu, Footer
│   └── sections/    # Hero, Stats, Showcase, Features, Comparison,
│                    # HowItWorks, Security, Changelog, Faq, Download
│       └── showcase/  # Mock UI do app (panels, sidebar, titlebar)
├── layouts/         # BaseLayout (SEO, fonts, JSON-LD)
├── pages/           # index, 404, privacidade, og.png
└── styles/          # Design tokens + utilitários globais
```

---

## Qualidade

- **Segurança** — CSP, HSTS, X-Frame-Options, sanitização de dados externos
- **Acessibilidade** — skip-link, focus indicators, ARIA tabs, `prefers-reduced-motion`, screen reader labels
- **Performance** — 2.2 KB JS, imagens WebP, fontes woff2, cache de API, grain PNG pré-rasterizado
- **CI** — lint + format + typecheck + build em cada push/PR

---

## Deploy

Configurado para [Netlify](https://www.netlify.com). Security headers definidos em `netlify.toml`.

---

## Licença

[MIT](LICENSE) © [Haniel Fialho](https://github.com/HanielCota)
