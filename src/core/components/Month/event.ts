import {MonthEvent, HeaderType} from "../../../types/components"
import {State} from "../../../types/store"
import {handleRange, selectMonth, toDayPage} from "../utils"
import {Bind} from "../../../utils/bind"

export function monthEvent(index: number, type: HeaderType): MonthEvent {
  function getDate(state: State): string {
    return state[type]._month[index].date
  }

  return {
    date : Bind(toDayPage, index),
    'month-range': handleRange(getDate),
    month: Bind(selectMonth, index)
  }
}
