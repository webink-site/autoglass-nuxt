<template>
  <section class="pt-[100px]">
    <div class="container">
      <h2
        v-gsap.entrance.slide-bottom
        class="font-halvar text-4xl text-white mb-4 text-center"
      >
        Галерея работ
      </h2>
      <p
        v-gsap.entrance.slide-bottom
        class="text-neutral-600 mb-10 text-center"
      >
        Работы, которыми мы гордимся
      </p>
    </div>

    <client-only>
      <Vue3Marquee
        v-if="imageItems.length > 0"
        :pause-on-hover="true"
        :duration="50"
      >
        <div
          v-for="(item, idx) in imageItems"
          :key="item.id"
          class="h-[26rem] sm:h-[40rem] sm:w-[26rem] shrink-0 mr-3 cursor-pointer"
          @click="showLightbox = true; selectedPhoto = idx"
        >
          <img
            :src="`${config.public.apiUrl}${item.imageUrl}`"
            class="h-full w-full object-cover rounded-2xl"
          >
        </div>
      </Vue3Marquee>
    </client-only>

    <teleport to="body">
      <transition name="fade-slide">
        <UiLigtbox
          v-model:show-lightbox="showLightbox"
          v-model:selected-photo="selectedPhoto"
          :images="images"
        />
      </transition>
    </teleport>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const showLightbox = ref(false)
const selectedPhoto = ref<number | null>(null)

interface IGalleryItem {
  id: number
  imageUrl: string
  fileType: 'IMAGE' | 'VIDEO'
}

interface IGalleryApiResponse {
  items: IGalleryItem[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

const { data } = await useFetch<IGalleryApiResponse>(`${config.public.apiUrl}/gallery`)

// Фильтруем только изображения для отображения
const imageItems = computed(() => {
  if (!data.value?.items) {
    return []
  }
  return data.value.items.filter(item => item.fileType === 'IMAGE')
})

// Формируем массив URL изображений для лайтбокса
const images = computed(() => {
  return imageItems.value.map(item => `${config.public.apiUrl}${item.imageUrl}`)
})
</script>

<style scoped>

</style>
