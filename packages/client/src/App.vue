<template>
  <v-app>
    <app-drawer/>
    <top-bar/>

    <v-layout fill-height>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import TopBar from './components/TopBar.vue'
import AppDrawer from './components/AppDrawer.vue'

export default Vue.extend({
  name: 'App',
  components: {
    TopBar,
    AppDrawer
},
  data: () => ({
    //
  }),
})
</script>

<style lang="scss">
@import './assets/css/global.scss'

</style>
