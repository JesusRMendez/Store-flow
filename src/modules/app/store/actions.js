import types from './types';
export default {
    async setLoading({ commit }, isLoading) {
        commit(types.SET_LOADING, isLoading);
    }
}