<template>
  <v-sheet
    color="white"
    elevation="1"
    height="100"
    width="100"
  >
    <p>{{ JSON.stringify($auth.user, null, 2) }}</p>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Profile',
})
</script>
