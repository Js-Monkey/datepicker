import { eventType, Handler} from '../types/event'
import {State} from '../types/store'

export function on(
  el: HTMLElement | Window,
  handler: Handler,
  eventName: eventType = 'click',
  state?: State,
  ...arg: any
): void {
  function listener(e: Event) {
    return handler.apply(state, arg.concat(e))
  }
  el.addEventListener(eventName, listener)
}
