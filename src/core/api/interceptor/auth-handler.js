import store, { modulesName } from '@/store'

export const authHandler = (config) => {
        if (store.getters[`${modulesName.userModuleName}/authenticated`]) {
            config.headers.Authorization = `${
        store.getters[`${modulesName.userModuleName}/tokenType`]
      } ${store.getters[`${modulesName.userModuleName}/accessToken`]}`
    } else {
      config.headers.Authorization = undefined
    }
}