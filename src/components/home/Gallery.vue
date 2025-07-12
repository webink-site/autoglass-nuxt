<template>
  <section class="py-[100px]">
    <div class="container">
      <h2 class="font-halvar text-4xl text-white mb-4 font-bold text-center">
        Галерея работ
      </h2>
      <p class="text-neutral-600 mb-10 text-center">
        Работы, которыми мы гордимся
      </p>
    </div>
    <div class="flex gap-3 overflow-x-hidden">
      <div
        v-for="i in 10"
        :key="i"
        class="h-[40rem] w-[26rem] shrink-0"
      >
        <img
          src="/img/gl.png"
          alt=""
          class="h-full w-full object-cover"
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
