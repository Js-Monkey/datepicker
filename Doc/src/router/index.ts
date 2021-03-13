import {createRouter, createWebHashHistory} from "vue-router"
import Enter from '../components/Enter'
import Document from '../components/Document'
import Usage from '../views/basic-usage.md'
import options from '../views/options.md'
import Type from '../views/type.md'

//todo: use require context
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Enter},
    {
      path: '/doc',
      component: Document,
      children: [
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
