<template>
      <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <div v-if="!$auth.loading">
        <login-control v-if="!$auth.isAuthenticated"/>
        <logout-control v-else/>
      </div>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import LoginControl from './LoginControl.vue'
import LogoutControl from './LogoutControl.vue'

export default Vue.extend({
  name: 'TopBar',
  components: {
    LoginControl,
    LogoutControl
  }
})
</script>
