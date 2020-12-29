import {pageName, State} from '../../types/store'
import {isNumber} from '../../utils/typeOf'

export function nextYear(state: State): void {
  state.startYear += 1
}

export function preYear(state: State): void {
  state.startYear -= 1
}

export function nextMonth(state: State): void {
  state.startMonth += 1
}

export function preMonth(state: State): void {
  state.startMonth -= 1
}

export function toMonthPage(state: State, idx: number): void {
  state.page = 'month'
  if (isNumber(idx)) state.startYear += idx
}

export function toDayPage(state: State, month: number): void {
  state.startMonth = month
  state.page = 'day'
}

export function toYearPage(state: State): void {
  state.page = 'year'
}

export function selectDate(day: number): void {
  //todo
}

export function toggleVisibility(page: pageName): string {
  return page === 'day' ? 'show' : 'hidden'
}
