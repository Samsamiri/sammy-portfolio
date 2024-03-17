import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/project_3D_developer_portfolio/', // Remplacez <repo> par le nom de votre dépôt GitHub
  build: {
    outDir: 'build', // Spécifiez le répertoire de sortie souhaité ici
  },
});