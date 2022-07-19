import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#4040FB',
        secondary: '#978AB5',
        accent: '#332C49',
        // white: '#FDF6FF'
        white: '#FFFFFF'
      },
    },
  },
})
