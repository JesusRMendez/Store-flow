const _env = process.env

export const NODE_ENV = _env.NODE_ENV

export const BASE_URL = _env.BASE_URL

//Configuraciones para authenticacion
export const AUTH = {
    AUTHORITY: _env.VUE_APP_URL_AUTH,
    CLIENT_ID: _env.VUE_APP_CLIENT_ID,
    POST_LOGOUT_REDIRECT_URI: _env.VUE_APP_POST_LOGOUT_REDIRECT_URI,
    REDIRECT_URI: _env.VUE_APP_REDIRECT_URI,
    RESPONSE_TYPE: _env.VUE_APP_RESPONSE_TYPE,
    SILENT_REDIRECT_URI: _env.VUE_APP_SILENT_REDIRECT_URI,
    SCOPE: _env.VUE_APP_SCOPE,
}

export const API = {
    BASE_URL: _env.VUE_APP_URL_API,
    TIMEOUT: 30000,
}

export const ACR_URL_LOGOUT = _env.VUE_APP_ACR_URL_LOGOUT
export const ACR_VALUES = _env.VUE_APP_ACR_VALUES
    // export const CLIENT_ID = ENV.VUE_APP_CLIENT_ID
    // export const CLIENT_SECRET = ENV.VUE_APP_CLIENT_SECRET
    // export const CODE_CHALLENGE = ENV.VUE_APP_CODE_CHALLENGE
    // export const CODE_CHALLENGE_METHOD = ENV.VUE_APP_CODE_CHALLENGE_METHOD
export const DEFAULT_PAGE_SIZE = _env.VUE_APP_DEFAULT_PAGE_SIZE
    // export const GRANT_TYPE = ENV.VUE_APP_GRANT_TYPE
    // export const NONCE = ENV.VUE_APP_NONCE
    // export const REDIRECT_URI = ENV.VUE_APP_REDIRECT_URI
    // export const RESPONSE_TYPE = ENV.VUE_APP_RESPONSE_TYPE
    // export const SCOPE = ENV.VUE_APP_SCOPE
export const SESSION_TIMEOUT = _env.VUE_APP_SESSION_TIMEOUT
    // export const URL_API = ENV.VUE_APP_URL_API
    // export const URL_AUTH = ENV.VUE_APP_URL_AUTH