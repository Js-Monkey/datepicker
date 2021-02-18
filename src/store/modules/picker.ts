import {stateComponent} from '../../types/store'

export default function (): stateComponent {
  return {
    reference: null,
    popover: null,
    onChange: null
  }
}
