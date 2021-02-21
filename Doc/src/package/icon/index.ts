import {App} from 'vue'
import Icon from './src/icon.vue'
import {VueComponent} from "../../type/utils"

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon)
}

export default Icon as VueComponent
