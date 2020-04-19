import Vue from 'vue'

Vue.config.errorHandler = (error) => {
  /* eslint-disable no-debugger, no-console */
  console.error(error)
}
