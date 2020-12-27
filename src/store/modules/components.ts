import {DayComponents, stateComponent} from '../../types/store'
import {observe} from '../../observer'

const dayComponents = Array.from({length: 42}).map((_: unknown) => {
  return observe<DayComponents>({
    text: '',
    status: 'normal'
  })
})

export default function (): stateComponent {
  return {
    reference: null,
    popover: null,
    startDayComponent: dayComponents
  }
}
