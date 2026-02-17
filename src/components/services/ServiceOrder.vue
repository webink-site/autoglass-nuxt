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
          <CalcStep3
            v-if="step === 1"
            v-model:name="name"
            v-model:phone="phone"
            :show-back-button="false"
            :show-step-counter="false"
            @change-slide="step = 2"
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

const dialog = defineModel<boolean>('dialog')
const props = defineProps<{
  serviceName: string
}>()

const step = ref(1)
const name = ref('')
const phone = ref('')

const config = useRuntimeConfig()

// Отправка формы
const handleFormSubmit = async (formData: { name: string, phone: string }) => {
  try {
    const response = await fetch(`${config.public.apiUrl}/form/vk`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        message: props.serviceName,
      }),
    })

    if (!response.ok) {
      throw new Error(`Ошибка отправки формы: ${response.status}`)
    }

    // Форма успешно отправлена, переходим на Step4
    step.value = 2
  }
  catch (error) {
    console.error('Ошибка при отправке формы:', error)
    alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.')
  }
}

const resetDialog = () => {
  step.value = 1
  dialog.value = false
  name.value = ''
  phone.value = ''
}
</script>

<style scoped>

</style>

