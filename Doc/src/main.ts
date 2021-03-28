import {createApp, nextTick} from 'vue'
import App from './App.vue'
import Router from './router/index'
import {useComponent} from "./package"
import highlightJs from 'highlight.js'
import './assets/style/index.scss'
import ColorPicker from 'element-plus/lib/el-color-picker'
import Msg from 'element-plus/lib/el-message'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/style/el-message.css'
import {createDatePicker} from '../../src'

const app = createApp(App)
useComponent(app)

app.config.globalProperties.createDatePicker = createDatePicker
app.config.globalProperties.$Msg = Msg

highlightJs.configure({
  languages: ['js', 'html']
})

Router.afterEach( (event) => {
  nextTick(() => document.querySelectorAll('pre code').forEach(block => highlightJs.highlightBlock(block)))
})
app.use(Router)
app.use(ColorPicker)
app.mount('#app')
