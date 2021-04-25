import {App} from 'vue'
import installCardGroup from './src/group.vue'
import {VueComponent} from "../../type/utils"

installCardGroup.install = (app: App): void => {
  app.component(<string>installCardGroup.name, installCardGroup)
}

export default installCardGroup as unknown as VueComponent
