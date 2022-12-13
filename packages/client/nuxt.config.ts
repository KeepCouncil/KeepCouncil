import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/global.scss',
  ],
  build: {
    transpile: [
      'vuetify',
    ],
  },
  modules: [
    '@pinia/nuxt',
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})