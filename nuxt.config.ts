// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    'nuxt-swiper',
    'v-gsap-nuxt',
    '@pinia/nuxt',
  ],
  components: ['~/src/components'],
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      // Дефолтные OG для главной и на случай, когда useRequestURL() на "/" не даёт origin (пререндер/кэш)
      ...(process.env.NUXT_PUBLIC_SITE_URL && {
        meta: [
          { property: 'og:image', content: `${process.env.NUXT_PUBLIC_SITE_URL}/img/ogImg.webp` },
          { property: 'og:image:secure_url', content: `${process.env.NUXT_PUBLIC_SITE_URL}/img/ogImg.webp` },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Детейлинг центр №1 в Ленинградской области' },
          { property: 'og:description', content: 'Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое' },
        ],
      }),
    },
  },
  css: ['~/src/assets/style.css'],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || process.env.API_URL || 'https://api.glassgtn.ru',
      /** Абсолютный URL сайта для og:image и og:url (например https://glassgtn.ru). Рекомендуется задать в продакшене. */
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
    },
  },
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
