// vite.config.js
//para usar esta configuración debemos hacer uso de " npm install vite-plugin-proxy --save-dev " habiendo echo esto proceder a configurar este archivo
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import proxy from 'vite-plugin-proxy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    proxy({
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }),
  ],
});