import { defineStore } from 'pinia'

export const DRAWER_CLOSED = 'DRAWER_CLOSED'
export const DRAWER_OPEN = 'DRAWER_OPEN'

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    appDrawer: DRAWER_OPEN,
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
