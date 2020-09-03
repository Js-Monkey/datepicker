import {stateComponent, componentsWatcherFn} from '../../types/store'
import {createPopover} from '../../core/dom/create-popover'
import {set} from '../index'
import {remove, on} from '../../utils/event'

export const cw: componentsWatcherFn = {
  reference(target, key, value): void {
    // set('popover', createPopover())
    // const preElement = state.reference
    // remove(preElement, 'click', openPopover)
    // if (ref) {
    //   on(ref, 'click', openPopover)
    //   on(document.body, 'click', clickOutside)
    // }
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
