// This file is only for Wrapper Routes
// Import differents routes
import example from './example'

const routes = [{
        path: '/',
        meta: {
            authorization: {
                authenticated: true,
            },
        },
        component: () =>
            import ('@/views/layouts/DynamicLayout.vue'),
        children: [{
                path: '',
                name: 'home',
                component: () =>
                    import ('@/views/Home.vue'),
            },
            ...example,
        ],
    },
    {
        path: '*',
        redirect: { name: 'home' },
    },
]

export default routes