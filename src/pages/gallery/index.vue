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
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div
            v-for="(item, idx) in images"
            :key="idx"
            class="cursor-pointer col-span-1"
            @click="showLightbox = true; selectedPhoto = idx"
          >
            <img
              class="object-cover rounded-xl w-full h-full"
              :src="item"
            >
          </div>
          <div
            v-for="(item, idx) in images"
            :key="idx"
            class="cursor-pointer col-span-1"
            @click="showLightbox = true; selectedPhoto = idx"
          >
            <img
              class="object-cover rounded-xl w-full h-full"
              :src="item"
            >
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
import img1 from '/img/gl.png'
import img2 from '/img/gl2.png'
import img3 from '/img/gl3.png'
import img4 from '/img/gl4.png'
import img5 from '/img/gl5.png'
import img6 from '/img/gl6.png'

const showLightbox = ref(false)
const selectedPhoto = ref<number | null>(null)

const images = [img1, img2, img3, img4, img5, img6]
</script>

<style scoped>

</style>
