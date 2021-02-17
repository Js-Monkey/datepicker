import {createElement} from '../../../utils/element'
import {monthNames} from '../../i18n'
import {month} from '../../../utils/classes'
import {utilStyle} from '../utils'
import {State} from '../../../types/store'
import {HeaderType} from "../../../types/components"
import {monthEvent} from "./event";
import {CreateElementOptions} from "../../../types/utils"

let type: HeaderType = 'start'
const rowsCount = 3
const colsCount = 4


function tBody(state: State): Node {
  function tr(): CreateElementOptions[] {
    return Array.from({length: rowsCount}).map((_, rc) => {
      return {
        name: 'tr',
        children: td(rc)
      }
    })
  }

  function td(rc: number): CreateElementOptions[] {
    return Array.from({length: colsCount}).map((_, cc) => {
      const idx = rc * 4 + cc
      const text = monthNames[idx]
      return {
        name: 'td',
        style: {
          height: '50px',
          width: '80px',
          padding: '3px 0',
          cursor: 'pointer'
        },
        class: {
          key: {
            name: type,
            childKey: {
              name: '_month',
              idx,
              childKey: ['status']
            }
          },
          cb: (val: string) => val
        },
        children: [
          {
            style: {
              height: '44px',
              'line-height': '32px',
              padding: '6px'
            },
            children: [{text}]
          }
        ],
        event: monthEvent(idx, type)[state.type as 'date']
      }
    })
  }

  return createElement(
    {
      children: tr(),
      name: 'tbody'
    },
    state
  )
}

export function Month(state: State, t: HeaderType = 'start'): Node {
  type = t
  return createElement(
    {
      name: 'table',
      children: [tBody],
      class: [month],
      style: utilStyle,
      visible: {
        key: ['page'],
        cb: (page) => page === 'month'
      }
    },
    state
  )
}


export function endMonth(state: State): Node {
  return Month(state, 'end')
}
