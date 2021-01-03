import {createElement} from '../../utils/element'
import {day, dayBar, dayContent} from '../../utils/classes'
import {dayBarNames} from '../i18n'
import {ComponentStatus, State} from '../../types/store'
import {toggleVisibility} from './utils'
import {joinDate} from '../../utils/date'
import {CreateElementOptions} from '../../types/utils'

let type = 'start'

function content(state: State): Node {
  const key = type === 'start' ? 'startDayComponent' : 'endDayComponent'
  const children: CreateElementOptions[] = Array.from({length: 42}).map((d, index) => {
    return {
      text: {
        childKey: key,
        childIdx: index,
        key: ['text'],
        cb(text: string) {
          return text
        }
      },
      class: {
        childKey: key,
        childIdx: index,
        key: ['status'],
        cb(status: ComponentStatus) {
          return status
        }
      },
      event(state: State) {
        const data = state.startDayComponent[index]
        const {text} = data
        state.startDay = Number(text)
        if (data.status === 'pre') state.startMonth -= 1
        if (data.status === 'next') state.startMonth += 1
        state.startDate = joinDate(state.startYear, state.startMonth, state.startDay)
      },
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
