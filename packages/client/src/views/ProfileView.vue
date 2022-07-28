<template>
  <v-container>
    <v-row class="no-gutters my-4 justify-center">
      <v-skeleton-loader
        v-if="!profile"
        width="320"
        type="card"
      ></v-skeleton-loader>
      <v-card
        v-else
        elevation="2"
      >
        <v-card-title class="text-h5">
          User Information
        </v-card-title>

        <v-card-text>
          <user-avatar-icon
            :user="profile"
            large
            class="mb-4"
          />
          <v-text-field
            :value="profile.username"
            label="Username"
            readonly
          />
          <v-select
              v-model="roles"
              :items="roles"
              attach
              chips
              label="Roles"
              multiple
              readonly
          />
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { api, apiUrl } from '../Api'
import UserAvatarIcon from '../components/UserAvatarIcon.vue'

export default Vue.extend({
  components: { UserAvatarIcon },
  name: 'Profile',
  data() {
    return {
      profile: null as any,
    }
  },
  computed: {
    roles() {
      return this.profile.roles ?? []
    }
  },
  async created() {
    // example test@example.com id for testing
    // auth0|62c343456456hgfjbe89a796
    this.profile = (await api.get(apiUrl() + `users/${this.$route.params.id}`))?.data?.payload
  },
})
</script>
