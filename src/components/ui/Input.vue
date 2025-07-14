<template>
  <div
    class="relative select-none"
    :class="{ '!mb-7': errorMessage }"
  >
    <span
      class="select-none pointer-events-none transition-all absolute leading-none left-3 text-neutral-500"
      :class="isFocused || inputVal ? 'top-3 text-xs' : 'top-1/2 -translate-y-1/2'"
    >
      {{ label }}
    </span>
    <input
      v-model="inputVal"
      :type="type"
      class="w-full text-white font-medium bg-input bg-light-2 rounded-xl px-3 pt-7 pb-3 leading-none transition-all outline-none border-[1.6px] border-input focus:border-white"
      :class="{ 'bg-white': white, 'text-black/60': disabled }"
      :autocomplete="autocomplete"
      :disabled="disabled"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <slot name="after" />
    <slot name="descr" />
    <span
      v-if="errorMessage"
      class="text-red-500 left-3 -bottom-5 text-xs absolute"
    >{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
type Props = {
  label: string
  type?: string
  white?: boolean
  autocomplete?: string
  disabled?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errorMessage?: string | any
}
const { label, type = 'text', white = false, autocomplete = '', errorMessage = '', disabled = false } = defineProps<Props>()
const inputVal = defineModel<string>('inputVal')

const isFocused = ref(false)

function handleFocus() {
  isFocused.value = true
}
function handleBlur() {
  isFocused.value = false
}
</script>

<style scoped>

</style>
