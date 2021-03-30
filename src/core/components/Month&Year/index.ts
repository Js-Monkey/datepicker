import {createElement, visible} from '../../../utils/element'
import {monthNames} from '../../util/i18n'
import {utilStyle} from '../utils'
import {State} from '../../../types/store'
import {
  ComponentsName,
  createMonthOrYearComponentsFunction,
  CreateMonthOrYearComponentsOptions,
  HeaderType
} from "../../../types/components"
import {monthEvent, yearEvent} from "./event"
import {CreateElementOptions} from "../../../types/utils"
import _for from "../../../utils/for"
import {getTenRange} from "../../../utils/date"

let type: HeaderType = 'start'
const rows = 3
const cols = 4

const components: CreateMonthOrYearComponentsOptions = {
  month: {
    listener: (child,state)=> monthEvent(child)[state.type as 'date'],
    children: (idx: number) => [
      {text: monthNames[idx]}
    ]
  },
  year: {
    listener: (child,state)=> yearEvent(child)[state.type as 'date'],
    children: (idx: number) => [{
      text: {
        key: {
          name: 'start',
          childKey: ['year']
        },
        cb: (y: number) => String(getTenRange(y)[idx])
      }
    }]
  }
}

export function YM(componentName: ComponentsName = 'month'): createMonthOrYearComponentsFunction {
  const {children, listener} = components[componentName]
  return function (state: State, t: HeaderType = 'start'): Node {
    type = t

    function tBody(state: State): Node {

      return createElement(
        {
          children: tr(),
          name: 'tbody'
        },
        state
      )
    }

    function tr(): CreateElementOptions[] {
      return _for((rc) => {
        return {
          name: 'tr',
          children: td(rc)
        }
      }, rows)
    }

    function td(rc: number): CreateElementOptions[] {
      return _for((cc) => {
        const idx = rc * cols + cc
        const child = state[type][('_'+componentName) as '_month'][idx]
        return {
          name: 'td',
          event: {
            listener: listener(child, state),
            arg: child
          },
          children: children(idx),
          class: {
            key: {
              name: ['status'],
              child
            },
            cb: (val: string) => val
          },
        }
      }, cols)
    }

    return createElement(
      {
        name: 'table',
        children: [tBody],
        class: [componentName],
        style: utilStyle,
        $style: {
          display: {
            key: ['page'],
            cb: (page: string) => visible(page === componentName)
          }
        }
      },
      state
    )
  }
}

export const Month = YM()

export function endMonth(state: State): Node {
  return Month(state, 'end')
}

export const Year = YM('year')

export function endYear(state: State): Node {
  return Year(state, 'end')
}
