import {RangeStatus, State} from "../../../types/store"
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
  function getDate(state: State): string {
    return state[type]._day[index].date
  }

  return {
    date() {
      this.start.date = getDate(this)
      this.visible = false
    },
    'date-range': [
      {
        name: 'click',
        handler() {
          const {range} = this
          const current = rangeClickEvent[range.status as RangeStatus]
          range[current.plt] = getDate(this)
          range.status = current.status
        }
      },
      {
        name: 'mouseenter',
        handler() {
          const {range} = this
          if (range.status === 'selecting') {
            range.end = getDate(this)
          }
        }
      }
    ]
  }
}
