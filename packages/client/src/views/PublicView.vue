<template>
<div class="public">
    <h1>Public User view</h1>
    <div>
      <h4>Request to unprotected API user resources:</h4>
      <div
        v-for="user of users"
        :key="user.id"
      >
        <div>
          {{ `${user.id}:${user.username},${user.email}` }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { api, apiUrl } from '../Api'

interface User {
  id: number,
  username: string,
  email: string,
}

export default Vue.extend({
  data: () => ({
    users: [] as User[]
  }),
  methods: {
    async getUsers() {
      const users = (await api.get(apiUrl() + 'users'))?.data?.payload
      this.users = users ?? []
    }
  },
  mounted() {
    this.getUsers()
  }
})
</script>