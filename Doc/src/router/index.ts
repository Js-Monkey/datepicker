import {createRouter, createWebHashHistory} from "vue-router"
import Enter from '../components/Enter'
import Document from '../components/Document'

const history = createWebHashHistory()

const routes = [
    {path: '/', component: Enter},
]

function createRoute(lang: string, lists: any[]) {
    const createChild = (list: any) => {
        return {
            path: list.path,
            name: list.name,
            metaName: list.metaName,
            isSecondLevel: list.isSecond,
            component: () => import(`../views/${lang}/${list.path}.md`)
        }
    }
    const i18nRoute = [
        {path: '/' + lang, name: lang, component: Enter},
        {
            path: `/${lang}/doc`,
            component: Document,
            redirect: `/${lang}/doc/start`,
            children: lists.map(list => createChild(list))
        }
    ]
    routes.push(...i18nRoute as any)
}


createRoute('en', [
    {
        name: 'start',
        path: 'start'
    },
    {
        name: 'theme',
        path: 'theme'
    },
    {
        name: 'options',
        path: 'options'
    },
    {
        name: 'type',
        path: 'type',
        isSecond: true
    },
    {
        name: 'method',
        path: 'method'
    },
])
createRoute('zh', [
    {
        name: 'Start',
        path: 'start',
        metaName: '开始'
    },
    {
        name: 'Theme',
        path: 'theme',
        metaName: '主题'
    },
    {
        name: 'Options',
        path: 'options',
        metaName: '配置'
    },
    {
        name: 'Type',
        path: 'type',
        metaName: '类型',
        isSecond: true
    },
    {
        name: 'Method',
        path: 'method',
        metaName: '方法'
    },
])

const router = createRouter({
    history,
    routes
})


router.beforeEach((to, from, next) => {
    const name = localStorage.getItem('lang') || 'en'
    if (to.path === '/') {
        next({
            name
        })
    } else {
        next()
    }
})

export default router
