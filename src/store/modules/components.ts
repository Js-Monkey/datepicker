import {stateComponent, componentsWatcherFn} from '../../types/store'
import {createPopover} from '../../core/dom/create-popover'
import {set, openPopover} from '../index'
import {remove, on} from '../../utils/event'
import clickOutside from '../../utils/clickoutside'
import {isElementExist} from '../../utils/isElementExist'
import {appendChild} from '../../utils/element'

export const cw: componentsWatcherFn = {
  reference(target, key, val, rec): void {
    const {reference} = target
    remove(reference, openPopover)
    if (val) {
      on(val, openPopover)
      on(document.body, clickOutside.bind(null, rec))
    }
    set('popover', createPopover())
  },
  popover(target, key, value): void {
    const {popover} = target
    if (!isElementExist(popover)) {
      appendChild(value as Element)
    }
  }
}

export default function (): stateComponent {
  return {
    reference: null,
    popover: null
  }
}
