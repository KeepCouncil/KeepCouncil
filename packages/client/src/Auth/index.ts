import Vue from 'vue'
import router from '../router'
import authConfig from '../../auth_config.json'
import { useAuth0, getInstance, Auth0Plugin } from './Auth'
import { authGuard } from './AuthGuard'

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

export {
  useAuth0,
  getInstance,
  authGuard,
  Auth0Plugin
}
