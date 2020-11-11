import {_Event, eventType, Handler} from '../types/event'
import {isString} from './typeOf'
import {get} from '../store'
import {depWatcher} from '../types/store'

export function on(el: any, handler: Handler, eventName?: eventType, params: (keyof depWatcher | number)[] = []): void {
  if (!eventName) eventName = 'click'
  const listener = function (e: _Event) {
    const args = params.map(param => (isString(param) ? get(param) : param))
    handler(...args, e)
  }
  el.addEventListener(eventName, listener)
}

export function remove(el: any, handler: Handler, eventName?: eventType): void {
  if (!eventName) eventName = 'click'
  el.removeEventListener(eventName, handler)
}
