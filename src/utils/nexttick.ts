// https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js
import {isIE, isNative} from './env'
/*
 ** 在原有的 nextTick 上面，增添了对同一函数的滤除。
 */

interface callback {
  $FLEXPCIKERTYPE: string
}

const callbacks: any[] = []
let pending = false

function flushCallbacks() {
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

function isInCallbacks(cb?: callback) {
  if (!cb) return true
  return callbacks.some(_cb => _cb.toString() === cb.toString() && _cb.$FLEXPCIKERTYPE === cb.$FLEXPCIKERTYPE)
}

export default function nextTick(cb?: callback): any {
  let _resolve: (ctx: any) => void

  if (isInCallbacks(cb)) return
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

export {nextTick}
