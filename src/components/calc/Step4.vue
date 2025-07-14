<template>
  <div>
    <div class="space-y-6 mb-6">
      <h3 class="font-halvar text-lg text-white leading-5">
        Благодарим за заявку!
      </h3>
    </div>
    <div class="space-y-4">
      <p class="text-white">
        Наши специалисты свяжуться с вами в ближайшее время по номеру
      </p>
      <p class="font-halvar text-lg text-white leading-5">
        8 999 248 21 12
      </p>
    </div>
    <button
      class="w-full primary-btn mb-2.5 mt-6"
      @click="emit('close')"
    >
      Хорошо
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<style scoped>

</style>
