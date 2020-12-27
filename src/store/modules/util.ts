import {stateUtil} from '../../types/store'

export default function (): stateUtil {
  return {
    options: {
      placement: 'bottom',
      zIndex: 1000,
      format: 'yyyy-mm-dd'
    },
    visible: false,
    page: 'day'
  }
}
