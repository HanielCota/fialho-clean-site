import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";

/** Rules enforcing project conventions (shared across .ts and .astro) */
const PROJECT_RULES = {
  // No process.env — use astro:env
  "no-restricted-syntax": [
    "error",
    {
      selector: "MemberExpression[object.name='process'][property.name='env']",
      message: "Use astro:env instead of process.env.",
    },
    {
      selector:
        "MemberExpression[object.type='MetaProperty'][object.meta.name='import'][object.property.name='meta'][property.name='env']",
      message: "Use astro:env instead of import.meta.env.",
    },
  ],
  // No direct zod — use astro/zod (Zod 4)
  "no-restricted-imports": [
    "error",
    { name: "zod", message: "Import Zod from 'astro/zod' instead." },
  ],
  "no-console": ["warn", { allow: ["warn", "error"] }],
};

export default tseslint.config(
  // Global ignores
  { ignores: ["dist/", ".astro/", "node_modules/"] },

  // Base rules
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  // ─── TypeScript files — strict + type-aware ───────────────────────────────
  {
    files: ["src/**/*.ts"],
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...PROJECT_RULES,

      // Type safety
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
      "@typescript-eslint/no-unnecessary-condition": "error",

      // Code quality
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/consistent-type-exports": [
        "error",
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],

      // Modern patterns
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",

      // Numbers in template literals are valid JS — allow them
      "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
    },
  },

  // ─── Astro files ──────────────────────────────────────────────────────────
  {
    files: ["src/**/*.astro"],
    rules: {
      ...PROJECT_RULES,
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
    },
  },
);
