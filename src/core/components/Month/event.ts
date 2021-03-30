import {MonthEvent} from "../../../types/components"
import {handleRange, selectMonth, toDayPage} from "../utils"
import {Bind} from "../../../utils/bind"
import {MonthOrYearComponents} from "../../../types/store"

export function monthEvent(state: MonthOrYearComponents): MonthEvent {
  return {
    date : Bind(toDayPage, state),
    'month-range': handleRange(state),
    month: Bind(selectMonth, state)
  }
}
