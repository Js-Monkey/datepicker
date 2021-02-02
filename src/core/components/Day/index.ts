import {createElement} from '../../../utils/element'
import {day, dayBar, dayContent} from '../../../utils/classes'
import {dayBarNames} from '../../i18n'
import {State} from '../../../types/store'
import {toggleVisibility} from '../utils'
import {CreateElementOptions} from '../../../types/utils'
import {dayEvent} from "./event"
import {HeaderType} from "../../../types/components"

let type: HeaderType = 'start'
const rowsCount = 6
const colsCount = 7

function config(idx: number, name: 'text' | 'status') {
  return {
    key: {
      name: type,
      childKey: {
        name: 'components',
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
        text: config(idx, 'text'),
        class: config(idx, 'status'),
        event: dayEvent(idx, type)[state.options.type],
        name: 'td'
      }
    })
  }
  return createElement(
    {
      class: [dayContent],
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
      class: [dayBar],
      children: dayBarNames.map(name => {
        return {text: name, name: 'th'}
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
      class: {
        key: ['page'],
        cb: toggleVisibility,
        static: [day]
      }
    },
    state
  )
}

export function endDay(state: State): Node {
  return Day(state, 'end')
}
