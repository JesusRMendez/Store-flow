import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import { NODE_ENV } from '@/config'

//This modules is always registered
import appModule, { name as appModuleName } from '@/modules/app/store'
import commonModule, { name as commonModuleName } from '@/modules/common/store'
import userModule, { name as userModuleName } from '@/modules/user/store'

export const modulesName = {
    appModuleName: appModuleName,
    commonModuleName: commonModuleName,
    userModuleName: userModuleName
}

Vue.use(Vuex)

const debug = NODE_ENV !== 'production'

export default new Vuex.Store({
    strict: debug,
    modules: {
        [appModuleName]: appModule,
        [commonModuleName]: commonModule,
        [userModuleName]: userModule
    },
    plugins: debug ? [createLogger()] : [],
})