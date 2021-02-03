import {pageName} from '../../types/store'
import {HeaderType} from '../../types/components'
import {_Event} from "../../types/event"

export function nextYear(type: HeaderType): void {
  const num = this.page === 'year' ? 10 : 1
  this[type].year += num
}

export function preYear(): void {
  const num = this.page === 'year' ? 10 : 1
  this.start.year -= num
}

export function nextMonth(type: HeaderType): void {
  this[type].month += 1
}

export function preMonth(): void {
  this.start.month -= 1
}

export function toMonthPage(): void {
  this.page = 'month'
}

export function selectYear(e: _Event): void {
  const text = e.target.innerText
  this.start.year = Number(text)
  this.page = 'month'
}

export function selectMonth(month: number): void {
  this.start.month = month
}


export function toDayPage(month: number): void {
  this.start.month = month
  this.page = 'day'
}

export function toYearPage(): void {
  this.page = 'year'
}

export function toggleVisibility(page: pageName): 'show' | 'hidden' {
  return page === 'day' ? 'show' : 'hidden'
}
