import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for the build
  },
  base: './', // If deploying to the root directory, leave this as './'
  // If deploying to a subdirectory, change this to: base: '/your-repository-name/'
});

