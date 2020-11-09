import {get, set} from '../../store'
import {getNextMonth, getPreMonth} from '../../utils/date'
import {pageName} from '../../types/store'
import {_Event} from '../../types/event'
import {isNumber} from '../../utils/typeOf'

export function nextYear(): void {
  let newVal = get('startYear')
  set('startYear', ++newVal)
}

export function preYear(): void {
  let newVal = get('startYear')
  set('startYear', --newVal)
}

export function nextMonth(): void {
  const m = get('startMonth')
  set('startMonth', getNextMonth(m, undefined, nextYear))
}

export function preMonth(): void {
  const m = get('startMonth')
  set('startMonth', getPreMonth(m, undefined, preYear))
}

export function toMonthPage(e?: _Event): void {
  const text = Number(e?.target.innerText)
  if (isNumber(text)) set('startYear', text)
  set('page', 'month')
}

export function toDayPage(month: number): void {
  set('startMonth', month)
  set('page', 'day')
}

export function toYearPage(): void {
  set('page', 'year')
}

export function monthClassCb(page: pageName): string {
  if (page === 'day') return 'show'
  return 'hidden'
}
