import Button from './button'
import Icon from './icon'
import Message from './Message'
import {App} from 'vue'
export function useComponent(app: App): void {
  app.use(Button)
  app.use(Icon)
  app.use(Message)
}
