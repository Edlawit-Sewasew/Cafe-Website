import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // opens http://localhost:5173 in your default system browser (Chrome, Edge, etc.)
  },
});
