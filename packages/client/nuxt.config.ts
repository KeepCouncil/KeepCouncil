import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'KeepCouncil',
      meta: [
        { hid: 'description', name: 'description', content: 'Keeping up with your local City Council' },
        { name:'apple-mobile-web-app-capable', content:'yes' },
        { name:'apple-mobile-web-app-status-bar-style', content:'default' },
        { name:'msapplication-TileColor', content:'#da532c' },
        { name:'theme-color', content:'#ffffff' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      ]
    },
  },
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
