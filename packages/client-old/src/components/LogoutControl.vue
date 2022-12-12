<template>
  <div class="text-center">
    <v-menu
      v-model="logoutMenu"
      :close-on-content-click="false"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
          <user-avatar-icon
            :user="$auth.user"
            small
          />
        </v-btn>
      </template>
      <v-card elevation="2">
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <user-avatar-icon
                :user="$auth.user"
                small
                link-to-profile
              />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ $auth.user.username }}</v-list-item-title>
              <v-list-item-subtitle>{{ $auth.user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn
            depressed
            @click="logoutUser"
          >
            LOGOUT
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserAvatarIcon from './UserAvatarIcon.vue'

export default Vue.extend({
  name: 'LogoutControl',
  components: { UserAvatarIcon },
  data() {
    return {
      logoutMenu: false
    }
  },
  methods: {
    logoutUser() {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    }
  }
})
</script>
