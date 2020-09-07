import {stateComponent, componentsWatcherFn} from '../../types/store'
import {createPopover} from '../../core/dom/create-popover'
import {set, openPopover} from '../index'
import {remove, on} from '../../utils/event'
import clickOutside from '../../utils/clickoutside'

export const cw: componentsWatcherFn = {
  reference(target, key, value, rec): void {
    const {reference, popover} = target
    remove(reference, 'click', openPopover)
    if (value) {
      on(value, 'click', openPopover)
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
