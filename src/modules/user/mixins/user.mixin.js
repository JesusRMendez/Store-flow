import store, { modulesName } from '@/store'

export const userMixin = {
    computed: {
        userAuthenticated() {
            return store.getters[`${modulesName.userModuleName}/authenticated`]
        },
        userRole() {
            return store.getters[`${modulesName.userModuleName}/role`]
        },
    },
    methods: {
        userHasPermissions(...permissions) {
            return store.getters[`${modulesName.userModuleName}/hasPermissions`](
                permissions
            )
        },
    },
}