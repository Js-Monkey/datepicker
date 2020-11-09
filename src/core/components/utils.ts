import {get, set} from '../../store'
import {getNextMonth, getPreMonth} from '../../utils/date'
import {pageName} from '../../types/store'

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

export function toMonthPage(): void {
  set('page', 'month')
}

export function toYearPage(): void {
  set('page', 'year')
}

export function monthClassCb(page: pageName): string {
  if (page === 'day') return 'show'
  return 'hidden'
}
