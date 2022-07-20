<template>
  <v-avatar
    :size="iconSize"
    @click="avatarClicked"
  >
    <img v-if="user.profilePictureUrl"
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
    linkToProfile: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    avatarClicked() {
      if (this.linkToProfile) {
        this.$router.push(`/profile/${this.user.id}`)
      }
    }
  },
  computed: {
    iconSize() {
      return this.small ? 24 : 48
    },
  },
})
</script>
