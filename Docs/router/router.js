import Main from '../components/main/main.vue'
import Content from '../components/content'

const viewFiles = require.context('../view', true)
const views = viewFiles.keys().reduce((views, path) => {
    const value = viewFiles(path).default
    const isNotErrorPage = ['404','500'].indexOf(value.name) === -1
    const isNotCompass = !/start|install/g.test(value.__file)
    if (isNotErrorPage&&isNotCompass) {
        let name = value.__file.match(/view\/(\S*)\/index/)[1]
        views.push({
            path: '/components/' + name,
            meta:{
              type:'component'
            },
            name,
            component: () => import(`../view/${name}/index.md`)
        })
    }
    return views
}, [
    {
        path: '/install',
        name: '安装',
        meta: {
            type:'compass'
        },
        component: () => import('../view/install/index.md')
    },
])

export default [
    {
        path: '/',
        name: 'home',
        component: Main,
        meta: {
            notCache: true
        },
        children: []
    },
    {
        path: '/components',
        name: 'components',
        component: Content,
        redirect: '/components/install',
        children: views
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () => import('../view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () => import('../view/error-page/404.vue')
    }
]
