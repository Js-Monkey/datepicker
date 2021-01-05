import {eventType, Handler} from '../types/event'
import {State} from '../types/store'

export function on(
  el: HTMLElement | Window,
  handler: Handler,
  eventName: eventType = 'click',
  state?: State,
  ...arg: any
): void {
  const listener = function () {
    const params: unknown[] = arg || []
    if (state) params.unshift(state)
    handler(...params)
  }
  el.addEventListener(eventName, listener)
}
