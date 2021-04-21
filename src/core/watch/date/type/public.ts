import {ComponentStatus, DateData, State} from "../../../../types/store"
import {isAfter, transformDateToArray, rangeSort} from "../../../../utils/date"
import {Sub} from "../../../../types/observer"
import {dispatchDateChange, getDate} from "../../../util/method"
import {mergeClasses} from "../../../../utils/merge"
import {RangeComponentName} from "../../../../types/components"
import {not} from "../../../../utils/has"
import {getStatus} from "./month&year/public"

export function rangeStatus(state: State, date: string): ComponentStatus {
  const {start, end} = state.range
  const [max, min] = rangeSort(start, end)
  const isMin = date === min
  const isMax = date === max
  const isInRange = isAfter(max, date) && isAfter(date, min)
  const st = 'range-start'
  const et = 'range-end'
  if (isInRange) return 'inRange'
  if (isMax && isMin) {
    return mergeClasses(st, et) as ComponentStatus
  } else if (isMin) {
    return st
  } else if (isMax) {
    return et
  } else {
    return ''
  }
}

export const startDate: Sub = {
  key: {name: 'start', childKey: ['date']},
  cb(date: string) {
    if (!date) return
    const {start} = this
    ;[start.year, start.month] = transformDateToArray(date)
    this.date = getDate(this)
  }
}

export const endDate: Sub = {
  key: {name: 'end', childKey: ['date']},
  cb(date: string) {
    if (!date) return
    this.date = getDate(this)
  }
}

export const handleSelecting: Sub = {
  key: {name: 'range', childKey: ['status']},
  cb(status: string) {
    if (status === 'selecting') {
      this.range.end = null
    } else {
      finishSelect(this)
    }
  },
}

export const date: Sub = {
  key: ['date'],
  cb: dispatchDateChange
}

export const startMonthAndYear: Sub = {
  key: {name: 'start', childKey: ['year', 'month']},
  cb(year, month, state: DateData) {
    state._month.forEach((item, idx) => {
      item.status = month === (idx + 1) ? 'selected' : ''
    })
    state._year.forEach((item, idx) => {
      const [itemYear] = transformDateToArray(item.date)
      item.status = idx === 0 ? 'pre' : idx === 11 ? 'next' : year === itemYear ? 'selected' : ''
    })
  }
}

export function hoverSelect(type: RangeComponentName = 'month'): Sub {
  return {
    key: {name: 'range', childKey: ['start', 'end']},
    cb() {
      (['start', 'end'] as ['start', 'end']).forEach(name => {
        this[name][('_' + type) as '_month'].filter(item => not(item.status, ['pre', 'next'])).forEach((item, idx) => item.status = getStatus(this, item.date, idx, type))
      })
    }
  }
}



function finishSelect(self: State) {
  self.visible = false
  const {start, end} = self.range
  ;[self.end.date, self.start.date] = rangeSort(start, end)
}
