import {getScrollParents} from './window'
import {setPopoverLocation} from '../core/dom/create-popover'

export const listenToScrollParents = (el: HTMLElement) => {
  const scrollParents = getScrollParents(el)
  scrollParents.forEach(el => {
    el.addEventListener('scroll', setPopoverLocation as never)
    //todo scrollParents收集记录
  })
  window.addEventListener('resize', setPopoverLocation as never)
}
