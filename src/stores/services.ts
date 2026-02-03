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
  slug: string
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
      try {
        const response = await fetch(`${config.public.apiUrl}/services`)

        if (!response.ok) {
          throw new Error(`Ошибка при загрузке услуг: ${response.status}`)
        }

        const data = await response.json()
        this.services = data
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
