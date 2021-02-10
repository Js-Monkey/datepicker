import {State} from '../../types/store'
import {createElement} from '../../utils/element'
import {wrapper} from '../../utils/classes'
import {Header, HeaderLeft, HeaderRight} from '../components/Header'
import {Day, endDay} from '../components/Day'
import {Month} from '../components/Month'
import {Year} from '../components/Year'
import {PopoverType} from '../../types/components'

const popoverType: PopoverType = {
  date: [Header, Day, Month, Year],
  'date-range': [
    {
      style: {
        width: '646px'
      },
      children: [{
        style: {
          display: 'inline-block',
          'border-right': '1px solid #e4e4e4'
        },
        children: [HeaderLeft, Day]
      },
        {
          style: {
            display: 'inline-block'
          },
          children: [HeaderRight, endDay]
        }]
    }
  ],
  month: [Header, Month, Year]
}

function listenToAnimation(pop: HTMLElement) {
  pop.addEventListener('animationend', (e) => {
    pop.style.display = e.animationName === 'hidden' ? 'none' : 'inline-block'
    const {name} = document.styleSheets[0].rules[0] as any
    if (['show', 'hidden'].indexOf(name) > -1) document.styleSheets[0].deleteRule(0)
  })
}

export function createPopover(state: State): Node {
  const pop = createElement(
    {
      class: [wrapper],
      children: popoverType[state.type]
    },
    state
  ) as HTMLElement
  listenToAnimation(pop)
  return pop as Node
}
