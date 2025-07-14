<template>
  <div class="space-y-6">
    <p class="text-white mb-4">
      Укажите тип ТС
    </p>
    <div class="grid grid-cols-3 gap-2">
      <div
        v-for="(item, idx) in types"
        :key="idx"
        class="glass-border-gradient p-2 text-center space-y-2"
      >
        <img
          :src="item.icon"
          alt=""
          class="mx-auto"
        >
        <p class="text-sm text-white">
          {{ item.title }}
        </p>
      </div>
    </div>
    <p class="text-white mb-4">
      Пакет оклейки
    </p>
    <div class="flex gap-2 flex-wrap">
      <button
        v-for="(item, idx) in packages"
        :key="idx"
        class="outlined-btn"
      >
        {{ item.title }}
      </button>
    </div>
    <p class="text-white mb-4">
      Выберите элемент
    </p>
    <div class="flex gap-2 flex-wrap">
      <button
        v-for="(item, idx) in elements"
        :key="idx"
        class="outlined-btn"
      >
        {{ item }}
      </button>
    </div>
    <button
      class="w-full primary-btn mb-2.5"
      @click="emit('changeSlide')"
    >
      Следующий шаг
    </button>
    <p class="text-white text-center">
      <span class="text-primary">1</span> из 3
    </p>
  </div>
</template>

<script setup lang="ts">
import ic1 from '/img/icons/car.svg'
import ic2 from '/img/icons/jeep.svg'
import ic3 from '/img/icons/business.svg'

const emit = defineEmits(['changeSlide'])

const types = [
  {
    title: 'Легковой',
    icon: ic1,
  },
  {
    title: 'Кроссовер',
    icon: ic2,
  },
  {
    title: 'Бизнес-класс',
    icon: ic3,
  },
]

const packages = [
  {
    title: 'Пакет Премиум',
    elements: [],
  },
  {
    title: 'Полная перетяжка',
    elements: [],
  },
]

const elements = [
  'Капот',
  'Крылья передние',
  'Бампер передний',
  'Бампер задний',
  'Фары передние',
  'Зеркала',
  'Двери передние',
  'Двери задние',
  'Крыша',
  'Крыша багажника',
  'Крылья задние',
  'Пороги',
  'Ниши под ручками 2шт',
  'Полоса на капот',
  'Полоса на крышу',
  'Ниши под ручками 4шт',
  'Стойки лобового',
  'Расширители колесных арок',
  'Дверные проемы 2шт',
  'Дверные проемы 4шт',
  'Погрузочная зона багажника',
]
</script>

<style scoped>

</style>
