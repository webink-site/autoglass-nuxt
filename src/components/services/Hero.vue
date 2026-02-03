<template>
  <section>
    <div class="sm:container mx-auto">
      <div class="sm:glass-border-gradient sm:p-[1px]">
        <div class="rounded-b-2xl sm:rounded-2xl bg-dark px-4 py-8 sm:p-10 flex flex-col justify-between overflow-hidden relative">
          <div class="absolute top-0 left-0 h-full w-full bg-black/50 transition-all z-10" />
          <img
            :src="`${config.public.apiUrl}${headerImage}`"
            alt=""
            class="video-bg object-cover"
          >
          <div class="relative z-20">
            <h1 class="text-white font-halvar text-4xl mb-6 uppercase">
              {{ title }}
            </h1>
            <p class="text-white mb-14 sm:mb-6 md:max-w-1/2">
              {{ description }}
            </p>
          </div>

          <div class="sm:flex gap-4 relative z-20 space-y-4 sm:space-y-0 md:max-w-1/2 flex-wrap">
            <button
              class="primary-btn !px-10 w-full sm:w-fit relative"
              @click="emit('scrollToPrices')"
            >
              Узнать цены
            </button>
            <!-- <a href="tel:+79216376704">
              <button class="secondary-btn !px-10 w-full sm:w-fit relative">
                Позвонить нам
              </button>
            </a> -->
            <button
              v-if="route.params.id === 'oklejka'"
              class="secondary-btn !px-10 w-full sm:w-fit relative"
              @click="uiStore.handleCalcDialog(true)"
            >
              Рассчитать стоимость оклейки
            </button>
            <button
              v-else
              v-gsap.entrance.slide-bottom.delay-600
              class="secondary-btn !px-10 w-full sm:w-fit relative"
              @click="uiStore.handleServiceOrderDialog(true, title)"
            >
              Отправить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUiStore } from '~/src/stores/ui'

const uiStore = useUiStore()
const emit = defineEmits(['scrollToPrices'])
const route = useRoute()

const config = useRuntimeConfig()
const { title, description, headerImage } = defineProps<{
  title: string
  headerImage: string | null
  description: string
}>()
</script>

<style scoped>
.video-bg {
    position: absolute !important;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}
</style>
