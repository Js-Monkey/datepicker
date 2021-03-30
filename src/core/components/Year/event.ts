import {YearEvent} from "../../../types/components"
import {handleRange, selectYear, toMonthPage} from "../utils"
import {Bind} from "../../../utils/bind"
import {MonthOrYearComponents} from "../../../types/store"

export function yearEvent(index: number, state: MonthOrYearComponents): YearEvent {
  return {
    date : Bind(toMonthPage, state),
    'year-range': handleRange(state),
    year: Bind(selectYear, state)
  }
}
