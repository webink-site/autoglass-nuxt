<template>
  <div class="pt-4 mb-6 relative z-20">
    <div class="container">
      <div
        class="glass-border-gradient p-8"
      >
        <div class="grid grid-cols-3 sm:grid-cols-12 gap-8">
          <div class="col-span-3 flex gap-4 sm:block">
            <nuxt-link
              to="/"
            >
              <img
                src="/img/agred.svg"
                alt=""
                class="!h-16 sm:!h-24 sm:mb-4"
              >
            </nuxt-link>
            <iframe
              src="https://yandex.ru/sprav/widget/rating-badge/211201754591?type=award"
              width="150"
              height="50"
              frameborder="0"
            />
          </div>
          <div class="col-span-3">
            <h5 class="text-neutral-600 font-halvar text-xl mb-2.5">
              Услуги
            </h5>
            <ul class="space-y-3 columns-2">
              <li
                v-for="(item, idx) in servicesStore.services"
                :key="idx"
              >
                <nuxt-link
                  :to="`/services/${item.slug}`"
                  class="text-white hover:text-primary"
                >{{ item.name }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-span-3">
            <h5 class="text-neutral-600 font-halvar text-xl mb-2.5">
              Контакты
            </h5>
            <ul class="space-y-3 sm:mb-12">
              <li class="text-white">
                ул. 7-ой Армии 24А, Гатчина
              </li>
              <li>
                <a
                  href=""
                  class="text-white hover:text-primary"
                >+ 7 (921) 637-67-04</a>
              </li>
            </ul>
            <client-only>
              <a
                :href="yandexRouteLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="secondary-btn w-full sm:w-fit hidden sm:block">
                  Проложить маршрут на карте
                </button>
              </a>
            </client-only>
          </div>
          <div class="col-span-3">
            <h5 class="text-neutral-600 font-halvar text-xl mb-2.5">
              Социальные сети
            </h5>
            <ul class="space-y-3">
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
              <li class="mt-6">
                <nuxt-link
                  to="/privacy-policy"
                  class="text-white hover:text-primary"
                >Политика конфиденциальности</nuxt-link>
              </li>
            </ul>
            <client-only>
              <a
                :href="yandexRouteLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="secondary-btn w-full sm:w-fit sm:hidden mt-8">
                  Проложить маршрут на карте
                </button>
              </a>
            </client-only>
          </div>
          <div class="col-span-full hidden sm:block">
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
import { useNavigator } from '~/src/composables/useNavigator'
import { useServicesStore } from '~/src/stores/services'

const { yandexRouteLink } = useNavigator()
const servicesStore = useServicesStore()

const socials = [
  { title: 'Вконтакте', link: 'https://vk.com/autoglassgtn' },
  { title: 'Telegram', link: 'https://vk.com/autoglassgtn' },
]
</script>

<style scoped>

</style>
