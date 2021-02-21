import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import Icon from './package/icon'
const app = createApp(App)
app.use(Icon)
app.use(Router)
app.mount('#app')
