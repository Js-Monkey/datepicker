import {stateComponent} from '../../types/store'

export const watcher = {
  reference() {
    //todo
  }
}

export default function (): stateComponent {
  return {
    reference: null,
    popover: null
  }
}
