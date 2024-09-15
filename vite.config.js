import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  define: {
    'process.env': {},
  },
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
    historyApiFallback: true,
  },
  manifest: {
          name: 'El Changarrito',
          short_name: 'El Changarrito',
          description: 'Michelada',
          theme_color: '#f74a89',
          icons: [
            {
              src: 'assets/icons/logo1024.png',
              sizes: '1024x1024',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: 'assets/icons/logo512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: 'assets/icons/logo384.png',
              sizes: '384x384',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: 'assets/icons/logo256.png',
              sizes: '256x256',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: 'assets/icons/logo192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: 'assets/icons/logo128.png',
              sizes: '128x128',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: 'assets/icons/logo96.png',
              sizes: '96x96',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: 'assets/icons/logo64.png',
              sizes: '64x64',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: 'assets/icons/logo32.png',
              sizes: '32x32',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: 'assets/icons/logo16.png',
              sizes: '16x16',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        }

  /* root: '',
  base: './' */
});
