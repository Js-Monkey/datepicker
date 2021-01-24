import {getScrollParents} from './window'
import {setPopoverLocation} from '../core/dom/popover-style'
import {State} from '../types/store'
import {on} from "./event"

export function listenToScrollParents(el: HTMLElement, state: State): void {
  const scrollParents = getScrollParents(el)
  const _bind = setPopoverLocation.bind(state)
  scrollParents.forEach(el => on(el, _bind, 'scroll'))
  on(window, _bind, 'resize')
}
