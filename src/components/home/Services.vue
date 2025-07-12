<template>
  <section class="pt-[100px]">
    <div class="container">
      <h2 class="font-halvar text-4xl text-white mb-4 font-bold">
        Услуги
      </h2>
      <p class="text-neutral-600 mb-10">
        Оказываем услуги разных видов сложности
      </p>
      <div class="grid grid-cols-12 gap-3">
        <nuxt-link
          v-for="(item, index) in services"
          :key="index"
          :class="item.col"
          :to="`/services/${item.slug}`"
        >
          <div class="glass-border-gradient p-6 space-y-4 h-[26rem] relative group">
            <div class="absolute top-[1.5px] left-[1.5px] h-card_img_h w-card_img_w rounded-2xl overflow-hidden ">
              <div class="absolute top-0 left-0 h-full w-full bg-black/50 transition-all group-hover:opacity-0" />
              <img
                :src="item.img"
                :alt="item.title"
                class="h-full w-full object-cover top-0 left-0"
              >
            </div>
            <p class="font-halvar text-lg text-primary leading-5 relative">
              0{{ index + 1 }}
            </p>
            <p class="font-halvar text-lg text-white leading-5 relative">
              {{ item.title }}
            </p>
          </div></nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Автовинил',
    img: 'https://glassgtn.ru/wp-content/uploads/2021/04/img_20220730_132619-scaled.jpg',
    col: 'col-span-4',
    slug: 'serv1',
  },
  {
    title: 'Полировка кузова',
    img: 'https://glassgtn.ru/wp-content/uploads/2021/04/img_20220730_132619-scaled.jpg',
    col: 'col-span-4',
    slug: 'serv1',
  },
  {
    title: 'Замена и ремонт автостекл',
    img: 'https://glassgtn.ru/wp-content/uploads/2021/04/img_20220730_132619-scaled.jpg',
    col: 'col-span-4',
    slug: 'serv1',
  },
  {
    title: 'Химчистка салона',
    img: 'https://glassgtn.ru/wp-content/uploads/2021/04/img_20220730_132619-scaled.jpg',
    col: 'col-span-3',
    slug: 'serv1',
  },
  {
    title: 'Тонирование',
    img: 'https://glassgtn.ru/wp-content/uploads/2021/04/img_20220730_132619-scaled.jpg',
    col: 'col-span-3',
    slug: 'serv1',
  },
  {
    title: 'Оклейка кузова защитной пленкой',
    img: 'https://glassgtn.ru/wp-content/uploads/2021/04/img_20220730_132619-scaled.jpg',
    col: 'col-span-3',
    slug: 'serv1',
  },
  {
    title: 'Шумоизоляция салона',
    img: 'https://glassgtn.ru/wp-content/uploads/2021/04/img_20220730_132619-scaled.jpg',
    col: 'col-span-3',
    slug: 'serv1',
  },
]
</script>

<style scoped>

</style>
