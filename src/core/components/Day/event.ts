import {DateData, DayComponents, State} from "../../../types/store"
import {joinDate} from "../../../utils/date"
import {DayEvent, HeaderType, RangeClickEvent} from "../../../types/components"
import {Bind} from "../../../utils/helper"

const rangeClickEvent: RangeClickEvent = {
  complete: {
    plt: 'start',
    status: 'selecting'
  },
  selecting: {
    plt: 'end',
    status: 'complete'
  }
}

export function dayEvent(index: number, type: HeaderType): DayEvent {
  function filterState(state: State): [DayComponents,DateData] {
    const obj = state[type]
    return [obj.components[index], obj]
  }

  function rangeHandler(state: State, eventType: 'click' | 'mouseenter') {
    const [data] = filterState(state)
    const {range} = state
    const handler = {
      click() {
        const current = rangeClickEvent[range.status]
        range.status = current.status
        state.range[current.plt] = data.date
      },
      mouseenter() {
        if (range.status === 'selecting') {
          range.end = data.date
        }
      }
    }
    handler[eventType]()
  }

  return {
    date(state: State) {
      const [data, obj] = filterState(state)
      obj.day = Number(data.text)
      if (data.status === 'pre') obj.month -= 1
      if (data.status === 'next') obj.month += 1
      obj.date = joinDate(obj.year, obj.month, obj.day)
      state.visible = false
    },
    'date-range': [
      {
        name: 'click',
        handler: Bind(rangeHandler, 'click')
      },
      {
        name: 'mouseenter',
        handler: Bind(rangeHandler, 'mouseenter')
      }
    ]
  }
}
