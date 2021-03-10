import {State} from "../../types/store"
import {GetDateType} from "../../types/core"


export function getDate(state: State): GetDateType{
  const isRange = state.options.type.indexOf('range') > -1
  const startDate = state.start.date
  const endDate = state.end.date
  if (isRange) {
    return [startDate, endDate]
  } else {
    return startDate
  }
}


export function dispatchDateChange(state: State): void{
  if(state.onChange){
    state.onChange(getDate(state))
  }
}

export function destroyHook(state: State): void{
  const {popover} = state
  if(!popover) return
  const parent = popover.parentNode
  if(parent&& parent.removeChild){
    parent.removeChild(popover)
  }
}
