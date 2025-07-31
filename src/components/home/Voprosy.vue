<template>
  <div class="pt-[100px]">
    <div class="container">
      <div
        v-gsap.entrance.slide-bottom
        class="bg-linear-100 from-primary_light to-primary text-center px-4 py-[90px] rounded-2xl"
      >
        <h2
          v-gsap.entrance.slide-bottom.delay-200
          class="font-halvar text-4xl text-white text-center mb-4"
        >
          Остались вопросы?
        </h2>
        <p
          v-gsap.entrance.slide-bottom.delay-200
          class="text-white text-center mb-6"
        >
          Наши эксперты готовы предоставить <br class="hidden sm:block"> консультации по всем аспектам — от замена <br class="hidden sm:block"> и ремонта стекл, до шумоизоляции
        </p>
        <a href="tel:+79216376704">
          <button
            v-gsap.entrance.slide-top.delay-200
            class="secondary-btn !px-14"
          >
            Позвонить нам
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
