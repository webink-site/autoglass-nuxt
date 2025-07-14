// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', 'nuxt-swiper'],
  components: ['~/src/components'],
  devtools: { enabled: true },
  css: ['~/src/assets/style.css'],
  dir: {
    assets: 'src/assets',
    public: 'public',
    plugins: 'src/plugins',
    pages: 'src/pages',
    layouts: 'src/layouts',
    middleware: 'src/middleware',
  },
  compatibilityDate: '2025-05-15',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
