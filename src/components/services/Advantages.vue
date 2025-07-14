<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="pt-[100px]">
    <div class="container">
      <h2 class="font-halvar text-4xl text-white mb-4">
        Почему выбирают нас?
      </h2>
      <p class="text-neutral-500 mb-10">
        Почему клиенты к нам возвращаются
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <div
          v-for="(item, idx) in advantages"
          :key="idx"
          class="glass-border-gradient p-6 space-y-14"
        >
          <p class="font-halvar text-lg text-primary leading-5 relative">
            0{{ idx + 1 }}
          </p>
          <p
            class="font-halvar text-lg text-white leading-5"
          >
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const advantages = [
  {
    title: 'Защита кузова от царапин, сколов и ультрафиолетовых лучей',
  },
  {
    title: 'Возможность изменить цвет или дизайн автомобиля без окрашивания.',
  },
  {
    title: 'Легкое удаление пленки без повреждения оригинальной краски.',
  },
  {
    title: 'Долговечность и высокая степень защиты кузова',
  },
]
</script>

<style scoped>

</style>
