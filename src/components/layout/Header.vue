<template>
  <LayoutMobileMenu v-model:show-calc="uiStore.calcDialog" />
  <div class="hidden sm:block sticky top-10 left-0 w-full z-30">
    <div class="container">
      <div class="glass-border-gradient px-6 py-4 rounded-2xl flex justify-between items-center">
        <div class="flex items-center gap-14">
          <nuxt-link to="/">
            <img
              src="/img/agred.svg"
              alt=""
              class="!h-16"
            >
          </nuxt-link>
          <ul class="flex gap-8">
            <li
              v-for="(item, index) in navs"
              :key="index"
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
        </div>
        <div class="flex items-center justify-end gap-8">
          <p class="text-white">
            ул. 7-ой Армии 24А, Гатчина
          </p>
          <a class="text-white hover:text-primary">+ 7 (921) 637-67-04</a>
          <button
            class="primary-btn"
            @click="uiStore.handleCalcDialog(true)"
          >
            Рассчитать стоимость оклейки
          </button>
        </div>
      </div>
    </div>
    <teleport to="body">
      <transition name="fade-slide">
        <CalcMain v-model:dialog="uiStore.calcDialog" />
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { useUiStore } from '~/src/stores/ui'

const uiStore = useUiStore()
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
