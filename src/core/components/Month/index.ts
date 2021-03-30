import {createElement, visible} from '../../../utils/element'
import {monthNames} from '../../util/i18n'
import {utilStyle} from '../utils'
import {State} from '../../../types/store'
import {HeaderType} from "../../../types/components"
import {monthEvent} from "./event";
import {CreateElementOptions} from "../../../types/utils"
import _for from "../../../utils/for"

let type: HeaderType = 'start'
const rows = 3
const cols = 4

export function Month(state: State, t: HeaderType = 'start'): Node {
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
      const child = state[type]._month[idx]
      return {
        name: 'td',
        event: {
          listener: monthEvent(child)[state.type as 'date'],
          arg: child
        },
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
      }
    }, cols)
  }
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
