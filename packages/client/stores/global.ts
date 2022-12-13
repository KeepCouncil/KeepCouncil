import { defineStore } from 'pinia'

export const DRAWER_CLOSED = false
export const DRAWER_OPEN = true

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    appDrawer: DRAWER_CLOSED,
  }),
  getters: {},
  actions: {
    toggleAppDrawerAction() {
      if (this.appDrawer === DRAWER_CLOSED) {
        this.openAppDrawerAction()
      } else if (this.appDrawer === DRAWER_OPEN) {
        this.closeAppDrawerAction()
      }
    },
    openAppDrawerAction() {
      this.appDrawer = DRAWER_OPEN
    },
    closeAppDrawerAction() {
      this.appDrawer = DRAWER_CLOSED
    },
  },
})
