import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: { 'process.env': {} }, // чтобы не упасть на "process is not defined"
});