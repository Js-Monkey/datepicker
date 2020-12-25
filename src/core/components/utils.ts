import {get, set} from '../../store'
import {getDate, getNextMonth, getPreMonth} from '../../utils/date'
import {pageName, State} from '../../types/store'
import {isNumber} from '../../utils/typeOf'

export function nextYear(state: State): void {
  state.startYear += 1
}

export function preYear(state: State): void {
  state.startYear -= 1
}

export function nextMonth(state: State): void {
  state.startMonth = getNextMonth(state.startMonth, nextYear.bind(null, state))
}

export function preMonth(state: State): void {
  state.startMonth = getPreMonth(state.startMonth, null, preYear.bind(null, state))
}

export function toMonthPage(year: number, idx: number): void {
  console.log(year)
  if (isNumber(year)) set('startYear', year + idx)
  set('page', 'month')
}

export function toDayPage(month: number): void {
  set('startMonth', month)
  set('page', 'day')
}

export function toYearPage(state: State): void {
  state.page = 'year'
}

export function selectDate(day: number): void {
  const year = get('startYear')
  const month = get('startMonth')
  set('startDate', getDate(year, month, day))
}

export function monthClassCb(page: pageName): string {
  if (page === 'day') return 'show'
  return 'hidden'
}
