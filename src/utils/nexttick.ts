// https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js
import {isIE, isNative} from './env'
const callbacks: any[] = []
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

export default function nextTick(cb?: () => unknown): any {
  let _resolve: (ctx: any) => void
  callbacks.push(cb)
  if (!pending) {
    pending = true
    timerFunc()
  }
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}

