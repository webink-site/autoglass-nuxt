<template>
  <div
    v-if="data"
    class="sm:mt-12"
  >
    <ServicesHero
      :title="data.name"
      :header-image="data.cardImage?.imageUrl ?? null"
      :description="data.description"
    />
    <ServicesAdvantages :advantages="data.advantages" />
    <ServicesAbout :long-description="data.longDescription" />
    <ServicesPrices :prices="data.prices" />
    <HomeGallery />
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
  headerImage?: { imageUrl: string } | null
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
</script>

<style scoped>

</style>
