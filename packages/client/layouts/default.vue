<template>
  <VApp>
    <VLayout fill-height>
      <client-only>
        <VNavigationDrawer
          app
          v-if="!xs"
          v-model="store.appDrawer"
          :scrim="false"
          temporary
          color="grey-darken-2"
        >
          NavDrawer
        </VNavigationDrawer>
        <VSystemBar
          app
          v-if="false"
          height="20"
        />
        <VAppBar
          app
          color="grey-lighten-2"
          height="50"
          width="100%"
        >
          AppBar
        </VAppBar>
      </client-only>
      <VMain>
        <VContainer
          fluid
        >
          <slot />
        </VContainer>
      </VMain>
      <client-only>
        <VFooter
          app
          v-if="!xs"
          color="grey-lighten-1"
          height="20"
        >
          Footer
        </VFooter>
        <VBottomNavigation
          app
          v-if="xs"
          color="grey-lighten-2"
          height="50"
        >
          BottomNav
        </VBottomNavigation>
      </client-only>
    </VLayout>
  </VApp>
</template>

<script setup>
import { useGlobalStore } from '../stores/global'
import { useDisplay } from 'vuetify'

const store = useGlobalStore()
const { xs } = useDisplay()

</script>
