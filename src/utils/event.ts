import {eventType, Handler} from '../types/event'
import {State} from '../types/store'

export function on(el: HTMLElement, handler: Handler, eventName: eventType = 'click', state?: State): void {
  const listener = function (e: Event) {
    const params: unknown[] = [e]
    if (state) params.unshift(state)
    handler(...params)
  }
  el.addEventListener(eventName, listener)
}
