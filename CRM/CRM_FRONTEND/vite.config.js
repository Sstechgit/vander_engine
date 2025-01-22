// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Serve from the root
  build: {
    outDir: 'dist', // Output directory for build assets
    assetsDir: 'assets', // Directory for assets relative to outDir
  },
  plugins: [react()],
});
