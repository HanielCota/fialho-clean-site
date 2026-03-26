# Contribuindo com o FialhoClean Landing Page

Obrigado por querer contribuir! Aqui esta o que voce precisa saber.

## Setup local

```bash
# Clone o repositorio
git clone https://github.com/HanielCota/fialho-clean-landing-page.git
cd fialho-clean-landing-page

# Instale as dependencias
npm install

# Rode o dev server
npm run dev
```

## Scripts disponiveis

| Script | O que faz |
|---|---|
| `npm run dev` | Dev server com hot reload |
| `npm run build` | Build de producao |
| `npm run preview` | Preview do build local |
| `npm run lint` | Verifica erros de lint |
| `npm run lint:fix` | Corrige erros de lint |
| `npm run format` | Formata todos os arquivos |
| `npm run format:check` | Verifica formatacao |
| `npm run check` | Type check com Astro |

## Convencoes

- **Commits**: mensagens descritivas em ingles ou portugues
- **Branches**: `feat/nome`, `fix/nome`, `refactor/nome`
- **Tipos**: todo dado validado com Zod em `src/types/`
- **Constantes**: conteudo em `src/constants/` com `.parse()`
- **CSS**: design tokens em `src/styles/global.css`, estilos scoped nos componentes
- **Formatacao**: Prettier roda automaticamente no pre-commit via Husky

## Antes de abrir um PR

```bash
npm run lint
npm run format:check
npm run build
```

Os tres precisam passar sem erros. O CI verifica automaticamente.
