import {stateComponent} from '../../types/store'

export const cw = {
  reference() {
    console.log(arguments)
  },
  popover() {
    //todo
  }
}

export default function (): stateComponent {
  return {
    reference: null,
    popover: null
  }
}
