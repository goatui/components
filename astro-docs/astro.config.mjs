import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    devToolbar: { enabled: false },
    site: 'https://goatui.com',
    compressHTML: false,
    server: { port: 4000, host: true },
    integrations: [sitemap()],
  },
);
