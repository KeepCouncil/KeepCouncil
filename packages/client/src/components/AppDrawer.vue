<template>
  <v-layout>
    <v-navigation-drawer
      app
      dark
      disable-resize-watcher
      :expand-on-hover="appDrawer === DRAWER_MINI"
      :mini-variant.sync="syncForMini"
      :permanent="appDrawer !== DRAWER_CLOSED"
      :value="appDrawer !== DRAWER_CLOSED"
      color="accent"
    >
      <v-list class="py-0">
        <v-list-item
          to="/"
          :ripple="false"
        >
          <v-list-item-icon class="mr-4">
            <v-img
              alt="KeepCouncil Logo"
              contain
              :src="require('../assets/logo.svg')"
              width="24"
            />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-h5 font-weight-black">KeepCouncil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon class="mr-4">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-subtitle-2">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { DRAWER_CLOSED, DRAWER_MINI } from '../store'

export default Vue.extend({
  name: 'AppDrawer',
  data: () => ({
    syncForMini: true,
    items: [
      { title: 'Town', icon: 'mdi-home-city', to: '/towns' },
      { title: 'District', icon: 'mdi-vector-intersection', to: '/districts' },
      { title: 'Councilor', icon: 'mdi-account-tie-woman', to: '/councilors' },
      { title: 'Bill', icon: 'mdi-vote', to: '/bills' },
    ],
    DRAWER_CLOSED,
    DRAWER_MINI,
  }),
  computed: {
    ...mapState(['appDrawer']),
  },
  watch: {
    appDrawer: {
      immediate: true,
      handler() {
        this.syncForMini = this.appDrawer === DRAWER_MINI
      }
    }
  }
})
</script>
