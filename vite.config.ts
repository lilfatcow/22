import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled', '@mui/material']
  },
  resolve: {
    dedupe: ['react', 'react-dom']
  },
  server: {
    host: true
  }
});