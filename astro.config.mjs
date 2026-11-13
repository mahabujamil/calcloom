import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain calcloom.com (GitHub Pages, DNS at Namecheap).
export default defineConfig({
  site: 'https://calcloom.com',
  base: '/',
  integrations: [
    sitemap({ filter: (page) => !/\/admin\/$/.test(page), i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar', fr: 'fr', es: 'es' } } }),
  ],
});
