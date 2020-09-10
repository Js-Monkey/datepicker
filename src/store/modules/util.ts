import {stateUtil, utilsWatcherFn} from '../../types/store'
import {updatePopover, setPopoverStyle} from '../../core/dom/create-popover'

export const uw: utilsWatcherFn = {
  options(): void {
    //todo
  },
  visible(target, key, val, rec): void {
    const {popover} = rec.components
    const {zIndex} = rec.utils.options
    updatePopover(rec, val as boolean)
    setPopoverStyle(popover as HTMLElement, zIndex)
  }
}

export default function (): stateUtil {
  return {
    options: {
      placement: 'bottom',
      zIndex: 1000,
      format: 'yyyy-mm-dd'
    },
    visible: false
  }
}
