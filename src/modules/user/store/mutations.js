import types from './types'

export default {
    [types.SET_USER](state, user) {
        state.user = user
    },

    [types.SET_MENU](state, userMenu) {
        state.userMenu = userMenu
    },

    [types.SET_PERMISSIONS](state, permissions) {
        state.permissions = permissions
    },
}