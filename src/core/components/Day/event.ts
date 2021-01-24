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
    date(this: State) {
      const data = filterState(this)
      this.start.date = data.date
      this.visible = false
    },
    'date-range': [
      {
        name: 'click',
        handler(this: State){
          const data = filterState(this)
          const {range} = this
          const current = rangeClickEvent[range.status]
          range.status = current.status
          range[current.plt] = data.date
        }
      },
      {
        name: 'mouseenter',
        handler(this: State){
          const data = filterState(this)
          const {range} = this
          if (range.status === 'selecting') {
            range.end = data.date
          }
        }
      }
    ]
  }
}
