import {ComponentStatus, State} from "../../../../../types/store"
import {isDisabledDate, dateCompare} from "../../../../../utils/date"
import {rangeStatus} from "../public"
import {mergeClasses} from "../../../../../utils/merge"
import {ComponentsName} from "../../../../../types/components"
import {GetStatusFunctionsType} from "../../../../../types/core"

export function monthStatus(state: State, date: string): string {
  return dateCompare(state.start.date, date) ? 'selected' : ''
}


export function yearStatus(state: State, date: string): string {
  return dateCompare(state.start.date, date, 1) ? 'selected' : ''
}


export function getStatus(self: State, date: string, type:ComponentsName = 'month'): ComponentStatus {
  const typeStatus: GetStatusFunctionsType = {
    year:{
      year: yearStatus,
      date: yearStatus,
      'year-range': rangeStatus
    },
    month:{
      month: monthStatus,
      date: monthStatus,
      'month-range': rangeStatus
    }
  }
  return mergeClasses(typeStatus[type][self.type as 'date'](self, date), isDisabledDate(self, date)) as ''
}
