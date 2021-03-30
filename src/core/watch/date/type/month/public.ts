import {ComponentStatus, State} from "../../../../../types/store"
import {isDisabledDate, dateCompare} from "../../../../../utils/date"
import {rangeStatus} from "../public"
import {mergeClasses} from "../../../../../utils/merge"

export function getMonthStatus(self: State, date: string): ComponentStatus {
  const typeStatus = {
    month: monthStatus,
    date: monthStatus,
    'month-range': rangeStatus
  }
  return mergeClasses(typeStatus[self.type as 'month'](self, date), isDisabledDate(self, date)) as ''
}

export function monthStatus(state: State, date: string): string {
  return dateCompare(state.start.date, date) ? 'selected' : ''
}
