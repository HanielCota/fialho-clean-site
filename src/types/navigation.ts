import { z } from "astro/zod";

export const NavLinkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export const FooterLinkSchema = NavLinkSchema.extend({
  external: z.boolean().optional(),
});

export const FooterLinksSchema = z.object({
  projeto: z.array(NavLinkSchema).min(1),
  comunidade: z.array(FooterLinkSchema).min(1),
});

export type NavLink = z.infer<typeof NavLinkSchema>;
export type FooterLink = z.infer<typeof FooterLinkSchema>;
export type FooterLinks = z.infer<typeof FooterLinksSchema>;
