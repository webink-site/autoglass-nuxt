<template>
  <div class="sticky top-0 bg-dark_gray sm:hidden px-4 py-2 flex justify-between items-center z-30">
    <nuxt-link to="/">
      <img
        src="/img/agred.svg"
        alt=""
        class="!h-12"
      >
    </nuxt-link>
    <div class="flex gap-4 items-center">
      <a class="text-white hover:text-primary">+ 7 (921) 637-67-04</a>
      <button
        class="secondary-btn !p-2"
        @click="showMenu = !showMenu"
      >
        <Menu
          v-if="!showMenu"
          class="size-6"
        />
        <X
          v-else
          class="size-6"
        />
      </button>
    </div>
    <transition
      name="fade-move"
      mode="out-in"
    >
      <div
        v-if="showMenu"
        class="bg-black/30 backdrop-blur h-screen absolute top-full left-0 w-full"
        @click="showMenu = false"
      >
        <div
          class="bg-dark_gray  rounded-b-2xl p-4 space-y-5"
          @click.stop
        >
          <ul class="space-y-5">
            <li
              v-for="(item, index) in navs"
              :key="index"
              @click="showMenu = false"
            >
              <nuxt-link
                class="text-white hover:text-primary"
                :to="item.link"
                exact-active-class="!text-primary"
              >
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
          <a class="text-white hover:text-primary block">+ 7 (921) 637-67-04</a>
          <p class="text-white">
            ул. 7-ой Армии 24А, Гатчина
          </p>
          <button
            class="primary-btn block w-full"
            @click="showCalc = true"
          >
            Рассчитать стоимость оклейки
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

const showMenu = ref(false)
const showCalc = defineModel<boolean>('showCalc')
const navs = [
  {
    title: 'Услуги',
    link: '/services',
  },
  // {
  //   title: 'Проекты',
  //   link: '/projects',
  // },
  {
    title: 'Галерея работ',
    link: '/gallery',
  },
  {
    title: 'Контакты',
    link: '/contacts',
  },
]
</script>

<style scoped>

</style>
