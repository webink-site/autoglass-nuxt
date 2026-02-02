<template>
  <div>
    <div class="space-y-6 mb-6">
      <button
        class="secondary-btn !rounded-lg !p-1"
        @click="emit('previousSlide')"
      >
        <MoveLeft class="size-4" />
      </button>
      <h3 class="font-halvar text-lg text-white leading-5">
        Ориентировочная стоимость
      </h3>
    </div>
    <div class="space-y-4">
      <div
        v-for="(item, idx) in filteredElements"
        :key="idx"
        class="flex justify-between items-center text-white"
      >
        <p>{{ item.title }}</p>
        <p>{{ formatPrice(item.price) }} ₽</p>
      </div>
    </div>
    <hr class="my-4 border-neutral-800">
    <p class="font-halvar text-lg text-neutral-600 leading-5">
      {{ filteredElements.length }} услуг
    </p>
    <div class="font-halvar text-lg text-white leading-5 justify-between flex items-center mt-4">
      <span>Итоговая стоимость</span>
      <span>{{ formatPrice(totalPrice) }} ₽</span>
    </div>
    <button
      class="w-full primary-btn mb-2.5 mt-6"
      @click="emit('changeSlide')"
    >
      Следующий шаг
    </button>
    <p class="text-white text-center">
      <span class="text-primary">2</span> из 3
    </p>
  </div>
</template>

<script setup lang="ts">
import { MoveLeft } from 'lucide-vue-next'

const emit = defineEmits(['changeSlide', 'previousSlide'])

const selectedElements = defineModel<number[]>('selectedElements', { default: [] })

type Props = {
  elements: { title: string, id: number, price: number }[]
}
const { elements } = defineProps<Props>()

const filteredElements = computed(() =>
  elements.filter(el => selectedElements.value.includes(el.id)),
)

const totalPrice = computed(() =>
  filteredElements.value.reduce((a, b) => a + b.price, 0),
)

// Форматируем цену с пробелами
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
</script>

<style scoped>

</style>
