<template>
  <v-app-bar
    elevation="6"
    app
    dark
    height="56"
    class="color-background-primary"
  >
    <v-app-bar-nav-icon
      color="accent"
      @click="toggleAppDrawer"
    />

    <v-toolbar-title class="pl-0">Florissant</v-toolbar-title>

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
import { TOGGLE_APP_DRAWER_ACTION } from '../store'

export default Vue.extend({
  name: 'TopBar',
  components: {
    LoginControl,
    LogoutControl
  },
  methods: {
    toggleAppDrawer() {
      this.$store.dispatch(TOGGLE_APP_DRAWER_ACTION)
    }
  },
})
</script>
