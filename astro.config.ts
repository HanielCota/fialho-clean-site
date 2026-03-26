import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://fialho-clean.dev",
  trailingSlash: "never",
  prefetch: true,

  build: {
    inlineStylesheets: "auto",
  },

  security: {
    csp: true,
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Outfit",
      cssVariable: "--font-outfit",
      weights: [600, 700, 800],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Plus Jakarta Sans",
      cssVariable: "--font-jakarta",
      weights: [400, 500, 600],
      styles: ["normal"],
    },
  ],

  vite: {
    // @ts-expect-error — @tailwindcss/vite types conflict with Vite plugin types
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
