import store, { modulesName } from '@/store'

export const applyEvents = (router) => {
  router.beforeEach(async (to, _, next) => {
    await store.dispatch(`${modulesName.userModuleName}/init`)

    const meta = to.matched
      .filter((x) => x.meta)
      .map((x) => x.meta)
      .reduce((x, y) => ({ ...x, ...y }), {})
    if (meta.authorization) {
      if (meta.authorization.authenticated === true) {
        if (!store.getters[`${modulesName.userModuleName}/authenticated`]) {
          store.dispatch(`${modulesName.userModuleName}/login`)
        }
      }

      if (meta.authorization.authenticated === false) {
        if (store.getters[`${modulesName.userModuleName}/authenticated`]) {
          return next({ name: 'home' })
        }
      }
    }
    return next()
  })
}
