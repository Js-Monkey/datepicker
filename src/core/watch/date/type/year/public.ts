import {ComponentStatus, State} from "../../../../../types/store"
import {dateCompare, isDisabledDate} from "../../../../../utils/date"
import {rangeStatus} from "../public"
import {mergeClasses} from "../../../../../utils/merge"

export function getStatus(self: State, date: string): ComponentStatus {
  const typeStatus = {
    year: monthStatus,
    date: monthStatus,
    'year-range': rangeStatus
  }
  return mergeClasses(typeStatus[self.type as 'year'](self, date), isDisabledDate(self, date)) as ''
}

export function monthStatus(state: State, date: string): string {
  return dateCompare(state.start.date, date, 3) ? 'selected' : ''
}
