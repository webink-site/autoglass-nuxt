<template>
  <section>
    <div class="container">
      <div class="glass-border-gradient p-[1px]">
        <div class="rounded-2xl bg-dark p-10 flex flex-col justify-between overflow-hidden relative">
          <div class="absolute top-0 left-0 h-full w-full bg-black/50 transition-all z-10" />
          <img
            src="https://remonline.app/uploads/wysiwyg/blog/img-preview/how-to-start-detailing-business-banner-min.webp?v=394"
            alt=""
            class="video-bg object-cover"
          >
          <div class="relative z-20">
            <h1 class="text-white font-halvar text-4xl mb-6">
              Автовинил
            </h1>
            <p class="text-white mb-6">
              Мы предлагаем широкий выбор автовиниловых пленок высокого качества, <br>
              различных цветов, финишей и текстур. Наши опытные мастера с <br>
              готовностью помогут вам выбрать наиболее подходящий вариант и <br>
              превратить ваш автомобиль в уникальное произведение искусства.
            </p>
          </div>

          <div class="flex gap-4 relative z-20">
            <button class="primary-btn !px-10 w-fit relative">
              Узнать цены
            </button>
            <button class="secondary-btn !px-10 w-fit relative">
              Позвонить нам
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.video-bg {
    position: absolute !important;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}
</style>
