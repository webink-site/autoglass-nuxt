import { useSiteUrl } from '~/src/composables/useSiteUrl'

interface Service {
  id: number
  slug?: string
  name: string
  updatedAt: string
}

export default defineSitemapEventHandler(async () => {
  const config = useRuntimeConfig()
  const hostUrl = config.public.siteUrl || useSiteUrl()
  try {
    const data = await fetch(`${config.public.apiUrl}/services`)
    const services = await data.json()
    return services.map((service: Service) => ({ loc: `${hostUrl}/services/${service.slug}`, changefreq: 'weekly', priority: 0.8, lastmod: service.updatedAt }))
  }
  catch (error) {
    console.error('Ошибка при получении услуг:', error)
    return []
  }
})
