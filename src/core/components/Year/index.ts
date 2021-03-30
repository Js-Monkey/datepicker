import {createElement, visible} from '../../../utils/element'
import {pageName, State} from '../../../types/store'
import {utilStyle} from '../utils'
import {getTenRange} from '../../../utils/date'
import {CreateElementOptions} from "../../../types/utils"
import _for from "../../../utils/for"
import {HeaderType} from "../../../types/components"
import {yearEvent} from "./event"

const rows = 3
const cols = 4
let type: HeaderType = 'start'

export function Year(state: State, t: HeaderType = 'start'): Node {
  type = t

  function tbody(): CreateElementOptions {
    return {
      name: 'tbody',
      children: tr()
    }
  }

  function tr(): CreateElementOptions[] {
    return _for((idx) => {
      return {
        name: 'tr',
        children: td(idx)
      }
    }, rows)
  }

  function td(row: number): CreateElementOptions[] {
    return _for((col) => {
      const idx = row * cols + col
      const child = state[type]._year[idx]
      return {
        name: 'td',
        event: {
          listener: yearEvent(idx, child)[state.type as 'year'],
          arg: child
        },
        children: [{
          text: {
            key: {
              name: 'start',
              childKey: ['year']
            },
            cb: (y: number) => String(getTenRange(y)[idx])
          }
        }],
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
      children: [tbody()],
      class: ['year'],
      style: utilStyle,
      $style: {
        display: {
          key: ['page'],
          cb: (page: pageName) => visible(page === 'year')
        }
      }
    },
    state
  )
}
