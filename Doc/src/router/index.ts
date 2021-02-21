import {createRouter, createWebHashHistory} from "vue-router"
import Enter from '../components/Enter'
import Document from '../components/Document.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path:'/', component: Enter},
    {path:'/doc', component: Document},
  ]
})

export default router
