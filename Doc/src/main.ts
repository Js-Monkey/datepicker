import { createApp } from 'vue'
import App from './App.vue'
import Icon from './components/icon'

const app = createApp(App)
app.use(Icon)
app.mount('#app')
