import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@common': path.resolve(__dirname, './src/common'),
      '@common/*': path.resolve(__dirname, './src/common'),
      '@features': path.resolve(__dirname, './src/features'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils/api': path.resolve(__dirname, './src/utils/api'),
      '@utils/constants': path.resolve(__dirname, './src/utils/constants'),
      '@utils/hooks': path.resolve(__dirname, './src/utils/hooks'),
      '@utils/helpers': path.resolve(__dirname, './src/utils/helpers'),
      '@utils/firebase': path.resolve(__dirname, './src/utils/firebase'),
      '@utils/contexts': path.resolve(__dirname, './src/utils/contexts')
    }
  }
});
