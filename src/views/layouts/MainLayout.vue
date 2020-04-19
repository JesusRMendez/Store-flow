<template>
  <div class="container-fluid">
    <!-- Page Content -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
// import { mapActions, mapState } from 'vuex'
// import { name as userModuleName } from '@/modules/user/store/'

export default {
  name: 'MainLayout',
  components: {

  },
  computed: {
    //MapState (Menu if you want)
  },
  mounted() {
    window.location.hash = ''
  },
  methods: {
    // ...mapActions(userModuleName, ['logout']),
  },
}
</script>
