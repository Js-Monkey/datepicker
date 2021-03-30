import {createElement, visible} from '../../../utils/element'
import {monthNames} from '../../util/i18n'
import {utilStyle} from '../utils'
import {State} from '../../../types/store'
import {HeaderType} from "../../../types/components"
import {monthEvent} from "./event";
import {CreateElementOptions} from "../../../types/utils"
import _for from "../../../utils/for"

let type: HeaderType = 'start'
const rowsCount = 3
const colsCount = 4


function tBody(state: State): Node {
  function tr(): CreateElementOptions[] {
    return _for((rc) => {
      return {
        name: 'tr',
        children: td(rc)
      }
    }, rowsCount)
  }

  function td(rc: number): CreateElementOptions[] {
    return _for((cc) => {
      const idx = rc * 4 + cc
      const child = state[type]._month[idx]
      return {
        name: 'td',
        children: [
          {text: monthNames[idx]}
        ],
        class: {
          key: {
            name: ['status'],
            child
          },
          cb: (val: string) => val
        },
        event: {
          listener: monthEvent(idx, child)[state.type as 'date'],
          arg: child
        }
      }
    }, colsCount)
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
      class: ['month'],
      style: utilStyle,
      $style: {
        display: {
          key: ['page'],
          cb: (page: string) => visible(page === 'month')
        }
      }
    },
    state
  )
}


export function endMonth(state: State): Node {
  return Month(state, 'end')
}
