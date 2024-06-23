import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; //add this line
import markdownRawPlugin from 'vite-raw-plugin';
import { join, resolve } from 'path';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    vue(), // write this
    markdownRawPlugin({
      fileRegex: /\.md$/,
    }),
    viteCompression(),
  ],
  define: {
    __isBrowser__: true,
  },
  resolve: {
    alias: {
      '@': join(process.cwd(), './src'),
      '@cesium/widgets': 'https://esm.sh/@cesium/widgets@4.1.0',
      '@cesium/engine': 'https://esm.sh/@cesium/engine@5.0.0',
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
});
