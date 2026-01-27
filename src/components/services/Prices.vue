<template>
  <section
    v-if="prices && prices.length > 0"
    class="pt-12 sm:pt-[100px]"
  >
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="col-span-1">
          <h2 class="font-halvar text-4xl text-white mb-10">
            Цены
          </h2>
          <div
            v-if="hasAnyTransportTypes"
            class="flex gap-4 flex-wrap mb-14"
          >
            <button
              v-if="hasAllType"
              class="outlined-btn"
              :class="{ 'bg-primary !border-primary': selectedTransportType === TransportType.ALL || selectedTransportType === null }"
              @click="selectedTransportType = TransportType.ALL"
            >
              Все авто
            </button>
            <button
              v-for="transportType in availableTransportTypes"
              :key="transportType.value"
              class="outlined-btn"
              :class="{ 'bg-primary !border-primary': selectedTransportType === transportType.value }"
              @click="selectedTransportType = transportType.value"
            >
              {{ transportType.label }}
            </button>
          </div>
        </div>
      </div>
      <ul class="columns-2 sm:columns-3 space-y-10">
        <li
          v-for="variation in currentVariations"
          :key="variation.id"
          class="break-inside-avoid space-y-6"
        >
          <p class="text-white">
            {{ variation.name }}
          </p>
          <h4 class="text-white font-halvar text-xl sm:text-3xl">
            От {{ formatPrice(variation.price) }}₽
          </h4>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServicePrice, PriceVariation } from '~/src/stores/services'
import { TransportType } from '~/src/stores/services'

interface Props {
  prices?: ServicePrice[]
}

const props = defineProps<Props>()

const selectedTransportType = ref<TransportType | null>(null)

const transportTypeLabels: Record<TransportType, string> = {
  [TransportType.ALL]: 'Все',
  [TransportType.SEDAN]: 'Легковые',
  [TransportType.BUSINESS]: 'Бизнес-классы',
  [TransportType.SUV]: 'Джипы / Минивены',
  [TransportType.MINIBUS]: 'Микроавтобусы',
}

// Проверяем, есть ли тип ALL
const hasAllType = computed(() => {
  if (!props.prices || props.prices.length === 0) return false
  return props.prices.some(price => price.transportType === TransportType.ALL)
})

// Проверяем, есть ли типы транспорта кроме ALL
const hasTransportTypes = computed(() => {
  if (!props.prices || props.prices.length === 0) return false
  return props.prices.some(price => price.transportType !== TransportType.ALL)
})

// Проверяем, есть ли хотя бы один тип транспорта (для показа кнопок)
const hasAnyTransportTypes = computed(() => {
  return hasAllType.value || hasTransportTypes.value
})

// Получаем доступные типы транспорта (исключая ALL)
const availableTransportTypes = computed(() => {
  if (!props.prices) return []

  const types = props.prices
    .filter(price => price.transportType !== TransportType.ALL)
    .map(price => price.transportType)

  // Убираем дубликаты
  const uniqueTypes = [...new Set(types)]

  return uniqueTypes.map(type => ({
    value: type,
    label: transportTypeLabels[type],
  }))
})

// Получаем текущие вариации цен в зависимости от выбранного типа
const currentVariations = computed<PriceVariation[]>(() => {
  if (!props.prices || props.prices.length === 0) return []

  // Определяем какой тип использовать
  const typeToUse = selectedTransportType.value ?? (hasAllType.value ? TransportType.ALL : null)

  if (!typeToUse) {
    // Если нет выбранного типа и нет ALL, возвращаем пустой массив
    return []
  }

  // Находим цену для выбранного типа
  const selectedPrice = props.prices.find(
    price => price.transportType === typeToUse,
  )

  return selectedPrice?.variations || []
})

// Форматируем цену с пробелами
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

// Инициализируем выбранный тип при монтировании или изменении props
watch(
  () => props.prices,
  () => {
    if (!selectedTransportType.value) {
      // По умолчанию выбираем ALL, если он есть, иначе первый доступный тип
      if (hasAllType.value) {
        selectedTransportType.value = TransportType.ALL
      }
      else if (availableTransportTypes.value.length > 0) {
        selectedTransportType.value = availableTransportTypes.value[0].value
      }
    }
  },
  { immediate: true },
)

onMounted(() => {
  if (!selectedTransportType.value) {
    // По умолчанию выбираем ALL, если он есть, иначе первый доступный тип
    if (hasAllType.value) {
      selectedTransportType.value = TransportType.ALL
    }
    else if (availableTransportTypes.value.length > 0) {
      selectedTransportType.value = availableTransportTypes.value[0].value
    }
  }
})
</script>

<style scoped>

</style>
