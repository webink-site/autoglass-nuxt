<template>
  <section class="pt-[100px]">
    <div class="container">
      <h2 class="font-halvar text-4xl text-white mb-4 text-center">
        Галерея работ
      </h2>
      <p class="text-neutral-600 mb-10 text-center">
        Работы, которыми мы гордимся
      </p>
    </div>

    <Vue3Marquee
      :pause-on-hover="true"
      :duration="50"
    >
      <div
        v-for="(item, idx) in images"
        :key="idx"
        class="h-[40rem] w-[26rem] shrink-0 mr-3 cursor-pointer"
        @click="showLightbox = true; selectedPhoto = idx"
      >
        <img
          :src="item"
          class="h-full w-full object-cover"
        >
      </div>
    </Vue3Marquee>
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
