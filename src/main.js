//Basic Imports
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


// plugins
// import './plugins/vee-validate'
import './plugins/vue-meta'
// import './plugins/boostrap-vue'

// core
import './core/vue/error-handler'

// core
import './core/vue/error-handler'

// Imports mixins
import { userMixin } from '@/modules/user/mixins/user.mixin'

//Assigns
Vue.mixin(userMixin)

//Theme sass
import './sass/style.scss'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')