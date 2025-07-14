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
      <UiInput
        v-model:input-val="name"
        label="Ваше имя"
      />
      <UiInput
        v-model:input-val="phone"
        label="Ваш телефон"
      />
      <UiCheckbox
        v-model:selected="checked"
        custom-id="select-all"
        label="Я даю согласие на обработку персональных данных"
      />
    </div>
    <button
      class="w-full primary-btn mb-2.5 mt-6"
      :disabled="!checked"
      @click="emit('changeSlide')"
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

const emit = defineEmits(['changeSlide', 'previousSlide'])

const name = defineModel<string>('name')
const phone = defineModel<string>('phone')
const checked = ref(false)
</script>

<style scoped>

</style>
