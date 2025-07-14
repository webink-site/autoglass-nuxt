<template>
  <div>
    <section class="pt-[100px]">
      <div class="container">
        <h2 class="font-halvar text-4xl text-white mb-4 font-bold">
          Галерея работ
        </h2>
        <p class="text-neutral-600 mb-10">
          Работы, которыми мы гордимся
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div
            v-for="item in 11"
            :key="item"
            :class="item < 4 ? 'col-span-4' : 'col-span-3'"
            class="cursor-pointer"
          >
            <img
              class="object-cover rounded-xl aspect-3/4"
              src="/img/gl.png"
            >
          </div>
        </div>
      </div>
    </section>
    <HomeVoprosy />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
