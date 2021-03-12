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
    el.removeEventListener(eventName, eventHandler)
  }

  return [_on, _off]
}

export function on(
  el: HTMLElement | Window,
  handler: Handler,
  eventName: eventType = 'click',
  state?: State,
  arg?: any
): (e: Event) => unknown {
  function listener(e: Event) {
    if(arg&&arg.date && state &&isDisabledDate(state, arg.date)) return
    return handler.call(state, e)
  }

  el.addEventListener(eventName, listener)
  return listener
}


export function isDisabledDate(state: State, date: string): string{
  const {disabledDate} = state.options
  return (disabledDate && disabledDate(new Date(date)))? 'disabled': ''
}
