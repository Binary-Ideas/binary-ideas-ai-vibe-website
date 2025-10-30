import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://binaryideas.ai',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      customPages: [
        'https://binaryideas.ai/',
        'https://binaryideas.ai/about/',
        'https://binaryideas.ai/contact/',
      ],
      serialize(item) {
        if (item.url === 'https://binaryideas.ai/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        }
        if (item.url.includes('/services/')) {
          item.changefreq = 'monthly';
          item.priority = 0.9;
        }
        return item;
      }
    })
  ]
});
