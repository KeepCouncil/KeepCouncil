import Vue from 'vue'
import router from '../router'
import { useAuth0, getInstance, Auth0Plugin } from './Auth'
import { authGuard } from './AuthGuard'

const AUTH_DOMAIN = process.env.VUE_APP_AUTH_DOMAIN
const AUTH_AUDIENCE = process.env.VUE_APP_AUTH_AUDIENCE
const AUTH_CLIENT_ID = process.env.VUE_APP_AUTH_CLIENT_ID

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain: AUTH_DOMAIN,
  clientId: AUTH_CLIENT_ID,
  audience: AUTH_AUDIENCE,
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
