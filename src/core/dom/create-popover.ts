import {State} from '../../types/store'
import {createElement} from '../../utils/element'
import {float, wrapper} from '../../utils/classes'
import {Header, HeaderLeft, HeaderRight} from '../components/header'
import {Day, endDay} from '../components/day'
import {Month} from '../components/month'
import {Year} from '../components/year'
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
  ]
}

export function createPopover(state: State): Node {
  return createElement(
    {
      class: [wrapper],
      children: popoverType[state.options.type]
    },
    state
  )
}
