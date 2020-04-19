const routes = [{
    path: 'example',
    component: () =>
        import ('@/views/example/ExampleWrapper.vue'),
    children: [{
        path: 'example',
        name: 'example1',
        component: () =>
            import ('@/views/example/example1/Example1.vue'),
    }, ],
}, ]

export default routes