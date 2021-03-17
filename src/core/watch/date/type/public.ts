import {ComponentStatus, State} from "../../../../types/store"
import {dateDiff, transformDateToArray, rangeSort} from "../../../../utils/date"
import {Sub} from "../../../../types/observer"
import {dispatchDateChange} from "../../../util/method"

export function rangeStatus(state: State, date: string): ComponentStatus {
  const {start, end} = state.range
  const [max, min] = rangeSort(start, end)
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
    dispatchDateChange(this)
    if(!date) return
    const {start} = this
    ;[start.year, start.month] = transformDateToArray(date)
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

function finishSelect(self: State) {
  self.visible = false
  const {start, end} = self.range
  ;[self.end.date, self.start.date] = rangeSort(start, end)
}
