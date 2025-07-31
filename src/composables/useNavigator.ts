import { computed } from 'vue'

export function useNavigator() {
  const coords = {
    lat: 59.571883,
    lon: 30.137831,
  }

  const yandexRouteLink = computed(() => {
    if (!import.meta.client) return `yandexnavi://build_route_on_map?lat_to=${coords.lat}&lon_to=${coords.lon}`
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    if (isMobile) {
      // Мобильное устройство — используем Яндекс.Навигатор
      return `yandexnavi://build_route_on_map?lat_to=${coords.lat}&lon_to=${coords.lon}`
    }
    else {
      // Десктоп — открываем Яндекс.Карты
      return `https://yandex.ru/maps/?rtext=~${coords.lat},${coords.lon}&rtt=auto`
    }
  })

  return {
    yandexRouteLink,
  }
}
