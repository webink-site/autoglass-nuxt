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
</script>

<style scoped>

</style>
