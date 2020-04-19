import { errorLoggerWithoutPromise } from 'axios-logger/lib/logger/error'
import { requestLogger, responseLogger } from 'axios-logger'
import { authHandler } from './auth-handler'
import { requestErrorHandler, responseErrorHandler } from './error-handler'
// import store from '@/store'
// import { modulesName } from '@/modules'

export const requestInterceptor = {
    onFulfilled: (config) => {
        // start loading
        // store.dispatch(`${modulesName.appModuleName}/setLoading`, true) //OPTIONAL
        authHandler(config)

        return requestLogger(config)
    },

    onRejected: (error) => {
        // stop loading
        // store.dispatch(`${modulesName.appModuleName}/setLoading`, false) //OPTIONAL
        requestErrorHandler(error)

        return errorLoggerWithoutPromise(error)
    },
}

export const responseInterceptor = {
    onFulfilled(response) {
        // stop loading
        // store.dispatch(`${modulesName.appModuleName}/setLoading`, false) //OPTIONAL
        return responseLogger(response)
    },

    onRejected(error) {
        // stop loading
        // store.dispatch(`${modulesName.appModuleName}/setLoading`, false) //OPTIONAL
        responseErrorHandler(error)

        return errorLoggerWithoutPromise(error)
    },
}