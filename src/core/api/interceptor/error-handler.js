import { NODE_ENV } from '@/config'

export const requestErrorHandler = () => {
  // toast
}

export const responseErrorHandler = (error) => {
  if (error.isAxiosError) {
    if (!error.response) {
      // toast
    }

    const { data, status } = error.response
    const { errors, title } = data

    if (status === 400) {
      // toast

      if (NODE_ENV !== 'production') {
        /* eslint-disable no-debugger, no-console */
        console.group('response')
        console.log(title)
        console.log(errors)
        console.groupEnd()
      }
    }

    if (status === 401) {
      // userStore.logOut()
    }

    if (status === 500) {
      //
    }
    throw error
  }
}
