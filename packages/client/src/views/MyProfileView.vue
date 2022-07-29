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
        min-width="320"
        elevation="2"
      >
        <validation-observer ref="observer">
          <form @submit.prevent="submit">
            <v-card-title class="text-h5">
              My Profile
            </v-card-title>

            <v-card-text>
              <user-avatar-icon
                :user="profile"
                large
                class="mb-4"
              />
              <validation-provider
                v-slot="{ errors }"
                name="profilePictureUrl"
                rules="required"
              >
                <v-text-field
                  v-model="profilePictureUrl"
                  label="Profile Picture URL"
                  :error-messages="errors"
                  required
                />
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="username"
                rules="required"
              >
                <v-text-field
                  v-model="username"
                  label="Username"
                  :error-messages="errors"
                  required
                />
              </validation-provider>
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

            <v-card-actions>
              <v-spacer/>
              <v-btn
                color="primary"
                text
                type="submit"
              >
                Save
              </v-btn>
            </v-card-actions>
          </form>
        </validation-observer>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { api, apiUrl } from '../Api'
import UserAvatarIcon from '../components/UserAvatarIcon.vue'
import { ALERT_APP_ACTION } from '../store'

export default Vue.extend({
  components: { UserAvatarIcon },
  name: 'Me',
  data() {
    return {
      profile: null as any,
      profilePictureUrl: null,
      username: null,
    }
  },
  computed: {
    roles() {
      return this.profile.roles ?? []
    },
  },
  methods: {
    async submit() {
      const isValid = await this.$refs?.observer?.validate()
      if (isValid) {
        const updatedUserObject = {
          username: this.username,
          profilePictureUrl: this.profilePictureUrl,
        }
        await api.put(apiUrl() + `users/${this.$auth.user.sub}`, updatedUserObject)
        this.$store.dispatch(ALERT_APP_ACTION, {
          enabled: true,
          color: 'success',
          text: 'Profile has been updated.',
          timeout: 4000,
        })
      }
    },
  },
  async created() {
    this.profile = (await api.get(apiUrl() + `users/${this.$auth.user.sub}`))?.data?.payload
    this.profilePictureUrl = this.profile.profilePictureUrl
    this.username = this.profile.username
  },
})
</script>
