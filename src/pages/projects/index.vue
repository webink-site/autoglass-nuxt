<template>
  <div>
    <section class="pt-[100px]">
      <div class="container">
        <h2 class="font-halvar text-4xl text-white mb-4 font-bold">
          Проекты Autoglass
        </h2>
        <p class="text-neutral-600 mb-10">
          Проекты, которыми мы гордимся
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <nuxt-link
            v-for="item in 5"
            :key="item"
            :to="`/projects/123`"
          >
            <div
              class="col-span-1"
            >
              <img
                class="aspect-square object-cover rounded-xl mb-6"
                src="/img/gl.png"
              >
              <p class="font-halvar text text-white leading-5 mb-8">
                Полировка Cherry TiggoProMax
              </p>
            </div>
          </nuxt-link>
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
