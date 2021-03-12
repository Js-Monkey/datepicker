import {DayEvent} from "../../../types/components"
import {handleRange} from "../utils"
import {DateComponents} from "../../../types/store"

export function dayEvent(state: DateComponents): DayEvent {
  return {
    date() {
      this.start.date = state.date
      this.visible = false
    },
    'date-range': handleRange(state)
  }
}
