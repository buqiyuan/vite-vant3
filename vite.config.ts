import {defineConfig} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  // base: import.meta.env.BASE_URL,
  esbuild: {
    // target: 'es2015'
  },
  alias: {
    '@': resolve(__dirname, './src'),
  },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      },
      scss: {
        additionalData: `@import "src/styles/vw-rem/_util.scss";
                       @import "src/styles/vw-rem/_border.scss";`
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        // 免费的在线REST API
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    rollupOptions: {

    }
  }
})
