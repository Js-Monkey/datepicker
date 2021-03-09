import Button from './button'
import Input from './input'
import Icon from './icon'
import Message from './Message'
import demoCard from './demo-card'
import {App} from 'vue'
export function useComponent(app: App): void {
  app.use(Button)
  app.use(Icon)
  app.use(Input)
  app.use(Message)
  app.use(demoCard)
}
