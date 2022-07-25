<template>
  <v-container>
    <v-row>
      <div class="text-h6">
        Profile
      </div>
    </v-row>
    <v-row fill-height>
      <v-col
        cols="12"
      >
        <v-sheet
          color="white"
          elevation="2"
          height="100%"
          width="100%"
        >
          <p>{{ JSON.stringify(profile, null, 2) }}</p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { api, apiUrl } from '../Api'

export default Vue.extend({
  name: 'Profile',
  data() {
    return {
      loading: true,
      profile: null,
    }
  },
  methods: {
    async getProfile(userId: string) {
      this.profile = (await api.get(apiUrl() + `users/${userId}`))?.data?.payload
      this.loading = false
    }
  },
  created() {
    // auth0|62c343456456hgfjbe89a796
    this.getProfile(this.$route.params.id)
  }
})
</script>
