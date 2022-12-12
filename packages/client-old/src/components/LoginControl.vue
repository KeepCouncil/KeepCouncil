<template>
  <div class="text-center">
    <v-btn
      small
      color="accent"
      @click="$auth.loginWithRedirect"
    >
      SIGN IN
    </v-btn>
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
