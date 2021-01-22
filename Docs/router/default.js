export default [
    {
        path: '/picker/install',
        name: '安装',
        meta: {
            type:'compass'
        },
        component: () => import('../view/install/index.md')
    },
    {
        path: '/picker/start',
        name: '开始',
        meta: {
            type:'compass'
        },
        component: () => import('../view/start/index.md')
    }
]
