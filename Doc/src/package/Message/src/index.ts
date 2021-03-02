import {h, render} from 'vue'
import MessageComponent from './message.vue'
import {DefineComponent} from 'vue'
let timer = null
const queue = []

const Message = function (message: string): void {
  clearQueue()
  const container = document.createElement('div')
  const vm = h(MessageComponent as any, {message}) as any
  render(vm, container)
  vm.component.ctx.toggleVisibility()
  document.body.appendChild(container)
  queue.push(vm)
  timer = setTimeout(() => {
    closeMessage(vm)
  }, 1500)
}

function clearQueue() {
  clearTimeout(timer)
  queue.forEach(vm => closeMessage(vm))
}

function closeMessage(vm) {
  vm.component.ctx.toggleVisibility()

}


export default Message as unknown as DefineComponent
