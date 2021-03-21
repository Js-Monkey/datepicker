import {createApp, nextTick} from 'vue'
import App from './App.vue'
import Router from './router/index'
import {useComponent} from "./package"

const app = createApp(App)
useComponent(app)
import highlightJs from 'highlight.js'
import './assets/style/index.scss'
import ColorPicker from 'element-plus/lib/el-color-picker'
import Msg from 'element-plus/lib/el-message'
import './assets/style/el-message.css'
import 'element-plus/lib/theme-chalk/el-color-picker.css'
import {createDatePicker} from '../../src'

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
