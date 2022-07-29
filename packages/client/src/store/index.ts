import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const OPEN_APP_DRAWER_ACTION = 'OPEN_APP_DRAWER_ACTION'
const MINI_APP_DRAWER_ACTION = 'MINI_APP_DRAWER_ACTION'
const CLOSE_APP_DRAWER_ACTION = 'CLOSE_APP_DRAWER_ACTION'
export const TOGGLE_APP_DRAWER_ACTION = 'TOGGLE_APP_DRAWER_ACTION'
export const ALERT_APP_ACTION = 'ALERT_APP_ACTION'
export const CLEAR_ALERT_APP_ACTION = 'CLEAR_ALERT_APP_ACTION'

const CHANGE_APP_DRAWER_MUTATION = 'CHANGE_APP_DRAWER_MUTATION'
const ALERT_APP_MUTATION = 'ALERT_APP_MUTATION'

export const DRAWER_CLOSED = 'DRAWER_CLOSED'
export const DRAWER_MINI = 'DRAWER_MINI'
export const DRAWER_OPEN = 'DRAWER_OPEN'

const defaultSnackbar = {
  enabled: false,
  color: '',
  text: '',
  timeout: -1,
}

export default new Vuex.Store({
  state: {
    appDrawer: DRAWER_MINI,
    snackbar: {...defaultSnackbar},
  },
  getters: {},
  mutations: {
    [CHANGE_APP_DRAWER_MUTATION](state, value) {
      Vue.set(state, 'appDrawer', value)
    },
    [ALERT_APP_MUTATION](state, {enabled, color, text, timeout}) {
      Vue.set(state, 'snackbar', {enabled, color, text, timeout})
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
    [ALERT_APP_ACTION]({commit, dispatch}, {enabled = true, color = 'green', text = '', timeout = 4000}) {
      commit(ALERT_APP_MUTATION, {enabled, color, text, timeout})
      dispatch(CLEAR_ALERT_APP_ACTION, timeout + 200)
    },
    [CLEAR_ALERT_APP_ACTION]({commit}, milliseconds = 100) {
      setTimeout(() => commit(ALERT_APP_MUTATION, {...defaultSnackbar}), milliseconds)
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
