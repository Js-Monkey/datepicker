import {MonthEvent} from "../../../types/components"
import {handleRange, selectMonth, toDayPage} from "../utils"
import {Bind} from "../../../utils/bind"
import {MonthComponents} from "../../../types/store"

export function monthEvent(index: number, state: MonthComponents): MonthEvent {

  return {
    date : Bind(toDayPage, index),
    'month-range': handleRange(state),
    month: Bind(selectMonth, index)
  }
}
