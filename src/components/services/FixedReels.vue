<template>
  <div class="fixed text-white bottom-6 right-6 z-30">
    <div class="w-40 aspect-10/16 bg-dark rounded-xl border-[2px] border-neutral-600 relative cursor-pointer group overflow-hidden">
      <PlayIcon class="fill-white size-10 top-1/2 left-1/2 -translate-1/2 absolute group-hover:opacity-50 transition-all z-20" />
      <video-background
        src="https://glassgtn.ru/wp-content/themes/ag/assets/video.MP4"
        poster="/img/video_poster.png"
        class="video-bg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayIcon } from 'lucide-vue-next'
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
