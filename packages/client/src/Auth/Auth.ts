
import Vue from 'vue'
import { api, apiUrl, setTokenInAxiosHeader, removeTokenInAxiosHeader } from '../Api'
import createAuth0Client from '@auth0/auth0-spa-js'

/** Define a default action to perform after authentication */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DEFAULT_REDIRECT_CALLBACK = (_o: any) =>
  window.history.replaceState({}, document.title, window.location.pathname)

let instance: any

/** Returns the current instance of the SDK */
export const getInstance = () => instance

/** Creates an instance of the Auth0 SDK. If one has already been created, it returns that instance */
export const useAuth0 = ({
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  redirectUri = window.location.origin,
  ...options
}) => {
  if (instance) return instance

  // The 'instance' is simply a Vue object
  instance = new Vue({
    data() {
      return {
        loading: true,
        isAuthenticated: false,
        user: {},
        auth0Client: null,
        popupOpen: false,
        error: null,
      }
    },
    methods: {
      /** Authenticates the user using a popup window */
      async loginWithPopup(o: any) {
        this.popupOpen = true

        try {
          await this.auth0Client.loginWithPopup(o)
        } catch (e) {
          // eslint-disable-next-line
          console.error(e);
        } finally {
          this.popupOpen = false
        }

        this.user = await this.getUserWithProfile()
        this.isAuthenticated = true
      },
      /** Handles the callback when logging in using a redirect */
      async handleRedirectCallback() {
        this.loading = true
        try {
          await this.auth0Client.handleRedirectCallback()
          this.user = await this.getUserWithProfile()
          this.isAuthenticated = true
        } catch (e) {
          this.error = e
        } finally {
          this.loading = false
        }
      },
      /** Authenticates the user using the redirect method */
      loginWithRedirect(o: any) {
        return this.auth0Client.loginWithRedirect(o)
      },
      /** Returns all the claims present in the ID token */
      getIdTokenClaims(o: any) {
        return this.auth0Client.getIdTokenClaims(o)
      },
      /** Returns the access token. If the token is invalid or missing, a new one is retrieved */
      async getTokenSilently(o: any) {
        return this.auth0Client.getTokenSilently(o)
      },
      /** Gets the access token using a popup window */
      getTokenWithPopup(o: any) {
        return this.auth0Client.getTokenWithPopup(o)
      },
      /** Logs the user out and removes their session on the authorization server */
      logout(o: any) {
        removeTokenInAxiosHeader()
        return this.auth0Client.logout(o)
      },
      /** Get both the user identity object from Auth0 and also the User Profile from keepcouncil API */
      async getUserWithProfile() {
        let profile
        const user = await this.auth0Client.getUser()

        if (user) {
          const token = await this.getTokenSilently()
          profile = (await api.get(apiUrl() + `users/${user.sub}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })).data?.payload

          if (!profile) {
            profile = (await api.post(apiUrl() + 'users', {
                username: user.nickname,
                email: user.email,
                authId: user.sub,
                profilePictureUrl: user.picture
              }, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            )).data?.payload
          }
          setTokenInAxiosHeader(token)
        }

        return {...user, ...profile}
      },
    },
    /** Use this lifecycle method to instantiate the SDK client */
    async created() {
      // Create a new instance of the SDK client using members of the given options object
      this.auth0Client = await createAuth0Client({
        domain: options.domain,
        client_id: options.clientId,
        audience: options.audience,
        redirect_uri: redirectUri,
        cacheLocation: 'localstorage',
      })

      try {
        // If the user is returning to the app after authentication..
        if (
          window.location.search.includes('code=') &&
          window.location.search.includes('state=')
        ) {
          // handle the redirect and retrieve tokens
          const { appState } = await this.auth0Client.handleRedirectCallback()

          // Notify subscribers that the redirect callback has happened, passing the appState
          // (useful for retrieving any pre-authentication state)
          onRedirectCallback(appState)
        }
      } catch (e) {
        this.error = e
      } finally {
        // Initialize the internal authentication state
        this.isAuthenticated = await this.auth0Client.isAuthenticated()
        this.user = await this.getUserWithProfile()
        this.loading = false
      }
    },
  })

  return instance
}

// Create a simple Vue plugin to expose the wrapper object throughout the application
export const Auth0Plugin = {
  install(Vue: any, options: any) {
    Vue.prototype.$auth = useAuth0(options)
  },
}
