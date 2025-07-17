<template>
  <div
    v-if="!showReels"
    class="fixed text-white bottom-6 right-6 z-30"
    @click="showReels = true"
  >
    <div class="w-40 aspect-10/16 bg-dark rounded-xl border-[2px] border-neutral-600 relative cursor-pointer group overflow-hidden">
      <PlayIcon class="fill-white size-10 top-1/2 left-1/2 -translate-1/2 absolute group-hover:opacity-50 transition-all z-20" />
      <video-background
        src="https://glassgtn.ru/wp-content/themes/ag/assets/video.MP4"
        class="video-bg"
      />
    </div>
  </div>
  <div
    v-if="showReels"
    class="fixed z-40 top-0 left-0 h-screen w-screen bg-black/30 backdrop-blur flex justify-center items-center"
    @click="showReels = false"
  >
    <div
      class="h-[86%] relative"
      @click.stop
    >
      <button
        class="secondary-btn absolute top-0 -right-14 !p-2"
        @click="showReels = false"
      >
        <X class="size-6 text-primary" />
      </button>
      <video
        class="object-cover h-full w-auto mx-auto rounded-2xl"
        controls
        autoplay
        muted
      >
        <source
          src="https://glassgtn.ru/wp-content/themes/ag/assets/video.MP4"
          type="video/mp4"
        >
      </video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayIcon, X } from 'lucide-vue-next'

const showReels = ref(false)
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
