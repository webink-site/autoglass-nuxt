export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain')
  return `User-Agent: *
Allow: /

Disallow: /api/
Disallow: /_nuxt/
Disallow: /.nuxt/

User-Agent: Googlebot
Allow: /

User-Agent: Yandex
Allow: /

User-Agent: Bingbot
Allow: /
`
})
