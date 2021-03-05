import {ComponentStatus, Range, State} from "../../../../types/store"
import {dateDiff, transformDateToArray, rangeSort} from "../../../../utils/date"
import {Sub} from "../../../../types/observer"
import {dispatchDateChange} from "../../../util/hook";

export function rangeStatus(state: State, date: string): ComponentStatus {
  const {start, end} = state.range
  const range = [start, end] as [string, string]
  const [min, max] = rangeSort(...range)
  const isMin = date === min
  const isMax = date === max
  const isInRange = dateDiff(max, date) && dateDiff(date, min)
  if (isInRange) return 'inRange'
  if (isMax && isMin) {
    return 'range-start range-end'
  } else if (isMin) {
    return 'range-start'
  } else if (isMax) {
    return 'range-end'
  } else {
    return ''
  }
}

export const startDate: Sub = {
  key: {name: 'start', childKey: ['date']},
  cb(date: string) {
    const {start} = this
    ;[start.year, start.month] = transformDateToArray(date)
    dispatchDateChange(this)
  },
  notImmediate: true
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

function finishSelect(self: State) {
  self.visible = false
  const {start, end} = self.range
  ;[self.start.date, self.end.date] = rangeSort(start, end)
}
