import {createRouter, createWebHashHistory} from "vue-router"
import Enter from '../components/Enter'
import Document from '../components/Document'
import NProgress from "nprogress"

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
                    name: 'zh',
                    component: () => import('../views/zh/home.md')
                },
                {
                    path: 'en',
                    name: 'en',
                    component: () => import('../views/en/home.md')
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
            {
                name: 'API',
                path: 'api'
            },
        ]),
        createRoute('zh', [
            {
                name: '开始',
                path: 'start',
            },
            {
                name: '主题',
                path: 'theme',
            },
            {
                name: '配置',
                path: 'options',
            },
            {
                name: '类型',
                path: 'type',
                isSecond: true
            },
            {
                name: '基础配置',
                isSecond: true,
                path: 'basic',
            },
            {
                name: '方法',
                path: 'method'
            },

            {
                name: '地区设置',
                path: 'locale',
            },
            {
                name: '其他接口',
                path: 'api'
            },
        ])
    ]
})


router.beforeEach((to, from, next) => {
    const name = localStorage.getItem('lang') || 'en'
    NProgress.start()
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

router.afterEach(() => {
    NProgress.done()
})

export default router
