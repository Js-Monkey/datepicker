import {stateUtil} from '../../types/store'

export const uw = {
  options(): void {
    //todo
  },
  visible(): void {
    //todo
  }
}

export default function (): stateUtil {
  return {
    options: {
      placement: 'bottom'
    },
    visible: false
  }
}
