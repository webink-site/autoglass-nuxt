<template>
  <div
    v-if="data"
    class="sm:mt-12"
  >
    <ServicesHero
      :title="data.name"
      :description="data.description"
    />
    <ServicesAdvantages :advantages="data.advantages" />
    <ServicesAbout :long-description="data.longDescription" />
    <ServicesPrices :prices="data.prices" />
    <HomeGallery :gallery="data.galleryItems" />
    <HomeVoprosy />
    <teleport to="body">
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
  videoId: number | null
  cardImage?: string
  createdAt: string
  updatedAt: string
  prices?: ServicePrice[]
  galleryItems: string[]
}

const config = useRuntimeConfig()
const { data, error } = await useFetch<Service>(`${config.public.apiUrl}/services/${id}`, { server: false })

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Service not found',
  })
}
</script>

<style scoped>

</style>
