import {eventType, Handler} from '../types/event'

export function on(el: any, handler: Handler, eventName?: eventType): void {
  if (!eventName) eventName = 'click'
  if (el && el.addEventListener) {
    el.addEventListener(eventName, handler)
  }
}

export function remove(el: any, handler: Handler, eventName?: eventType): void {
  if (!eventName) eventName = 'click'
  if (el && el.removeEventListener) {
    el.removeEventListener(eventName, handler)
  }
}
