import {App} from 'vue'
import Group from './src/button-group.vue'
import {VueComponent} from '../../type/utils'

Group.install = (app: App): void => {
  app.component(<string>Group.name, Group)
}

export default Group as VueComponent
