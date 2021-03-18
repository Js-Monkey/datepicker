// https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js
import {isNative} from './env'
import {Callback} from "../types/core"
const callbacks: Callback[] = []
let pending = false

export function flushCallbacks(): void {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    try {
      copies[i]()
    } catch (e) {
      console.error('nextTick callback error')
    }
  }
}

let timerFunc: () => void

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
  }
} else {
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}

export default function nextTick(cb: Callback): void {
  callbacks.push(cb)
  if (!pending) {
    pending = true
    timerFunc()
  }
}

