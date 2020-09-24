// https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js
import {isIE, isNative} from './env'
/*
 ** 在原有的 nextTick 上面，增添了对同一函数的滤除。
 */
const callbacks: any[] = []
let pending = false

function flushCallbacks(): void {
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
} else if (
  !isIE &&
  typeof MutationObserver !== 'undefined' &&
  (isNative(MutationObserver) || MutationObserver.toString() === '[object MutationObserverConstructor]')
) {
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else {
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}

export function isInCallbacks(cb?: () => unknown): boolean {
  if (!cb) return true
  // todo缺少判断
  return callbacks.some(_cb => _cb.toString() === cb.toString())
}

export default function nextTick(cb?: () => unknown): void {
  if (isInCallbacks(cb)) return
  callbacks.push(cb)
  if (!pending) {
    pending = true
    timerFunc()
  }
}

export {nextTick}
