import {getAllScrollParents} from './window'
import {setPopoverLocation} from '../core/dom/create-popover'

export const listenToScrollParents = (el: HTMLElement) => {
  const scrollParents = getAllScrollParents(el)
  console.log(scrollParents)
  scrollParents.forEach(el => {
    el.addEventListener('scroll', setPopoverLocation as never)
    //todo scrollParents收集记录
  })
  window.addEventListener('resize', setPopoverLocation as never)
}
