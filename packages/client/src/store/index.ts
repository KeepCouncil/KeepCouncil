import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const OPEN_APP_DRAWER_ACTION = 'OPEN_APP_DRAWER_ACTION'
const MINI_APP_DRAWER_ACTION = 'MINI_APP_DRAWER_ACTION'
const CLOSE_APP_DRAWER_ACTION = 'CLOSE_APP_DRAWER_ACTION'
export const TOGGLE_APP_DRAWER_ACTION = 'TOGGLE_APP_DRAWER_ACTION'
const CHANGE_APP_DRAWER_MUTATION = 'CHANGE_APP_DRAWER_MUTATION'

export const DRAWER_CLOSED = 'DRAWER_CLOSED'
export const DRAWER_MINI = 'DRAWER_MINI'
export const DRAWER_OPEN = 'DRAWER_OPEN'

export default new Vuex.Store({
  state: {
    appDrawer: DRAWER_MINI,
  },
  getters: {},
  mutations: {
    [CHANGE_APP_DRAWER_MUTATION](state, value) {
      Vue.set(state, 'appDrawer', value)
    },
  },
  actions: {
    [TOGGLE_APP_DRAWER_ACTION]({state, dispatch}) {
      if (state.appDrawer === DRAWER_CLOSED) {
        dispatch(OPEN_APP_DRAWER_ACTION)
      } else if (state.appDrawer === DRAWER_OPEN) {
        dispatch(MINI_APP_DRAWER_ACTION)
      } else {
        dispatch(CLOSE_APP_DRAWER_ACTION)
      }
    },
    [OPEN_APP_DRAWER_ACTION]({commit}) {
      commit(CHANGE_APP_DRAWER_MUTATION, DRAWER_OPEN)
    },
    [CLOSE_APP_DRAWER_ACTION]({commit}) {
      commit(CHANGE_APP_DRAWER_MUTATION, DRAWER_CLOSED)
    },
    [MINI_APP_DRAWER_ACTION]({commit}) {
      commit(CHANGE_APP_DRAWER_MUTATION, DRAWER_MINI)
    },
  },
  modules: {},
})
