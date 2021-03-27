import {ComponentStatus, State} from "../../../../../types/store"
import {isDisabledDate, monthDiff} from "../../../../../utils/date"
import {rangeStatus} from "../public"
import {mergeClasses} from "../../../../../utils/merge"

export function getStatus(self: State, date: string): ComponentStatus {
  const typeStatus = {
    month: monthStatus,
    date: monthStatus,
    'month-range': rangeStatus
  }
  return mergeClasses(typeStatus[self.type as 'month'](self, date), isDisabledDate(self, date)) as ''
}

export function monthStatus(state: State, date: string): string {
  return monthDiff(state.start.date, date) ? 'selected' : ''
}
