import Button from './button'
import Icon from './icon'

import {App} from 'vue'

export function useComponent(app: App): void {
  app.use(Button)
  app.use(Icon)
}
