<template>
  <VApp>
    <VLayout fill-height>
      <VNavigationDrawer
        app
        v-model="store.appDrawer"
        :scrim="false"
        absolute
        temporary
        color="grey-darken-2"
      >
        NavDrawer
      </VNavigationDrawer>
      <VSystemBar
        app
        height="20"
      >
        SysBar
      </VSystemBar>
      <VAppBar
        app
        color="grey-lighten-2"
        height="50"
      >
        AppBar
      </VAppBar>
      <VMain>
        <VContainer
          fluid
        >
          <slot />
        </VContainer>
      </VMain>
      <VFooter
        app
        color="grey-lighten-1"
        height="20"
      >
        Footer
      </VFooter>
      <VBottomNavigation
        app
        color="grey-lighten-2"
        height="50"
      >
        BottomNav
      </VBottomNavigation>
    </VLayout>
  </VApp>
</template>

<script setup>
import { useGlobalStore } from '../stores/global'
const store = useGlobalStore()
</script>
