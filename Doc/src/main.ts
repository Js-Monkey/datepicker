import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import {useComponent} from "./package";
const app = createApp(App)
useComponent(app)
app.use(Router)
app.mount('#app')
