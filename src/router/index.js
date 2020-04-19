import Vue from 'vue'
import VueRouter from 'vue-router'
import { BASE_URL } from '@/config'
import routes from './routes'
import { applyEvents } from './events'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: BASE_URL,
    routes,
})

applyEvents(router)

export default router