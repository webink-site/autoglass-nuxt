import { defineNuxtPlugin } from '#app'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Plugin } from 'vue-responsive-video-background-player'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Plugin)
})
