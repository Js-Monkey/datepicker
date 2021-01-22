import {DayComponents, State} from "../../../types/store"
import {DayEvent, HeaderType, RangeClickEvent} from "../../../types/components"

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

  return {
    date(state: State) {
      const data = filterState(state)
      state.start.date = data.date
      state.visible = false
    },
    'date-range': [
      {
        name: 'click',
        handler(state: State){
          const data = filterState(state)
          const {range} = state
          const current = rangeClickEvent[range.status]
          range.status = current.status
          range[current.plt] = data.date
        }
      },
      {
        name: 'mouseenter',
        handler(state: State){
          const data = filterState(state)
          const {range} = state
          if (range.status === 'selecting') {
            range.end = data.date
          }
        }
      }
    ]
  }
}
