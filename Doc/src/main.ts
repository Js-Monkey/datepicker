import { createApp, nextTick} from 'vue'
import App from './App.vue'
import Router from './router/index'
import {useComponent} from "./package"
const app = createApp(App)
useComponent(app)
import highlightJs from 'highlight.js'
import './assets/style/hightlight.scss'
Router.afterEach(() => {
  nextTick(()=>{
   document.querySelectorAll('pre code').forEach(block=>highlightJs.highlightBlock(block))
 })
})
app.use(Router)
app.mount('#app')
