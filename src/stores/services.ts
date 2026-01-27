import { defineStore } from 'pinia'

export enum TransportType {
  ALL = 'ALL',
  SEDAN = 'SEDAN', // Легковые
  BUSINESS = 'BUSINESS', // Бизнес-класс
  SUV = 'SUV', // Джипы / Минивены
  MINIBUS = 'MINIBUS', // Микроавтобусы
}

export interface PriceVariation {
  id: number
  servicePriceId: number
  name: string
  price: number
}

export interface ServicePrice {
  id: number
  serviceId: number
  transportType: TransportType
  variations: PriceVariation[]
}

interface Service {
  id: number
  name: string
  description: string
  advantages: string[]
  longDescription: string
  cardImageId: number | null
  headerImageId: number | null
  videoId: number | null
  cardImage?: string
  createdAt: string
  updatedAt: string
  prices?: ServicePrice[]
}

interface ServicesState {
  services: Service[]
  loading: boolean
  error: string | null
}

export const useServicesStore = defineStore('services', {
  state: (): ServicesState => ({
    services: [],
    loading: false,
    error: null,
  }),

  getters: {
    getServiceById: (state) => {
      return (id: number) => state.services.find(service => service.id === id)
    },
  },

  actions: {
    async FETCH_SERVICES() {
      const config = useRuntimeConfig()
      this.loading = true
      this.error = null

      try {
        const response = await fetch(`${config.public.apiUrl}/services`, {
          cache: 'no-store', // Отключаем кеширование браузера
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          },
        })

        if (!response.ok && response.status !== 304) {
          throw new Error(`Ошибка при загрузке услуг: ${response.status}`)
        }

        // Если 304, делаем повторный запрос с игнорированием кеша
        if (response.status === 304) {
          const freshResponse = await fetch(`${config.public.apiUrl}/services`, {
            cache: 'reload',
          })

          if (!freshResponse.ok) {
            throw new Error(`Ошибка при загрузке услуг: ${freshResponse.status}`)
          }

          const data = await freshResponse.json()
          this.services = data
        }
        else {
          const data = await response.json()
          this.services = data
        }
      }
      catch (error) {
        this.error = error instanceof Error ? error.message : 'Ошибка при загрузке услуг'
        console.error('Ошибка при загрузке услуг:', error)
      }
      finally {
        this.loading = false
      }
    },
  },
})
