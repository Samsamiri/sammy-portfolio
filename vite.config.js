import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/project_3D_developer_portfolio/',
  build: {
    outDir: 'build',
  },
});