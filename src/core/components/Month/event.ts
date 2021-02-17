import {MonthEvent, HeaderType, RangeClickEvent} from "../../../types/components"
import {RangeStatus, State} from "../../../types/store"
import {selectMonth, toDayPage} from "../utils"
import {Bind} from "../../../utils/bind"

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


export function monthEvent(index: number, type: HeaderType): MonthEvent {
  function getDate(state: State): string {
    return state[type]._month[index].date
  }

  return {
    date : Bind(toDayPage, index),
    'month-range': [
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
    ],
    month: Bind(selectMonth, index)
  }
}
