import {_EventListener, eventType, Handler} from '../types/event'
import {State} from '../types/store'

export function getEventListener(el: HTMLElement | Window, eventName: eventType = 'click'): _EventListener {
  let eventHandler: (e: Event) => unknown

  function _on(
    handler: Handler,
    state?: State
  ): void {
    eventHandler = on(el, handler, eventName, state)
  }

  function _off(): void {
    console.log(eventHandler)
    el.removeEventListener(eventName, eventHandler)
  }

  return [_on, _off]
}

export function on(
  el: HTMLElement | Window,
  handler: Handler,
  eventName: eventType = 'click',
  state?: State,
  ...arg: any
): (e: Event) => unknown {
  function listener(e: Event) {
    return handler.apply(state, arg.concat(e))
  }

  el.addEventListener(eventName, listener)
  return listener
}
