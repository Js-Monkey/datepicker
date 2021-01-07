import {pageName, State} from '../../types/store'
import {isString} from '../../utils/typeOf'
import {HeaderType} from '../../types/components'

export function nextYear(state: State, type: HeaderType): void {
   state[type].year += 1
}

export function preYear(state: State): void {
  state.start.year -= 1
}

export function nextMonth(state: State, type: HeaderType): void {
  console.log(arguments)
  state[type].month += 1
}

export function preMonth(state: State): void {
  state.start.month -= 1
}

export function toMonthPage(state: State, text: string): void {
  state.page = 'month'
  if (isString(text)) state.start.year = Number(text)
}

export function toDayPage(state: State, month: number): void {
  state.start.month = month
  state.page = 'day'
}

export function toYearPage(state: State): void {
  state.page = 'year'
}

export function toggleVisibility(page: pageName): 'show' | 'hidden' {
  return page === 'day' ? 'show' : 'hidden'
}
