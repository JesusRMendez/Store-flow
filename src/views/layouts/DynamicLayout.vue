<template>
  <component :is="layout"></component>
</template>

<script>
import EmptyLayout from './EmptyLayout.vue'
import MainLayout from './MainLayout.vue'

export default {
  name: 'DynamicLayout',
  components: {
    EmptyLayout,
    MainLayout,
  },
  computed: {
    layout() {
      return this.userAuthenticated ? 'MainLayout' : 'EmptyLayout'
    },
  },
}
</script>
