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
        <div class="space-y-6 mb-6">
          <button
            v-if="step > 1"
            class="secondary-btn !rounded-lg !p-1"
          >
            <MoveLeft class="size-4" />
          </button>
          <h3 class="font-halvar text-lg text-white leading-5">
            Ориентировочная стоимость
          </h3>
        </div>
        <transition
          name="fade-move"
          mode="out-in"
        >
          <CalcStep1
            v-if="step === 1"
            @change-slide="step = 2"
          />
          <CalcStep2 v-else-if="step === 2" />
          <CalcStep3 v-else />
        </transition>
      </div>
      <button
        class="secondary-btn absolute top-4 -right-14 !p-2"
        @click="dialog = false"
      >
        <X class="size-6 text-primary" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MoveLeft, X } from 'lucide-vue-next'

const step = ref(1)
const dialog = defineModel<boolean>('dialog')
</script>

<style scoped>

</style>
