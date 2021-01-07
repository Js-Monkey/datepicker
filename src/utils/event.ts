import {_Event, eventType, Handler} from '../types/event'
import {State} from '../types/store'

export function on(
  el: HTMLElement | Window,
  handler: Handler,
  eventName: eventType = 'click',
  state?: State,
  ...arg: any
): void {
  const listener = function (e: Event) {
    const params: unknown[] = (arg || []).concat(e)
    if (state) params.unshift(state)
    handler(...params)
  }
  el.addEventListener(eventName, listener)
}
