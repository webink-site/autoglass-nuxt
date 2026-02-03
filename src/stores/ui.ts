import { defineStore } from 'pinia'

interface UiState {
  calcDialog: boolean
  serviceOrderDialog: boolean
  serviceOrderName: string
}

export const useUiStore = defineStore('ui', {
  state: (): UiState => ({
    calcDialog: false,
    serviceOrderDialog: false,
    serviceOrderName: '',
  }),

  getters: {

  },

  actions: {
    handleCalcDialog(value: boolean) {
      this.calcDialog = value
    },
    handleServiceOrderDialog(value: boolean, serviceName: string = '') {
      this.serviceOrderDialog = value
      this.serviceOrderName = serviceName
    },
  },
})
