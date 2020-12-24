import {_Event, eventType, Handler} from '../types/event'
import {State} from '../types/store'

export function on(el: any, handler: Handler, eventName: eventType = 'click', state?: State): void {
  const listener = function (e: _Event) {
    const params = [e]
    if (state) params.unshift(state as any)
    handler(...params)
  }
  el.addEventListener(eventName, listener)
}
