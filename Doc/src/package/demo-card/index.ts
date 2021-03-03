import {App} from 'vue'
import DemoCard from './src/card.vue'
import {VueComponent} from "../../type/utils"

DemoCard.install = (app: App): void => {
  app.component(DemoCard.name, DemoCard)
}

export default DemoCard as unknown as VueComponent
