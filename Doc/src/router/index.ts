import {createRouter, createWebHashHistory} from "vue-router"
import Enter from '../components/Enter'
import Document from '../components/Document'

import XX from '../components/Document/app.md'
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path:'/', component: Enter},
    {path:'/doc', component: XX},
  ]
})

export default router
