import { z } from "astro/zod";
import { NavLinkSchema, FooterLinksSchema } from "@/types/navigation";
import { SITE } from "@/config/site";

export const NAV_LINKS = z.array(NavLinkSchema).parse([
  { label: "Recursos", href: "#recursos" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Segurança", href: "#seguranca" },
  { label: "FAQ", href: "#faq" },
]);

export const FOOTER_LINKS = FooterLinksSchema.parse({
  projeto: [
    { label: "Recursos", href: "#recursos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "FAQ", href: "#faq" },
    { label: "Download", href: "#download" },
    { label: "Privacidade", href: "/privacidade" },
  ],
  comunidade: [
    { label: "GitHub", href: SITE.github.repo, external: true },
    { label: "Issues", href: SITE.github.issues, external: true },
    { label: "Releases", href: SITE.github.releases, external: true },
  ],
});
