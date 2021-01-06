import {createElement} from '../../../utils/element'
import {day, dayBar, dayContent} from '../../../utils/classes'
import {dayBarNames} from '../../i18n'
import {ComponentStatus, State} from '../../../types/store'
import {toggleVisibility} from '../utils'
import {CreateElementOptions} from '../../../types/utils'
import {dayEvent} from "./event";

let type = 'start'

function content(state: State): Node {
  const key = type === 'start' ? 'startDayComponent' : 'endDayComponent'
  const children: CreateElementOptions[] = Array.from({length: 42}).map((d, index) => {
    return {
      text: {
        childKey: key,
        childIdx: index,
        key: ['text'],
        cb: (text: string) => text
      },
      class: {
        childKey: key,
        childIdx: index,
        key: ['status'],
        cb: (status: ComponentStatus) => status
      },
      event: dayEvent(index)[state.options.type] as any,
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

export function Day(state: State, t = 'start'): Node {
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
