import {App} from 'vue'
import Message from './src'
import {VueComponent} from "../../type/utils"

Message.install = (app: App): void => {
  app.config.globalProperties.$message = Message
}

export default Message as unknown as VueComponent
