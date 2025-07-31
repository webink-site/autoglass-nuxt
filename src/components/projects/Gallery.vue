<template>
  <section>
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="col-span-1 grid grid-cols-8 gap-4">
          <div class="col-span-full sm:col-span-7 sm:order-2">
            <div class="h-[16rem] sm:h-full bg-dark rounded-xl relative overflow-hidden">
              <button
                class="secondary-btn !rounded-lg !p-1 z-30 absolute top-1/2 -translate-y-1/2 left-4"
                @click="changeSlide(-1)"
              >
                <MoveLeft class="size-5" />
              </button>
              <button
                class="secondary-btn !rounded-lg !p-1 z-30 absolute top-1/2 -translate-y-1/2 right-4"
                @click="changeSlide(1)"
              >
                <MoveRight class="size-5" />
              </button>
              <img
                :src="images[selectedPhoto]"
                class="h-full w-auto absolute top-0 left-1/2 -translate-x-1/2 z-20"
              >
              <img
                :src="images[selectedPhoto]"
                class="h-full w-full absolute top-0 left-0 object-cover blur-sm scale-105  z-10"
              >
            </div>
          </div>
          <div class="col-span-full sm:col-span-1 flex sm:flex-col justify-center gap-4 sm:order-1">
            <img
              v-for="(img, idx) in images"
              :key="idx"
              :src="img"
              class="aspect-video w-12 flex-wrap sm:w-full object-cover rounded-lg cursor-pointer transition-all"
              :class="{ 'border-[3px]  border-primary': selectedPhoto === idx }"
              @click="selectedPhoto = idx"
            >
          </div>
        </div>
        <div class="col-span-1 py-12">
          <h2 class="font-halvar text-4xl text-white mb-10">
            Полировка Cherry TiggoProMax
          </h2>
          <p class="text-white mb-6">
            Для полировки Cherry Tiggo Pro Max была выполнена комплексная мойка кузова с применением бесконтактной химии, удалены битумные и металлические загрязнения, поверхность обезжирена и тщательно осмотрена на наличие дефектов.
            <br><br>
            Затем проведена двухэтапная машинная полировка — сначала абразивная, затем финишная, после чего удалены остатки полировочных паст. Для защиты кузова нанесён керамический состав, а пластиковые элементы и фары дополнительно отполированы и обработаны. В завершение проведена финальная проверка качества выполненных работ.
          </p>
          <a href="tel:+79216376704">
            <button class="secondary-btn !px-10">
              Позвонить нам
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MoveLeft, MoveRight } from 'lucide-vue-next'
import img1 from '/img/gl.png'
import img2 from '/img/gl2.png'
import img3 from '/img/gl3.png'
import img4 from '/img/gl4.png'
import img5 from '/img/gl5.png'
import img6 from '/img/gl6.png'

const selectedPhoto = ref<number>(0)

const images = [img1, img2, img3, img4, img5, img6]

const changeSlide = (count: number) => {
  if (selectedPhoto.value === 0 && count < 0) {
    selectedPhoto.value = images.length - 1
  }
  else if (selectedPhoto.value === images.length - 1 && count > 0) {
    selectedPhoto.value = 0
  }
  else {
    selectedPhoto.value += count
  }
}
</script>

<style scoped>

</style>
