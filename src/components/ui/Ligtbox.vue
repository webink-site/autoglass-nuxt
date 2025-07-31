<template>
  <div
    v-if="showLightbox"
    class="fixed z-40 top-0 left-0 h-screen w-screen bg-black/30 backdrop-blur flex justify-center items-center"
    @click="showLightbox = false"
  >
    <div
      v-if="selectedPhoto !== null"
      class="h-auto sm:h-[86%] w-[90%] sm:w-auto relative"
      @click.stop
    >
      <img
        :src="images[selectedPhoto]"
        alt=""
        class="object-cover h-full w-auto mx-auto"
      >
      <button
        class="secondary-btn absolute right-4 top-4 sm:-right-14 !p-2"
        @click="showLightbox = false"
      >
        <X class="size-6 text-primary" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'

const { images } = defineProps<{ images: string[] }>()

const showLightbox = defineModel<boolean>('showLightbox')
const selectedPhoto = defineModel<null | number>('selectedPhoto', { default: null })
</script>

<style scoped>

</style>
