import {DayEvent} from "../../../types/components"
import {handleRange} from "../utils"
import {DateComponents} from "../../../types/store"

export function dayEvent(state: DateComponents): DayEvent {
    function dateWeek() {
        this.start.date = state.date
        this.visible = false
    }

    return {
        date: dateWeek,
        'date-range': handleRange(state),
        week: dateWeek
    }
}
