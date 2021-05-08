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
import {createDatePicker, locale,defaultOptions} from '../../src'
import NProgress from "nprogress";
// import xx from '../../dist/locale_es/zh-cn'
// locale(xx)
// defaultOptions({
//     themeColor: '#1890ff',
//     rangeBgColor: '#e6f7ff',
//     tdColor: '#5f5f5f',
//     thColor: '#5f5f5f'
// })
NProgress.configure({
    easing: 'ease',  // 动画方式
    speed: 200,  // 递增进度条的速度
    showSpinner: true, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
})

const app = createApp(App)
useComponent(app)

app.config.globalProperties.createDatePicker = createDatePicker
app.config.globalProperties.$Msg = Msg

highlightJs.configure({
    languages: ['js', 'html']
})

Router.afterEach((event) => {
    nextTick(() => document.querySelectorAll('pre code').forEach(block => highlightJs.highlightBlock(block)))
})
app.use(Router)
app.use(ColorPicker)
app.mount('#app')
