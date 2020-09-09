import {stateComponent, componentsWatcherFn} from '../../types/store'
import {createPopover} from '../../core/dom/create-popover'
import {set, openPopover} from '../index'
import {remove, on} from '../../utils/event'
import clickOutside from '../../utils/clickoutside'

export const cw: componentsWatcherFn = {
  reference(target, key, val, rec): void {
    const {reference, popover} = target
    remove(reference, 'click', openPopover)
    if (val) {
      on(val, 'click', openPopover)
      on(document.body, 'click', clickOutside.bind(null, rec))
    }
    set('popover', createPopover())
  },
  popover(target, key, value): void {
    console.log(value)
  }
}

export default function (): stateComponent {
  return {
    reference: null,
    popover: null
  }
}
