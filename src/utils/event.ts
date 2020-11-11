import {_Event, eventType, Handler} from '../types/event'
import {isString} from './typeOf'
import {get} from '../store'
import {depWatcher} from '../types/store'

export function on(
  el: any,
  handler: Handler,
  eventName: eventType = 'click',
  params: (keyof depWatcher | number)[] = []
): void {
  const listener = function (e: _Event) {
    const args = params.map(param => (isString(param) ? get(param) : param))
    handler(...args, e)
  }
  el.addEventListener(eventName, listener)
}
