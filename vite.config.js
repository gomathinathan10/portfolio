import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: false,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        certifications: resolve(__dirname, 'certifications.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        projects: resolve(__dirname, 'projects.html'),
        news: resolve(__dirname, 'news-classic.html'),
        contact: resolve(__dirname, 'contact.html'),
        notFound: resolve(__dirname, '404.html')
      }
    }
  }
});

