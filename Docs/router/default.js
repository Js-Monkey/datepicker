export default [
    {
        path: '/components/install',
        name: '安装',
        meta: {
            type:'compass'
        },
        component: () => import('../view/install/index.md')
    },
    {
        path: '/components/start',
        name: '开始',
        meta: {
            type:'compass'
        },
        component: () => import('../view/start/index.md')
    }
]
