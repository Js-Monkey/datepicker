import {createRouter, createWebHashHistory} from "vue-router"
import Enter from '../components/Enter'
import Document from '../components/Document'
import options from '../views/options.md'

//todo: use require context
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {path: '/', component: Enter},
        {
            path: '/doc',
            component: Document,
            redirect: '/doc/start',
            children: [
                {
                    path: 'start',
                    name: 'start',
                    component: ()=> import('../views/start.md')
                },
                {
                    path: 'theme',
                    name: 'theme',
                    component: ()=> import('../views/theme.md')
                },
                {
                    name: 'options',
                    path: 'options',
                    component: ()=> import('../views/options.md'),
                },
                {
                    name: 'type',
                    path: 'options/type',
                    component: ()=> import('../views/type.md')
                },
                {
                    name: 'method',
                    path: 'instance-method',
                    component: ()=> import('../views/method.md')
                },
            ]
        },
    ]
})

export default router
