import {State} from '../../types/store'
import {createElement} from '../../utils/element'
import {wrapper} from '../../utils/classes'
import {Header, HeaderLeft, HeaderRight} from '../components/Header'
import {Day, endDay} from '../components/Day'
import {Month} from '../components/Month'
import {Year} from '../components/Year'
import {PopoverType} from '../../types/components'


function rangeComponent(type: 'month' | 'day') {
  const componentType = {
    day: {
      start: [HeaderLeft, Day],
      end: [HeaderRight, endDay]
    },
    month: {
      start: [HeaderLeft, Month],
      end: [HeaderRight, Month]
    }
  }
  return [
    {
      style: {
        width: '646px'
      },
      children: [{
        style: {
          display: 'inline-block',
          'border-right': '1px solid #e4e4e4'
        },
        children: componentType[type].start
      },
        {
          style: {
            display: 'inline-block'
          },
          children: componentType[type].end
        }]
    }
  ]
}

const popoverType: PopoverType = {
  date: [Header, Day, Month, Year],
  'date-range': rangeComponent('day'),
  month: [Header, Month, Year],
  'month-range': rangeComponent('month')
}

function listenToAnimation(pop: HTMLElement) {
  pop.addEventListener('animationend', (e) => {
    pop.style.display = e.animationName === 'hidden' ? 'none' : 'inline-block'
    const sheet = document.styleSheets[0]
    const {name, type} = sheet.rules[0] as any
    if (['show', 'hidden'].indexOf(name) > -1 && type === 7) sheet.deleteRule(0)
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
