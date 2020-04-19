<template>
  <div>
    Pagina Principal :)
    {{this.user}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { name as userModuleName } from '@/modules/user/store/'

export default {
  name: 'Home',
   computed: {
    ...mapState(userModuleName, ['user']),
  },
}
</script>
