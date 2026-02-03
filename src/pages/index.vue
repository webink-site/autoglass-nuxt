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

const baseUrl = (useRuntimeConfig().public.siteUrl as string) || useSiteUrl()

useSeoMeta({
  title: 'Детейлинг центр №1 в Ленинградской области',
  ogTitle: 'Детейлинг центр №1 в Ленинградской области',
  description: 'Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое',
  ogDescription: 'Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое',
  ogType: 'website',
  ogImage: baseUrl ? `${baseUrl}/img/ogImg.webp` : '/img/ogImg.webp',
  ogUrl: baseUrl || undefined,
})
</script>

<style scoped>

</style>
