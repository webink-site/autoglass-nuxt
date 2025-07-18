<template>
  <section class="pt-12 sm:pt-[100px]">
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="col-span-1">
          <h2 class="font-halvar text-4xl text-white mb-10">
            Цены на полировку
          </h2>
          <div class="flex gap-4 flex-wrap mb-14">
            <button class="outlined-btn bg-primary !border-primary">
              Легковые
            </button>
            <button class="outlined-btn">
              Бизнес-классы
            </button>
            <button class="outlined-btn">
              Джипы / Минивены
            </button>
            <button class="outlined-btn">
              Микроавтобусы
            </button>
          </div>
        </div>
      </div>
      <ul class="columns-2 sm:columns-3 space-y-10">
        <li class="break-inside-avoid space-y-6">
          <p class="text-white">
            Лайт полировка (без покрытия)
          </p>
          <h4 class="text-white font-halvar text-xl sm:text-3xl">
            От 8 000₽
          </h4>
        </li>
        <li class="break-inside-avoid space-y-6">
          <p class="text-white">
            Глубокая полировка (без покрытия)
          </p>
          <h4 class="text-white font-halvar text-xl sm:text-3xl">
            От 15 000₽
          </h4>
        </li>
        <li class="break-inside-avoid space-y-6">
          <p class="text-white">
            Лайт полировка (с покрытием)
          </p>
          <h4 class="text-white font-halvar text-xl sm:text-3xl">
            От 10 000₽
          </h4>
        </li>
        <li class="break-inside-avoid space-y-6">
          <p class="text-white">
            Глубокая полировка (с покрытием)
          </p>
          <h4 class="text-white font-halvar text-xl sm:text-3xl">
            От 20 000₽
          </h4>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
