<template>
  <div>
    <section class="pt-12 sm:pt-[100px]">
      <div class="container">
        <h2 class="font-halvar text-4xl text-white mb-4 font-bold">
          Галерея работ
        </h2>
        <p class="text-neutral-600 mb-10">
          Работы, которыми мы гордимся
        </p>
        <div
          v-if="allItems.length > 0"
          class="grid grid-cols-2 sm:grid-cols-5 gap-3"
        >
          <div
            v-for="(item, idx) in imageItems"
            :key="item.id"
            class="cursor-pointer col-span-1"
            @click="showLightbox = true; selectedPhoto = idx"
          >
            <img
              class="object-cover rounded-xl w-full h-full"
              :src="`${config.public.apiUrl}${item.imageUrl}`"
            >
          </div>
          <div
            v-if="pagination.totalPages > 1 && activePage < pagination.totalPages"
            class="col-span-2 sm:col-span-5 text-center"
          >
            <button
              class="mt-4 secondary-btn !px-14"
              :disabled="loading"
              @click="changePage"
            >
              {{ loading ? 'Загрузка...' : 'Загрузить больше' }}
            </button>
          </div>
        </div>
      </div>
    </section>
    <teleport to="body">
      <transition name="fade-slide">
        <UiLigtbox
          v-model:show-lightbox="showLightbox"
          v-model:selected-photo="selectedPhoto"
          :images="images"
        />
      </transition>
    </teleport>
    <HomeVoprosy />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const showLightbox = ref(false)
const selectedPhoto = ref<number | null>(null)

export interface IGalleryItem {
  id: number
  imageUrl: string
  fileType: 'IMAGE' | 'VIDEO'
}

export interface IGalleryApiResponse {
  items: IGalleryItem[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

const activePage = ref(1)
const loading = ref(false)
const allItems = ref<IGalleryItem[]>([])
const pagination = ref({
  page: 1,
  limit: 0,
  total: 0,
  totalPages: 1,
})

// Загружаем первую страницу
const { data } = await useFetch<IGalleryApiResponse>(
  `${config.public.apiUrl}/gallery?page=${activePage.value}`,
  { server: false },
)

// Инициализируем данные при первой загрузке
if (data.value) {
  allItems.value = [...data.value.items]
  pagination.value = { ...data.value.pagination }
}

// Загрузка дополнительных страниц
const changePage = async () => {
  if (loading.value || activePage.value >= pagination.value.totalPages) {
    return
  }

  loading.value = true
  activePage.value += 1

  try {
    const response = await fetch(`${config.public.apiUrl}/gallery?page=${activePage.value}`)
    if (!response.ok) {
      throw new Error(`Ошибка загрузки: ${response.status}`)
    }

    const newData: IGalleryApiResponse = await response.json()

    // Добавляем новые элементы к существующим
    allItems.value = [...allItems.value, ...newData.items]
    pagination.value = { ...newData.pagination }
  }
  catch (error) {
    console.error('Ошибка при загрузке страницы:', error)
    // Откатываем страницу при ошибке
    activePage.value -= 1
  }
  finally {
    loading.value = false
  }
}

// Фильтруем только изображения для отображения
const imageItems = computed(() => {
  return allItems.value.filter(item => item.fileType === 'IMAGE')
})

// Формируем массив URL изображений для лайтбокса
const images = computed(() => {
  return imageItems.value.map(item => `${config.public.apiUrl}${item.imageUrl}`)
})
</script>

<style scoped>

</style>
