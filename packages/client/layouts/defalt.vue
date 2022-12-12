<template>
  <v-app>
    <v-layout fill-height>
      <v-main>
        <slot />
      </v-main>
    </v-layout>

    <v-snackbar
      app
      :value="store.snackbar.enabled"
      :timeout="store.snackbar.timeout"
      :color="store.snackbar.color"
      bottom
      right
    >
      {{ store.snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="accent"
          text
          v-bind="attrs"
          @click="store.clearAlertAppAction()"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../stores/global'
const store = useGlobalStore()
</script>
