import {DayComponents, stateComponent} from '../../types/store'

const dayComponents = (): DayComponents[] =>
  Array.from({length: 42}).map((_: unknown) => {
    return {
      text: '',
      status: '',
      class: ''
    }
  })

export default function (): stateComponent {
  return {
    reference: null,
    popover: null,
    startDayComponent: dayComponents(),
    endDayComponent: dayComponents()
  }
}
