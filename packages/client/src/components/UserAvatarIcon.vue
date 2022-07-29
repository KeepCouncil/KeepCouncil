<template>
  <v-avatar
    :size="iconSize"
    @click="avatarClicked"
    :class="{'cursor-pointer': linkToProfile}"
  >
    <img v-if="user.profilePictureUrl"
      :lazy-src="require('../assets/defaultAvatar.svg')"
      :src="user.profilePictureUrl"
      :alt="user.username"
    >
    <v-icon v-else
      dark
    >
      mdi-account-circle
    </v-icon>
  </v-avatar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserAvatar',
  props: {
    user: {
      type: Object,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    linkToProfile: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    avatarClicked() {
      if (this.linkToProfile) {
        if (this.$auth?.user && this.$auth.user.sub === this.user.authId) {
          this.$router.push(`/me`)
          return
        }
        this.$router.push(`/profile/${this.user.id}`)
        return
      }
    }
  },
  computed: {
    iconSize() {
      if (this.small) {
        return 24
      } else if (this.large) {
        return 96
      } else {
        return 48
      }
    },
  },
})
</script>
