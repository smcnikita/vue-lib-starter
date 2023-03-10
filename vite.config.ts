import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { defineConfig } from 'vite';

const nameLib = 'name-lib';

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: nameLib,
      formats: ['es'],
      // @ts-ignore
      fileName: (format) => `${nameLib}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
    emptyOutDir: false,
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
