<template>
  <div>
    <NuxtLoadingIndicator color="#F24944" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useSiteUrl } from '~/src/composables/useSiteUrl'

// Дефолтные Open Graph meta (абсолютные URL нужны для Telegram и других ботов)
const siteUrl = useSiteUrl()
const config = useRuntimeConfig()
const baseUrl = (config.public.siteUrl as string) || siteUrl

useHead({
  meta: baseUrl
    ? [
        { property: 'og:image', content: `${baseUrl}/img/ogImg.webp` },
        { property: 'og:image:secure_url', content: `${baseUrl}/img/ogImg.webp` },
        { property: 'og:type', content: 'website' },
      ]
    : [],
})
</script>
