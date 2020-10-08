import {stateUtil, utilsWatcherFn} from '../../types/store'
import {updatePopover} from '../../core/dom/create-popover'

export const uw: utilsWatcherFn = {
  options(): void {
    //todo
  },
  visible(target, key, val, rec): void {
    updatePopover(rec, val as boolean)
  }
}

export default function (): stateUtil {
  return {
    options: {
      placement: 'bottom',
      zIndex: 1000,
      format: 'yyyy-mm-dd'
    },
    visible: false,
    _w: {
      startDate: [],
      startMonth: [],
      startYear: []
    }
  }
}
