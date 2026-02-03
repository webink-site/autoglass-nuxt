<template>
  <div>
    <HomeServices />
    <HomeVoprosy />
  </div>
</template>

<script setup lang="ts">
import { useSiteUrl } from '~/src/composables/useSiteUrl'

const baseUrl = (useRuntimeConfig().public.siteUrl as string) || useSiteUrl()

useSeoMeta({
  title: 'Услуги детейлинг центра Autoglass в Гатчине',
  ogTitle: 'Услуги детейлинг центра Autoglass в Гатчине',
  description: 'Профессиональные услуги детейлинга в Гатчине: полировка кузова, химчистка салона, защита лакокрасочного покрытия, оклейка плёнкой и уход за автомобилем в Autoglass.',
  ogDescription: 'Полный спектр услуг детейлинга в Autoglass: восстановление блеска кузова, защита авто, химчистка, оклейка защитными плёнками и профессиональный уход за автомобилем.',
  ogType: 'website',
  ogImage: baseUrl ? `${baseUrl}/img/ogImg.webp` : '/img/ogImg.webp',
  ogUrl: baseUrl ? `${baseUrl}/services` : undefined,
})
</script>

<style scoped>

</style>
