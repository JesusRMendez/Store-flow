<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { modulesName } from '@/store'
// import loading  from '@/mixins/vue-loading';

export default {
  name: 'App',
  // mixins:[loading],
  computed: {
    ...mapState(modulesName.appModuleName, ['loading']),
  },
  watch: {
    loading: {
      immediate: true,
      handler(val) {
         val === true// ? this.ShowWait() : this.HideWait();
      }
    }
  }
}
</script>
