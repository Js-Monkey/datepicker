import {App} from 'vue'
import logo from './src/logo.vue'
import {VueComponent} from "../../type/utils"

logo.install = (app: App): void => {
  app.component(<string>logo.name, logo)
}

export default logo as unknown as VueComponent
