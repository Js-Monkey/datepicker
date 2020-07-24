import Main from '../components/main/main.vue'
import Content from '../components/content'

const viewFiles = require.context('../view', true)
const views = viewFiles.keys().reduce((views, path) => {
    const value = viewFiles(path).default
    if (['404', '500'].indexOf(value.name) === -1) {
        const viewPath = value.__file.replace(/^Docs/, '..')
        let name = value.__file.replace(/${view}(.*?)${index}/,)
        console.log(name)
        views.push({
            path: '/components/' + name,
            name,
            component: () => import(viewPath)
        })
    }
    return views
}, [])

console.log(views)
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
