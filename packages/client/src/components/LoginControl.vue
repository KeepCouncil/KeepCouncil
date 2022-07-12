<template>
  <div class="text-center">
    <v-menu
      v-model="loginMenu"
      :close-on-content-click="false"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-card elevation="2">
        <v-card-actions>
          <v-btn
            depressed
            color="primary"
            @click="$auth.loginWithRedirect"
          >
            LOGIN
          </v-btn>

          <v-btn
            depressed
            @click="loginMenu = false"
          >
            CANCEL
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginControl',
  data: () => ({
    loginMenu: false
  })
})
</script>
