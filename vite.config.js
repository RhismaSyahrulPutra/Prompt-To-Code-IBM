import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Prompt-To-Code Project',
        short_name: 'PTC',
        description:
          'Proyek web yang memanfaatkan IBM Granite dari IBM sebagai bagian dari pelaksanaan kegiatan Capstone Hacktiv8.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/ptc-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/ptc-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/ptc-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
