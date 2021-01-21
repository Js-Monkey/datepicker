import {DateData, DayComponents, State} from "../../../types/store"
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
  function filterState(state: State): DayComponents {
    return state[type].components[index]
  }

  function rangeHandler(state: State, eventType: 'click' | 'mouseenter') {
    const data = filterState(state)
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
      const data = filterState(state)
      state.start.date = data.date
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
