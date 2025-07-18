<template>
  <section
    v-gsap.entrance.slide-bottom
  >
    <div class="sm:container">
      <div class="sm:rounded-2xl h-[774px] bg-dark p-4 sm:p-10 flex flex-col justify-between relative overflow-hidden">
        <video-background
          src="https://glassgtn.ru/wp-content/themes/ag/assets/video.MP4"
          poster="/img/video_poster.png"
          class="video-bg"
        />
        <div
          v-gsap.entrance.slide-top.delay-700
          class="relative"
        >
          <h1
            class="text-white font-halvar text-4xl sm:text-5xl uppercase mb-6 font-bold"
          >
            <span class="text-primary">Детейлинг центр №1 </span><br>
            в Ленинградской области
          </h1>
          <p
            class="text-white text-lg"
          >
            Мы оказываем весь спектр услуг, в котором  <br class="hidden sm:block">
            нуждается Ваш автомобиль: тонировка, замена <br class="hidden sm:block">
            и ремонт автостекол, оклейка защитной <br class="hidden sm:block">
            пленкой и многое другое
          </p>
        </div>

        <button
          v-gsap.entrance.slide-bottom.delay-600
          class="secondary-btn !px-10 w-fit relative"
        >
          Позвонить нам
        </button>
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
