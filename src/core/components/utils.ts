import {MonthComponents, pageName, RangeStatus} from '../../types/store'
import {HeaderType, RangeClickEvent} from '../../types/components'
import {EventListener} from "../../types/utils"
import {_Event} from "../../types/event"
import {getNext, getPre} from "../../utils/date";

export const utilStyle = {
  'text-align': 'center',
  padding: '5px 20px',
  width: '320px'
}

const rangeClickEvent: RangeClickEvent = {
  complete: {
    plt: 'start',
    status: 'selecting'
  },
  selecting: {
    plt: 'end',
    status: 'complete'
  }
}

export function handleRange(state: MonthComponents): EventListener[] {
  return [
    {
      name: 'click',
      handler() {
        const {range} = this
        const current = rangeClickEvent[range.status as RangeStatus]
        range[current.plt] = state.date
        range.status = current.status
      }
    },
    {
      name: 'mouseenter',
      handler() {
        const {range} = this
        if (range.status === 'selecting') {
          range.end = state.date
        }
      }
    }
  ]
}


export function nextYear(type: HeaderType): void {
  const num = this.page === 'year' ? 10 : 1
  this[type].year += num
}

export function preYear(): void {
  const num = this.page === 'year' ? 10 : 1
  this.start.year -= num
}

export function nextMonth(type: HeaderType): void {
  const child = this[type]
  ;[child.month,child.year] = getNext(child)
}

export function preMonth(): void {
  const child = this.start
  ;[child.month,child.year] = getPre(child)
}

export function toMonthPage(): void {
  this.page = 'month'
}

export function selectYear(e: _Event): void {
  const text = e.target.innerText
  this.start.year = Number(text)
  this.page = 'month'
}

export function selectMonth(idx: number): void {
  this.start.month = idx + 1
  this.start.date = this.start._month[idx].date
  this.visible = false
}


export function toDayPage(month: number): void {
  this.start.month = month + 1
  this.page = 'day'
}

export function toYearPage(): void {
  this.page = 'year'
}

export function toggleVisibility(page: pageName): boolean {
  return page === 'day'
}
