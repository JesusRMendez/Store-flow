import { UserManager, WebStorageStateStore } from 'oidc-client'
import { AUTH } from '@/config'

const userManager = new UserManager({
    authority: AUTH.AUTHORITY,
    automaticSilentRenew: true,
    client_id: AUTH.CLIENT_ID,
    filterProtocolClaims: true,
    post_logout_redirect_uri: AUTH.POST_LOGOUT_REDIRECT_URI,
    redirect_uri: AUTH.REDIRECT_URI,
    response_type: AUTH.RESPONSE_TYPE,
    scope: AUTH.SCOPE,
    silent_redirect_uri: AUTH.SILENT_REDIRECT_URI,
    userStore: new WebStorageStateStore({ store: window.sessionStorage }),
})

export const getUser = () => {
    return userManager.getUser()
}

export const login = () => {
    return userManager.signinRedirect()
}

export const logout = () => {
    // return userManager.signoutRedirect()
    return userManager.removeUser();
}