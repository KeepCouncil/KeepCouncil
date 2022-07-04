<template>
  <div id="game"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<style scoped>
#game {
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: slateblue;
}
</style>