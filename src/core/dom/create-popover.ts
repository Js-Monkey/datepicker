import {State} from '../../types/store'
import {createElement} from '../../utils/element'
import {Header, HeaderLeft, HeaderRight} from '../components/Header'
import {Day, endDay} from '../components/Date&Week'
import {Month, endMonth, Year,endYear} from '../components/Month&Year'
import {PopoverType, RangeComponentName} from '../../types/components'
import {has} from "../../utils/has"
import {canIUseAnimation} from "../../utils/env";


function rangeComponent(type: RangeComponentName = 'month') {
  const componentType = {
    date: {
      start: [HeaderLeft, Day],
      end: [HeaderRight, endDay]
    },
    month: {
      start: [HeaderLeft, Month],
      end: [HeaderRight, endMonth]
    },
    year:{
      start: [HeaderLeft, Year],
      end: [HeaderRight, endYear]
    }
  }
  return [
    {
      style: {
        width: '646px'
      },
      children: [
        {
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
  week: [Header, Day, Month, Year],
  'date-range': rangeComponent('date'),
  month: [Header, Month, Year],
  'month-range': rangeComponent(),
  year: [Header, Year],
  'year-range': rangeComponent('year')
}

export function deleteRules(sheet: any = document.styleSheets[0]): void {
  const ruleSheet = sheet.rules
  if (ruleSheet && ruleSheet.length > 0) {
   for(let i = 1;i>=0;i--){
     if(!ruleSheet[i]) return
     const {name, type} = ruleSheet[i]
     if (has(['show', 'hidden'], name) && type === 7) {
       sheet.deleteRule(i)
     }
   }
  }
}

function listenToAnimation(pop: HTMLElement) {
  pop.style.display = 'none'
  if(canIUseAnimation()){
    pop.addEventListener('animationend', (e) => {
      pop.style.display = e.animationName === 'hidden' ? 'none' : 'inline-block'
    })
  }
}

export function createPopover(state: State): HTMLElement {
  const pop = createElement(
    {
      class: ['wrapper'],
      children: popoverType[state.type],
      hidden: true
    },
    state
  ) as HTMLElement
  listenToAnimation(pop)
  return pop
}
