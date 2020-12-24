import {on} from '../../utils/event'
import {set} from '../../store'
import clickOutside from '../../utils/clickoutside'
import {listenToScrollParents} from '../../utils/listenToParents'
import {isInBody} from '../../utils/isInBody'
import {createPopover, updatePopover} from '../dom/create-popover'
import {appendChild} from '../../utils/element'
import {setPopoverStyle} from '../dom/create-popover'
import {addWatch} from '../../observer/watcher'
import Options from '../../types/options'
import {State} from '../../types/store'

export function watch(): void {
  addWatch({
    name: ['reference'],
    cb(ref: HTMLElement, state: State): void {
      on(ref, (e: Event) => {
        state.visible = true
      })
      on(document.body, clickOutside.bind(null, state as any))
      listenToScrollParents(ref)
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
    cb(pop: HTMLElement, show: boolean, state: State): void {
      updatePopover(pop, show, state)
    }
  })
}
