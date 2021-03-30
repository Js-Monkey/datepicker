import {ComponentStatus, State} from "../../../../../types/store"
import {dateCompare, isDisabledDate} from "../../../../../utils/date"
import {rangeStatus} from "../public"
import {mergeClasses} from "../../../../../utils/merge"

export function getYearStatus(self: State, date: string): ComponentStatus {
  const typeStatus = {
    year: yearStatus,
    date: yearStatus,
    'year-range': rangeStatus
  }
  return mergeClasses(typeStatus[self.type as 'year'](self, date), isDisabledDate(self, date)) as ''
}

export function yearStatus(state: State, date: string): string {
  return dateCompare(state.start.date, date, 1) ? 'selected' : ''
}
