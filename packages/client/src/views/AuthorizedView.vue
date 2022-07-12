<template>
  <div class="authorized">
    <h1>Must be logged in to see this view.</h1>
    <div>
      <h4>User Data:</h4>
      <p>{{ JSON.stringify($auth.user, null, 2) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
