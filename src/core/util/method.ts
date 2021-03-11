import {State} from "../../types/store"
import {GetDateType} from "../../types/core"
import {isArray} from "../../utils/typeOf";


export function getDate(state: State): GetDateType {
  const isRange = state.options.type.indexOf('range') > -1
  const [startDate, endDate] = [state.start.date, state.end.date]
  if (isRange) {
    return [startDate, endDate]
  } else {
    return startDate
  }
}


export function dispatchDateChange(state: State): void {
  const date = getDate(state)
  if (state.onChange) {
    state.onChange(date)
  }
  if (state.options.binding && state.reference) {
    state.reference.value = (isArray(date) ? date.join(' - ') : date) as string
  }
}

export function destroyHook(state: State): void {
  const {popover} = state
  if (!popover) return
  const parent = popover.parentNode
  if (parent && parent.removeChild) {
    parent.removeChild(popover)
  }
}
