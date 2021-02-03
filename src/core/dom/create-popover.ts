import {State} from '../../types/store'
import {createElement} from '../../utils/element'
import {float, wrapper} from '../../utils/classes'
import {Header, HeaderLeft, HeaderRight} from '../components/Header'
import {Day, endDay} from '../components/Day'
import {Month} from '../components/Month'
import {Year} from '../components/Year'
import {PopoverType} from '../../types/components'

const popoverType: PopoverType = {
  date: [Header, Day, Month, Year],
  'date-range': [
    {
      class: [float],
      children: [HeaderLeft, Day, Month, Year]
    },
    {
      class: [float],
      children: [HeaderRight, endDay, Month, Year]
    }
  ],
  month: [Header, Month]
}

export function createPopover(state: State): Node {
  return createElement(
    {
      class: [wrapper],
      children: popoverType[state.type]
    },
    state
  )
}
