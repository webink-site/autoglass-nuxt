<template>
  <div
    v-if="dialog"
    class="fixed z-40 top-0 left-0 h-screen w-screen bg-black/30 backdrop-blur flex justify-center py-12 overflow-auto"
    @click="dialog = false"
  >
    <div
      v-if="data && data.elements && data.packages"
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
            :packages="data?.packages || []"
            :elements="data?.elements || []"
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
            @submit="handleFormSubmit"
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
import { TransportType } from '~/src/stores/services'

const step = ref(1)
const dialog = defineModel<boolean>('dialog')
const selectedType = ref<TransportType | null>(null)
const selectedElements = ref<number[]>([])
const name = ref('')
const phone = ref('')

const config = useRuntimeConfig()

interface CalcElement {
  id: number
  name: string
  prices: { transportType: TransportType, price: number }[]
}

interface CalcPackage {
  id: number
  name: string
  elementIds: number[]
}

interface ICalcData {
  packages: CalcPackage[]
  elements: CalcElement[]
}

const { data } = await useFetch<ICalcData>(`${config.public.apiUrl}/wrap/calc`, { server: false })

const types = [
  {
    title: 'Легковой',
    icon: ic1,
    transportType: TransportType.SEDAN,
  },
  {
    title: 'Кроссовер',
    icon: ic2,
    transportType: TransportType.SUV,
  },
  {
    title: 'Бизнес-класс',
    icon: ic3,
    transportType: TransportType.BUSINESS,
  },
]

// Функция для получения цены элемента с учетом типа транспорта
const getElementPrice = (element: CalcElement, transportType: TransportType | null): number => {
  if (!transportType || !element.prices || element.prices.length === 0) {
    return 0
  }

  // Сначала ищем цену для конкретного типа транспорта
  const specificPrice = element.prices.find(p => p.transportType === transportType)
  if (specificPrice) {
    return specificPrice.price
  }

  // Если нет цены для конкретного типа, ищем цену для ALL
  const allPrice = element.prices.find(p => p.transportType === TransportType.ALL)
  if (allPrice) {
    return allPrice.price
  }

  return 0
}

// Преобразуем элементы для Step2 с ценами
const elements = computed(() => {
  if (!data.value || !selectedType.value) {
    return []
  }

  return data.value.elements.map(element => ({
    id: element.id,
    title: element.name,
    price: getElementPrice(element, selectedType.value),
  }))
})

// Получаем название типа транспорта
const getTransportTypeName = (transportType: TransportType | null): string => {
  const type = types.find(t => t.transportType === transportType)
  return type?.title || ''
}

// Форматируем цену с пробелами
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

// Формируем сообщение для отправки
const buildMessage = (): string => {
  if (!selectedType.value || !data.value) {
    return ''
  }

  const transportTypeName = getTransportTypeName(selectedType.value)
  const selectedElementsData = elements.value.filter(el => selectedElements.value.includes(el.id))
  const totalPrice = selectedElementsData.reduce((sum, el) => sum + el.price, 0)

  let message = `${transportTypeName}\n`

  selectedElementsData.forEach((element) => {
    message += `${element.title} - ${formatPrice(element.price)} ₽\n`
  })

  message += `Итоговая стоимость - ${formatPrice(totalPrice)} ₽`

  return message
}

// Отправка формы
const handleFormSubmit = async (formData: { name: string, phone: string }) => {
  try {
    const message = buildMessage()

    const response = await fetch(`${config.public.apiUrl}/form/telegram`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        message,
      }),
    })

    if (!response.ok) {
      throw new Error(`Ошибка отправки формы: ${response.status}`)
    }

    // Форма успешно отправлена, переходим на Step4
    step.value = 4
  }
  catch (error) {
    console.error('Ошибка при отправке формы:', error)
    // Можно добавить уведомление об ошибке
    alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.')
  }
}

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
