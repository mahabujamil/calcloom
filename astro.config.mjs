import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Free GitHub address for now. When a custom domain is bought, set site to it and base to '/'.
export default defineConfig({
  site: 'https://mahabujamil.github.io',
  base: '/calcloom',
  integrations: [
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } } }),
  ],
});
