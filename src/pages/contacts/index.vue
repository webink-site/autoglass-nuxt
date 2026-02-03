<template>
  <div>
    <section class="pt-12 sm:pt-[100px]">
      <div class="container">
        <h2 class="font-halvar text-4xl text-white mb-4 font-bold">
          Контакты
        </h2>
        <p class="text-neutral-600 mb-10">
          Спиоск контактов для связи
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="glass-border-gradient p-6 space-y-4 h-[10rem] sm:h-[17rem] flex flex-col justify-between">
            <p class="font-halvar text-lg text-primary leading-5 relative">
              Адрес
            </p>
            <div class="space-y-4">
              <p class="font-halvar text-lg text-white leading-5 relative">
                ул. 7-ой Армии 22, Гатчина
              </p>
              <button class="secondary-btn !px-10">
                Построить маршрут
              </button>
            </div>
          </div>
          <div class="glass-border-gradient p-6 space-y-4 h-[10rem] sm:h-[17rem] flex flex-col justify-between">
            <p class="font-halvar text-lg text-primary leading-5 relative">
              Телефон
            </p>
            <a
              href="#"
              class="font-halvar text-lg text-white leading-5 relative hover:text-primary"
            >
              + 7 (921) 637-67-04
            </a>
          </div>
          <div class="glass-border-gradient p-6 space-y-4 h-[10rem] sm:h-[17rem] flex flex-col justify-between">
            <p class="font-halvar text-lg text-primary leading-5 relative">
              Социальные сети
            </p>
            <div class="space-y-4">
              <a
                href="#"
                class="font-halvar text-lg text-white leading-5 relative hover:text-primary block"
              >
                Мы Вконтакте
              </a>
              <a
                href="#"
                class="font-halvar text-lg text-white leading-5 relative hover:text-primary block"
              >
                Мы в Телеграмме
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <HomeVoprosy />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Контакты детейлинг центра Autoglass в Гатчине',
  ogTitle: 'Контакты детейлинг центра Autoglass в Гатчине',
  description: 'Контакты детейлинг центра Autoglass в Гатчине: адрес, телефон, социальные сети.',
  ogDescription: 'Контакты детейлинг центра Autoglass в Гатчине: адрес, телефон, социальные сети.',
  ogType: 'website',
  ogImage: '/img/ogImg.webp',
})
</script>

<style scoped>

</style>
