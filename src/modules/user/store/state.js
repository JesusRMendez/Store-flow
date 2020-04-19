const _state = {
    permissions: sessionStorage.getItem('user-permissions') ?
        JSON.parse(sessionStorage.getItem('user-permissions')) :
        null,
    user: null,
    userMenu: sessionStorage.getItem('user-menu') ?
        JSON.parse(sessionStorage.getItem('user-menu')) :
        null,
}

export const initialState = () => _state

export const state = initialState()