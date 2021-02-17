import {createElement} from '../../../utils/element'
import {day} from '../../../utils/classes'
import {dayBarNames} from '../../i18n'
import {State} from '../../../types/store'
import {toggleVisibility, utilStyle} from '../utils'
import {CreateElementOptions} from '../../../types/utils'
import {dayEvent} from "./event"
import {HeaderType} from "../../../types/components"

let type: HeaderType = 'start'
const rowsCount = 6
const colsCount = 7


const tableStyle = {
  height: '40px',
  width: '40px',
  padding: '3px 0'
}

function config(idx: number, name: 'text' | 'status') {
  return {
    key: {
      name: type,
      childKey: {
        name: '_day',
        idx,
        childKey: [name]
      }
    },
    cb: (val: string) => val
  }
}

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
      const idx = rc * 7 + cc
      return {
        name: 'td',
        children: [
          {
            text: config(idx, 'text'),
            class: config(idx, 'status')
          }
        ],
        style: tableStyle,
        event: dayEvent(idx, type)[state.type as 'date']
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

function bar(state: State): Node {
  return createElement(
    {
      name: 'thead',
      children: dayBarNames.map(name => {
        return {text: name, name: 'th', style: tableStyle}
      })
    },
    state
  )
}

export function Day(state: State, t: HeaderType = 'start'): Node {
  type = t
  return createElement(
    {
      name: 'table',
      children: [bar, tBody],
      class: [day],
      style: utilStyle,
      visible: {
        key: ['page'],
        cb: toggleVisibility
      }
    },
    state
  )
}

export function endDay(state: State): Node {
  return Day(state, 'end')
}
