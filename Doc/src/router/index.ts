import {createRouter, createWebHashHistory} from "vue-router"
import Enter from '../components/Enter'
import Document from '../components/Document'

const history = createWebHashHistory()


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

    return {
        path: `/${lang}/doc`,
        component: Document,
        redirect: `/${lang}/doc/start`,
        children: lists.map(list => createChild(list))
    }
}

const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Enter,
            children: [
                {
                    path: 'zh',
                    name:'zh',
                    component: ()=>import('../views/zh/home.md')
                },
                {
                    path: 'en',
                    name:'en',
                    component: ()=>import('../views/en/home.md')
                },
            ]
        },
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
                name: 'basic',
                path: 'basic',
                isSecond: true
            },
            {
                name: 'method',
                path: 'method'
            },
            {
                name: 'locale',
                path: 'locale',
            },

        ]),
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
                name: 'Basic',
                isSecond: true,
                path: 'basic',
                metaName: '基础配置'
            },
            {
                name: 'Method',
                path: 'method',
                metaName: '方法'
            },
            {
                name: 'Locale',
                path: 'locale',
                metaName: '地区设置'
            },
        ])
    ]
})


router.beforeEach((to, from, next) => {
    const name = localStorage.getItem('lang') || 'en'
    if (to.path === '/') {
        next({
            name
        })
    } else if (to.path === '/zh/' || to.path === '/en/') {
        next('/')
    } else {
        next()
    }
})

export default router
