import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './Auth'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/veeValidate'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
