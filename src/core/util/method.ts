import {State} from "../../types/store"
import {GetDateType} from "../../types/core"
import {getFormatDate} from "./format"
import {has} from "../../utils/typeOf"
import {date} from "../../utils/date";

export function getDate(state: State): GetDateType {
    const isRange = has(state.options.type, 'range')
    const [startDate, endDate] = [date(state.start.date), date(state.end.date)]
    if (isRange) {
        return [startDate, endDate]
    } else {
        return startDate
    }
}

export function dispatchDateChange(): void {
    const date = getDate(this)
    if (this.onChange) this.onChange(date)
    if (this.options.binding && this.reference) {
        this.reference.value = getFormatDate.call(this, date, this.options.format)
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
