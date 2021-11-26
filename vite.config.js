import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

const argv = process.argv.splice(2);

const isPro = argv[0] !== "dev"

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  mode: isPro ? 'production' : 'development',
  root: process.cwd(),
  plugins: [vue(), vueJsx()],
  build: {
    outDir: 'demo'
  },
  resolve: {
    alias: [
      { find: '~@two-ui', replacement: '@two-ui' },
    ]
  }
})
