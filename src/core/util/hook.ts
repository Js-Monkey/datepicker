import {State} from "../../types/store"


export function getDate(state: State): (string | null) | (string | null)[]{
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
