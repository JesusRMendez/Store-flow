import types from './types'
import { getUser, login as _login, logout as _logout } from '@/core/auth'
// import { getUserMenu, getAdditionalProfileInfo } from '../api'

export default {
    async init({ state, commit }) {
        try {
            // Recommend not mandatory
            // (Call this one action to load all settings later user is authenticated)
            const user = await getUser()
            commit(types.SET_USER, user)

            if (
                state.user &&
                (!state.userMenu || !state.permissions)
            ) {
                // const [userMenu, additionalProfileInfo] = await Promise.all([
                //     await getUserMenu(),
                //     await getAdditionalProfileInfo(),
                // ])

                // if (userMenu && userMenu.length) {
                //     commit(types.SET_MENU, userMenu)
                //         //For persisted
                //     sessionStorage.setItem('user-menu', JSON.stringify(userMenu))
                // }

                // if (additionalProfileInfo) {
                //     const { permissions } = additionalProfileInfo

                //     commit(types.SET_PERMISSIONS, permissions)
                //     sessionStorage.setItem(
                //         'user-permissions',
                //         JSON.stringify(permissions)
                //     )
                // }
            }
        } catch {
            commit(types.SET_USER, null)
            commit(types.SET_MENU, null)
            commit(types.SET_PERMISSIONS, null)

            sessionStorage.removeItem('user-menu')
            sessionStorage.removeItem('user-permissions')
        }
    },

    login() {
        _login()
    },

    logout() {
        sessionStorage.removeItem('user-menu')
        sessionStorage.removeItem('user-permissions')
        _logout()
    },
}