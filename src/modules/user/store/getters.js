export default {
    authenticated: ({ user }) => (user === null ? false : !user.expired),

    accessToken: ({ user }) => (user === null ? null : user.access_token),

    tokenType: ({ user }) => (user === null ? null : user.token_type),

    expiresAt: ({ user }) => (user === null ? null : user.expires_at),

    role: ({ user }) => (user === null ? null : user.profile.role),

    profile({ user }) {
        if (user === null) {
            return null
        }
        const { name, sub } = user.profile
        return {
            id: sub,
            name,
        }
    },

    hasPermissions: ({ permissions }) => (_permissions) =>
        permissions && permissions.length ?
        permissions.some((permission) => _permissions.includes(permission)) :
        false,
}