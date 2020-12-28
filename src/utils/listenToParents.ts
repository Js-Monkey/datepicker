import {getScrollParents} from './window'
import {setPopoverLocation} from '../core/dom/create-popover'
import {State} from '../types/store'

export const listenToScrollParents = (el: HTMLElement, state: State) => {
  const scrollParents = getScrollParents(el)
  scrollParents.forEach(el => {
    el.addEventListener('scroll', setPopoverLocation.bind(null, state) as never)
    //todo scrollParents收集记录
  })
  window.addEventListener('resize', setPopoverLocation.bind(null, state) as never)
}
