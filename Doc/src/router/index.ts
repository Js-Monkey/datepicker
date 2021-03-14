import {createRouter, createWebHashHistory} from "vue-router"
import Enter from '../components/Enter'
import Document from '../components/Document'
import Usage from '../views/theme.md'
import options from '../views/options.md'
import Type from '../views/type.md'
import Start from '../views/start.md'

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
          component: Start
        },
        {
          path: 'theme',
          name: 'theme',
          component: Usage
        },
        {
          name: 'options',
          path: 'options',
          component: options,
        },
        {
          name: 'type',
          path: 'options/type',
          component: Type,
        }
      ]
    },
  ]
})

export default router
