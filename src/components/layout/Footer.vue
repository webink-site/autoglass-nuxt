<template>
  <div class="pt-4 mb-6 relative z-20">
    <div class="container">
      <div
        class="glass-border-gradient p-8"
      >
        <div class="grid grid-cols-12 gap-8">
          <nuxt-link
            to="/"
            class="col-span-3"
          >
            <img
              src="/img/agred.svg"
              alt=""
              class="!h-24"
            >
          </nuxt-link>
          <div class="col-span-3">
            <h5 class="text-neutral-600 font-halvar text-xl mb-2.5">
              Услуги
            </h5>
            <ul class="space-y-3 ">
              <li
                v-for="(item, idx) in servs"
                :key="idx"
              >
                <nuxt-link
                  :to="item.slug"
                  class="text-white hover:text-primary"
                >{{ item.title }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-span-3">
            <h5 class="text-neutral-600 font-halvar text-xl mb-2.5">
              Контакты
            </h5>
            <ul class="space-y-3 mb-12">
              <li class="text-white">
                ул. 7-ой Армии 22, Гатчина
              </li>
              <li>
                <a
                  href=""
                  class="text-white hover:text-primary"
                >+ 7 (921) 637-67-04</a>
              </li>
            </ul>
            <button class="secondary-btn">
              Проложить маршрут на карте
            </button>
          </div>
          <div class="col-span-3">
            <h5 class="text-neutral-600 font-halvar text-xl mb-2.5">
              Социальные сети
            </h5>
            <ul class="space-y-3 ">
              <li
                v-for="(item, idx) in socials"
                :key="idx"
              >
                <a
                  target="_blank"
                  :href="item.link"
                  class="text-white hover:text-primary"
                >{{ item.title }}</a>
              </li>
            </ul>
          </div>
          <div class="col-span-full">
            <img
              src="/img/footer.svg"
              class="w-full"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const servs = [
  { title: 'Замена и ремонт стекол', slug: 'vynil' },
  { title: 'Автовинил', slug: 'vynil' },
  { title: 'Оклейка кузова защитой пленкой', slug: 'vynil' },
  { title: 'Замена и ремонт стекол', slug: 'vynil' },
  { title: 'Химчистка салона', slug: 'vynil' },
  { title: 'Тонирование', slug: 'vynil' },
  { title: 'Шумоизоляция', slug: 'vynil' },
]

const socials = [
  { title: 'Вконтакте', link: 'https://vk.com/autoglassgtn' },
  { title: 'Telegram', link: 'https://vk.com/autoglassgtn' },
]
</script>

<style scoped>

</style>
