<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="pt-[100px]">
    <div class="container">
      <h2 class="font-halvar text-4xl text-white text-center mb-4 font-bold">
        Почему выбирают нас?
      </h2>
      <p class="text-neutral-600 text-center mb-10">
        Почему клиенты к нам возвращаются
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div
          v-for="(item, idx) in advantages"
          :key="idx"
          class="glass-border-gradient p-6 space-y-8"
        >
          <img
            :src="item.icon"
            alt=""
          >
          <p
            class="font-halvar text-lg text-white leading-5"
            v-html="item.title"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ic1 from '/img/ic1.png'
import ic2 from '/img/ic2.png'
import ic3 from '/img/ic3.png'

const advantages = [
  {
    title: 'Мойка бесплатно <br> при заказе услуг',
    icon: ic1,
  },
  {
    title: 'Ответственно <br> относимся к работе',
    icon: ic2,
  },
  {
    title: 'Настоящие мастера <br> своего дела ',
    icon: ic3,
  },
]
</script>

<style scoped>

</style>
