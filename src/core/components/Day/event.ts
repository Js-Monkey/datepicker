import {DateData, DayComponents, State} from "../../../types/store"
import {joinDate} from "../../../utils/date"
import {DayEvent, HeaderType, RangeClickEvent} from "../../../types/components"
import {Bind} from "../../../utils/helper";

const rangeClickEvent: RangeClickEvent = {
  complete: {
    plt: 'start',
    status: 'selecting'
  },
  selecting:{
    plt: 'end',
    status: 'complete'
  }
}

export function dayEvent(index: number, type: HeaderType): DayEvent {
  function filterState(state: State): [DateData, DayComponents] {
    const obj = state[type]
    return [obj, obj.components[index]]
  }

  function rangeHandler(state: State, type: 'click'| 'mouseenter' = 'click'){
    const [obj, data] = filterState(state)
    obj.day = Number(data.text)
    const {range} = state
    const handler = {
      click(){
        const current = rangeClickEvent[range.status]
        range.status = current.status
        state.range[current.plt] = joinDate(obj.year, obj.month, obj.day)
      },
      mouseenter(){
        if(range.status==='selecting'){
          range.end = joinDate(obj.year, obj.month, obj.day)
        }
      }
    }
    handler[type]()
  }

  return {
    date(state: State) {
      const [obj, data] = filterState(state)
      obj.day = Number(data.text)
      if (data.status === 'pre') obj.month -= 1
      if (data.status === 'next') obj.month += 1
      obj.date = joinDate(obj.year, obj.month, obj.day)
      state.visible = false
    },
    'date-range': [
      {
        name: 'click',
        handler: rangeHandler
      },
      {
        name: 'mouseenter',
        handler: Bind(rangeHandler, 'mouseenter')
      }
    ]
  }
}
