<template>
  <v-app>
    <app-drawer/>
    <top-bar/>

    <v-layout fill-height>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>

    <v-snackbar
      app
      :value="snackbar.enabled"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      bottom
      right
    >
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="accent"
          text
          v-bind="attrs"
          @click="closeSnackbar"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import TopBar from './components/TopBar.vue'
import AppDrawer from './components/AppDrawer.vue'
import { mapState } from 'vuex'
import { CLEAR_ALERT_APP_ACTION } from './store'

export default Vue.extend({
  name: 'App',
  components: {
    TopBar,
    AppDrawer
},
  data: () => ({
    //
  }),
  methods: {
    closeSnackbar() {
      this.$store.dispatch(CLEAR_ALERT_APP_ACTION)
    }
  },
  computed: {
    ...mapState(['snackbar']),
  },
})
</script>

<style lang="scss">
@import './assets/css/global.scss'

</style>
