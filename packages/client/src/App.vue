<template>
  <v-app>
    <top-bar/>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import TopBar from './components/TopBar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    TopBar
  },
  data: () => ({
    //
  }),
})
</script>
