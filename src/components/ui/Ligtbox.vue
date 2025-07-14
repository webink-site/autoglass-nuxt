<template>
  <div
    v-if="showLightbox"
    class="fixed z-40 top-0 left-0 h-screen w-screen bg-black/30 backdrop-blur flex justify-center items-center"
    @click="showLightbox = false"
  >
    <div
      class="h-[86%] relative"
      @click.stop
    >
      <img
        src="/img/gl.png"
        alt=""
        class="object-cover h-full w-auto mx-auto"
      >
      <button
        class="secondary-btn absolute top-0 -right-14 !p-2"
        @click="showLightbox = false"
      >
        <X class="size-6 text-primary" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'

const showLightbox = defineModel<boolean>('showLightbox')
</script>

<style scoped>

</style>
