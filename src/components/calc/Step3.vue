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
        Ваши данные
      </h3>
    </div>
    <div class="space-y-4">
      <div>
        <UiInput
          v-model:input-val="name"
          label="Ваше имя"
        />
        <p
          v-if="errors.name"
          class="text-red-500 text-sm mt-1"
        >
          {{ errors.name }}
        </p>
      </div>
      <div>
        <UiInput
          v-model:input-val="phone"
          label="Ваш телефон"
        />
        <p
          v-if="errors.phone"
          class="text-red-500 text-sm mt-1"
        >
          {{ errors.phone }}
        </p>
      </div>
      <UiCheckbox
        v-model:selected="checked"
        custom-id="select-all"
      >
        <template #label>
          Я даю согласие на обработку <nuxt-link
            to="privacy-policy"
            class="text-primary hover:opacity-70"
          >персональных данных</nuxt-link>
        </template>
      </UiCheckbox>
    </div>
    <button
      class="w-full primary-btn mb-2.5 mt-6"
      :disabled="!isFormValid"
      @click="handleSubmit"
    >
      Записаться на обслуживание
    </button>
    <p class="text-white text-center">
      <span class="text-primary">3</span> из 3
    </p>
  </div>
</template>

<script setup lang="ts">
import { MoveLeft } from 'lucide-vue-next'

const emit = defineEmits(['changeSlide', 'previousSlide', 'submit'])

const name = defineModel<string>('name')
const phone = defineModel<string>('phone')
const checked = ref(false)

const errors = ref({
  name: '',
  phone: '',
})

// Валидация телефона (российские номера)
const validatePhone = (phoneValue: string): boolean => {
  if (!phoneValue) return false

  // Убираем все нецифровые символы кроме +
  const cleaned = phoneValue.replace(/[^\d+]/g, '')

  // Проверяем разные форматы:
  // +7XXXXXXXXXX (11 цифр после +7)
  // 8XXXXXXXXXX (11 цифр с 8)
  // 7XXXXXXXXXX (11 цифр с 7)
  // XXXXXXXXXX (10 цифр - добавляем 7)
  if (cleaned.startsWith('+7') && cleaned.length === 12) {
    return true
  }
  if (cleaned.startsWith('8') && cleaned.length === 11) {
    return true
  }
  if (cleaned.startsWith('7') && cleaned.length === 11) {
    return true
  }
  if (/^\d{10}$/.test(cleaned)) {
    return true
  }

  return false
}

// Форматирование телефона
const formatPhone = (phoneValue: string): string => {
  // Убираем все нецифровые символы
  let cleaned = phoneValue.replace(/\D/g, '')

  // Если начинается с 8, заменяем на 7
  if (cleaned.startsWith('8')) {
    cleaned = `7${cleaned.slice(1)}`
  }

  // Если не начинается с 7, добавляем 7
  if (!cleaned.startsWith('7')) {
    cleaned = `7${cleaned}`
  }

  // Убеждаемся, что номер содержит 11 цифр (7 + 10)
  if (cleaned.length === 11) {
    return `+${cleaned}`
  }

  // Если что-то пошло не так, возвращаем как есть
  return phoneValue
}

const validateForm = (): boolean => {
  errors.value = { name: '', phone: '' }
  let isValid = true

  // Валидация имени
  if (!name.value || name.value.trim().length === 0) {
    errors.value.name = 'Имя обязательно для заполнения'
    isValid = false
  }
  else if (name.value.trim().length < 2) {
    errors.value.name = 'Имя должно содержать минимум 2 символа'
    isValid = false
  }

  // Валидация телефона
  if (!phone.value || phone.value.trim().length === 0) {
    errors.value.phone = 'Телефон обязателен для заполнения'
    isValid = false
  }
  else if (!validatePhone(phone.value)) {
    errors.value.phone = 'Введите корректный номер телефона'
    isValid = false
  }

  return isValid
}

const isFormValid = computed(() => {
  return checked.value && name.value && phone.value && validatePhone(phone.value || '')
})

const handleSubmit = () => {
  if (validateForm() && checked.value) {
    // Форматируем телефон перед отправкой
    const formattedPhone = formatPhone(phone.value || '')
    emit('submit', { name: name.value?.trim(), phone: formattedPhone })
    emit('changeSlide')
  }
}
</script>

<style scoped>

</style>
