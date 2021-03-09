import {createApp, nextTick} from 'vue'
import App from './App.vue'
import Router from './router/index'
import {useComponent} from "./package"

const app = createApp(App)
useComponent(app)
import highlightJs from 'highlight.js'
import './assets/style/index.scss'
import {createDatePicker} from '../../src'

app.config.globalProperties.createDatePicker = createDatePicker
highlightJs.configure({
  languages: ['js', 'html'],
})
Router.afterEach( (event) => {
  nextTick(() => document.querySelectorAll('pre code').forEach(block => highlightJs.highlightBlock(block)))
});
app.use(Router)
app.mount('#app')
