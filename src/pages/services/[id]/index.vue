<template>
  <div
    v-if="data"
    class="sm:mt-12"
  >
    <ServicesHero
      :title="data.name"
      :header-image="data.cardImage?.imageUrl ?? null"
      :description="data.description"
      @scroll-to-prices="scrollToPrices"
    />
    <ServicesAdvantages :advantages="data.advantages" />
    <ServicesAbout :long-description="data.longDescription" />
    <ServicesPrices :prices="data.prices" />
    <HomeGallery />
    <HomeVoprosy />
    <teleport
      v-if="data.videoId && data.video"
      to="body"
    >
      <ServicesFixedReels />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import type { ServicePrice } from '~/src/stores/services'
import { useSiteUrl } from '~/src/composables/useSiteUrl'

const route = useRoute()
const id = route.params.id

interface Service {
  id: number
  name: string
  description: string
  advantages: string[]
  longDescription: string
  cardImageId: number | null
  headerImageId: number | null
  headerImage?: { imageUrl: string } | null
  video?: { videoUrl: string } | null
  videoId: number | null
  cardImage?: { imageUrl: string } | null
  createdAt: string
  updatedAt: string
  prices?: ServicePrice[]
  galleryItems: string[]
}

const config = useRuntimeConfig()
const { data, error } = await useFetch<Service>(`${config.public.apiUrl}/services/${id}`, { server: true })

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Service not found',
  })
}

const scrollToPrices = () => {
  useGSAP().to(window, { scrollTo: '#prices', duration: 0.6, ease: 'power2.out' })
}

const baseUrl = (config.public.siteUrl as string) || useSiteUrl()

useSeoMeta({
  title: () => `${data.value?.name} - Услуги детейлинг центра Autoglass в Гатчине`,
  ogTitle: () => `${data.value?.name} - Услуги детейлинг центра Autoglass в Гатчине`,
  description: () => `${data.value?.description}`,
  ogDescription: () => `${data.value?.description}`,
  ogType: 'website',
  ogImage: () => {
    const img = data.value?.cardImage?.imageUrl
    return img ? `${config.public.apiUrl}${img}` : (baseUrl ? `${baseUrl}/img/ogImg.webp` : '/img/ogImg.webp')
  },
  ogUrl: () => (baseUrl && route.path ? `${baseUrl}${route.path}` : undefined),
})
</script>

<style scoped>

</style>
