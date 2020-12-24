import {stateComponent} from '../../types/store'

const dayComponents = Array.from({length: 42}).map((_: unknown) => {
  return {
    el: null,
    text: ''
  }
})

export default function (): stateComponent {
  return {
    reference: null,
    popover: null,
    dayComponents
  }
}
