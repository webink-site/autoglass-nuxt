<template>
  <div>
    <LayoutHeader />
    <div class="flex flex-col items-center justify-center text-center pt-[120px]">
      <img
        src="/img/wheels.png"
        class="mb-8 h-24"
      >
      <h1 class="text-5xl font-bold font-halvar text-white uppercase mb-8">
        Ошибка {{ error.statusCode }}
      </h1>
      <NuxtLink
        to="/"
      >
        <button class="primary-btn">Вернуться на главную страницу</button>
      </NuxtLink>
    </div>
    <HomeVoprosy />
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
defineProps<{ error: { statusCode: number } }>()

onMounted(() => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})
</script>

<style scoped>

</style>
