<template>
  <div
    v-if="dialog"
    class="fixed z-40 top-0 left-0 h-screen w-screen bg-black/30 backdrop-blur flex justify-center py-12 overflow-auto"
    @click="dialog = false"
  >
    <div
      class="relative"
      @click.stop
    >
      <div class="glass-border-gradient p-6 w-sm sm:w-2xl !bg-dark">
        <transition
          name="fade-move"
          mode="out-in"
        >
          <CalcStep1
            v-if="step === 1"
            v-model:selected-type="selectedType"
            v-model:selected-elements="selectedElements"
            :types="types"
            :packages="packages"
            :elements="elements"
            @change-slide="step = 2"
          />
          <CalcStep2
            v-else-if="step === 2"
            v-model:selected-elements="selectedElements"
            :elements="elements"
            @change-slide="step = 3"
            @previous-slide="step = 1"
          />
          <CalcStep3
            v-else-if="step === 3"
            v-model:name="name"
            v-model:phone="phone"
            @change-slide="step = 4"
            @previous-slide="step = 2"
          />
          <CalcStep4
            v-else
            @close="resetDialog"
          />
        </transition>
      </div>
      <button
        class="secondary-btn absolute right-4 top-4 sm:-right-14 !p-2"
        @click="dialog = false"
      >
        <X class="size-6 text-primary" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'
import ic1 from '/img/icons/car.svg'
import ic2 from '/img/icons/jeep.svg'
import ic3 from '/img/icons/business.svg'

const step = ref(1)
const dialog = defineModel<boolean>('dialog')
const selectedType = ref<string | null>(null)
const selectedElements = ref<number[]>([])
const name = ref('')
const phone = ref('')

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
    elements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    title: 'Полная перетяжка',
    elements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
  },
]

const elements = [
  { id: 1, title: 'Капот', price: 8000 },
  { id: 2, title: 'Крылья передние', price: 7000 },
  { id: 3, title: 'Бампер передний', price: 7500 },
  { id: 4, title: 'Бампер задний', price: 7300 },
  { id: 5, title: 'Фары передние', price: 4500 },
  { id: 6, title: 'Зеркала', price: 4000 },
  { id: 7, title: 'Двери передние', price: 7800 },
  { id: 8, title: 'Двери задние', price: 7600 },
  { id: 9, title: 'Крыша', price: 9500 },
  { id: 10, title: 'Крыша багажника', price: 7200 },
  { id: 11, title: 'Крылья задние', price: 6900 },
  { id: 12, title: 'Пороги', price: 5800 },
  { id: 13, title: 'Ниши под ручками 2шт', price: 2000 },
  { id: 14, title: 'Полоса на капот', price: 1500 },
  { id: 15, title: 'Полоса на крышу', price: 1800 },
  { id: 16, title: 'Ниши под ручками 4шт', price: 3500 },
  { id: 17, title: 'Стойки лобового', price: 3000 },
  { id: 18, title: 'Расширители колесных арок', price: 5000 },
  { id: 19, title: 'Дверные проемы 2шт', price: 6000 },
  { id: 20, title: 'Дверные проемы 4шт', price: 10000 },
  { id: 21, title: 'Погрузочная зона багажника', price: 4200 },
]

const resetDialog = () => {
  step.value = 1
  dialog.value = false
  selectedType.value = null
  selectedElements.value = []
  name.value = ''
  phone.value = ''
}
</script>

<style scoped>

</style>
