import {State} from "../../../types/store";
import {joinDate} from "../../../utils/date";
import {DayEvent} from "../../../types/components";

export function dayEvent(index: number, type: 'start' | 'end'): DayEvent {
  return {
    date(state: State) {
      const obj = state[type]
      const data = obj.components[index]
      const {text} = data
      obj.day = Number(text)
      if (data.status === 'pre') obj.month -= 1
      if (data.status === 'next') obj.month += 1
      obj.date = joinDate(obj.year, obj.month, obj.day)
      state.visible = false
    },
    'date-range': [
      {
        name: 'click',
        handler(state: State) {
          const obj = state[type]
          if(state.rangeStatus==='none'){

          }
        }
      }
    ]
  }
}
