import {getScrollParents} from './window'
import {setPopoverLocation} from '../core/dom/popover-style'
import {State} from '../types/store'
import {Bind} from "./helper"
import {on} from "./event"

export function listenToScrollParents(el: HTMLElement, state: State): void {
  const scrollParents = getScrollParents(el)
  scrollParents.forEach(el => {
    on(el, Bind(setPopoverLocation, state), 'scroll')
    //todo scrollParents收集记录
  })
  on(window, Bind(setPopoverLocation, state), 'resize')
}
