import {State} from '../../types/store'
import {createElement} from '../../utils/element'
import {wrapper} from '../../utils/classes'
import {Header, HeaderLeft, HeaderRight} from '../components/Header'
import {Day, endDay} from '../components/Day'
import {endMonth, Month} from '../components/Month'
import {Year} from '../components/Year'
import {PopoverType} from '../../types/components'
import has from "../../utils/has";


function rangeComponent(type: 'month' | 'day') {
  const componentType = {
    day: {
      start: [HeaderLeft, Day],
      end: [HeaderRight, endDay]
    },
    month: {
      start: [HeaderLeft, Month],
      end: [HeaderRight, endMonth]
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

export function deleteRules(sheet: any = document.styleSheets[0]): void{
  const ruleSheet = sheet ? sheet.rules : null
  if(ruleSheet && ruleSheet.length>0){
    const {name, type} = ruleSheet[0]
    if (has(['show', 'hidden'], name) && type === 7)sheet.deleteRule(0)
  }
}

function listenToAnimation(pop: HTMLElement) {
  pop.style.display = 'none'
  pop.addEventListener('animationend', (e) => {
    pop.style.display = e.animationName === 'hidden' ? 'none' : 'inline-block'
    deleteRules()
  })
}

export function createPopover(state: State): HTMLElement {
  const pop = createElement(
    {
      class: [wrapper],
      children: popoverType[state.type]
    },
    state
  ) as HTMLElement
  listenToAnimation(pop)
  return pop
}
