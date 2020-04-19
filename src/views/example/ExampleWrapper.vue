<template>
  <router-view />
</template>

<script>
import store, { name } from '@/modules/example/store'

export default {
  name: 'ExampleWrapper',
  created() {
    this.$store.registerModule(name, store)
  },
  destroyed() {
    this.$store.unregisterModule(name)
  },
}
</script>
