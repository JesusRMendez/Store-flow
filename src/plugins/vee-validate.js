// import Vue from 'vue'
// import {
//     ValidationProvider,
//     ValidationObserver,
//     extend,
//     localize,
//     setInteractionMode,
// } from 'vee-validate'
// import es from 'vee-validate/dist/locale/es.json'
// import { required, email } from 'vee-validate/dist/rules'

// Vue.component('validation-provider', ValidationProvider)
// Vue.component('validation-observer', ValidationObserver)

// localize('es', es)

// extend('required', required)
// extend('email', email)
// extend('url', {
//     validate: (str) => {
//         var pattern = new RegExp(
//                 '^(https?:\\/\\/)?' + // protocol
//                 '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//                 '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//                 '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//                 '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//                 '(\\#[-a-z\\d_]*)?$',
//                 'i'
//             ) // fragment locator
//         return !!pattern.test(str)
//     },
//     message: 'No es una URL válida',
// })
// setInteractionMode('eager')