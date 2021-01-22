import {createElement} from '../../../utils/element'
import {day, dayBar, dayContent} from '../../../utils/classes'
import {dayBarNames} from '../../i18n'
import {State} from '../../../types/store'
import {toggleVisibility} from '../utils'
import {CreateElementOptions} from '../../../types/utils'
import {dayEvent} from "./event"
import {HeaderType} from "../../../types/components"

let type: HeaderType = 'start'

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

function content(state: State): Node {
  const children: CreateElementOptions[] = Array.from({length: 42}).map((d, idx) => {
    return {
      text: config(idx, 'text'),
      class: config(idx, 'status'),
      event: dayEvent(idx, type)[state.options.type],
      name: 'span'
    }
  })
  return createElement(
    {
      class: [dayContent],
      children
    },
    state
  )
}

function bar(state: State): Node {
  return createElement(
    {
      class: [dayBar],
      children: dayBarNames.map(name => {
        return {text: name, name: 'span'}
      })
    },
    state
  )
}

export function Day(state: State, t: HeaderType = 'start'): Node {
  type = t
  return createElement(
    {
      children: [bar, content],
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
