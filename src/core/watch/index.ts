import {on} from '../../utils/event'
import {openPopover, set} from '../../store'
import clickOutside from '../../utils/clickoutside'
import {listenToScrollParents} from '../../utils/listenToParents'
import {isInBody} from '../../utils/isInBody'
import {createPopover, updatePopover} from '../dom/create-popover'
import {appendChild} from '../../utils/element'
import {setPopoverStyle} from '../dom/create-popover'
import {addWatch} from '../../observer/watcher'
import Options from '../../types/options'

export function watch(): void {
  addWatch({
    name: ['reference'],
    cb(val: HTMLElement): void {
      on(val, openPopover)
      on(document.body, clickOutside)
      listenToScrollParents(val)
      set('popover', createPopover())
    }
  })
  addWatch({
    name: ['popover', 'options'],
    cb(pop: HTMLElement, options: Options): void {
      if (!isInBody(pop)) {
        appendChild(pop as Element)
        const {zIndex} = options
        setPopoverStyle(pop as HTMLElement, zIndex as number)
      }
    }
  })
  addWatch({
    name: ['popover', 'visible'],
    cb(pop: HTMLElement, show: boolean): void {
      updatePopover(pop, show)
    }
  })
}
