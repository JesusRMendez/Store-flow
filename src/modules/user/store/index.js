import { state } from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export const name = '$_user'

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
