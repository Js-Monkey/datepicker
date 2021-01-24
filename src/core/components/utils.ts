import {pageName, State} from '../../types/store'
import {HeaderType} from '../../types/components'
import {_Event} from "../../types/event"

export function nextYear(this: State, type: HeaderType): void {
  const num = this.page === 'year' ? 10 : 1
  this[type].year += num
}

export function preYear(this: State): void {
  const num = this.page === 'year' ? 10 : 1
  this.start.year -= num
}

export function nextMonth(this: State, type: HeaderType): void {
  this[type].month += 1
}

export function preMonth(this: State): void {
  this.start.month -= 1
}

export function toMonthPage(this: State): void {
  this.page = 'month'
}

export function selectYear(this: State, e: _Event): void {
  const text = e.target.innerText
  this.start.year = Number(text)
  this.page = 'month'
}


export function toDayPage(this: State, month: number): void {
  this.start.month = month
  this.page = 'day'
}

export function toYearPage(this: State): void {
  this.page = 'year'
}

export function toggleVisibility(page: pageName): 'show' | 'hidden' {
  return page === 'day' ? 'show' : 'hidden'
}
