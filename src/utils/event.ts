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
    return handler.apply(state, params)
  }
  el.addEventListener(eventName, listener)
}
