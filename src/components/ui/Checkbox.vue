<template>
  <div class="inline-flex items-center">
    <label
      class="flex items-center cursor-pointer relative"
      :for="customId"
    >
      <input
        :id="customId"
        v-model="selected"
        type="checkbox"
        class="peer h-5 w-5 cursor-pointer bg-white transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary"
        @change="emit('onChange')"
      >
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Check class="size-4" />
      </span>
    </label>
    <label
      class="cursor-pointer ml-2 select-none text-white"
      :for="customId"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const emit = defineEmits(['onChange'])

type Props = {
  customId: string
  label: string
}
const { customId, label } = defineProps<Props>()

const selected = defineModel<boolean>('selected')
</script>

<style scoped>

</style>
