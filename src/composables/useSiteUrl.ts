/**
 * Возвращает абсолютный URL сайта (origin) для Open Graph и других meta.
 * Telegram и другие боты требуют абсолютные URL для og:image.
 */
export function useSiteUrl(): string {
  try {
    const url = useRequestURL()
    return url?.origin ?? ''
  }
  catch {
    if (import.meta.client && typeof window !== 'undefined')
      return window.location.origin
    return ''
  }
}
