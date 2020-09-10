import Vue from 'vue'
import App from './app'
import router from './router'
import demoCard from './components/demo-card'
import highlightJs from 'highlight.js'
import './assets/styles/index.scss'
import Icon from './components/icon'
import Input from './components/Input'
import Button from './components/button'
Vue.component(demoCard.name, demoCard)
Vue.component(Input.name, Input)
Vue.component(Icon.name,Icon)
Vue.component(Button.name,Button)
import datePicker from '../src/index'
import '../src/assets/date-picker.scss'
window.Flex = datePicker
router.afterEach(() => {
   Vue.nextTick(() => document.querySelectorAll('pre code').forEach(block=>highlightJs.highlightBlock(block)))
})


new Vue({
   ...App,
   router
}).$mount('#app')
