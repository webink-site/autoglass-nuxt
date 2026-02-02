<template>
  <section class="pt-12 sm:pt-[100px]">
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="col-span-1">
          <h2 class="font-halvar text-4xl text-white mb-10">
            Что входит в услугу?
          </h2>
          <!-- {{ longDescription }} -->
          <div
            class="text-white mb-6 nuxt-content"
            v-html="longDescription"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { longDescription } = defineProps<{
  longDescription: string
}>()
</script>

<style scoped>

</style>
