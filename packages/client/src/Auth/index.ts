import Vue from 'vue'
import router from '../router'
import authConfig from '../../auth_config.json'
import { Auth0Plugin } from './Auth'

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain: authConfig.domain,
  clientId: authConfig.clientId,
  onRedirectCallback: (appState: { targetUrl: any }) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    )
  },
})
