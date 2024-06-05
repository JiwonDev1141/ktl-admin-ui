import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; //add this line
import markdownRawPlugin from 'vite-raw-plugin';
import { join } from 'path';

export default defineConfig({
  plugins: [
    vue(), // write this
    markdownRawPlugin({
      fileRegex: /\.md$/,
    }),
  ],
  define: {
    __isBrowser__: true,
  },
  resolve: {
    alias: {
      '@': join(process.cwd(), './web'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
});
