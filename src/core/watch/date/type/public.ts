import {ComponentStatus, DateData, State} from "../../../../types/store"
import {isBigger, transformDateToArray, rangeSort, joinDate} from "../../../../utils/date"
import {Sub} from "../../../../types/observer"
import {dispatchDateChange, getDate} from "../../../util/method"
import {getStatus} from "./month/public"
import {mergeClasses} from "../../../../utils/merge"

export function rangeStatus(state: State, date: string): ComponentStatus {
  const {start, end} = state.range
  const [max, min] = rangeSort(start, end)
  const isMin = date === min
  const isMax = date === max
  const isInRange = isBigger(max, date) && isBigger(date, min)
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

export const startMonth: Sub = {
  key: {name: 'start', childKey: ['year', 'month']},
  cb(year, month, state: DateData) {
    state._month.forEach((item, idx) => {
      item.status = month === (idx + 1) ? 'selected' : ''
    })
  }
}

export function updateMonth(year: number, date: string, state: DateData): void {
  state._month.forEach((item, idx) => {
    item.date = joinDate(idx + 1, year)
    item.status = getStatus(this, item.date)
  })
}


function finishSelect(self: State) {
  self.visible = false
  const {start, end} = self.range
  ;[self.end.date, self.start.date] = rangeSort(start, end)
}
