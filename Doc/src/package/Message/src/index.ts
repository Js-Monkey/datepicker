import {h, render} from 'vue'
import MessageComponent from './message.vue'
import {DefineComponent} from 'vue'

let timer: any = null
const queue: any[] = []

const Message = function (message: string): void {
  clearQueue()
  const container = document.createElement('div')
  const vm = h(MessageComponent as any, {message}) as any
  render(vm, container)
  vm.component.ctx.toggleVisibility()
  document.body.appendChild(container)
  queue.push({vm, container})
  timer = setTimeout(() => {
    clearQueue()
  }, 1500)
}

function clearQueue() {
  clearTimeout(timer)
  queue.forEach(vm => closeMessage(vm))
  queue.length = 0
}

function closeMessage({vm, container} = arguments as any) {
  vm.component.ctx.toggleVisibility()
  vm = null
  document.body.removeChild(container)
}


export default Message as unknown as DefineComponent
