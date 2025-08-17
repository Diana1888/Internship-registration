import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: "/Internship-registration/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // <-- добавляем алиас "@"
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
});