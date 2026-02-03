<template>
  <div class="sm:mt-12">
    <HomeHero />
    <HomeAdvantages />
    <HomeServices />
    <HomeGallery />
    <HomeVoprosy />
  </div>
</template>

<script setup lang="ts">
import { useSiteUrl } from '~/src/composables/useSiteUrl'

const config = useRuntimeConfig()
const baseUrl = (config.public.siteUrl as string) || useSiteUrl()

// Не задаём ogImage относительным путём при пустом baseUrl — иначе перезапишем дефолт из nuxt.config
useSeoMeta({
  title: 'Детейлинг центр №1 в Ленинградской области',
  ogTitle: 'Детейлинг центр №1 в Ленинградской области',
  description: 'Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое',
  ogDescription: 'Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое',
  ogType: 'website',
  ...(baseUrl && {
    ogImage: `${baseUrl}/img/ogImg.webp`,
    ogUrl: baseUrl,
  }),
})
</script>

<style scoped>

</style>
